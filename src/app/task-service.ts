import { Injectable } from '@angular/core';

export interface Task {
  text: string,
  done: boolean,
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
