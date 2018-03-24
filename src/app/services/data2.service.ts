import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable, Subject } from 'rxjs/Rx';

interface


@Injectable()
export class Data2Service {

    constructor() { }
}

export const DATA_2_PROVIDER: Array<any> = [
    { provide: Data2Service, useClass: Data2Service }
];