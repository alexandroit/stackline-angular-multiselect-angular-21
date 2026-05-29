import { Component } from '@angular/core';
import { createGroupByExample } from './group-by.data';

@Component({
  standalone: false,
  selector: 'app-group-by-example',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByExampleComponent {
  example = createGroupByExample();
}
