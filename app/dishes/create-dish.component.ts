import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Create Dish Form will go here</h1>
    <button>Create Dish</button>
    <button (click)="cancel()">Cancel</button>
  `
})
export class CreateDishComponent{
  constructor(private router:Router){}
  cancel(){
    this.router.navigate(['/dishes']);
  }

}
