import { Component, OnInit } from '@angular/core';
import { createLazyLoadingApiExample } from './lazy-loading-api.data';

@Component({
  standalone: false,
  selector: 'app-lazy-loading-api-example',
  templateUrl: './lazy-loading-api.component.html',
  styleUrls: ['./lazy-loading-api.component.scss']
})
export class LazyLoadingApiExampleComponent implements OnInit {
  example = createLazyLoadingApiExample();
  events = ['ready'];
  largeList: any[] = [];
  lazyLoadingApiSelected: any[] = [];
  lazyLoadingApiSettings: any = {};

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
    this.largeList = this.example.dropdowns[0].data;
    this.lazyLoadingApiSelected = this.example.dropdowns[0].model;
    this.lazyLoadingApiSettings = this.example.dropdowns[0].settings;
  }
}
