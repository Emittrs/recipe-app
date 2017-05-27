import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DishesAppComponent }  from './dishes.app.component';
import { DishesListComponent} from './dishes/dishes-list.component';
import { DishesCardsComponent} from './dishes/dishes-cards.component';
import { NavComponent } from './nav/nav.component'
import { DishService } from './dishes/shared/dish.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DishesAppComponent,
                  DishesListComponent,
                  DishesCardsComponent,
                  NavComponent],
  bootstrap:    [ DishesAppComponent ],
  providers: [DishService]
})
export class AppModule { }
