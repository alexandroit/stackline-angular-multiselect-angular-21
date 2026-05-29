import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SingleSelectionExampleComponent } from './single-selection.component';

@NgModule({
  declarations: [SingleSelectionExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SingleSelectionExampleComponent }])
  ]
})
export class SingleSelectionExampleModule {}
