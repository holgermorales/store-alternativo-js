import {CatalogoModel} from "./catalogo.model";
import {GaleriaModel} from "./galeria.model";

export interface Product {
  id: number;
  precio: number;
  precioVentaPublico: number;
  titulo: string;
  stock: string;
  categoria: CatalogoModel;
  galeria: GaleriaModel[];
}
