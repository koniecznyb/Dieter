import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { ProductDetailsComponent } from './product.details.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }