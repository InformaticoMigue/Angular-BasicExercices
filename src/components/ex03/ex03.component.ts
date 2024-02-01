import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})
export class Ex03Component {
  n: number = 0;
  constructor() { }

  setColorNumber(): string {
    return this.n < 5 ? 'text-danger' 
    : (this.n === 5 ? 'text-primary' 
    : 'text-success');
  }


  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }
}
