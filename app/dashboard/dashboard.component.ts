import {Component, OnInit} from "@angular/core";
import {Product} from "../_model/product";
import {ProductService} from "../_service/product.service";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: `dashboard.component.html`,
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    products: Product[];

    constructor(private productService: ProductService){

    }

    ngOnInit(): void{
        this.productService.getProducts().then(products => this.products = products.slice(1, 5));
    }

}