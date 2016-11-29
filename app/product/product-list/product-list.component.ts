import {Component, OnInit} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductComponent implements OnInit {
    selectedProduct: Product;
    title = 'Products list';
    products: Product[];

    constructor(private productService: ProductService, private router: Router) {
    }

    goToDetails(): void{
        this.router.navigate(["/product", this.selectedProduct.productId]);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().then(productsResult => this.products = productsResult);
    }

    goToAddNew(): void{
        this.router.navigate(["/product/new"]);
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    delete(product: Product): void{
        this.productService
            .deleteProduct(product)
            .then(() => this.products = this.products.filter(p => p !== product));
        if(this.selectedProduct === product){
            this.selectedProduct = null;
        }
    }
}
