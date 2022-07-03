import {Component, OnInit} from "@angular/core";
import {Product} from "../../models/product.model";
import {StoreService} from "../../../services/store.service";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  // temporal hasta maquetar
  products: Product[] = [];
  showProductDetail = false;

  constructor(private storeService: StoreService,
              private productsService: ProductsService) {
  }

  ngOnInit() {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
    this.getProductsExterno();

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

  onShowDetail(id: any) {

  }
}
