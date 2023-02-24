import { Component } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../person-service';

@Component({
  selector: 'app-parent-person',
  templateUrl: './parent-person.component.html',
  styleUrls: ['./parent-person.component.css']
})
export class ParentPersonComponent {
  personList: ReadonlyArray<Person>;
  selectedPerson: Person | undefined;
  constructor(
    private personService: PersonService,
  ) {
    this.personList = this.personService.getAll();

    console.log(personService.getAll());
  }

  get togglePersonDetail() {
    return this.selectedPerson != undefined;
  }

  showDetail(personId: number) {
    this.selectedPerson = this.personService.getById(personId);
  }
  close()
  {
    this.selectedPerson=undefined;
  }
}
