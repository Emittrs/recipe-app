"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DishService = (function () {
    function DishService() {
    }
    DishService.prototype.getDishes = function () {
        return dishes;
    };
    DishService.prototype.getDish = function (id) {
        return dishes.find(function (dish) { return dish.id === id; });
    };
    return DishService;
}());
DishService = __decorate([
    core_1.Injectable()
], DishService);
exports.DishService = DishService;
var dishes = [
    {
        id: 1,
        typeOfDish: "Ukwa",
        recipes: [{ name: 'yorita',
                author: 'Kennedy',
                howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                createdAt: 12345,
                likes: 45,
                views: 489
            }
        ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../../app/assets/images/jollof_rice.png'
    },
    {
        id: 2,
        typeOfDish: "Amala and Ewedu",
        recipes: [{ name: 'mimieni',
                author: 'Nnamid',
                howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                createdAt: 12345,
                likes: 45,
            }
        ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../../app/assets/images/jollof_rice.png'
    },
    {
        id: 3,
        typeOfDish: "Ukwa",
        recipes: [{ name: 'Foo',
                author: 'Andrew',
                howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                createdAt: 12345,
                likes: 45,
                views: 489
            }
        ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../../app/assets/images/jollof_rice.png'
    },
    {
        id: 4,
        typeOfDish: "Ukwa",
        recipes: [{ name: 'Foo',
                author: 'Andrew',
                howTo: 'Aliquam placerat nisl sed urna ullamcorper eleifend. Aliquam blandit gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo, aliquam sit amet velit ut, finibus condimentum lectus. Praesent justo ex, consectetur ut est vitae, mollis pharetra leo. Donec eu ligula et sapien',
                createdAt: 12345,
                likes: 45,
                views: 489
            }
        ],
        history: " justo at lacus. Nulla vehicula sit amet ipsum id ornare. Donec molestie viverra odio. Sed eros dolor, lacinia dapibus varius quis, placerat et risus. Integer nulla lectus, pretium quis vehicula ut, tincidunt vitae urna. Maecenas vitae lacus non mi venenatis hendrerit a quis augue. Praesent accumsan id diam a vulputate. Phasellus quis finibus sapien",
        nutrients: 'gravida mauris, id mollis sem blandit ut. Etiam porttitor leo euismod lorem consequat ullamcorper. Mauris nibh justo',
        createdAt: 56744,
        image: '../../../app/assets/images/jollof_rice.png'
    }
];
//# sourceMappingURL=dish.service.js.map