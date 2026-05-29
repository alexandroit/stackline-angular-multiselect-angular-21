import { Component, OnInit } from '@angular/core';
import { createSearchFilterExample } from './search-filter.data';

@Component({
  standalone: false,
  selector: 'app-search-filter-example',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterExampleComponent implements OnInit {
  example = createSearchFilterExample();
  events = ['ready'];
  countries: any[] = [];
  searchFilterSelected: any[] = [];
  searchFilterSettings: any = {};

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
    this.searchFilterSelected = this.example.dropdowns[0].model;
    this.searchFilterSettings = this.example.dropdowns[0].settings;
  }
}
