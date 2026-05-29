import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { BasicExampleComponent } from './basic.component';

@NgModule({
  declarations: [BasicExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: BasicExampleComponent }])
  ]
})
export class BasicExampleModule {}
