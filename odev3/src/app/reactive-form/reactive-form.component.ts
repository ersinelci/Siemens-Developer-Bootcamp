import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CategoryMenu } from '../models/category';
import { PublishMenu } from '../models/publish';
import { Products } from '../models/products';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})


export class ReactiveFormComponent {
newProduct: Products | undefined = undefined;
public productForm = this.formBuilder.group(
  {
    name: [""],
    price: [""],
    category: [""],
    publish: [""]
  }
);
name = new FormControl();
price = new FormControl();
kalem = new FormControl();

constructor(private formBuilder:FormBuilder){}
productList = [];
categoryMenuList: CategoryMenu[] = [
  { id: 1, text: 'Kalem' },
  { id: 2, text: 'Defter' },
  { id: 3, text: 'Silgi' },
];  
publishMenulist: PublishMenu[] = [
  { id: 1, text: '3 ay' },
  { id: 2, text: '6 ay' },
  { id: 3, text: '9 ay' },
];

submit() {

  this.newProduct = this.productForm.value as Products;
  this.productList.push(this.newProduct)
  console.log(this.productList);
}

}
