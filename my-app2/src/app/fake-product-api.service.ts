import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeProductAPIService {

  constructor() { }

  getAll(): string[]{
    return ["ahmet","mehmet","hasan"];
  }
}
