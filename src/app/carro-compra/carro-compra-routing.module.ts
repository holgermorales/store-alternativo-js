import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarroCompraContenedorComponent} from "./componentes/contenedor/carro-compra-contenedor.component";

const routes: Routes = [{
  path: '', component: CarroCompraContenedorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CarroCompraRoutingModule {
}
