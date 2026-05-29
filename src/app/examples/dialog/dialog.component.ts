import { Component } from '@angular/core';
import { createDialogExample } from './dialog.data';

@Component({
  standalone: false,
  selector: 'app-dialog-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogExampleComponent {
  example = createDialogExample();
}
