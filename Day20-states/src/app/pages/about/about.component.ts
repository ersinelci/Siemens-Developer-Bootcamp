import { Component } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnDestroy():void {
    console.log('about destroy component')
  }

  constructor(public productStateService: ProductStateService){
    // home component'daki fonksiyondan alınan array burada çalışsın diye yaptık.
  }

}
