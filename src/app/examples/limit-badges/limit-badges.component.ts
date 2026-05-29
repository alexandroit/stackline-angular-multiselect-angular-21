import { Component } from '@angular/core';
import { createLimitBadgesExample } from './limit-badges.data';

@Component({
  standalone: false,
  selector: 'app-limit-badges-example',
  templateUrl: './limit-badges.component.html',
  styleUrls: ['./limit-badges.component.scss']
})
export class LimitBadgesExampleComponent {
  example = createLimitBadgesExample();
}
