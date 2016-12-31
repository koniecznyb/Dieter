import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../../../_model/product";
import {ProductService} from "../../../_service/product.service";
import {ProductSearchService} from "../../../_service/product-search.service";

@Component({
    selector: 'products',
    providers: [ProductSearchService],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductComponent implements OnInit {
    title = 'Products list';
    products: Product[];

    constructor(private productService: ProductService, private router: Router) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().then(productsResult => this.products = productsResult);
    }

    goToAddNew(): void{
        this.router.navigate(["/products/new"]);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem("currentUser") ? true : false;
    }
}
