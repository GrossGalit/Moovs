import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
  ]
})
export class ProductModule { }
