"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCurrentCustomer = function () {
        var currentCustomer = localStorage.getItem("currentUser");
        if (currentCustomer) {
        }
        return null;
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map