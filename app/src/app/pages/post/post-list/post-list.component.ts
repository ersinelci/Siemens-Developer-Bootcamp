import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  postList:Post[];
  
  constructor(private router:Router,private postService:PostService){
    this.postList = [];
  }

  ngOnInit():void {
    this.postService.getAll().subscribe((x)=> {
      this.postList = x;
    })
  }
  
  gotoPostCreate(){
    this.router.navigateByUrl('/post-create')
  }

  gotoPostCreate2(){
    this.router.navigate(['/post-create']);
  }

  gotoPostDetail(id:number){
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate(['/post-detail',id]) 
  }

}
