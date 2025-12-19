import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Newsletter } from './components/newsletter/newsletter';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'newsletter',
    component: Newsletter,
  },
];
