import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { StylingExampleComponent } from './styling.component';

@NgModule({
  declarations: [StylingExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: StylingExampleComponent }])
  ]
})
export class StylingExampleModule {}
