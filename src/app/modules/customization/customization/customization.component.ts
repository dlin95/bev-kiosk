import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Drink } from '../../shared/models/drink';
import { DrinkOptions } from '../../shared/models/drink-options';
import { DrinkOptionsService } from '../../shared/services/drink-options.service';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css',
})
export class CustomizationComponent {
  sizeOptions: DrinkOptions[] = [];
  constructor(private drinkOptionsService: DrinkOptionsService) {}

  readonly selectedDrink: Drink = this.drinkOptionsService.selectedDrink;
  selectedOptions: DrinkOptions[] = this.drinkOptionsService.selectedDrinkOptions;
  optionsTotalPrice = this.drinkOptionsService.selectedOptionsTotalPrice;
  selectedDrinkQuantity = this.drinkOptionsService.selectedDrinkQuantity;

  changeSelectedDrinkQuantity(op: '+' | '-'): void {
    this.selectedDrinkQuantity = this.drinkOptionsService.setSelectedDrinkQunatity(op);
  }
}
