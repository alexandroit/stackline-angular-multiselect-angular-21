import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { RemoteDataExampleComponent } from './remote-data.component';

@NgModule({
  declarations: [RemoteDataExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: RemoteDataExampleComponent }])
  ]
})
export class RemoteDataExampleModule {}
