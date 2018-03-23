import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor() { }
}

export const DATA_PROVIDER: Array<any> = [
    { provide: DataService, useClass: DataService }
];