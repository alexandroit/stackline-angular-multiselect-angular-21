import { Component, OnInit } from '@angular/core';
import { createLimitSelectionExample } from './limit-selection.data';

@Component({
  standalone: false,
  selector: 'app-limit-selection-example',
  templateUrl: './limit-selection.component.html',
  styleUrls: ['./limit-selection.component.scss']
})
export class LimitSelectionExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Flimit-selection';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"longCountries\"\n  [(ngModel)]=\"limitSelectionSelected\"\n  [settings]=\"limitSelectionSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createLimitSelectionExample();\n\nlongCountries = this.example.dropdowns[0].data;\nlimitSelectionSelected = this.example.dropdowns[0].model;\nlimitSelectionSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"longCountries\": [\n    {\n      \"id\": 11,\n      \"itemName\": \"Federative Republic of Brazil\"\n    },\n    {\n      \"id\": 12,\n      \"itemName\": \"United States of America\"\n    },\n    {\n      \"id\": 13,\n      \"itemName\": \"United Kingdom of Great Britain and Northern Ireland\"\n    },\n    {\n      \"id\": 14,\n      \"itemName\": \"Portuguese Republic\"\n    },\n    {\n      \"id\": 15,\n      \"itemName\": \"Canada\"\n    },\n    {\n      \"id\": 16,\n      \"itemName\": \"Argentina\"\n    }\n  ],\n  \"limitSelectionSelected\": [\n    {\n      \"id\": 11,\n      \"itemName\": \"Federative Republic of Brazil\"\n    },\n    {\n      \"id\": 12,\n      \"itemName\": \"United States of America\"\n    }\n  ],\n  \"limitSelectionSettings\": {\n    \"enableSearchFilter\": true,\n    \"limitSelection\": 2,\n    \"badgeShowLimit\": 2,\n    \"text\": \"Limit selection\",\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createLimitSelectionExample();
  activeSkin = 'classic';
  events = ['ready'];
  longCountries: any[] = [];
  limitSelectionSelected: any[] = [];
  limitSelectionSettings: any = {};

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
    this.longCountries = this.example.dropdowns[0].data;
    this.limitSelectionSelected = this.example.dropdowns[0].model;
    this.limitSelectionSettings = this.example.dropdowns[0].settings;
  }
}
