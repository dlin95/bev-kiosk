import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SodaComponent } from './modules/menu/components/soda/soda.component';
import { CoffeeComponent } from './modules/menu/components/coffee/coffee.component';
import { CustomizationComponent } from './modules/customization/customization/customization.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'drink/Soda',
    component: SodaComponent,
  },
  { path: 'drink/Coffee', component: CoffeeComponent },
  // { path: 'drink/Tea', component: TeaComponent },
  // { path: 'drink/Juice', component: JuiceComponent },
  {
    path: 'drink/Customization',
    component: CustomizationComponent,
  },
];
