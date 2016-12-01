import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product/product-list/product-list.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {AppComponent} from "./index/app.component";
import {ProductService} from "./product/product.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {NewProductComponent} from "./product/product-new/product-new.component";
import {ProductSearchComponent} from "./product/product-search/product-search.component";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, ProductComponent, ProductDetailsComponent, DashboardComponent, NewProductComponent, ProductSearchComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]
})

export class AppModule {
}

