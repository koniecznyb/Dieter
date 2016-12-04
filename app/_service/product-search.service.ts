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
        let headers = new Headers;
        headers.append("Authorization", "Basic " + btoa("admin" + ":" + "password"));

        return this.http
            .get(url, {headers: headers})
            .map((r: Response) => r.json() as Product[]);
    }

}