import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LimitSelectionExampleComponent } from './limit-selection.component';

@NgModule({
  declarations: [LimitSelectionExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LimitSelectionExampleComponent }])
  ]
})
export class LimitSelectionExampleModule {}
