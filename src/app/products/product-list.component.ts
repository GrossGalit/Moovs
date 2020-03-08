import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 100;
  imageMargin =2;
  showImage = false;
  errorMessage = '';
  /*each iproduct is one product*/
  products: IProduct[] = [];
  _listFilter = '';
  filteredProducts: IProduct[] = [];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
/*     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
 */  }

  constructor(private productService: ProductService) {
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //subscrives the products to the service before this coponent is created*/
    this.productService.getProducts().subscribe({
     /*next return from the service products is the array of iproduct that contains each product data*/
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
}

