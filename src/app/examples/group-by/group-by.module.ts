import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { GroupByExampleComponent } from './group-by.component';

@NgModule({
  declarations: [GroupByExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GroupByExampleComponent }])
  ]
})
export class GroupByExampleModule {}
