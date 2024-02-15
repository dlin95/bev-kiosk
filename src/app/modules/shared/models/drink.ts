import { DrinkCategoryService } from '../services/drink-category.service';

export class Drink {
  id!: number;
  name!: string;
  price!: number;
  popular!: boolean;
  category!: string;
  tags?: string[];
  imageUrl!: string;

  constructor(
    id: number,
    name: string,
    price: number,
    popular: boolean,
    tags: string[],
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.popular = popular;
    this.category = DrinkCategoryService.name;
    this.tags = tags;
    this.imageUrl = imageUrl;
  }
}
