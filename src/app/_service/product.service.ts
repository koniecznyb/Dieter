import { Injectable, Inject } from "@angular/core";
import { Product } from "../_model/product";
import { Http, Headers } from "@angular/http";
import { AppConfig, APP_CONFIG } from "../app.config";

@Injectable()
export class ProductService {

    private url: string;

    constructor(private http: Http, @Inject(APP_CONFIG) config: AppConfig) {
        this.url = config.apiEndpoint;
    }

    update(product: Product): Promise<Product> {
        const url = `${this.url}/product/${product.productId}`;

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http
            .put(url, JSON.stringify(product), { headers: headers, withCredentials: true })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    getProducts(): Promise<Product[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http.get(this.url + "/products", { headers: headers })
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError)
    }

    deleteProduct(product: Product): Promise<Product> {
        const url = `${this.url}/product/${product.productId}`;

        return this.http.delete(url, { withCredentials: true })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    addProduct(product: Product) {
        const url = `${this.url}/products`;

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(url, JSON.stringify(product), { withCredentials: true, headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getProduct(number: number): Promise<Product> {
        return this.getProducts().then(products => products.find(product => product.productId === number));
    }
}