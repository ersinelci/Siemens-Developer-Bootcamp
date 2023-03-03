import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor/visitor.component';
import { PageViewsComponent } from './page-views/page-views.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    VisitorComponent,
    PageViewsComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
  AppRoutingModule  ]
})
export class AdminModule { }