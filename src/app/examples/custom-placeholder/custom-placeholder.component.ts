import { Component, OnInit } from '@angular/core';
import { createCustomPlaceholderExample } from './custom-placeholder.data';

@Component({
  standalone: false,
  selector: 'app-custom-placeholder-example',
  templateUrl: './custom-placeholder.component.html',
  styleUrls: ['./custom-placeholder.component.scss']
})
export class CustomPlaceholderExampleComponent implements OnInit {
  example = createCustomPlaceholderExample();
  events = ['ready'];
  countries: any[] = [];
  customPlaceholderSelected: any[] = [];
  customPlaceholderSettings: any = {};

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
    this.customPlaceholderSelected = this.example.dropdowns[0].model;
    this.customPlaceholderSettings = this.example.dropdowns[0].settings;
  }
}
