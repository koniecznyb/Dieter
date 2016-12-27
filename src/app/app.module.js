"use strict";
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var product_list_component_1 = require("./content/product/product-list/product-list.component");
var product_details_component_1 = require("./content/product/product-details/product-details.component");
var app_component_1 = require("./content/index/app.component");
var product_service_1 = require("./_service/product.service");
var dashboard_component_1 = require("./content/dashboard/dashboard.component");
var http_1 = require("@angular/http");
var product_new_component_1 = require("./content/product/product-new/product-new.component");
var product_search_component_1 = require("./content/product/product-search/product-search.component");
var journal_list_component_1 = require("./content/journal/journal-list/journal-list.component");
var login_component_1 = require("./content/login/login.component");
var signup_component_1 = require("./content/signup/signup.component");
var login_service_1 = require("./auth/login.service");
var angular2_flash_messages_1 = require("angular2-flash-messages");
var auth_guard_1 = require("./auth/auth-guard");
var guest_routing_module_1 = require("./routing/guest-routing.module");
var user_routing_module_1 = require("./routing/user-routing.module");
var journal_service_1 = require("./_service/journal.service");
// import {MomentModule} from "./angular2-moment";
// import {NgIdleModule} from "./@ng-idle/core"; // optional, provides moment-style pipes for date formatting
// import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                guest_routing_module_1.GuestRoutingModule,
                user_routing_module_1.UserRoutingModule,
                http_1.HttpModule,
                angular2_flash_messages_1.FlashMessagesModule,
            ],
            declarations: [app_component_1.AppComponent,
                product_list_component_1.ProductComponent,
                product_details_component_1.ProductDetailsComponent,
                dashboard_component_1.DashboardComponent,
                product_new_component_1.NewProductComponent,
                product_search_component_1.ProductSearchComponent,
                journal_list_component_1.JournalListComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [product_service_1.ProductService, login_service_1.LoginService, auth_guard_1.AuthGuard, journal_service_1.JournalService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map