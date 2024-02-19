import { Component } from '@angular/core';
import {NgForOf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe
  ],
  templateUrl: './ex07.component.html'
})
export class Ex07Component {
  numbers: number[] = [];
  fruits: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];
  }

  sortedNumbers(): number[] {
    return this.numbers.sort((a,b) => a-b);
  }

  sortedFruits(): string[] {
    return this.fruits.sort((a,b) => a.localeCompare(b))
  }

}
