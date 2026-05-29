import { Component, OnInit } from '@angular/core';
import { createEventsExample } from './events.data';

@Component({
  standalone: false,
  selector: 'app-events-example',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsExampleComponent implements OnInit {
  example = createEventsExample();
  events = ['ready'];
  countries: any[] = [];
  eventsSelected: any[] = [];
  eventsSettings: any = {};

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
    this.eventsSelected = this.example.dropdowns[0].model;
    this.eventsSettings = this.example.dropdowns[0].settings;
  }
}
