import { Component, OnInit } from '@angular/core';
import { createDynamicDataExample } from './dynamic-data.data';

@Component({
  standalone: false,
  selector: 'app-dynamic-data-example',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.scss']
})
export class DynamicDataExampleComponent implements OnInit {
  example = createDynamicDataExample();
  events = ['ready'];
  fruits: any[] = [];
  dynamicDataSelected: any[] = [];
  dynamicDataSettings: any = {};

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
    this.fruits = this.example.dropdowns[0].data;
    this.dynamicDataSelected = this.example.dropdowns[0].model;
    this.dynamicDataSettings = this.example.dropdowns[0].settings;
  }
}
