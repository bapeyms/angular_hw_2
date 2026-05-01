import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {

  arrStr: {text: string; done: boolean; image: string} [] = []

  addTask(){
    this.arrStr.push({
      text: 'Task ' + (this.arrStr.length + 1),
      done: false,
      image: this.selectedImage
    });
  }

  removeTask(index: number) {
    this.arrStr.splice(index, 1);
  }

  images: string[] = [
    'reaction1.png',
    'reaction2.png',
    'reaction3.png'
  ];
  selectedImage: string = this.images[0];

  constructor() {}

  ngOnInit(): void {
  }
}
