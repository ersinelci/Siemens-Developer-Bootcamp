import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';


@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  @Input() selectedId:number  | undefined;
  @Input() personList: 

  ReadonlyArray<Person> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();
  

  showDetail(id: number) {
    this.selectedId = id;
    this.detailShowClick.emit(this.selectedId);
  }
  highlightRow(personId: number) {
    return this.selectedId == personId;
  }
  

}
