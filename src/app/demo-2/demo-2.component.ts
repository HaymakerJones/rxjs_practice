import { Component, OnInit, Inject } from '@angular/core';
import { Data2Service } from '../services/data2.service';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.css']
})
export class Demo2Component implements OnInit {

  personList: Observable<Person>;

  constructor(@Inject(Data2Service) private d2s) { }

  ngOnInit() {
    this.personList = this.d2s.people;
  }

  addPerson(name: any, age: any) {
    this.d2s.addPerson(new Person({
      name: name.value,
      age: age.value
    }));
  }
}
