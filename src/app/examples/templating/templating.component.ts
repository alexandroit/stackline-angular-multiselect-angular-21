import { Component } from '@angular/core';
import { createTemplatingExample } from './templating.data';

@Component({
  standalone: false,
  selector: 'app-templating-example',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingExampleComponent {
  example = createTemplatingExample();
}
