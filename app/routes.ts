import { Routes } from '@angular/router'

import {DishDetailComponent} from './dishes/dishDetails/dish-detail.component';
import {DishesListComponent} from './dishes/dishes-list.component'

export const appRoutes:Routes = [
  {path: 'dishes', component: DishesListComponent },
  {path: 'dishes/:id', component: DishDetailComponent},
  {path: '', redirectTo: '/dishes', pathMatch: 'full'}
]
