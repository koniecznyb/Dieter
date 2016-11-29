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
var product_service_1 = require("../product.service");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.title = 'Products list';
    }
    ProductComponent.prototype.goToDetails = function () {
        this.router.navigate(["/product", this.selectedProduct.productId]);
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (productsResult) { return _this.products = productsResult; });
    };
    ProductComponent.prototype.goToAddNew = function () {
        this.router.navigate(["/product/new"]);
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductComponent.prototype.delete = function (product) {
        var _this = this;
        this.productService
            .deleteProduct(product)
            .then(function () { return _this.products = _this.products.filter(function (p) { return p !== product; }); });
        if (this.selectedProduct === product) {
            this.selectedProduct = null;
        }
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'products',
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product-list.component.js.map