import {Injectable} from "@angular/core";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";


@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProduct(number: number): Promise<Product> {
        return this.getProducts().then(products => products.find(product => product.id === number));
    }
}