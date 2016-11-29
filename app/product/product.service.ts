import {Injectable} from "@angular/core";
import {Product} from "./product";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProductService {

    private productsUrl = "http://localhost:8080"

    constructor(private http: Http) {
    }

    addAutorizationHeader(headers: Headers): void {
        headers.append("Authorization", "Basic " + btoa("admin" + ":" + "password"));
    }


    update(product: Product): Promise<Product> {
        const url = `${this.productsUrl}/product/${product.productId}`;

        let headers = new Headers();
        this.addAutorizationHeader(headers);
        headers.append("Content-Type", "application/json");

        return this.http
            .put(url, JSON.stringify(product), {headers: headers})
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    getProducts(): Promise<Product[]> {
        let headers = new Headers();
        this.addAutorizationHeader(headers);
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http.get(this.productsUrl + "/products", {headers: headers})
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError)
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getProduct(number: number): Promise<Product> {
        return this.getProducts().then(products => products.find(product => product.productId === number));
    }

    deleteProduct(product: Product): Promise<Product> {
        const url = `${this.productsUrl}/product/${product.productId}`;

        let headers = new Headers();
        this.addAutorizationHeader(headers);

        return this.http.delete(url, {headers: headers})
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    addProduct(product: Product) {
        let headers = new Headers();
        this.addAutorizationHeader(headers);
        headers.append("Content-Type", "application/json");

        let url = `${this.productsUrl}/products`;
        return this.http.post(url, JSON.stringify(product), {headers: headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}