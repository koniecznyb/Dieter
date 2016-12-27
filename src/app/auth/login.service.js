"use strict";
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