import {NgModule} from "@angular/core";
import {InventarioContenedorComponent} from "./components/contenedor/inventario-contenedor.component";
import {InventarioRoutingModule} from "./inventario-routing.module";
import {InventarioRegistroComponent} from "./components/registro/inventario-registro.component";

@NgModule({
  declarations: [
    InventarioContenedorComponent,
    InventarioRegistroComponent
  ],
  imports: [InventarioRoutingModule]
})
export class InventarioModule {
}
