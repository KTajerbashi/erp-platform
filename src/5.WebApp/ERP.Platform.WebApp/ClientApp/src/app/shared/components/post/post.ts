import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  imports: [],
  selector: 'app-post',
  styleUrl: './post.scss',
  templateUrl: './post.html',
})
export class PostComponent {
  private postService = inject(AuthService);

  posts: string[] = [];
  loading = false;
  error = '';

  ngOnInit() {
    this.loading = true;
    this.postService.getAll().subscribe({
      next: ({ data }) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'خطا در دریافت اطلاعات';
        this.loading = false;
      },
    });
  }
}
