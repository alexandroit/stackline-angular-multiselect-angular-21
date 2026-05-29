import { Component } from '@angular/core';
import { createSearchFilterExample } from './search-filter.data';

@Component({
  standalone: false,
  selector: 'app-search-filter-example',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterExampleComponent {
  example = createSearchFilterExample();
}
