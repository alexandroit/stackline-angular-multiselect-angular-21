import { Component } from '@angular/core';
import { createVirtualScrollingExample } from './virtual-scrolling.data';

@Component({
  standalone: false,
  selector: 'app-virtual-scrolling-example',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.scss']
})
export class VirtualScrollingExampleComponent {
  example = createVirtualScrollingExample();
}
