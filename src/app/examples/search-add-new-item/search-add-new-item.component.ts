import { Component } from '@angular/core';
import { createSearchAddNewItemExample } from './search-add-new-item.data';

@Component({
  standalone: false,
  selector: 'app-search-add-new-item-example',
  templateUrl: './search-add-new-item.component.html',
  styleUrls: ['./search-add-new-item.component.scss']
})
export class SearchAddNewItemExampleComponent {
  example = createSearchAddNewItemExample();
}
