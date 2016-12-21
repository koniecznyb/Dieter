import {Injectable} from "@angular/core";
import {Customer} from "../_model/customer";
import {Http} from "@angular/http";

@Injectable()
export class CustomerService{

    constructor(private http: Http){

    }

    getCurrentCustomer(): Customer{
        var currentCustomer = localStorage.getItem("currentUser");
        if(currentCustomer){
            return http.get("")
        }
    }
}