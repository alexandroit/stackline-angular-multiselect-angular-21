import { Component, OnInit } from '@angular/core';
import { createMultipleDropdownsExample } from './multiple-dropdowns.data';

@Component({
  standalone: false,
  selector: 'app-multiple-dropdowns-example',
  templateUrl: './multiple-dropdowns.component.html',
  styleUrls: ['./multiple-dropdowns.component.scss']
})
export class MultipleDropdownsExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fmultiple-dropdowns';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"countries\"\n  [(ngModel)]=\"multipleDropdownsSelected\"\n  [settings]=\"multipleDropdownsSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>\n\n<angular-multiselect\n  [data]=\"skills\"\n  [(ngModel)]=\"multipleDropdownsSkillsSelected\"\n  [settings]=\"multipleDropdownsSkillsSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createMultipleDropdownsExample();\n\ncountries = this.example.dropdowns[0].data;\nmultipleDropdownsSelected = this.example.dropdowns[0].model;\nmultipleDropdownsSettings = this.example.dropdowns[0].settings;\n\nskills = this.example.dropdowns[1].data;\nmultipleDropdownsSkillsSelected = this.example.dropdowns[1].model;\nmultipleDropdownsSkillsSettings = this.example.dropdowns[1].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"countries\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Brazil\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"Canada\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"Portugal\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"United States\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"Argentina\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"Germany\"\n    },\n    {\n      \"id\": 7,\n      \"itemName\": \"Mexico\"\n    },\n    {\n      \"id\": 8,\n      \"itemName\": \"Colombia\"\n    }\n  ],\n  \"multipleDropdownsSelected\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Brazil\"\n    }\n  ],\n  \"multipleDropdownsSettings\": {\n    \"enableSearchFilter\": true,\n    \"badgeShowLimit\": 2,\n    \"text\": \"Multiple dropdowns\",\n    \"skin\": \"classic\"\n  },\n  \"skills\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Angular\"\n    },\n    {\n      \"id\": 2,\n      \"itemName\": \"JavaScript\"\n    },\n    {\n      \"id\": 3,\n      \"itemName\": \"HTML\"\n    },\n    {\n      \"id\": 4,\n      \"itemName\": \"CSS\"\n    },\n    {\n      \"id\": 5,\n      \"itemName\": \"ReactJS\"\n    },\n    {\n      \"id\": 6,\n      \"itemName\": \"HTML5\"\n    }\n  ],\n  \"multipleDropdownsSkillsSelected\": [\n    {\n      \"id\": 1,\n      \"itemName\": \"Angular\"\n    }\n  ],\n  \"multipleDropdownsSkillsSettings\": {\n    \"text\": \"Select Skills\",\n    \"skin\": \"material\",\n    \"enableSearchFilter\": true,\n    \"badgeShowLimit\": 2\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createMultipleDropdownsExample();
  activeSkin = 'classic';
  events = ['ready'];
  countries: any[] = [];
  multipleDropdownsSelected: any[] = [];
  multipleDropdownsSettings: any = {};
  skills: any[] = [];
  multipleDropdownsSkillsSelected: any[] = [];
  multipleDropdownsSkillsSettings: any = {};

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
    this.multipleDropdownsSelected = this.example.dropdowns[0].model;
    this.multipleDropdownsSettings = this.example.dropdowns[0].settings;
    this.skills = this.example.dropdowns[1].data;
    this.multipleDropdownsSkillsSelected = this.example.dropdowns[1].model;
    this.multipleDropdownsSkillsSettings = this.example.dropdowns[1].settings;
  }
}
