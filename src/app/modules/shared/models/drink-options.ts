export type DrinkOptions = {
  name: string;
  price: number;
  selected?: boolean;
};

export type Steps = {
  name: string;
  heading: string;
  canSelect: number;
  options: DrinkOptions[];
  selectedOptions: DrinkOptions[];
};
