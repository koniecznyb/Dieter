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
var product_service_1 = require("./product.service");
var AppComponent = (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.title = 'Products list';
        this.products = productService.getProducts();
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [product_service_1.ProductService],
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <ul class=\"products\">\n            <li *ngFor=\"let product of products\" (click)=\"onSelect(product)\" [class.selected]=\"product === selectedProduct\">\n                <span class=\"product\">{{product.id}}</span> {{product.name}}\n            </li>\n        </ul>\n        <product-details [product]=\"selectedProduct\"></product-details>\n    ",
            styles: ["\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.products {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.products li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.products li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.products li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.products .text {\n    position: relative;\n    top: -3px;\n}\n.products .product {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n"]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map