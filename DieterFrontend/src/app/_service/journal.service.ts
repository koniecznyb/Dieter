import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Journal } from "../_model/journal";
import { Observable } from "rxjs";
import { AppConfig, APP_CONFIG } from "../app.config";

@Injectable()
export class JournalService {

    private url: string;

    constructor(private http: Http, @Inject(APP_CONFIG) config: AppConfig) {
        this.url = config.apiEndpoint;
    }

    // getProducts(): Product[]{
    //     return http.get()
    // }

    getJournals(): Promise<Journal[]> {
        let currentUsername = JSON.parse(localStorage.getItem("currentUser")).name;
        return this.http.get(`${this.url}/user/${currentUsername}/journals`, { withCredentials: true })
            .toPromise()
            .then(response => response.json() as Journal[]);
    }

}