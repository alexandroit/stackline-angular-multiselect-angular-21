import { Component } from '@angular/core';
import { EXAMPLE_LINKS } from './example-links';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = EXAMPLE_LINKS;
}
