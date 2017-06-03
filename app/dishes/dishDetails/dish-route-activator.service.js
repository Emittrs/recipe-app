"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dish_service_1 = require("../shared/dish.service");
var DishRouteActivatorService = (function () {
    function DishRouteActivatorService(dishService, router) {
        this.dishService = dishService;
        this.router = router;
    }
    DishRouteActivatorService.prototype.canActivate = function (route) {
        var dishExists = !!this.dishService.getDish(+route.params["id"]);
        if (!dishExists) {
            this.router.navigate(['/404']);
        }
        return dishExists;
    };
    return DishRouteActivatorService;
}());
DishRouteActivatorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [dish_service_1.DishService, router_1.Router])
], DishRouteActivatorService);
exports.DishRouteActivatorService = DishRouteActivatorService;
//# sourceMappingURL=dish-route-activator.service.js.map