import { Component } from '@angular/core';
import { createMultipleDropdownsExample } from './multiple-dropdowns.data';

@Component({
  standalone: false,
  selector: 'app-multiple-dropdowns-example',
  templateUrl: './multiple-dropdowns.component.html',
  styleUrls: ['./multiple-dropdowns.component.scss']
})
export class MultipleDropdownsExampleComponent {
  example = createMultipleDropdownsExample();
}
