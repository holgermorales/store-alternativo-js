import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from "./components/nav/nav.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductosComponent} from "./components/products/productos.component";
import {ImgComponent} from "./components/img/img.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductosComponent,
    ImgComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
