import {Injectable} from "@angular/core";
import {Product} from "../_model/product";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProductService {

    private productsUrl = "http://localhost:8080"

    constructor(private http: Http) {
    }

    update(product: Product): Promise<Product> {
        const url = `${this.productsUrl}/product/${product.productId}`;

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http
            .put(url, JSON.stringify(product), {headers: headers, withCredentials: true})
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    getProducts(): Promise<Product[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http.get(this.productsUrl + "/products", {headers: headers})
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError)
    }

    deleteProduct(product: Product): Promise<Product> {
        const url = `${this.productsUrl}/product/${product.productId}`;

        return this.http.delete(url, {withCredentials: true})
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    addProduct(product: Product) {
        const url = `${this.productsUrl}/products`;

        return this.http.post(url, JSON.stringify(product), {withCredentials: true})
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