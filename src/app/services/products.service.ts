import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * Esta api para obtener los productos de una api externa para el registro de productos en la bd de todo1.
   */
  getAllProductos() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
}
