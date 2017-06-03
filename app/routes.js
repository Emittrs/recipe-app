"use strict";
var dish_detail_component_1 = require("./dishes/dishDetails/dish-detail.component");
var dishes_list_component_1 = require("./dishes/dishes-list.component");
var create_dish_component_1 = require("./dishes/create-dish.component");
var error404_component_1 = require("./errors/error404.component");
var dish_route_activator_service_1 = require("./dishes/dishDetails/dish-route-activator.service");
exports.appRoutes = [
    { path: 'dishes/new', component: create_dish_component_1.CreateDishComponent },
    { path: 'dishes', component: dishes_list_component_1.DishesListComponent },
    { path: 'dishes/:id', component: dish_detail_component_1.DishDetailComponent, canActivate: [dish_route_activator_service_1.DishRouteActivatorService] },
    { path: '404', component: error404_component_1.Error404Component },
    { path: '', redirectTo: '/dishes', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map