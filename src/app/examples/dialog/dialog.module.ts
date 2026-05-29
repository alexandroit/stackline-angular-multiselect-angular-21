import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DialogExampleComponent } from './dialog.component';

@NgModule({
  declarations: [DialogExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DialogExampleComponent }])
  ]
})
export class DialogExampleModule {}
