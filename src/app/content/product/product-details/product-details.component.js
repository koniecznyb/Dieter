"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var product_1 = require("../../../_model/product");
var product_service_1 = require("../../../_service/product.service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.productService.getProduct(+params['productId']); })
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailsComponent.prototype.save = function () {
        var _this = this;
        this.productService.update(this.product)
            .then(function () { return _this.goBack(); });
    };
    ProductDetailsComponent.prototype.currentUser = function () {
        return localStorage.getItem("currentUser");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductDetailsComponent.prototype, "product", void 0);
    ProductDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-details',
            templateUrl: 'product-details.component.html',
            styleUrls: ['product-details.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, common_1.Location])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map