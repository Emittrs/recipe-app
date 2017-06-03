"use strict";
var dish_detail_component_1 = require("./dishes/dishDetails/dish-detail.component");
var dishes_list_component_1 = require("./dishes/dishes-list.component");
exports.appRoutes = [
    { path: 'dishes', component: dishes_list_component_1.DishesListComponent },
    { path: 'dishes/:id', component: dish_detail_component_1.DishDetailComponent },
    { path: '', redirectTo: '/dishes', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map