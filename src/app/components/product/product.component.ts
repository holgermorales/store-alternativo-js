import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<String>();

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
