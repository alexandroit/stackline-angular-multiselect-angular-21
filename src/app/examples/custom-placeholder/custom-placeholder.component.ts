import { Component } from '@angular/core';
import { createCustomPlaceholderExample } from './custom-placeholder.data';

@Component({
  standalone: false,
  selector: 'app-custom-placeholder-example',
  templateUrl: './custom-placeholder.component.html',
  styleUrls: ['./custom-placeholder.component.scss']
})
export class CustomPlaceholderExampleComponent {
  example = createCustomPlaceholderExample();
}
