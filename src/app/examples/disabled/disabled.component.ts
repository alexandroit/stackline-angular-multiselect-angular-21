import { Component } from '@angular/core';
import { createDisabledExample } from './disabled.data';

@Component({
  standalone: false,
  selector: 'app-disabled-example',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.scss']
})
export class DisabledExampleComponent {
  example = createDisabledExample();
}
