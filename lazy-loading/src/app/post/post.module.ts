import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:PostListComponent},
  {path:'post-list',component:PostListComponent},
  {path:'post-create',component:PostCreateComponent}
]


@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
