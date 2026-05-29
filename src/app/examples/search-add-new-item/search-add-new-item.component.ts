import { Component, OnInit } from '@angular/core';
import { createSearchAddNewItemExample } from './search-add-new-item.data';

@Component({
  standalone: false,
  selector: 'app-search-add-new-item-example',
  templateUrl: './search-add-new-item.component.html',
  styleUrls: ['./search-add-new-item.component.scss']
})
export class SearchAddNewItemExampleComponent implements OnInit {
  example = createSearchAddNewItemExample();
  events = ['ready'];
  countries: any[] = [];
  searchAddNewItemSelected: any[] = [];
  searchAddNewItemSettings: any = {};

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
    this.searchAddNewItemSelected = this.example.dropdowns[0].model;
    this.searchAddNewItemSettings = this.example.dropdowns[0].settings;
  }
}
