import { Component, OnInit } from '@angular/core';
import { createMethodsExample } from './methods.data';

@Component({
  standalone: false,
  selector: 'app-methods-example',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsExampleComponent implements OnInit {
  example = createMethodsExample();
  events = ['ready'];
  countries: any[] = [];
  methodsSelected: any[] = [];
  methodsSettings: any = {};

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
    this.methodsSelected = this.example.dropdowns[0].model;
    this.methodsSettings = this.example.dropdowns[0].settings;
  }
}
