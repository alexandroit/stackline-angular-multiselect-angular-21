import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsExampleComponent } from './reactive-forms.component';

@NgModule({
  declarations: [ReactiveFormsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ReactiveFormsExampleComponent }])
  ]
})
export class ReactiveFormsExampleModule {}
