import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TemplateSlotsExampleComponent } from './template-slots.component';

@NgModule({
  declarations: [TemplateSlotsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TemplateSlotsExampleComponent }])
  ]
})
export class TemplateSlotsExampleModule {}
