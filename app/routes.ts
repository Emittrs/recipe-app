import { Routes } from '@angular/router'

import {DishDetailComponent} from './dishes/dishDetails/dish-detail.component';
import {DishesListComponent} from './dishes/dishes-list.component'
import {CreateDishComponent} from './dishes/create-dish.component'
import {Error404Component} from './errors/error404.component'
import { DishRouteActivatorService} from './dishes/dishDetails/dish-route-activator.service'

export const appRoutes:Routes = [
  {path: 'dishes/new', component: CreateDishComponent},
  {path: 'dishes', component: DishesListComponent },
  {path: 'dishes/:id', component: DishDetailComponent, canActivate: [DishRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/dishes', pathMatch: 'full'}
]
