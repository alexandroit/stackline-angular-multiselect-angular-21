import { Component, OnInit } from '@angular/core';
import { createListLoopExample } from './list-loop.data';

@Component({
  standalone: false,
  selector: 'app-list-loop-example',
  templateUrl: './list-loop.component.html',
  styleUrls: ['./list-loop.component.scss']
})
export class ListLoopExampleComponent implements OnInit {
  example = createListLoopExample();
  events = ['ready'];
  countries: any[] = [];
  listLoopSelected: any[] = [];
  listLoopSettings: any = {};

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
    this.listLoopSelected = this.example.dropdowns[0].model;
    this.listLoopSettings = this.example.dropdowns[0].settings;
  }
}
