import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

interface ValueOperation extends Function {
    (values: number[]): number[];
}

const initialValues: number[] = [];

@Injectable()
export class DataService {

    values: Observable<number[]>;
    newValue: Subject<number> = new Subject<number>();
    updates: Subject<any> = new Subject<any>();

    //Action Streams
    create: Subject<number> = new Subject<number>();
    remove: Subject<number> = new Subject<number>();

    constructor() {
        this.values = this.updates.scan(
            (values: number[], operation: ValueOperation) => { return operation(values); }, initialValues
        )
            .publishReplay(1)
            .refCount();

        //Create action
        this.create.map(
            (value: number): ValueOperation => {
                return (values: number[]) => {
                    return values.concat(value);
                }
            }
        ).subscribe(this.updates);

        this.newValue.subscribe(this.create);

        //Remove action
        this.remove.map(
            (value: number): ValueOperation => {
                return (values: number[]) => {
                    return values.filter(x => x !== value);
                }
            }
        ).subscribe(this.updates);
    }

    addValue(value: number): void {
        this.newValue.next(value);
    }

    removeValue(value: number): void {
        this.remove.next(value);
    }
}

export const DATA_PROVIDER: Array<any> = [
    { provide: DataService, useClass: DataService }
];