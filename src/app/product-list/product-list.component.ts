import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productId: number;
  @Input() productName: string;
  @Input() activeSelection: boolean;
  color = '';
  @Output() selectedProductChangedEvent = new EventEmitter();
  @Output() deleteSelectedProductEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectedProductChanged(){
    this.activeSelection = !this.activeSelection;
    console.log(this.productId, this.activeSelection);
    this.selectedProductChangedEvent.emit({
      productId: this.productId,
      activeSelection: this.activeSelection,
    });
  }

  deleteSelectedProduct(){
    console.log(this.productId, this.activeSelection);
    this.deleteSelectedProductEvent.emit({
      productId: this.productId,
      activeSelection: this.activeSelection,
    });
  }

}