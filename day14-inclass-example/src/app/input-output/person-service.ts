import { Injectable } from "@angular/core";
import { Person } from "./models/person";
import { PersonRepository } from "./person-repository";
@Injectable({
  providedIn: 'root',
})
export class PersonService {
    constructor(private personRepository:PersonRepository){}
    getAll(): ReadonlyArray<Person> {
        let personList: Person[] = [];
    
        this.personRepository.getList().forEach((x) => {
            personList.push({
            id: x.id,
            name: x.name.toUpperCase(),
            surname:x.surname.toUpperCase(),
            job:x.job

          });
        });
    
        return personList as ReadonlyArray<Person>;
      }
    
      getById(id: number): Person | undefined {
        return this.personRepository.getById(id);
      }
    
      add(person: Person) {
        this.personRepository.add(person);
      }
    
      update(person: Person) {
        this.personRepository.update(person);
      }
      delete(id: number) {
        this.personRepository.delete(id);
      }

}
