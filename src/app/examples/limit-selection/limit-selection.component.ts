import { Component, OnInit } from '@angular/core';
import { createLimitSelectionExample } from './limit-selection.data';

@Component({
  standalone: false,
  selector: 'app-limit-selection-example',
  templateUrl: './limit-selection.component.html',
  styleUrls: ['./limit-selection.component.scss']
})
export class LimitSelectionExampleComponent implements OnInit {
  example = createLimitSelectionExample();
  events = ['ready'];
  longCountries: any[] = [];
  limitSelectionSelected: any[] = [];
  limitSelectionSettings: any = {};

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
    this.longCountries = this.example.dropdowns[0].data;
    this.limitSelectionSelected = this.example.dropdowns[0].model;
    this.limitSelectionSettings = this.example.dropdowns[0].settings;
  }
}
