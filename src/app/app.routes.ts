import { Routes } from '@angular/router';
import { BudgetComponent } from './pages/budget/budget.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'budget',
    component: BudgetComponent,
  },
  { path: '**', redirectTo: '/home' },
];
