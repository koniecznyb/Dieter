import {Component, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})

export class ProductComponent implements OnInit {
    selectedProduct: Product;
    title = 'Products list';
    products: Product[];

    constructor(private productService: ProductService, private router: Router) {
    }

    goToDetails(): void{
        this.router.navigate(["/product", this.selectedProduct.id]);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().then(productsResult => this.products = productsResult);
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}
