import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, find, first, forkJoin, from, map, Observable, of, switchMap, throwError, toArray } from 'rxjs';
import { Post } from './models/post';
import { PostUpdate } from './models/postupdate';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {}

  constructor(private httpClient: HttpClient) { 
    getPostsWithUserId(id:number){
      return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
    switchMap(x=> from(x)), 
    find(x=>x.id==id), 
    switchMap(x=> this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/albums?userId=${x.id}`)))
    }
    
  }

