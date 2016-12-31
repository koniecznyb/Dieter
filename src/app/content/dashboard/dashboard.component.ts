import { Component } from "@angular/core";
import { Product } from "../../_model/product";
import { ProductService } from "../../_service/product.service";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

    constructor() {
    }

    isLoggedIn() {
        return localStorage.getItem("currentUser");
    }

}