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
var dish_service_1 = require("./shared/dish.service");
var toastr_service_1 = require(".././common/toastr.service");
var DishesListComponent = (function () {
    function DishesListComponent(dishService, toastrService) {
        this.dishService = dishService;
        this.toastrService = toastrService;
    }
    DishesListComponent.prototype.showToast = function (typeOfDish) {
        this.toastrService.success(typeOfDish);
    };
    DishesListComponent.prototype.ngOnInit = function () {
        this.dishes = this.dishService.getDishes();
    };
    return DishesListComponent;
}());
DishesListComponent = __decorate([
    core_1.Component({
        selector: "dishes-list",
        templateUrl: 'app/dishes/dishes-list.component.html'
    }),
    __metadata("design:paramtypes", [dish_service_1.DishService, toastr_service_1.ToastrService])
], DishesListComponent);
exports.DishesListComponent = DishesListComponent;
//# sourceMappingURL=dishes-list.component.js.map