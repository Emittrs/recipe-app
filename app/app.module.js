"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dishes_app_component_1 = require("./dishes.app.component");
var dishes_list_component_1 = require("./dishes/dishes-list.component");
var dishes_cards_component_1 = require("./dishes/dishes-cards.component");
var nav_component_1 = require("./nav/nav.component");
var dish_service_1 = require("./dishes/shared/dish.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [dishes_app_component_1.DishesAppComponent,
            dishes_list_component_1.DishesListComponent,
            dishes_cards_component_1.DishesCardsComponent,
            nav_component_1.NavComponent],
        bootstrap: [dishes_app_component_1.DishesAppComponent],
        providers: [dish_service_1.DishService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map