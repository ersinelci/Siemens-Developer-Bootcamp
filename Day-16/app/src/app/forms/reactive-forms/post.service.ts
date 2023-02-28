import { Injectable } from '@angular/core';
import { switchMap,filter,toArray, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }
  searchByProductName (name:string) {
    return this.client
    .get<any[]>('https://jsonplacholder.typicode.com/posts')
    .pipe(
      switchMap(((x) => from(x))),
      filter((x) => x.title.includes(name)),
      toArray()
          );
  }
}
