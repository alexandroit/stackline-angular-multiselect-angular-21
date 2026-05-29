import { Component } from '@angular/core';
import { createBasicExample } from './basic.data';

@Component({
  standalone: false,
  selector: 'app-basic-example',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicExampleComponent {
  example = createBasicExample();
}
