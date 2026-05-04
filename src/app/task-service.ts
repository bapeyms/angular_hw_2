import { Injectable } from '@angular/core';
import { Logger } from './logger';

export interface TasksServ {
  text: string,
  done: boolean,
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TasksServ[] = [];

  constructor(private logger: Logger) {}

  getTasks() {
    return this.tasks;
  }
  addTask(task: TasksServ) {
    this.logger.log('Task added: ' + task.text);
    this.tasks.push(task);
  }
  removeTask(index: number) {
    this.logger.log('Task removed at index: ' + index);
    this.tasks.splice(index, 1);
  }
}
