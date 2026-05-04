import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_hw_2');
}
