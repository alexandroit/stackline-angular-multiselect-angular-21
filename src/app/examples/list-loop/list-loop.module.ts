import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ListLoopExampleComponent } from './list-loop.component';

@NgModule({
  declarations: [ListLoopExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ListLoopExampleComponent }])
  ]
})
export class ListLoopExampleModule {}
