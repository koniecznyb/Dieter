import {Routes, RouterModule} from "@angular/router";
import {ProductComponent} from "./product/product-list/product-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {NgModule} from "@angular/core";
import {NewProductComponent} from "./product/product-new/product-new.component";
import {JournalListComponent} from "./journal/journal-list/journal-list.component";

const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'product/new', component: NewProductComponent},
    {path: 'product/:productId', component: ProductDetailsComponent},
    {path: 'journals', component: JournalListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}