import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable, Subject } from 'rxjs/Rx';

interface PersonOperation extends Function {
    (persons: Person[]): Person[];
}

const initialPersons: Person[] = [];

@Injectable()
export class Data2Service {

    people: Observable<Person[]>;
    updates: Subject<any> = new Subject<any>();

    create: Subject<Person> = new Subject<Person>();

    constructor() {
        this.people =
            this.updates
                .scan((persons: Person[], operation: PersonOperation) => { return operation(persons); }, initialPersons)
                .publishReplay(1)
                .refCount();

        this.create.map(
            (person: Person): PersonOperation => {
                return (persons: Person[]) => {
                    return persons.concat(person);
                }
            }
        ).subscribe(this.updates);
    }

    addPerson(person: Person): void {
        this.create.next(person);
    }
}

export const DATA_2_PROVIDER: Array<any> = [
    { provide: Data2Service, useClass: Data2Service }
];