import { Component, OnInit } from '@angular/core';
import { createMultipleDropdownsExample } from './multiple-dropdowns.data';

@Component({
  standalone: false,
  selector: 'app-multiple-dropdowns-example',
  templateUrl: './multiple-dropdowns.component.html',
  styleUrls: ['./multiple-dropdowns.component.scss']
})
export class MultipleDropdownsExampleComponent implements OnInit {
  example = createMultipleDropdownsExample();
  events = ['ready'];
  countries: any[] = [];
  multipleDropdownsSelected: any[] = [];
  multipleDropdownsSettings: any = {};
  skills: any[] = [];
  multipleDropdownsSkillsSelected: any[] = [];
  multipleDropdownsSkillsSettings: any = {};

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
    this.multipleDropdownsSelected = this.example.dropdowns[0].model;
    this.multipleDropdownsSettings = this.example.dropdowns[0].settings;
    this.skills = this.example.dropdowns[1].data;
    this.multipleDropdownsSkillsSelected = this.example.dropdowns[1].model;
    this.multipleDropdownsSkillsSettings = this.example.dropdowns[1].settings;
  }
}
