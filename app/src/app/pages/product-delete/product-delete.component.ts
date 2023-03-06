import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from 'src/app/states/product-state.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
constructor(private productState:ProductStateService){

}

productList: Product[] = [];
delete(): void {
  this.productState.productList = this.productState.productList.filter(x => x.id!= 2);
  this.productList = this.productState.productList;


}
}
