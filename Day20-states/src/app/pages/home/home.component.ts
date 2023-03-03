import { Component } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';
import { user, UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
user?: user;
    constructor(UserStateService: UserStateService,private productStateService: ProductStateService){
     this.user = UserStateService.currentUser; 
    }

ngOnDestroy():void {
  console.log('home destroy component')
}

addProduct(){
this.productStateService.productList.push({id:1, name: "kalem 1", price:100, color: "kırmızı"})
}
}
