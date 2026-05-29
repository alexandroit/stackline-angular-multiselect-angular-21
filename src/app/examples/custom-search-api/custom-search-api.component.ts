import { Component, OnInit } from '@angular/core';
import { createCustomSearchApiExample } from './custom-search-api.data';

@Component({
  standalone: false,
  selector: 'app-custom-search-api-example',
  templateUrl: './custom-search-api.component.html',
  styleUrls: ['./custom-search-api.component.scss']
})
export class CustomSearchApiExampleComponent implements OnInit {
  example = createCustomSearchApiExample();
  events = ['ready'];
  countriesMeta: any[] = [];
  customSearchApiSelected: any[] = [];
  customSearchApiSettings: any = {};

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
    this.customSearchApiSelected = this.example.dropdowns[0].model;
    this.customSearchApiSettings = this.example.dropdowns[0].settings;
  }
}
