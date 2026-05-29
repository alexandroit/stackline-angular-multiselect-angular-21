import { Component } from '@angular/core';
import { createSingleSelectionExample } from './single-selection.data';

@Component({
  standalone: false,
  selector: 'app-single-selection-example',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.scss']
})
export class SingleSelectionExampleComponent {
  example = createSingleSelectionExample();
}
