import { Component } from '@angular/core';
import { createEventsExample } from './events.data';

@Component({
  standalone: false,
  selector: 'app-events-example',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsExampleComponent {
  example = createEventsExample();
}
