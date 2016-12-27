import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Product} from "../_model/product";
import {Observable} from "rxjs";

@Injectable()
export class ProductSearchService {

    private productsUrl = "http://localhost:8080"

    constructor(private http: Http) {
    }

    search(term: String): Observable<Product[]> {
        let url = `${this.productsUrl}/products?name=${term}`;

        return this.http
            .get(url)
            .map((r: Response) => r.json() as Product[]);
    }

}