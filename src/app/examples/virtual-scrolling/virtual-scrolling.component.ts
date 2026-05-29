import { Component, OnInit } from '@angular/core';
import { createVirtualScrollingExample } from './virtual-scrolling.data';

@Component({
  standalone: false,
  selector: 'app-virtual-scrolling-example',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fvirtual-scrolling';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"largeList\"\n  [(ngModel)]=\"virtualScrollingSelected\"\n  [settings]=\"virtualScrollingSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n></angular-multiselect>";
  readonly tsSnippet = "example = createVirtualScrollingExample();\n\nlargeList = this.example.dropdowns[0].data;\nvirtualScrollingSelected = this.example.dropdowns[0].model;\nvirtualScrollingSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"largeList\": [\n    {\n      \"id\": 101,\n      \"itemName\": \"Item 01\"\n    },\n    {\n      \"id\": 102,\n      \"itemName\": \"Item 02\"\n    },\n    {\n      \"id\": 103,\n      \"itemName\": \"Item 03\"\n    },\n    {\n      \"id\": 104,\n      \"itemName\": \"Item 04\"\n    },\n    {\n      \"id\": 105,\n      \"itemName\": \"Item 05\"\n    },\n    {\n      \"id\": 106,\n      \"itemName\": \"Item 06\"\n    },\n    {\n      \"id\": 107,\n      \"itemName\": \"Item 07\"\n    },\n    {\n      \"id\": 108,\n      \"itemName\": \"Item 08\"\n    },\n    {\n      \"id\": 109,\n      \"itemName\": \"Item 09\"\n    },\n    {\n      \"id\": 110,\n      \"itemName\": \"Item 10\"\n    },\n    {\n      \"id\": 111,\n      \"itemName\": \"Item 11\"\n    },\n    {\n      \"id\": 112,\n      \"itemName\": \"Item 12\"\n    },\n    {\n      \"id\": 113,\n      \"itemName\": \"Item 13\"\n    },\n    {\n      \"id\": 114,\n      \"itemName\": \"Item 14\"\n    },\n    {\n      \"id\": 115,\n      \"itemName\": \"Item 15\"\n    },\n    {\n      \"id\": 116,\n      \"itemName\": \"Item 16\"\n    },\n    {\n      \"id\": 117,\n      \"itemName\": \"Item 17\"\n    },\n    {\n      \"id\": 118,\n      \"itemName\": \"Item 18\"\n    },\n    {\n      \"id\": 119,\n      \"itemName\": \"Item 19\"\n    },\n    {\n      \"id\": 120,\n      \"itemName\": \"Item 20\"\n    },\n    {\n      \"id\": 121,\n      \"itemName\": \"Item 21\"\n    },\n    {\n      \"id\": 122,\n      \"itemName\": \"Item 22\"\n    },\n    {\n      \"id\": 123,\n      \"itemName\": \"Item 23\"\n    },\n    {\n      \"id\": 124,\n      \"itemName\": \"Item 24\"\n    },\n    {\n      \"id\": 125,\n      \"itemName\": \"Item 25\"\n    },\n    {\n      \"id\": 126,\n      \"itemName\": \"Item 26\"\n    },\n    {\n      \"id\": 127,\n      \"itemName\": \"Item 27\"\n    },\n    {\n      \"id\": 128,\n      \"itemName\": \"Item 28\"\n    },\n    {\n      \"id\": 129,\n      \"itemName\": \"Item 29\"\n    },\n    {\n      \"id\": 130,\n      \"itemName\": \"Item 30\"\n    },\n    {\n      \"id\": 131,\n      \"itemName\": \"Item 31\"\n    },\n    {\n      \"id\": 132,\n      \"itemName\": \"Item 32\"\n    },\n    {\n      \"id\": 133,\n      \"itemName\": \"Item 33\"\n    },\n    {\n      \"id\": 134,\n      \"itemName\": \"Item 34\"\n    },\n    {\n      \"id\": 135,\n      \"itemName\": \"Item 35\"\n    },\n    {\n      \"id\": 136,\n      \"itemName\": \"Item 36\"\n    },\n    {\n      \"id\": 137,\n      \"itemName\": \"Item 37\"\n    },\n    {\n      \"id\": 138,\n      \"itemName\": \"Item 38\"\n    },\n    {\n      \"id\": 139,\n      \"itemName\": \"Item 39\"\n    },\n    {\n      \"id\": 140,\n      \"itemName\": \"Item 40\"\n    }\n  ],\n  \"virtualScrollingSelected\": [\n    {\n      \"id\": 104,\n      \"itemName\": \"Item 04\"\n    }\n  ],\n  \"virtualScrollingSettings\": {\n    \"enableSearchFilter\": true,\n    \"maxHeight\": 140,\n    \"badgeShowLimit\": 3,\n    \"text\": \"Virtual scrolling\",\n    \"skin\": \"classic\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createVirtualScrollingExample();
  activeSkin = 'classic';
  events = ['ready'];
  largeList: any[] = [];
  virtualScrollingSelected: any[] = [];
  virtualScrollingSettings: any = {};

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
    this.largeList = this.example.dropdowns[0].data;
    this.virtualScrollingSelected = this.example.dropdowns[0].model;
    this.virtualScrollingSettings = this.example.dropdowns[0].settings;
  }
}
