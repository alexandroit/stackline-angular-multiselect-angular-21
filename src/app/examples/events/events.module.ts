import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { EventsExampleComponent } from './events.component';

@NgModule({
  declarations: [EventsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: EventsExampleComponent }])
  ]
})
export class EventsExampleModule {}
