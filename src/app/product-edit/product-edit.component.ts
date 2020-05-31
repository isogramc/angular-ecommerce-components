import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() message: string;
  @Input() count: any;

  @Input() productEditSelection: boolean;
  @Input() addNewProductMode: boolean;

  @Output() selectedProductSaveEvent = new EventEmitter();
  @Output() addProductEvent = new EventEmitter();

  @Input() userProductSelection: any;

  productId=-1;
  productCode: string;

  updatedstockvalue: any;
  updatedimageUrl: any;
  updatedstarrating: any;
  updateddescription: any;
  updatedprice: any;
  updatedname: any;

  imageWidth = 50;

  ngOnInit(): void {
    //console.log('addMode', this.addNewProductMode);
    //console.log(this);
    //console.log(this.productId, this.addNewProductMode);

    if(!this.addNewProductMode){
      
      this.productId = this.userProductSelection.productId;
      this.updatedname = this.userProductSelection.productName;
      this.productCode = this.userProductSelection.productCode;
      this.updatedprice = this.userProductSelection.price;
      this.updateddescription = this.userProductSelection.description;
      this.updatedstarrating = this.userProductSelection.starRating;
      // this.imageUrl = this.userProductSelection.imageUrl;
      this.updatedimageUrl = this.userProductSelection.imageUrlfrnt;
      // this.imageUrlBack = this.userProductSelection.imageUrlBack;
      // this.inStock = this.userProductSelection.inStock;
      // this.updatedstockvalue = this.userProductSelection.stock;
    }
    
  }

  ngOnChanges() {
   /* if (this.count > 25){
      alert('Hey');
    }
    console.log('change');*/
  }

  productUpdate(){
    this.productEditSelection = !this.productEditSelection;
    console.log(this.productEditSelection);
    this.selectedProductSaveEvent.emit({
      productId: this.productId,
      updatedstockvalue: this.updatedstockvalue,
      productEditSelection: this.productEditSelection,
      updatedimageUrl: this.updatedimageUrl,
      updatedstarrating: this.updatedstarrating,
      updateddescription: this.updateddescription,
      updatedprice: this.updatedprice,
      updatedname: this.updatedname
    });
  }

  addProduct(){
    //console.log("Save now");
    this.productEditSelection = !this.productEditSelection;
    this.addNewProductMode = !this.addNewProductMode;
    this.addProductEvent.emit({
      updatedstockvalue: this.updatedstockvalue,
      productEditSelection: this.productEditSelection,
      updatedimageUrl: this.updatedimageUrl,
      updatedstarrating: this.updatedstarrating,
      updateddescription: this.updateddescription,
      updatedprice: this.updatedprice,
      updatedname: this.updatedname
    });
  }
}