import { Component, OnInit } from '@angular/core';
import { createDynamicDataExample } from './dynamic-data.data';

@Component({
  standalone: false,
  selector: 'app-dynamic-data-example',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.scss']
})
export class DynamicDataExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fdynamic-data';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"fruits\"\n  [(ngModel)]=\"dynamicDataSelected\"\n  [settings]=\"dynamicDataSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createDynamicDataExample();\n\nfruits = this.example.dropdowns[0].data;\ndynamicDataSelected = this.example.dropdowns[0].model;\ndynamicDataSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"fruits\": [\n    {\n      \"id\": \"a\",\n      \"itemName\": \"Apple\"\n    },\n    {\n      \"id\": \"b\",\n      \"itemName\": \"Banana\"\n    },\n    {\n      \"id\": \"c\",\n      \"itemName\": \"Orange\"\n    },\n    {\n      \"id\": \"d\",\n      \"itemName\": \"Grape\"\n    }\n  ],\n  \"dynamicDataSelected\": [],\n  \"dynamicDataSettings\": {\n    \"enableSearchFilter\": true,\n    \"text\": \"Select Items\",\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createDynamicDataExample();
  activeSkin = 'classic';
  events = ['ready'];
  fruits: any[] = [];
  dynamicDataSelected: any[] = [];
  dynamicDataSettings: any = {};

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
    this.fruits = this.example.dropdowns[0].data;
    this.dynamicDataSelected = this.example.dropdowns[0].model;
    this.dynamicDataSettings = this.example.dropdowns[0].settings;
  }
}
