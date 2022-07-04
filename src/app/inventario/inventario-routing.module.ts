import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InventarioComponent} from "../pages/inventario/inventario.component";

const routes: Routes = [
  {path: '', component: InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class InventarioRoutingModule {
}
