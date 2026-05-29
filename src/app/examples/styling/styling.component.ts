import { Component } from '@angular/core';
import { createStylingExample } from './styling.data';

@Component({
  standalone: false,
  selector: 'app-styling-example',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingExampleComponent {
  example = createStylingExample();
}
