import { Component } from '@angular/core';
import { DrinkService } from '../../../shared/services/drink.service';
import { Drink } from '../../../shared/models/drink';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css',
})
export class CoffeeComponent {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinksByCategory('Coffee');
  }
}
