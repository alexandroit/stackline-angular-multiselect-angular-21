import { Component, OnInit } from '@angular/core';
import { createBasicExample } from './basic.data';

@Component({
  standalone: false,
  selector: 'app-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicExampleComponent implements OnInit {
  example = createBasicExample();
  events = ['ready'];
  countries: any[] = [];
  basicSelected: any[] = [];
  basicSettings: any = {};

  ngOnInit() {
    this.syncDropdownReferences();
  }

  record(type: string, value: any) {
    let label = value && value.itemName ? value.itemName : JSON.stringify(value);
    if (value && value.length) {
      label = value.length + ' items';
    }
    this.events.unshift(type + ': ' + label);
    this.events = this.events.slice(0, 10);
  }

  private syncDropdownReferences() {
    this.countries = this.example.dropdowns[0].data;
    this.basicSelected = this.example.dropdowns[0].model;
    this.basicSettings = this.example.dropdowns[0].settings;
  }
}
