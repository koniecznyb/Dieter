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
var router_1 = require("@angular/router");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var login_service_1 = require("../../auth/login.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, route, router, flashMessagesService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
        if (!localStorage.getItem("currentUser")) {
            return;
        }
        this.loginService
            .logout()
            .subscribe(function (data) {
            console.log("logging out");
            console.log(data);
        }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        this.loginService
            .login(username, password)
            .subscribe(function (data) { return _this.handleSuccess(data); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleSuccess = function (data) {
        var currentUser = JSON.parse(localStorage.getItem("currentUser")).name;
        alert("Logged in as " + currentUser);
        this.router.navigate([this.returnUrl]);
    };
    LoginComponent.prototype.handleError = function (error) {
        alert(JSON.parse(error.text()).message);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.ActivatedRoute, router_1.Router, angular2_flash_messages_1.FlashMessagesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map