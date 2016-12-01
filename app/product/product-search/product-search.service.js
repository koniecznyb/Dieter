"use strict";
var core_1 = require("@angular/core");
core_1.Injectable();
var ProductSearchService = (function () {
    function ProductSearchService(http) {
        this.http = http;
    }
    ProductSearchService.prototype.search = function (term) {
        return this.http
            .get('app/products/?name=${term}')
            .map(function (r) { return r.json(); });
    };
    return ProductSearchService;
}());
exports.ProductSearchService = ProductSearchService;
//# sourceMappingURL=product-search.service.js.map