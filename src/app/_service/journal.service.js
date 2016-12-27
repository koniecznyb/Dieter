"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var JournalService = (function () {
    function JournalService(http) {
        this.http = http;
        this.url = "http://localhost:8080";
    }
    // getProducts(): Product[]{
    //     return http.get()
    // }
    JournalService.prototype.getJournals = function () {
        var currentUsername = JSON.parse(localStorage.getItem("currentUser")).name;
        return this.http.get(this.url + "/user/" + currentUsername + "/journals", { withCredentials: true })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    JournalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JournalService);
    return JournalService;
}());
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map