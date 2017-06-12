import {Component, OnInit} from "@angular/core";
import {Journal} from "../../../_model/journal";
import {JournalService} from "../../../_service/journal.service";

@Component({
    selector: 'journal-list',
    templateUrl: "./journal-list.component.html",
    styleUrls: ['./journal-list.component.css']
})

export class JournalListComponent implements OnInit{

    journals: Journal[];

    constructor(private journalService: JournalService){

    }

    ngOnInit(): void {
        this.getJournals();
    }

    getJournals(): void{
        this.journalService.getJournals().then(journals => this.journals = journals);
    }



}