import { Component } from '@angular/core';
import { createListLoopExample } from './list-loop.data';

@Component({
  standalone: false,
  selector: 'app-list-loop-example',
  templateUrl: './list-loop.component.html',
  styleUrls: ['./list-loop.component.scss']
})
export class ListLoopExampleComponent {
  example = createListLoopExample();
}
