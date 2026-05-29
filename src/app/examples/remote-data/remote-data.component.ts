import { Component, OnInit } from '@angular/core';
import { createRemoteDataExample } from './remote-data.data';

@Component({
  standalone: false,
  selector: 'app-remote-data-example',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.scss']
})
export class RemoteDataExampleComponent implements OnInit {
  example = createRemoteDataExample();
  events = ['ready'];
  countriesMeta: any[] = [];
  remoteDataSelected: any[] = [];
  remoteDataSettings: any = {};

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
    this.countriesMeta = this.example.dropdowns[0].data;
    this.remoteDataSelected = this.example.dropdowns[0].model;
    this.remoteDataSettings = this.example.dropdowns[0].settings;
  }
}
