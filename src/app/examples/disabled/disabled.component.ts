import { Component, OnInit } from '@angular/core';
import { createDisabledExample } from './disabled.data';

@Component({
  standalone: false,
  selector: 'app-disabled-example',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.scss']
})
export class DisabledExampleComponent implements OnInit {
  example = createDisabledExample();
  events = ['ready'];
  countries: any[] = [];
  disabledSelected: any[] = [];
  disabledSettings: any = {};

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
    this.disabledSelected = this.example.dropdowns[0].model;
    this.disabledSettings = this.example.dropdowns[0].settings;
  }
}
