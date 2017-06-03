import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


import { DishService } from '../shared/dish.service';

@Component({
  templateUrl: '/app/dishes/dishDetails/dish-detail.component.html'
})
export class DishDetailComponent implements OnInit{
  dish:any;
  constructor(private dishService: DishService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.dish = this.dishService.getDish(+this.activatedRoute.snapshot.params['id']);
  }
}
