import { Component, OnInit } from '@angular/core';
import { createStylingExample } from './styling.data';

@Component({
  standalone: false,
  selector: 'app-styling-example',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingExampleComponent implements OnInit {
  readonly stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fstyling';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly htmlSnippet = "<angular-multiselect\n  [data]=\"templateItems\"\n  [(ngModel)]=\"stylingSelected\"\n  [settings]=\"stylingSettings\"\n  (onSelect)=\"record('select', $event)\"\n  (onDeSelect)=\"record('deselect', $event)\"\n  (onSelectAll)=\"record('selectAll', $event)\"\n  (onDeSelectAll)=\"record('deselectAll', $event)\"\n>\n  <c-badge>\n    <ng-template let-item=\"item\">\n      <span class=\"swatch-chip\"><span class=\"swatch\" [style.background]=\"item.color\"></span>{{ item.itemName }}</span>\n    </ng-template>\n  </c-badge>\n  <c-item>\n    <ng-template let-item=\"item\">\n      <span class=\"option-row\">\n        <span class=\"swatch\" [style.background]=\"item.color\"></span>\n        <span><strong>{{ item.itemName }}</strong><small>{{ item.detail }}</small></span>\n      </span>\n    </ng-template>\n  </c-item>\n</angular-multiselect>";
  readonly tsSnippet = "example = createStylingExample();\n\ntemplateItems = this.example.dropdowns[0].data;\nstylingSelected = this.example.dropdowns[0].model;\nstylingSettings = this.example.dropdowns[0].settings;\n\nrecord(type: string, value: any) {\n  const label = value && value.itemName ? value.itemName : JSON.stringify(value);\n  this.events.unshift(type + ': ' + label);\n}";
  readonly dataSnippet = "{\n  \"templateItems\": [\n    {\n      \"id\": 31,\n      \"itemName\": \"Primary\",\n      \"detail\": \"Main interface color\",\n      \"color\": \"#3f51b5\"\n    },\n    {\n      \"id\": 32,\n      \"itemName\": \"Success\",\n      \"detail\": \"Positive feedback state\",\n      \"color\": \"#2e7d32\"\n    },\n    {\n      \"id\": 33,\n      \"itemName\": \"Warning\",\n      \"detail\": \"Attention state\",\n      \"color\": \"#ed6c02\"\n    },\n    {\n      \"id\": 34,\n      \"itemName\": \"Danger\",\n      \"detail\": \"Destructive state\",\n      \"color\": \"#d32f2f\"\n    }\n  ],\n  \"stylingSelected\": [\n    {\n      \"id\": 32,\n      \"itemName\": \"Success\",\n      \"detail\": \"Positive feedback state\",\n      \"color\": \"#2e7d32\"\n    }\n  ],\n  \"stylingSettings\": {\n    \"enableSearchFilter\": true,\n    \"badgeShowLimit\": 3,\n    \"maxHeight\": 220,\n    \"text\": \"Styling\",\n    \"skin\": \"custom\"\n  }\n}";
  readonly scssSnippet = "@use '../../shared/example-layout';\n\n:host {\n  display: block;\n}";

  example = createStylingExample();
  activeSkin = 'classic';
  events = ['ready'];
  templateItems: any[] = [];
  stylingSelected: any[] = [];
  stylingSettings: any = {};

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
    this.templateItems = this.example.dropdowns[0].data;
    this.stylingSelected = this.example.dropdowns[0].model;
    this.stylingSettings = this.example.dropdowns[0].settings;
  }
}
