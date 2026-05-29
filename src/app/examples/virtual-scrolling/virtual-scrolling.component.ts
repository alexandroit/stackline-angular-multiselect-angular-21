import { Component, OnInit } from '@angular/core';
import { createVirtualScrollingExample } from './virtual-scrolling.data';

@Component({
  standalone: false,
  selector: 'app-virtual-scrolling-example',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingExampleComponent implements OnInit {
  example = createVirtualScrollingExample();
  events = ['ready'];
  largeList: any[] = [];
  virtualScrollingSelected: any[] = [];
  virtualScrollingSettings: any = {};

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
    this.largeList = this.example.dropdowns[0].data;
    this.virtualScrollingSelected = this.example.dropdowns[0].model;
    this.virtualScrollingSettings = this.example.dropdowns[0].settings;
  }
}
