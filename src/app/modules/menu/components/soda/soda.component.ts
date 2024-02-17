import { Component } from '@angular/core';
import { DrinkService } from '../../../shared/services/drink.service';
import { Drink } from '../../../shared/models/drink';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrinkOptionsService } from '../../../shared/services/drink-options.service';

@Component({
  selector: 'app-soda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './soda.component.html',
  styleUrl: './soda.component.css',
})
export class SodaComponent {
  drinks: Drink[] = [];

  constructor(
    private drinkService: DrinkService,
    private DrinkOptionsService: DrinkOptionsService
  ) {}

  selectedDrink(drink: Drink) {
    this.DrinkOptionsService.setSelectedDrink(drink);
  }

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinksByCategory('Soda');
  }
}
