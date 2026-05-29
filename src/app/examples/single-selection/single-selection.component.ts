import { Component, OnInit } from '@angular/core';
import { createSingleSelectionExample } from './single-selection.data';

@Component({
  standalone: false,
  selector: 'app-single-selection-example',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.scss']
})
export class SingleSelectionExampleComponent implements OnInit {
  example = createSingleSelectionExample();
  events = ['ready'];
  countries: any[] = [];
  singleSelectionSelected: any[] = [];
  singleSelectionSettings: any = {};

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
    this.singleSelectionSelected = this.example.dropdowns[0].model;
    this.singleSelectionSettings = this.example.dropdowns[0].settings;
  }
}
