import { Component, OnInit } from '@angular/core';
import { createDialogExample } from './dialog.data';

@Component({
  standalone: false,
  selector: 'app-dialog-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fdialog';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"countries\"\n  [(ngModel)]=\"dialogSelected\"\n  [settings]=\"dialogSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createDialogExample();\n\ncountries = this.example.dropdowns[0].data;\ndialogSelected = this.example.dropdowns[0].model;\ndialogSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"countries\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Brazil\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"Portugal\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"United States\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"Argentina\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"Germany\"\n    },\n    {\n      \"id\": 7,\n      \"itemName\": \"Mexico\"\n    },\n    {\n      \"id\": 8,\n      \"itemName\": \"Colombia\"\n    }\n  ],\n  \"dialogSelected\": [\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    }\n  ],\n  \"dialogSettings\": {\n    \"enableSearchFilter\": true,\n    \"tagToBody\": true,\n    \"appendToBody\": true,\n    \"autoPosition\": false,\n    \"position\": \"bottom\",\n    \"maxHeight\": 180,\n    \"badgeShowLimit\": 2,\n    \"text\": \"Using inside dialog\",\n    \"skin\": \"material\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createDialogExample();
  activeSkin = 'classic';
  events = ['ready'];
  countries: any[] = [];
  dialogSelected: any[] = [];
  dialogSettings: any = {};

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
    this.dialogSelected = this.example.dropdowns[0].model;
    this.dialogSettings = this.example.dropdowns[0].settings;
  }
}
