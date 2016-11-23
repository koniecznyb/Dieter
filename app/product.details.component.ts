import {Component, Input} from "@angular/core";
import {Product} from "./product";

@Component({
    selector: 'product-details',
    template: ` 
        <div *ngIf="product">
        <h2>{{product.name}}</h2>
        <div><label>id: </label>{{product.id}}</div>
        <div><label>title: </label><input [(ngModel)]="product.calories"/></div>
        </div>
`
})

export class ProductDetailsComponent {
    @Input()
    product: Product;
}