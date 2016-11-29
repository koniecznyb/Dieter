import {Component} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
    moduleId: module.id,
    templateUrl: "product-new.component.html",
    styleUrls: ["product-new.component.css"],
    selector: 'product-new'
})

export class NewProductComponent{

    constructor(private productService: ProductService){

    }

    addProduct(productName: String, calories: Number, fats: Number, carbohydrates: Number, proteins: Number): void{
        let product = new Product();
        product.name = productName;
        product.calories = calories;
        product.carbohydrates = carbohydrates;
        product.fats = fats;
        product.proteins = proteins;
        console.log(product);
        console.log(calories);
        this.productService.addProduct(product);
    }
}