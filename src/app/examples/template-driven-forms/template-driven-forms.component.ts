import { Component } from '@angular/core';
import { createTemplateDrivenFormsExample } from './template-driven-forms.data';

@Component({
  standalone: false,
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsExampleComponent {
  example = createTemplateDrivenFormsExample();
}
