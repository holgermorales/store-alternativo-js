import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Product} from "../../models/product.model";
import {CatalogoModel} from "../../models/catalogo.model";
import {GaleriaModel} from "../../models/galeria.model";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    precio: 0,
    precioVentaPublico: 0,
    titulo: '',
    stock: '',
    categoria: {
      id: 0,
      grupo: '',
      nemonico: '',
      nombre: ''
    },
    galeria: []
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() {
    this.showDetail.emit(this.product.id);
  }

}
