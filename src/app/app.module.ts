import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from "./components/nav/nav.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {ImgComponent} from "./components/img/img.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TimeInterceptor} from "./interceptors/time.interceptor";
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {CategoryComponent} from './pages/category/category.component';
import {MycartComponent} from './pages/mycart/mycart.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HomeComponent} from "./pages/home/home.component";
import {InventarioComponent} from "./pages/inventario/inventario.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
    NotFoundComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    InventarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
