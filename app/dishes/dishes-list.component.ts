import { Component, OnInit } from '@angular/core';

import { DishService } from './shared/dish.service'
import { ToastrService } from '.././common/toastr.service';

@Component({
  selector: "dishes-list",
  templateUrl: 'app/dishes/dishes-list.component.html'
})

export class DishesListComponent implements OnInit{
  dishes:any[];
  constructor(private dishService: DishService, private toastrService: ToastrService){
  }

  showToast(typeOfDish:string){
    this.toastrService.success(typeOfDish);
  }
  ngOnInit(){
    this.dishes = this.dishService.getDishes();
  }
}
