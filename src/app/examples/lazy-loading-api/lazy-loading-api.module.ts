import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LazyLoadingApiExampleComponent } from './lazy-loading-api.component';

@NgModule({
  declarations: [LazyLoadingApiExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LazyLoadingApiExampleComponent }])
  ]
})
export class LazyLoadingApiExampleModule {}
