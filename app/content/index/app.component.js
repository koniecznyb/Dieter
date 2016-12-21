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
var core_2 = require("@ng-idle/core");
var keepalive_1 = require("@ng-idle/keepalive");
var AppComponent = (function () {
    function AppComponent(idle, keepalive) {
        var _this = this;
        this.idle = idle;
        this.keepalive = keepalive;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.title = "Dieter";
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(5);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(5);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(core_2.DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(function () { return _this.idleState = 'No longer idle.'; });
        idle.onTimeout.subscribe(function () {
            _this.idleState = 'Timed out!';
            _this.timedOut = true;
        });
        idle.onIdleStart.subscribe(function () { return _this.idleState = 'You\'ve gone idle!'; });
        idle.onTimeoutWarning.subscribe(function (countdown) { return _this.idleState = 'You will time out in ' + countdown + ' seconds!'; });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        // keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset();
    }
    AppComponent.prototype.reset = function () {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    };
    AppComponent.prototype.getLoggedUsername = function () {
        return JSON.parse(localStorage.getItem("currentUser")).name;
    };
    AppComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem("currentUser") ? true : false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            moduleId: module.id,
            templateUrl: "app.component.html",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [core_2.Idle, keepalive_1.Keepalive])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map