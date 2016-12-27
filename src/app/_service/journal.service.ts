import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Journal} from "../_model/journal";
import {Observable} from "rxjs";

@Injectable()
export class JournalService {

    private url = "http://localhost:8080";

    constructor(private http: Http) {

    }

    // getProducts(): Product[]{
    //     return http.get()
    // }

    getJournals(): Promise<Journal[]> {
        let currentUsername = JSON.parse(localStorage.getItem("currentUser")).name;
        return this.http.get(`${this.url}/user/${currentUsername}/journals`, {withCredentials: true})
            .toPromise()
            .then(response => response.json() as Journal[]);
    }

}