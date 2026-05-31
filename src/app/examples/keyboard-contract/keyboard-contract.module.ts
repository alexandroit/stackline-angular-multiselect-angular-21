import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { KeyboardContractExampleComponent } from './keyboard-contract.component';

@NgModule({
  declarations: [KeyboardContractExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: KeyboardContractExampleComponent }])
  ]
})
export class KeyboardContractExampleModule {}
