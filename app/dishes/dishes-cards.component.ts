import { Component, Input } from '@angular/core';

@Component({
  selector: 'dishes-cards',
  template: `
  <div [routerLink]= "['/dishes', dish.id]">
    	<img [src]="dish?.image">
      <p> Type of Dish: {{dish?.typeOfDish}}</p>
      <p> Recipe Name:{{dish?.recipes[0].name}}</p>
      <p> Author: {{dish?.recipes[0].author}}</p>
      <p [hidden]="!dish?.recipes[0].likes"> Likes: {{dish?.recipes[0].likes}}</p>
      <p [hidden]="!dish?.recipes[0].views"> Views: {{dish?.recipes[0].views}}</p>
  </div>

  `
})

export class DishesCardsComponent{
  @Input() dish:any;

}
