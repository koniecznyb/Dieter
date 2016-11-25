import {Routes, RouterModule} from "@angular/router";
import {ProductComponent} from "./product.component";
import {DashboardComponent} from "./dashboard.component";
import {ProductDetailsComponent} from "./product-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'product/:id', component: ProductDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}