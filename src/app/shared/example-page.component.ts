import { Component, Input } from '@angular/core';
import { DropdownExample, DropdownInstance } from './example.model';

@Component({
  standalone: false,
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent {
  @Input() example!: DropdownExample;

  readonly stackBlitzBaseUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21';
  readonly availableSkins = ['classic', 'material', 'dark', 'custom', 'brand'];
  activeSkin = 'classic';
  events = ['ready'];

  ngOnInit() {
    this.activeSkin = this.example.dropdowns[0]?.settings?.skin || 'classic';
  }

  stackBlitzUrl(slug: string) {
    return this.stackBlitzBaseUrl + '?startScript=start&initialpath=%2F' + encodeURIComponent(slug);
  }

  switchSkin(skin: string) {
    this.activeSkin = skin;
    this.example.dropdowns.forEach((dropdown) => {
      dropdown.settings = { ...dropdown.settings, skin, text: 'Skin ' + this.skinLabel(skin) };
    });
    this.record('skin', skin);
  }

  skinLabel(skin: string) {
    return skin.charAt(0).toUpperCase() + skin.slice(1);
  }

  htmlCode(dropdown: DropdownInstance) {
    const lines = [
      '<angular-multiselect',
      '  [data]="' + dropdown.dataName + '"',
      '  [(ngModel)]="' + dropdown.modelName + '"',
      '  [settings]="' + dropdown.settingsName + '"',
      '  (onSelect)="record(\'select\', $event)"',
      '  (onDeSelect)="record(\'deselect\', $event)"'
    ];

    if (!dropdown.settings.singleSelection && !dropdown.settings.disabled) {
      lines.push('  (onSelectAll)="record(\'selectAll\', $event)"');
      lines.push('  (onDeSelectAll)="record(\'deselectAll\', $event)"');
    }

    if (!dropdown.template) {
      lines.push('></angular-multiselect>');
      return lines.join('\n');
    }

    lines.push('>');
    lines.push('  <c-badge>...</c-badge>');
    lines.push('  <c-item>...</c-item>');
    lines.push('</angular-multiselect>');
    return lines.join('\n');
  }

  tsCode(dropdown: DropdownInstance) {
    return dropdown.modelName + ' = ' + this.tsArray(dropdown.model) + ';\n\n' +
      dropdown.settingsName + ' = makeSettings(\'' + dropdown.settings.skin + '\', \'' + dropdown.settings.text + '\', ' + dropdown.optionsText + ');';
  }

  jsonCode() {
    return JSON.stringify({ slug: this.example.slug, dropdowns: this.example.dropdowns }, null, 2);
  }

  tsArray(items: any[]) {
    if (!items || !items.length) {
      return '[]';
    }
    return '[\n' + items.map((item) => '  ' + this.tsObject(item)).join(',\n') + '\n]';
  }

  tsObject(item: any) {
    return '{ ' + Object.keys(item).map((key) => key + ': ' + this.tsValue(item[key])).join(', ') + ' }';
  }

  tsValue(value: any) {
    if (typeof value === 'string') {
      return '\'' + value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + '\'';
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    if (value && typeof value === 'object') {
      return this.tsObject(value);
    }
    return 'null';
  }

  record(type: string, value: any) {
    let label = value && value.itemName ? value.itemName : JSON.stringify(value);
    if (value && value.length) {
      label = value.length + ' items';
    }
    this.events.unshift(type + ': ' + label);
    this.events = this.events.slice(0, 10);
  }
}
