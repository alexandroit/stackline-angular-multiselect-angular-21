import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { MultipleDropdownsExampleComponent } from './multiple-dropdowns.component';

@NgModule({
  declarations: [MultipleDropdownsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: MultipleDropdownsExampleComponent }])
  ]
})
export class MultipleDropdownsExampleModule {}
