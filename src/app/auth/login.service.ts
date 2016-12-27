import {Injectable} from "@angular/core";
import {Headers, Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Customer} from "../_model/customer";

@Injectable()
export class LoginService {

    private url = "http://localhost:8080";

    constructor(private http: Http) {
    }

    login(username: string, password: string){
        let headers = new Headers();
        let encoded = btoa(`${username}:${password}`);
        headers.append("Authorization", "Basic " + encoded);
        headers.append("x-requested-with", "HttpXMLRequest");

        return this.http.get(`${this.url}/user`, {'headers': headers, withCredentials: true})
            .map((response: Response) => {
                let principal = response.json();

                if(principal){
                    localStorage.setItem('currentUser', JSON.stringify(principal));
                    return true;
                }
                return false;
            });
    }

    logout() {
        console.log("logging out");
        return this.http.post(`${this.url}/logout`, null, {withCredentials: true})
            .map((response: Response) => {
                console.log("sukces")
                if(response.ok){
                    localStorage.removeItem('currentUser');
                    return true;
                }
                return false;
            });
    }
}