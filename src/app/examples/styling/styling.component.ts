import { Component, OnInit } from '@angular/core';
import { EXAMPLE_SKINS } from '../../shared/example.model';
import { createStylingExample } from './styling.data';

@Component({
  standalone: false,
  selector: 'app-styling-example',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingExampleComponent implements OnInit {
  readonly skins = EXAMPLE_SKINS;

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
