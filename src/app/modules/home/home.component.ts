import { Component } from '@angular/core';
import { DrinkCategoryService } from '../shared/services/drink-category.service';
import { DrinkCateogry } from '../shared/models/drink-category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  drinkCategories: DrinkCateogry[] = [];
  drink!: DrinkCateogry;
  constructor(private drinkCategoryService: DrinkCategoryService) {}

  ngOnInit(): void {
    this.drinkCategories = this.drinkCategoryService.getAll();
  }
}
