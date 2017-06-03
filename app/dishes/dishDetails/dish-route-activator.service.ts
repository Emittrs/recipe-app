import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import {DishService } from '../shared/dish.service'

@Injectable()
export class DishRouteActivatorService implements CanActivate{
  constructor(private dishService:DishService, private router:Router){}

  canActivate(route:ActivatedRouteSnapshot){
   const dishExists =  !!this.dishService.getDish(+route.params["id"]);

   if(!dishExists){
      this.router.navigate(['/404']);
   }
   return dishExists;
  }
}
