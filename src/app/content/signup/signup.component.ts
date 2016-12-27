import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})

export class SignupComponent{

    register(event: any, username: string, password: string, email: string){
        console.log("registering");
    }

}