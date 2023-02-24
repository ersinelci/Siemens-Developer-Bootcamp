import { Injectable } from "@angular/core";
import { Person } from "./models/person";

@Injectable({
    providedIn: 'root',
  })
export class PersonRepository {
    private personList: Person[] = [];
    load() {
        this.personList.push(
            {
                id: 1,
                name: "Steve",
                surname: "Jobs",
                job: "esnaf"
            }
        );
        this.personList.push(
            {
                id: 2,
                name: "Bill",
                surname: "Gates",
                job: "Yazılım Geliştiricisi"
            }
        );
    }
    constructor() {
        this.load();
    }
    getList(): ReadonlyArray<Person> {
        return this.personList as ReadonlyArray<Person>;
    }

    getById(id: number) {
        return this.personList.find((x) => x.id == id);
    }

    add(newPerson: Person) {
        this.personList.push(newPerson);
    }
    update(updatePerson: Person) {
        let personIndexToUpdate = this.personList.findIndex(
            (x) => x.id == updatePerson.id
        );

        this.personList[personIndexToUpdate].name = updatePerson.name;
        this.personList[personIndexToUpdate].surname = updatePerson.surname;
        this.personList[personIndexToUpdate].job = updatePerson.job;
    }
    delete(id: number) {
        
        this.personList = this.personList.filter((x) => x.id != id);
    }
}
