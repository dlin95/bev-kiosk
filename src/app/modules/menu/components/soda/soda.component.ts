import { Component } from '@angular/core';
import { DrinkService } from '../../../shared/services/drink.service';
import { Drink } from '../../../shared/models/drink';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soda.component.html',
  styleUrl: './soda.component.css',
})
export class SodaComponent {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinksByCategory('Soda');
  }
}
