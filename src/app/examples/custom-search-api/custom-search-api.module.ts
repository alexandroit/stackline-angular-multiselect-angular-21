import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CustomSearchApiExampleComponent } from './custom-search-api.component';

@NgModule({
  declarations: [CustomSearchApiExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: CustomSearchApiExampleComponent }])
  ]
})
export class CustomSearchApiExampleModule {}
