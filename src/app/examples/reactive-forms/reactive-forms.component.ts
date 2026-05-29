import { Component, OnInit } from '@angular/core';
import { createReactiveFormsExample } from './reactive-forms.data';

@Component({
  standalone: false,
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Freactive-forms';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"skills\"\n  [(ngModel)]=\"reactiveFormsSelected\"\n  [settings]=\"reactiveFormsSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createReactiveFormsExample();\n\nskills = this.example.dropdowns[0].data;\nreactiveFormsSelected = this.example.dropdowns[0].model;\nreactiveFormsSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"skills\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Angular\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"JavaScript\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"HTML\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"CSS\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"ReactJS\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"HTML5\"\n    }\n  ],\n  \"reactiveFormsSelected\": [\n    {\n      \"id\": 6,\n      \"itemName\": \"HTML5\"\n    }\n  ],\n  \"reactiveFormsSettings\": {\n    \"enableSearchFilter\": true,\n    \"text\": \"Select Skills\",\n    \"badgeShowLimit\": 3,\n    \"skin\": \"material\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createReactiveFormsExample();
  activeSkin = 'classic';
  events = ['ready'];
  skills: any[] = [];
  reactiveFormsSelected: any[] = [];
  reactiveFormsSettings: any = {};

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
    this.reactiveFormsSelected = this.example.dropdowns[0].model;
    this.reactiveFormsSettings = this.example.dropdowns[0].settings;
  }
}
