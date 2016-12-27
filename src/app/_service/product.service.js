"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = "http://localhost:8080";
    }
    ProductService.prototype.update = function (product) {
        var url = this.productsUrl + "/product/" + product.productId;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http
            .put(url, JSON.stringify(product), { headers: headers, withCredentials: true })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(this.productsUrl + "/products", { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (product) {
        var url = this.productsUrl + "/product/" + product.productId;
        return this.http.delete(url, { withCredentials: true })
            .toPromise()
            .then(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        var url = this.productsUrl + "/products";
        return this.http.post(url, JSON.stringify(product), { withCredentials: true })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.getProduct = function (number) {
        return this.getProducts().then(function (products) { return products.find(function (product) { return product.productId === number; }); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map