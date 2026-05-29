import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TemplateDrivenFormsExampleComponent } from './template-driven-forms.component';

@NgModule({
  declarations: [TemplateDrivenFormsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: TemplateDrivenFormsExampleComponent }])
  ]
})
export class TemplateDrivenFormsExampleModule {}
