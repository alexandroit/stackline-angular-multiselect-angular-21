import { Component, OnInit } from '@angular/core';
import { createSearchFilterByPropertyExample } from './search-filter-by-property.data';

@Component({
  standalone: false,
  selector: 'app-search-filter-by-property-example',
  templateUrl: './search-filter-by-property.component.html',
  styleUrls: ['./search-filter-by-property.component.scss']
})
export class SearchFilterByPropertyExampleComponent implements OnInit {
  example = createSearchFilterByPropertyExample();
  events = ['ready'];
  countriesMeta: any[] = [];
  searchFilterByPropertySelected: any[] = [];
  searchFilterByPropertySettings: any = {};

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
    this.countriesMeta = this.example.dropdowns[0].data;
    this.searchFilterByPropertySelected = this.example.dropdowns[0].model;
    this.searchFilterByPropertySettings = this.example.dropdowns[0].settings;
  }
}
