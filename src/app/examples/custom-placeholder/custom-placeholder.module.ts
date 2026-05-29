import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CustomPlaceholderExampleComponent } from './custom-placeholder.component';

@NgModule({
  declarations: [CustomPlaceholderExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: CustomPlaceholderExampleComponent }])
  ]
})
export class CustomPlaceholderExampleModule {}
