import { Injectable, Inject } from "@angular/core";
import { Headers, Http, Response, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import { Customer } from "../_model/customer";
import { AppConfig, APP_CONFIG } from "../app.config";

@Injectable()
export class LoginService {

    private url: string;
    private sessionTimeout: number;
    private username: string;

    constructor(private http: Http, @Inject(APP_CONFIG) config: AppConfig) {
        this.sessionTimeout = config.sessionTimeout;
        this.url = config.apiEndpoint;
    }

    login(username: string, password: string) {
        let headers = new Headers();
        let encoded = btoa(`${username}:${password}`);
        headers.append("Authorization", "Basic " + encoded);
        headers.append("X-Requested-With", "XMLHttpRequest");

        let params = new URLSearchParams();
        params.set('remember-me', 'true');

        return this.http.get(`${this.url}/user`, { 'headers': headers, withCredentials: true, search: params })
            .toPromise()
            .then((response: Response) => {
                let principal = response.json();
                if (principal) {
                    this.username = principal.name;
                    localStorage.setItem('currentUser', JSON.stringify(principal));
                }
            });
    }

    register(username: string, password: string, email: string): Promise<Response> {
        let customer = new Customer();
        customer.firstName = username;
        customer.password = password;
        customer.email = email;

        return this.http.post(`${this.url}/users`, customer)
            .toPromise()
            .then(() => this.login(username, password));
    }

    logout() {
        return this.http.post(`${this.url}/logout`, null, { withCredentials: true })
            .toPromise()
            .then(() => localStorage.removeItem('currentUser'));
    }

    // keepSessionAlive() {
    //     let url = `${this.url}/user/${this.username}`;
    //     this.http.get(url, { withCredentials: true })
    //         .toPromise()
    //         .then()
    //         .catch(result => console.log("failure"));
    // }
}