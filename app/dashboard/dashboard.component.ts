import {Component, OnInit} from "@angular/core";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";

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