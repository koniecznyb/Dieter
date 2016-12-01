import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Product} from "../product";
import {Observable} from "rxjs";

Injectable()
export class ProductSearchService {

    constructor(private http: Http) {
    }

    search(term: String): Observable<Product[]> {
        return this.http
            .get('app/products/?name=${term}')
            .map((r: Response) => r.json() as Product[]);
    }

}