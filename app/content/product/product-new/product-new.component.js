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
var common_1 = require("@angular/common");
var product_1 = require("../../../_model/product");
var product_service_1 = require("../../../_service/product.service");
var NewProductComponent = (function () {
    function NewProductComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
    }
    NewProductComponent.prototype.addProduct = function (productName, calories, fats, carbohydrates, proteins) {
        var product = new product_1.Product();
        product.name = productName;
        product.calories = calories;
        product.carbohydrates = carbohydrates;
        product.fats = fats;
        product.proteins = proteins;
        this.productService.addProduct(product);
    };
    NewProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    NewProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "product-new.component.html",
            styleUrls: ["product-new.component.css"],
            selector: 'product-new'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, common_1.Location])
    ], NewProductComponent);
    return NewProductComponent;
}());
exports.NewProductComponent = NewProductComponent;
//# sourceMappingURL=product-new.component.js.map