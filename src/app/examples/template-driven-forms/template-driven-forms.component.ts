import { Component, OnInit } from '@angular/core';
import { createTemplateDrivenFormsExample } from './template-driven-forms.data';

@Component({
  standalone: false,
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsExampleComponent implements OnInit {
  example = createTemplateDrivenFormsExample();
  events = ['ready'];
  skills: any[] = [];
  templateDrivenFormsSelected: any[] = [];
  templateDrivenFormsSettings: any = {};

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
    this.templateDrivenFormsSelected = this.example.dropdowns[0].model;
    this.templateDrivenFormsSettings = this.example.dropdowns[0].settings;
  }
}
