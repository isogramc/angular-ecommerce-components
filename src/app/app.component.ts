import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Assignment 3';
  abc = 'passedFromParent';
  products = [];
  imageWidth = 100;
  imageMargin = 2;
  productToShow: any;
  productToUpdate: any;
  isProductSelected = false;
  isProductEditMode = false;
  isAddProductMode = false;

  ngOnInit(){
    // console.log(this.mChild);
    this.products = this.getProducts();
  }

  toggleViewProduct(){
    this.isProductSelected = !this.isProductSelected;
  }

  toggleEditProduct(){
    this.isProductEditMode = !this.isProductEditMode;
    this.isProductSelected = !this.isProductSelected;
  }

  toggleAddProduct(){
    this.isProductEditMode = !this.isProductEditMode;
    this.isAddProductMode = !this.isAddProductMode;
  }


  showProduct(data){
    this.isProductSelected = data.activeSelection;
    this.productToShow = this.products.find(this.findProducts, [data.productId]);
  }

  updateProduct(data){
    this.isProductEditMode = data.productEditSelection;
    // this.productToShow = this.products.find(this.findProducts, [data.productId]);
  }

  saveProduct(data){
    console.log(data.updatedstockvalue, typeof data.updatedprice);
    this.productToUpdate = this.products.find(this.findProducts, [data.productId]);
    this.productToUpdate.stock = parseInt(this.productToUpdate.stock) + parseInt(data.updatedstockvalue);
    this.productToUpdate.price = parseFloat(data.updatedprice);
    this.productToUpdate.description = data.updateddescription;
    this.productToUpdate.starRating = parseFloat(data.updatedstarrating);
    this.productToUpdate.imageUrlfrnt = data.updatedimageUrl;
    if (data.updatedname !== ''){
      this.productToUpdate.productName = data.updatedname;
    }
    this.toggleEditProduct();
  }

  createNewProduct(){         
    this.toggleAddProduct();
  }

  addNewProduct(data){
    
    // When adding a new record to a DB through an API, I probably would have pushed a single entry to an auto incrementing Dataset to prevent duplicate ids, but for the example I did this
     let prodFrame = {
      productId: this.products.length + 1,
      productName: data.updatedname,
      productCode: (data.updatedname.substring(0,4)).trim().toUpperCase() + '-' +(this.products.length + 1),
      price: parseFloat(data.updatedprice),
      description: data.updateddescription,
      starRating: data.updatedstarrating,
      imageUrl: data.updatedimageUrl,
      imageUrlfrnt: data.updatedimageUrl,
      inStock: ((data.updatedstockvalue>0)?true:false),
      stock: parseInt(data.updatedstockvalue)
    }
    this.products.push(prodFrame);

    this.isProductEditMode = data.productEditSelection;
    this.isAddProductMode = data.addNewProduct;
  }

  deleteSelectedProduct(data){
    // delete this.products[data.productId-1];

     this.products.forEach( (item, index) => {
       if(item.productId === data.productId) {
          this.products.splice(index,1)
       };
   });
    this.toggleViewProduct();
  }
  

  findProducts(p){
    return p.productId === this[0];
  }

  getProducts() {
    return [{
      productId: 1,
      productName: 'Google logo',
      productCode: 'GEO-312',
      price: 33.88,
      description: 'Graphical presentation of a google G',
      starRating: 4.2,
      imageUrl: 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/1023422?$456$',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/MIESAI-Mono-Black-1.jpg?v=1525115032',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/MIESAI-Mono-Black-4.jpg?v=1525115047',
      inStock: true,
      stock: 50
    }, {
      productId: 2,
      productName: 'Neck Tee',
      productCode: 'SEO-999',
      price: 99.99,
      description: 'Supply your own design to this low neck',
      starRating: 2.5,
      imageUrl: 'https://www.ikea.com/ca/en/images/products/socker-watering-can__0635850_PE697471_S5.JPG?f=xxl',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Riga-White-Ladies1.jpg?v=1585735913',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Riga-White-Ladies3.jpg?v=1585735913',
      inStock: false,
      stock: 0
    }, {
      productId: 3,
      productName: 'Polo',
      productCode: 'DDD-777',
      price: 73.44,
      description: 'Polo shirt',
      starRating: 4.4,
      imageUrl: 'https://www.brights.co.za/wp-content/uploads/2019/07/64283.png',
      imageUrlfrnt: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Mono-BalticWhite-W-front.jpg?v=1525114906',
      imageUrlBack: 'https://cdn.shopify.com/s/files/1/0862/2088/products/Mono-BalticWhite-W-back.jpg?v=1525114929',
      inStock: true,
      stock: 100
    }, {
      productId: 4,
      productName: 'Hello Summer',
      productCode: 'DDD-777',
      price: 72.22,
      description: 'Cartoon summer shirt',
      starRating: 4.4,
      imageUrl: 'https://www.brights.co.za/wp-content/uploads/2019/07/64283.png',
      imageUrlfrnt: 'https://bornlion.com/wp-content/uploads/2018/12/antony-joshua-born-lion-boxing-tshirt-front.jpg',
      imageUrlBack: 'https://bornlion.com/wp-content/uploads/2018/12/antony-joshua-born-lion-boxing-tshirt-back.jpg',
      inStock: false,
      stock: 0
    }];
  }
}
