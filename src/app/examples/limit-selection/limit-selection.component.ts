import { Component } from '@angular/core';
import { createLimitSelectionExample } from './limit-selection.data';

@Component({
  standalone: false,
  selector: 'app-limit-selection-example',
  templateUrl: './limit-selection.component.html',
  styleUrls: ['./limit-selection.component.scss']
})
export class LimitSelectionExampleComponent {
  example = createLimitSelectionExample();
}
