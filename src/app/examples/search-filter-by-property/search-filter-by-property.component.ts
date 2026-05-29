import { Component } from '@angular/core';
import { createSearchFilterByPropertyExample } from './search-filter-by-property.data';

@Component({
  standalone: false,
  selector: 'app-search-filter-by-property-example',
  templateUrl: './search-filter-by-property.component.html',
  styleUrls: ['./search-filter-by-property.component.scss']
})
export class SearchFilterByPropertyExampleComponent {
  example = createSearchFilterByPropertyExample();
}
