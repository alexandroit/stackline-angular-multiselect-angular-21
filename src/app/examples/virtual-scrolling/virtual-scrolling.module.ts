import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { VirtualScrollingExampleComponent } from './virtual-scrolling.component';

@NgModule({
  declarations: [VirtualScrollingExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: VirtualScrollingExampleComponent }])
  ]
})
export class VirtualScrollingExampleModule {}
