"use strict";
var auth_guard_1 = require("../auth/auth-guard");
var journal_list_component_1 = require("../content/journal/journal-list/journal-list.component");
var router_1 = require("@angular/router");
var product_new_component_1 = require("../content/product/product-new/product-new.component");
var core_1 = require("@angular/core");
var userRouters = [
    { path: 'journals', component: journal_list_component_1.JournalListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'products/new', component: product_new_component_1.NewProductComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(userRouters)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map