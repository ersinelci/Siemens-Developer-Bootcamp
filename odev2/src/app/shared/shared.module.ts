import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';




@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
