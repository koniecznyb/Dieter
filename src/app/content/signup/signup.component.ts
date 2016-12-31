import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../auth/login.service";
import { Location } from "@angular/common";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent {

    constructor(private loginService: LoginService,
        private router: Router,
        private location: Location,
        private flashMessagesService: FlashMessagesService) {
    }

    register(event: any, username: string, password: string, email: string) {
        this.loginService
            .register(username, password, email)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.flashMessagesService.show("Account created successfully");
        this.router.navigate(["/"]);
    }

}