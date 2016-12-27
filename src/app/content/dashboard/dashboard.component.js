"use strict";
var core_1 = require("@angular/core");
var product_service_1 = require("../../_service/product.service");
var DashboardComponent = (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: "dashboard.component.html",
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map