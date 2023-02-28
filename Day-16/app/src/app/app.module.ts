import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { TwoWayBindingComponent } from './forms/two-way-binding/two-way-binding.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { LoginComponent } from './forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TwoWayBindingComponent,
    ReactiveFormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
