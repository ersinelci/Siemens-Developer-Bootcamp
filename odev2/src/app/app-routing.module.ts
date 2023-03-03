import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageViewsComponent } from './admin/page-views/page-views.component';
import { StatusComponent } from './admin/status/status.component';
import { VisitorComponent } from './admin/visitor/visitor.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path: '',component:HomeComponent},
    {path: 'anasayfa', component:HomeComponent},
    {path: 'hakkimizda', component:AboutComponent},
    {path: 'iletisim', component:ContactComponent}
  ]},
  {path: 'admin', component:AdminLayoutComponent, children: [
    {path: 'ziyaretci', component: VisitorComponent},
    {path: 'durum', component: StatusComponent},
    {path: 'counter', component: PageViewsComponent}
  ]},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
