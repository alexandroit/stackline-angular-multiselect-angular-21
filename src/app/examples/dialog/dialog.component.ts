import { Component, OnInit } from '@angular/core';
import { createDialogExample } from './dialog.data';

@Component({
  standalone: false,
  selector: 'app-dialog-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogExampleComponent implements OnInit {
  example = createDialogExample();
  events = ['ready'];
  countries: any[] = [];
  dialogSelected: any[] = [];
  dialogSettings: any = {};

  ngOnInit() {
    this.syncDropdownReferences();
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
