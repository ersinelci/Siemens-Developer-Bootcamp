import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Person } from '../../models/person';


@Component({
  selector: 'app-child-person-detail',
  templateUrl: './child-person-detail.component.html',
  styleUrls: ['./child-person-detail.component.css']
})
export class ChildPersonDetailComponent {
  @Input() selectedPerson:Person | undefined;
  @Output() closeEventClick = new EventEmitter();

  close()
  {
    this.closeEventClick.emit();
  }
}
