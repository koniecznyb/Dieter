import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./content/product/product-list/product-list.component";
import {ProductDetailsComponent} from "./content/product/product-details/product-details.component";
import {AppComponent} from "./content/index/app.component";
import {ProductService} from "./_service/product.service";
import {DashboardComponent} from "./content/dashboard/dashboard.component";
import {HttpModule} from "@angular/http";
import {NewProductComponent} from "./content/product/product-new/product-new.component";
import {ProductSearchComponent} from "./content/product/product-search/product-search.component";
import {JournalListComponent} from "./content/journal/journal-list/journal-list.component";
import {LoginComponent} from "./content/login/login.component";
import {SignupComponent} from "./content/signup/signup.component";
import {LoginService} from "./auth/login.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthGuard} from "./auth/auth-guard";
import {GuestRoutingModule} from "./routing/guest-routing.module";
import {UserRoutingModule} from "./routing/user-routing.module";
import {JournalService} from "./_service/journal.service";
// import {MomentModule} from "./angular2-moment";
// import {NgIdleModule} from "./@ng-idle/core"; // optional, provides moment-style pipes for date formatting
// import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        GuestRoutingModule,
        UserRoutingModule,
        HttpModule,
        FlashMessagesModule,
        // MomentModule,
        // NgIdleModule.forRoot()
    ],
    declarations: [AppComponent,
        ProductComponent,
        ProductDetailsComponent,
        DashboardComponent,
        NewProductComponent,
        ProductSearchComponent,
        JournalListComponent,
        LoginComponent,
        SignupComponent
    ],
    bootstrap: [AppComponent],
    providers: [ProductService, LoginService, AuthGuard, JournalService]
})

export class AppModule {
}

