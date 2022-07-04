import {Component, OnInit} from "@angular/core";
import {Product} from "../../models/product.model";
import {StoreService} from "../../services/store.service";
import {ProductsService} from "../../services/products.service";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  paginacion = {
    cuenta: 'S',
    pagina: 1,
    itemsPorPagina: 50,
    total: 0
  }

  constructor(private storeService: StoreService,
              private productsService: ProductsService,
              private productoService: ProductoService) {
  }

  ngOnInit() {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
    this.obtenerProductos();

  }

  getProductsExterno() {
    this.productsService.getAllProductos().subscribe(response => {
      this.products = response
    });
  }

  onAddToShoppingCar(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
  }

  obtenerProductos() {
    this.productoService.getAll(this.paginacion).subscribe(response => {
      if (response.dato) {
        this.products = response.dato;
      }
    });
  }
}
