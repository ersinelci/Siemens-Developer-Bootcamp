import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildProductComponent } from './input-output/components/child-product/child-product.component';
import { ChildPersonDetailComponent } from './input-output/components/child-person-detail/child-person-detail.component';
import { ParentPersonComponent} from './input-output/components/parent-person/parent-person.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentPersonComponent,
    ChildProductComponent,
    ChildPersonDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
