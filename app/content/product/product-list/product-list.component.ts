import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../../../_model/product";
import {ProductService} from "../../../_service/product.service";
import {ProductSearchService} from "../../../_service/product-search.service";

@Component({
    selector: 'products',
    moduleId: module.id,
    providers: [ProductSearchService],
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
        this.router.navigate(["/products/new"]);
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
