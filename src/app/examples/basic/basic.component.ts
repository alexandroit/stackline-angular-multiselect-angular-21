import { Component, OnInit } from '@angular/core';
import { createBasicExample } from './basic.data';

@Component({
  standalone: false,
  selector: 'app-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fbasic';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"countries\"\n  [(ngModel)]=\"basicSelected\"\n  [settings]=\"basicSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createBasicExample();\n\ncountries = this.example.dropdowns[0].data;\nbasicSelected = this.example.dropdowns[0].model;\nbasicSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"countries\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Brazil\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"Portugal\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"United States\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"Argentina\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"Germany\"\n    },\n    {\n      \"id\": 7,\n      \"itemName\": \"Mexico\"\n    },\n    {\n      \"id\": 8,\n      \"itemName\": \"Colombia\"\n    }\n  ],\n  \"basicSelected\": [\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    }\n  ],\n  \"basicSettings\": {\n    \"enableSearchFilter\": false,\n    \"text\": \"Basic multi\",\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createBasicExample();
  activeSkin = 'classic';
  events = ['ready'];
  countries: any[] = [];
  basicSelected: any[] = [];
  basicSettings: any = {};

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
    this.countries = this.example.dropdowns[0].data;
    this.basicSelected = this.example.dropdowns[0].model;
    this.basicSettings = this.example.dropdowns[0].settings;
  }
}
