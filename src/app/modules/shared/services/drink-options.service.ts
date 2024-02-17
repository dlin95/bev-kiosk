import { Injectable } from '@angular/core';
import { DrinkOptions, Steps } from '../models/drink-options';
import { Drink } from '../models/drink';
import SIZE_JSON from '../../../../assets/db/options/size.json';
import ICE_JSON from '../../../../assets/db/options/ice.json';

@Injectable({
  providedIn: 'root',
})
export class DrinkOptionsService {
  constructor() {
    // REMOVE LATER //
    console.log(this._selectedDrink);
  }

  private _selectedDrink: Drink = {} as Drink;
  private _selectedDrinkOptions: DrinkOptions[] = [];
  private _selectedDrinkOptionsTotalPrice = 0;
  private _selectedDrinkQuantity = 1;

  private _steps: Steps[] = [
    {
      name: 'size',
      heading: 'Select size option',
      canSelect: 1,
      options: this.sizeOptions,
      selectedOptions: [] as DrinkOptions[],
    },
    {
      name: 'ice',
      heading: 'Select ice option',
      canSelect: 1,
      options: this.iceOptions,
      selectedOptions: [] as DrinkOptions[],
    },
  ];

  // UPDATES //

  setSelectedDrink(drink: Drink) {
    this._selectedDrink = drink;
  }

  setSelectedDrinkOptions(selectedOptions: DrinkOptions[], currentStepIndex: number) {
    this._steps[currentStepIndex].selectedOptions = selectedOptions;
    this._selectedDrinkOptions = this._steps.flatMap((el) => el.selectedOptions);
  }

  setSelectedDrinkQunatity(op: '+' | '-'): number {
    if (op === '+') {
      this._selectedDrinkQuantity++;
    } else {
      this._selectedDrinkQuantity--;
    }
    return this._selectedDrinkQuantity;
  }

  // RETURNS //

  get steps(): Steps[] {
    return this._steps;
  }

  get selectedDrink(): Drink {
    return this._selectedDrink;
  }

  get selectedDrinkOptions(): DrinkOptions[] {
    return this._selectedDrinkOptions;
  }

  get selectedOptionsTotalPrice(): number {
    this.calculateSelectedDrinkOptionsTotalPrice();
    return this._selectedDrinkOptionsTotalPrice;
  }

  get selectedDrinkQuantity(): number {
    return this._selectedDrinkQuantity;
  }

  get sizeOptions(): DrinkOptions[] {
    return SIZE_JSON as DrinkOptions[];
  }

  get iceOptions(): DrinkOptions[] {
    return ICE_JSON as DrinkOptions[];
  }

  // PRIVATE //

  private calculateSelectedDrinkOptionsTotalPrice(): void {
    this._selectedDrinkOptionsTotalPrice = 0;
    this._selectedDrinkOptions.forEach((el) => (this._selectedDrinkOptionsTotalPrice += el.price));
  }
}
