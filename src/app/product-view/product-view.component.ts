import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() userProductSelection: any;
  @Input() productEditSelection: boolean;
  @Output() updateProductChangedEvent = new EventEmitter();
  @Output() deleteProductChangedEvent = new EventEmitter();

  productId: string;
  productName: string;
  productCode: string;
  price: string;
  description: string;
  starRating: number;
  imageUrl: string;
  imageUrlfrnt: string;
  imageUrlBack: string;
  inStock: boolean;
  stock: number;

  imageWidth = 50;

  constructor() {
  }

  ngOnInit(): void {
    this.productId = this.userProductSelection.productId;
    this.productName = this.userProductSelection.productName;
    this.productCode = this.userProductSelection.productCode;
    this.price = this.userProductSelection.price;
    this.description = this.userProductSelection.description;
    this.starRating = this.userProductSelection.starRating;
    this.imageUrl = this.userProductSelection.imageUrl;
    this.imageUrlfrnt = this.userProductSelection.imageUrlfrnt;
    this.imageUrlBack = this.userProductSelection.imageUrlBack;
    this.inStock = this.userProductSelection.inStock;
    this.stock = this.userProductSelection.stock;
  }

  updateProduct(){
    this.productEditSelection = !this.productEditSelection;
    //console.log(this.productId, this.productEditSelection);
    this.updateProductChangedEvent.emit({
      productId: this.productId,
      productEditSelection: this.productEditSelection
    });
  }

  deleteProduct(){
    this.productEditSelection = !this.productEditSelection;
    //console.log(this.productId, this.productEditSelection);
    this.deleteProductChangedEvent.emit({
      productId: this.productId,
      productEditSelection: this.productEditSelection
    });
  }
}