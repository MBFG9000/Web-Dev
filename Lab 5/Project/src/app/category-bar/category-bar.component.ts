import { Component, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-category-bar',
  imports: [],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  @Output() sortByCategory = new EventEmitter<string>();

  onSort(category:string) {
    this.sortByCategory.emit(category);
  }
}
