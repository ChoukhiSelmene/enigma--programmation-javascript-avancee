import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';
import { Newsletter } from './components/newsletter/newsletter';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'newsletter',
    component: Newsletter,
  },
];
