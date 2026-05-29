import { Component, OnInit } from '@angular/core';
import { createGroupByExample } from './group-by.data';

@Component({
  standalone: false,
  selector: 'app-group-by-example',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByExampleComponent implements OnInit {
  example = createGroupByExample();
  events = ['ready'];
  groupedCountries: any[] = [];
  groupBySelected: any[] = [];
  groupBySettings: any = {};

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
    this.groupedCountries = this.example.dropdowns[0].data;
    this.groupBySelected = this.example.dropdowns[0].model;
    this.groupBySettings = this.example.dropdowns[0].settings;
  }
}
