import { Component } from '@angular/core';
import { createDynamicDataExample } from './dynamic-data.data';

@Component({
  standalone: false,
  selector: 'app-dynamic-data-example',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.scss']
})
export class DynamicDataExampleComponent {
  example = createDynamicDataExample();
}
