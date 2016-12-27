"use strict";
var core_1 = require('@angular/core');
var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.register = function (event, username, password, email) {
        console.log("registering");
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map