import { Component, OnInit } from '@angular/core';
import { createTemplateDrivenFormsExample } from './template-driven-forms.data';

@Component({
  standalone: false,
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Ftemplate-driven-forms';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"skills\"\n  [(ngModel)]=\"templateDrivenFormsSelected\"\n  [settings]=\"templateDrivenFormsSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createTemplateDrivenFormsExample();\n\nskills = this.example.dropdowns[0].data;\ntemplateDrivenFormsSelected = this.example.dropdowns[0].model;\ntemplateDrivenFormsSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"skills\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Angular\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"JavaScript\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"HTML\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"CSS\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"ReactJS\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"HTML5\"\n    }\n  ],\n  \"templateDrivenFormsSelected\": [],\n  \"templateDrivenFormsSettings\": {\n    \"enableSearchFilter\": true,\n    \"text\": \"Select Skills\",\n    \"badgeShowLimit\": 3,\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createTemplateDrivenFormsExample();
  activeSkin = 'classic';
  events = ['ready'];
  skills: any[] = [];
  templateDrivenFormsSelected: any[] = [];
  templateDrivenFormsSettings: any = {};

  ngOnInit() {
    this.syncDropdownReferences();
    this.activeSkin = this.example.dropdowns[0]?.settings?.skin || 'classic';
  }

  switchSkin(skin: string) {
    this.activeSkin = skin;
    this.example.dropdowns.forEach((dropdown) => {
      dropdown.settings = { ...dropdown.settings, skin, text: 'Skin ' + this.skinLabel(skin) };
    });
    this.syncDropdownReferences();
    this.record('skin', skin);
  }

  skinLabel(skin: string) {
    return skin.charAt(0).toUpperCase() + skin.slice(1);
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
