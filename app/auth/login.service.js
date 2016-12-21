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
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "http://localhost:8080";
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new http_1.Headers();
        var encoded = btoa(username + ":" + password);
        headers.append("Authorization", "Basic " + encoded);
        headers.append("x-requested-with", "HttpXMLRequest");
        return this.http.get(this.url + "/user", { 'headers': headers, withCredentials: true })
            .map(function (response) {
            var principal = response.json();
            if (principal) {
                localStorage.setItem('currentUser', JSON.stringify(principal));
                return true;
            }
            return false;
        });
    };
    LoginService.prototype.logout = function () {
        console.log("logging out");
        return this.http.post(this.url + "/logout", null, { withCredentials: true })
            .map(function (response) {
            console.log("sukces");
            if (response.ok) {
                localStorage.removeItem('currentUser');
                return true;
            }
            return false;
        });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map