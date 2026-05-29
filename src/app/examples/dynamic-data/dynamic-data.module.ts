import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DynamicDataExampleComponent } from './dynamic-data.component';

@NgModule({
  declarations: [DynamicDataExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DynamicDataExampleComponent }])
  ]
})
export class DynamicDataExampleModule {}
