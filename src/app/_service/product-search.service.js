"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ProductSearchService = (function () {
    function ProductSearchService(http) {
        this.http = http;
        this.productsUrl = "http://localhost:8080";
    }
    ProductSearchService.prototype.search = function (term) {
        var url = this.productsUrl + "/products?name=" + term;
        return this.http
            .get(url)
            .map(function (r) { return r.json(); });
    };
    ProductSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductSearchService);
    return ProductSearchService;
}());
exports.ProductSearchService = ProductSearchService;
//# sourceMappingURL=product-search.service.js.map