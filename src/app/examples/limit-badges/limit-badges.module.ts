import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LimitBadgesExampleComponent } from './limit-badges.component';

@NgModule({
  declarations: [LimitBadgesExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LimitBadgesExampleComponent }])
  ]
})
export class LimitBadgesExampleModule {}
