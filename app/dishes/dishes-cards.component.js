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
var DishesCardsComponent = (function () {
    function DishesCardsComponent() {
    }
    return DishesCardsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DishesCardsComponent.prototype, "dish", void 0);
DishesCardsComponent = __decorate([
    core_1.Component({
        selector: 'dishes-cards',
        template: "\n  <div>\n    \t<img [src]=\"dish?.image\">\n      <p> Type of Dish: {{dish?.typeOfDish}}</p>\n      <p> Recipe Name:{{dish?.recipes[0].name}}</p>\n      <p> Author: {{dish?.recipes[0].author}}</p>\n      <p [hidden]=\"!dish?.recipes[0].likes\"> Likes: {{dish?.recipes[0].likes}}</p>\n      <p [hidden]=\"!dish?.recipes[0].views\"> Views: {{dish?.recipes[0].views}}</p>\n  </div>\n\n  "
    })
], DishesCardsComponent);
exports.DishesCardsComponent = DishesCardsComponent;
//# sourceMappingURL=dishes-cards.component.js.map