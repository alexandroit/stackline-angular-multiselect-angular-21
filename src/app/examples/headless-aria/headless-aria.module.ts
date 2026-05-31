import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HeadlessAriaExampleComponent } from './headless-aria.component';

@NgModule({
  declarations: [HeadlessAriaExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: HeadlessAriaExampleComponent }])
  ]
})
export class HeadlessAriaExampleModule {}
