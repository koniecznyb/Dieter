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