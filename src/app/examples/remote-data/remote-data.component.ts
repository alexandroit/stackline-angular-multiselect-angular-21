import { Component, OnInit } from '@angular/core';
import { createRemoteDataExample } from './remote-data.data';

@Component({
  standalone: false,
  selector: 'app-remote-data-example',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.scss']
})
export class RemoteDataExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fremote-data';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"countriesMeta\"\n  [(ngModel)]=\"remoteDataSelected\"\n  [settings]=\"remoteDataSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createRemoteDataExample();\n\ncountriesMeta = this.example.dropdowns[0].data;\nremoteDataSelected = this.example.dropdowns[0].model;\nremoteDataSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"countriesMeta\": [\n    {\n      \"id\": 1,\n      \"name\": \"Brazil\",\n      \"itemName\": \"Brazil\",\n      \"capital\": \"Brasilia\",\n      \"region\": \"Americas\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Canada\",\n      \"itemName\": \"Canada\",\n      \"capital\": \"Ottawa\",\n      \"region\": \"Americas\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Portugal\",\n      \"itemName\": \"Portugal\",\n      \"capital\": \"Lisbon\",\n      \"region\": \"Europe\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Germany\",\n      \"itemName\": \"Germany\",\n      \"capital\": \"Berlin\",\n      \"region\": \"Europe\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Mexico\",\n      \"itemName\": \"Mexico\",\n      \"capital\": \"Mexico City\",\n      \"region\": \"Americas\"\n    }\n  ],\n  \"remoteDataSelected\": [\n    {\n      \"id\": 1,\n      \"name\": \"Brazil\",\n      \"itemName\": \"Brazil\",\n      \"capital\": \"Brasilia\",\n      \"region\": \"Americas\"\n    }\n  ],\n  \"remoteDataSettings\": {\n    \"enableSearchFilter\": true,\n    \"labelKey\": \"name\",\n    \"groupBy\": \"region\",\n    \"text\": \"Data from remote API\",\n    \"skin\": \"material\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createRemoteDataExample();
  activeSkin = 'classic';
  events = ['ready'];
  countriesMeta: any[] = [];
  remoteDataSelected: any[] = [];
  remoteDataSettings: any = {};

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
    this.countriesMeta = this.example.dropdowns[0].data;
    this.remoteDataSelected = this.example.dropdowns[0].model;
    this.remoteDataSettings = this.example.dropdowns[0].settings;
  }
}
