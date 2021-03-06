"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var dishes_app_component_1 = require("./dishes.app.component");
var dishes_list_component_1 = require("./dishes/dishes-list.component");
var dishes_cards_component_1 = require("./dishes/dishes-cards.component");
var nav_component_1 = require("./nav/nav.component");
var dish_service_1 = require("./dishes/shared/dish.service");
var toastr_service_1 = require("./common/toastr.service");
var dish_detail_component_1 = require("./dishes/dishDetails/dish-detail.component");
var routes_1 = require("./routes");
var create_dish_component_1 = require("./dishes/create-dish.component");
var error404_component_1 = require("./errors/error404.component");
var dish_route_activator_service_1 = require("./dishes/dishDetails/dish-route-activator.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [dishes_app_component_1.DishesAppComponent,
            dishes_list_component_1.DishesListComponent,
            dishes_cards_component_1.DishesCardsComponent,
            nav_component_1.NavComponent,
            dish_detail_component_1.DishDetailComponent,
            create_dish_component_1.CreateDishComponent,
            error404_component_1.Error404Component],
        bootstrap: [dishes_app_component_1.DishesAppComponent],
        providers: [dish_service_1.DishService, toastr_service_1.ToastrService, dish_route_activator_service_1.DishRouteActivatorService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map