import { Component, OnInit } from '@angular/core';

import { DishService } from './shared/dish.service'

@Component({
  selector: "dishes-list",
  templateUrl: 'app/dishes/dishes-list.component.html'
})

export class DishesListComponent implements OnInit{
  dishes:any[]
  constructor(private dishService: DishService){

  }
  ngOnInit(){
    this.dishes = this.dishService.getDishes();
  }
}
