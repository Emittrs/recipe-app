import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DishesAppComponent }  from './dishes.app.component';
import { DishesListComponent} from './dishes/dishes-list.component';
import { DishesCardsComponent} from './dishes/dishes-cards.component';
import { NavComponent } from './nav/nav.component'
import { DishService } from './dishes/shared/dish.service'
import { ToastrService} from './common/toastr.service'
import { DishDetailComponent} from './dishes/dishDetails/dish-detail.component'
import { appRoutes } from './routes'

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes)

  ],
  declarations: [ DishesAppComponent,
                  DishesListComponent,
                  DishesCardsComponent,
                  NavComponent,
                  DishDetailComponent],
  bootstrap:    [ DishesAppComponent ],
  providers: [DishService, ToastrService]
})
export class AppModule { }
