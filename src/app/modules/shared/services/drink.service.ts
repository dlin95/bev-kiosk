import { Injectable } from '@angular/core';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor() {}

  getDrinksByCategory(category: string): Drink[] {
    return this.getAll().filter((drink) => drink.category === category);
  }

  getAll(): Drink[] {
    return [
      {
        id: 1,
        name: 'Coca Cola',
        price: 2.5,
        popular: true,
        category: 'Soda',
        tags: ['soda', 'sweet', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 2,
        name: 'Coca Cola Exotic Mango Light Taste',
        price: 2.5,
        popular: false,
        category: 'Soda',
        tags: ['soda', 'sweet', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 3,
        name: 'Sprite',
        price: 2.5,
        popular: false,
        category: 'Soda',
        tags: ['soda', 'sweet', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 4,
        name: 'Fanta',
        price: 2.5,
        popular: true,
        category: 'Soda',
        tags: ['soda', 'sweet', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 5,
        name: 'Expresso',
        price: 3,
        popular: false,
        category: 'Coffee',
        tags: ['coffee', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
      {
        id: 6,
        name: 'Americano',
        price: 3,
        popular: true,
        category: 'Coffee',
        tags: ['coffee', 'caffeine'],
        imageUrl: '../../assets/images/icons/200x200.png',
      },
    ];
  }
}
