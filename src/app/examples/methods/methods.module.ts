import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { MethodsExampleComponent } from './methods.component';

@NgModule({
  declarations: [MethodsExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: MethodsExampleComponent }])
  ]
})
export class MethodsExampleModule {}
