import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Product } from "../_model/product";
import { Observable } from "rxjs";
import { AppConfig, APP_CONFIG } from "../app.config";

@Injectable()
export class ProductSearchService {

    private url: string;

    constructor(private http: Http, @Inject(APP_CONFIG) config: AppConfig) {
        this.url = config.apiEndpoint;
    }

    search(term: String): Observable<Product[]> {
        let url = `${this.url}/products?name=${term}`;

        return this.http
            .get(url)
            .map((r: Response) => r.json() as Product[]);
    }

}