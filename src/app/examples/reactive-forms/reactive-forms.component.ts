import { Component, OnInit } from '@angular/core';
import { createReactiveFormsExample } from './reactive-forms.data';

@Component({
  standalone: false,
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsExampleComponent implements OnInit {
  example = createReactiveFormsExample();
  events = ['ready'];
  skills: any[] = [];
  reactiveFormsSelected: any[] = [];
  reactiveFormsSettings: any = {};

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
    this.skills = this.example.dropdowns[0].data;
    this.reactiveFormsSelected = this.example.dropdowns[0].model;
    this.reactiveFormsSettings = this.example.dropdowns[0].settings;
  }
}
