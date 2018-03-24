export class Person {
    name: string;
    age: number;

    constructor(obj?: any) {
        this.name = obj && obj.name || null;
        this.age = obj && obj.age || null;
    }
}