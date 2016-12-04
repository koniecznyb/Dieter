import {Component} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent{

    login(event: any, username: string, password: string): void{
        console.log("logging");
    }

}