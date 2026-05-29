import { Component, OnInit } from '@angular/core';
import { createCustomPlaceholderExample } from './custom-placeholder.data';

@Component({
  standalone: false,
  selector: 'app-custom-placeholder-example',
  templateUrl: './custom-placeholder.component.html',
  styleUrls: ['./custom-placeholder.component.scss']
})
export class CustomPlaceholderExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fcustom-placeholder';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"countries\"\n  [(ngModel)]=\"customPlaceholderSelected\"\n  [settings]=\"customPlaceholderSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createCustomPlaceholderExample();\n\ncountries = this.example.dropdowns[0].data;\ncustomPlaceholderSelected = this.example.dropdowns[0].model;\ncustomPlaceholderSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"countries\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Brazil\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"Portugal\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"United States\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"Argentina\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"Germany\"\n    },\n    {\n      \"id\": 7,\n      \"itemName\": \"Mexico\"\n    },\n    {\n      \"id\": 8,\n      \"itemName\": \"Colombia\"\n    }\n  ],\n  \"customPlaceholderSelected\": [],\n  \"customPlaceholderSettings\": {\n    \"enableSearchFilter\": true,\n    \"text\": \"Choose markets\",\n    \"noDataLabel\": \"No markets found\",\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createCustomPlaceholderExample();
  activeSkin = 'classic';
  events = ['ready'];
  countries: any[] = [];
  customPlaceholderSelected: any[] = [];
  customPlaceholderSettings: any = {};

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
    this.customPlaceholderSelected = this.example.dropdowns[0].model;
    this.customPlaceholderSettings = this.example.dropdowns[0].settings;
  }
}
