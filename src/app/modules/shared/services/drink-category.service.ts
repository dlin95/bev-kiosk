import { Injectable } from '@angular/core';
import { DrinkCateogry } from '../models/drink-category';

@Injectable({
  providedIn: 'root',
})
export class DrinkCategoryService {
  constructor() {}

  getCategoryById(id: number): DrinkCateogry {
    return this.getAll().find((category) => category.id === id)!;
  }

  // TODO: MOVE TO DB AS JSON //

  getAll(): DrinkCateogry[] {
    return [
      {
        id: 1,
        name: 'Soda',
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 2,
        name: 'Coffee',
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 3,
        name: 'Tea',
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 4,
        name: 'Juice',
        imageUrl: '../../assets/images/icons/200x200.png',
      },
    ];
  }
}
