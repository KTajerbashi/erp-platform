import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService, IWeatherForecast } from '../../../core/services/auth.service';

@Component({
  imports: [DatePipe],
  selector: 'app-post',
  styleUrl: './post.scss',
  templateUrl: './post.html',
})
export class PostComponent implements OnInit, OnDestroy {
  private postService = inject(AuthService);

  posts: IWeatherForecast[] = [];
  loading = false;
  error = '';

  /** Wall-clock times */
  requestDate: Date | null = null;
  responseDate: Date | null = null;

  /** Elapsed milliseconds between request and response */
  elapsedMs = 0;

  /** Live ticker while the request is in flight */
  liveElapsedMs = 0;
  private tickerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.stopTicker();
  }

  private load() {
    this.loading = true;
    this.error = '';
    this.posts = [];
    this.elapsedMs = 0;
    this.liveElapsedMs = 0;

    this.requestDate = new Date();
    this.responseDate = null;

    const start = performance.now();
    this.startTicker(start);

    this.postService.getAll().subscribe({
      next: (data) => {
        this.posts = data;
        this.finishTiming(start);
        this.loading = false;
      },
      error: () => {
        this.error = 'خطا در دریافت اطلاعات';
        this.finishTiming(start);
        this.loading = false;
      },
    });
  }

  private finishTiming(start: number) {
    this.responseDate = new Date();
    this.elapsedMs = Math.round(performance.now() - start);
    this.stopTicker();
  }

  private startTicker(start: number) {
    this.stopTicker();
    this.tickerId = setInterval(() => {
      this.liveElapsedMs = Math.round(performance.now() - start);
    }, 50);
  }

  private stopTicker() {
    if (this.tickerId !== null) {
      clearInterval(this.tickerId);
      this.tickerId = null;
    }
  }

  /** Format ms as "123 ms" or "1.24 s" */
  formatDuration(ms: number): string {
    return ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(2)} s`;
  }
}