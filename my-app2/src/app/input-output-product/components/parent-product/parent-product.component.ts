import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductRepository } from '../../product-repository';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent {

  productRepository: ProductRepository;
  productList: ReadonlyArray<Product>;
  selectedProduct: Product | undefined;
  constructor(private productService:ProductService) {
    // this.productRepository = new ProductRepository();
    // this.productRepository.load();
    // this.productList = this.productRepository.getList();
    this.productList = this.productService.getAll();
  }
  
get  toggleProductDetail()
{
  return this.selectedProduct!=undefined;
}


  showDetail(productId: number) {

    this.selectedProduct = this.productRepository.getById(productId);
    

  }
}