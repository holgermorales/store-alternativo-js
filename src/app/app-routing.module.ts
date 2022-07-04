import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import {LoginComponent} from "./pages/login/login.component";
import {MycartComponent} from "./pages/mycart/mycart.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [{
  path: 'home', component: HomeComponent
}, {
  path: 'category', component: CategoryComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'mycart', component: MycartComponent
}, {
  path: 'register', component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
