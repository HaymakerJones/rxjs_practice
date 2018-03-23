import { Component, OnInit, Inject, } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {

  data: Observable<number[]>;

  constructor(@Inject(DataService) private ds) { }

  ngOnInit() {
    this.data = this.ds.values;
  }

  addValue(f: any) {
    this.ds.addValue(f.value);
  }

  removeValue(f: any) {
    this.ds.removeValue(f.value);
  }

}
