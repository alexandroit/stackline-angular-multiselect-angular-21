import { Component, OnInit } from '@angular/core';
import { createTemplatingExample } from './templating.data';

@Component({
  standalone: false,
  selector: 'app-templating-example',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingExampleComponent implements OnInit {
  example = createTemplatingExample();
  events = ['ready'];
  templateItems: any[] = [];
  templatingSelected: any[] = [];
  templatingSettings: any = {};

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
    this.templateItems = this.example.dropdowns[0].data;
    this.templatingSelected = this.example.dropdowns[0].model;
    this.templatingSettings = this.example.dropdowns[0].settings;
  }
}
