import { Component, OnInit } from '@angular/core';
import { createLimitBadgesExample } from './limit-badges.data';

@Component({
  standalone: false,
  selector: 'app-limit-badges-example',
  templateUrl: './limit-badges.component.html',
  styleUrls: ['./limit-badges.component.scss']
})
export class LimitBadgesExampleComponent implements OnInit {
  example = createLimitBadgesExample();
  events = ['ready'];
  longCountries: any[] = [];
  limitBadgesSelected: any[] = [];
  limitBadgesSettings: any = {};

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
    this.limitBadgesSelected = this.example.dropdowns[0].model;
    this.limitBadgesSettings = this.example.dropdowns[0].settings;
  }
}
