import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DisabledExampleComponent } from './disabled.component';

@NgModule({
  declarations: [DisabledExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DisabledExampleComponent }])
  ]
})
export class DisabledExampleModule {}
