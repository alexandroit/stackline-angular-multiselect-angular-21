import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AriaStateExampleComponent } from './aria-state.component';

@NgModule({
  declarations: [AriaStateExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AriaStateExampleComponent }])
  ]
})
export class AriaStateExampleModule {}
