import { Component } from '@angular/core';
import { createReactiveFormsExample } from './reactive-forms.data';

@Component({
  standalone: false,
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsExampleComponent {
  example = createReactiveFormsExample();
}
