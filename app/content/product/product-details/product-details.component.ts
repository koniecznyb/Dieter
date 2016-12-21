import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";
import {Product} from "../../../_model/product";
import {ProductService} from "../../../_service/product.service";

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

    currentUser(){
        return localStorage.getItem("currentUser");
    }

    @Input()
    product: Product;

    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location) {
    }


}