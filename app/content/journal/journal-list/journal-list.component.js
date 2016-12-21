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
var journal_service_1 = require("../../../_service/journal.service");
var JournalListComponent = (function () {
    function JournalListComponent(journalService) {
        this.journalService = journalService;
    }
    JournalListComponent.prototype.ngOnInit = function () {
        this.getJournals();
    };
    JournalListComponent.prototype.getJournals = function () {
        var _this = this;
        this.journalService.getJournals().then(function (journals) { return _this.journals = journals; });
    };
    JournalListComponent = __decorate([
        core_1.Component({
            selector: 'journal-list',
            moduleId: module.id,
            templateUrl: "journal-list.component.html",
            styleUrls: ['journal-list.component.css']
        }), 
        __metadata('design:paramtypes', [journal_service_1.JournalService])
    ], JournalListComponent);
    return JournalListComponent;
}());
exports.JournalListComponent = JournalListComponent;
//# sourceMappingURL=journal-list.component.js.map