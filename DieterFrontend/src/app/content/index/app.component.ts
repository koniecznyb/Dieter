import { Component, OnInit } from "@angular/core";
import { Customer } from "../../_model/customer";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private currentUser: Customer;

    constructor() {
    }

    getLoggedUsername(): string {
        return JSON.parse(localStorage.getItem("currentUser")).name;
    }

    isLoggedIn() {
        return localStorage.getItem("currentUser");
    }

    ngOnInit(): void {
    }
    
}

