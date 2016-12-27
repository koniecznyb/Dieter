"use strict";
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