import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './shared/components/post/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('erp-platform');
}
