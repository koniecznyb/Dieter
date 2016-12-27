import {AuthGuard} from "../auth/auth-guard";
import {JournalListComponent} from "../content/journal/journal-list/journal-list.component";
import {Routes, RouterModule} from "@angular/router";
import {NewProductComponent} from "../content/product/product-new/product-new.component";
import {NgModule} from "@angular/core";

const userRouters: Routes = [
    {path: 'journals', component: JournalListComponent, canActivate: [AuthGuard]},
    {path: 'products/new', component: NewProductComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(userRouters)],
    exports: [RouterModule]
})

export class UserRoutingModule {
}