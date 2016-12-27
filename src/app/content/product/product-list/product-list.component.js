"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../../../_service/product.service");
var product_search_service_1 = require("../../../_service/product-search.service");
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
        this.router.navigate(["/products/new"]);
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
            providers: [product_search_service_1.ProductSearchService],
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product-list.component.js.map