import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product.component";
import {ProductDetailsComponent} from "./product-details.component";
import {AppComponent} from "./app.component";
import {ProductService} from "./product.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, ProductComponent, ProductDetailsComponent, DashboardComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]
})

export class AppModule {
}

