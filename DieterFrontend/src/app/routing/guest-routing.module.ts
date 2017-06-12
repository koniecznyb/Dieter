import {RouterModule} from "@angular/router";
import {DashboardComponent} from "../content/dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {SignupComponent} from "../content/signup/signup.component";
import {LoginComponent} from "../content/login/login.component";
import {ProductComponent} from "../content/product/product-list/product-list.component";
import {ProductDetailsComponent} from "../content/product/product-details/product-details.component";

const guestRoutes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    {path: 'products', component: ProductComponent},
    {path: 'product/:productId', component: ProductDetailsComponent},

    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(guestRoutes)],
    exports: [RouterModule]
})

export class GuestRoutingModule {
}