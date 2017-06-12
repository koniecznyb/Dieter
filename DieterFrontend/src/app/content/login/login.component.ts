import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { LoginService } from "../../auth/login.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    returnUrl: string;

    constructor(private loginService: LoginService,
        private route: ActivatedRoute,
        private router: Router,
        private flashMessagesService: FlashMessagesService) {

    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';

        if (!localStorage.getItem("currentUser")) {
            return;
        }

        this.loginService
            .logout()
            .catch((error) => this.handleError(error));
    }

    login(event: any, username: string, password: string) {
        event.preventDefault();
        this.loginService
            .login(username, password)
            .then((success) => this.handleSuccess(success))
            .catch((error) => this.handleError(error));
    }

    handleSuccess(data: any) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser")).name;
        this.router.navigate([this.returnUrl]);
    }

    handleError(error: any) {
        this.flashMessagesService.show(`Incorrect user details!`);
    }
}