import { Component } from '@angular/core';
import { createMethodsExample } from './methods.data';

@Component({
  standalone: false,
  selector: 'app-methods-example',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsExampleComponent {
  example = createMethodsExample();
}
