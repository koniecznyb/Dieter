"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("../content/dashboard/dashboard.component");
var core_1 = require("@angular/core");
var signup_component_1 = require("../content/signup/signup.component");
var login_component_1 = require("../content/login/login.component");
var product_list_component_1 = require("../content/product/product-list/product-list.component");
var product_details_component_1 = require("../content/product/product-details/product-details.component");
var guestRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'products', component: product_list_component_1.ProductComponent },
    { path: 'product/:productId', component: product_details_component_1.ProductDetailsComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
var GuestRoutingModule = (function () {
    function GuestRoutingModule() {
    }
    GuestRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(guestRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], GuestRoutingModule);
    return GuestRoutingModule;
}());
exports.GuestRoutingModule = GuestRoutingModule;
//# sourceMappingURL=guest-routing.module.js.map