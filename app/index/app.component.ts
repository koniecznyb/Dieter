import {Component} from '@angular/core';

@Component({
    selector: 'app',
    moduleId: module.id,
    template:
        `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>    
            <a routerLink="/products" routerLinkActive="active">Products</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = "Dieter";
}

