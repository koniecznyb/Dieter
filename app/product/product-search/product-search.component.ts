import {Component, OnInit} from "@angular/core";
import {Product} from "../product";
import {Observable, Subject} from "rxjs";
import {ProductSearchService} from "./product-search.service";

@Component({
    moduleId: module.id,
    selector: 'product-search',
    templateUrl: 'product-search.component.html',
    styleUrls: ['product-search.component.css']
})

export class ProductSearchComponent implements OnInit{

    products: Observable<Product>;
    private searchTerms = new Subject<string>();

    constructor(private productSearchService: ProductSearchService) {
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.products = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.productSearchService.search(term) : Observable.of<Product[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Product[]>([]);
            });
    }
}