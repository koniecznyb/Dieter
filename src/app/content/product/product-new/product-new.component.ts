import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../../../_model/product";
import {ProductService} from "../../../_service/product.service";


@Component({
    templateUrl: "./product-new.component.html",
    styleUrls: ["./product-new.component.css"],
    selector: 'product-new'
})

export class NewProductComponent{

    constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location){
    }

    addProduct(productName: string, calories: number, fats: number, carbohydrates: number, proteins: number): void{
        let product = new Product();
        product.name = productName;
        product.calories = calories;
        product.carbohydrates = carbohydrates;
        product.fats = fats;
        product.proteins = proteins;
        this.productService.addProduct(product);
    }

    goBack(): void{
        this.location.back();
    }
}