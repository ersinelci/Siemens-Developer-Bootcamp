import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrdersComponent } from './orders.component';
import { StatusComponent } from './status/status.component';
import { Status2Component } from './status2/status2.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OrdersComponent },
 {path: 'status', component: StatusComponent},
 {path: 'status2', component: Status2Component}];
 
@NgModule({
  declarations: [
    OrdersComponent,
    StatusComponent,
    Status2Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class OrdersModule { }
