import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TemplatingExampleComponent } from './templating.component';

@NgModule({
  declarations: [TemplatingExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TemplatingExampleComponent }])
  ]
})
export class TemplatingExampleModule {}
