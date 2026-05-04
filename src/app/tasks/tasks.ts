import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task-service';
import { Logger } from '../logger';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {

  arrStr: Task[] = []

  images = [
    {path: 'reaction1.png', label: 'Important'},
    {path: 'reaction2.png', label: 'Not So Important'},
    {path: 'reaction3.png', label: 'Not Important'}
  ];
  selectedImage: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.arrStr = this.taskService.getTasks();
  }

  addTask(){
    this.taskService.addTask({
      text: 'Task ' + (this.arrStr.length + 1),
      done: false,
      image: this.selectedImage
    });
  }

  removeTask(index: number) {
    this.taskService.removeTask(index);
  }
}
