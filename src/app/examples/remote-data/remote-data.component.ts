import { Component } from '@angular/core';
import { createRemoteDataExample } from './remote-data.data';

@Component({
  standalone: false,
  selector: 'app-remote-data-example',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.scss']
})
export class RemoteDataExampleComponent {
  example = createRemoteDataExample();
}
