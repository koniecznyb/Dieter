import {Component, Input, OnInit} from "@angular/core";
import {Product} from "./product";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {ProductService} from "./product.service";
import "rxjs/add/operator/switchMap";

@Component({
    moduleId: module.id,
    selector: 'product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.productService.getProduct(+params['productId']))
            .subscribe(product => this.product = product);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.productService.update(this.product)
            .then(() => this.goBack());
    }

    @Input()
    product: Product;

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location) {
    }


}