export class DrinkCateogry {
  id!: number;
  name!: string;
  imageUrl!: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = '../../assets/images/icons/200x200.png';
  }
}
