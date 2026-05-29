import { Component } from '@angular/core';
import { createCustomSearchApiExample } from './custom-search-api.data';

@Component({
  standalone: false,
  selector: 'app-custom-search-api-example',
  templateUrl: './custom-search-api.component.html',
  styleUrls: ['./custom-search-api.component.scss']
})
export class CustomSearchApiExampleComponent {
  example = createCustomSearchApiExample();
}
