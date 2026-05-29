import { Component } from '@angular/core';
import { createLazyLoadingApiExample } from './lazy-loading-api.data';

@Component({
  standalone: false,
  selector: 'app-lazy-loading-api-example',
  templateUrl: './lazy-loading-api.component.html',
  styleUrls: ['./lazy-loading-api.component.scss']
})
export class LazyLoadingApiExampleComponent {
  example = createLazyLoadingApiExample();
}
