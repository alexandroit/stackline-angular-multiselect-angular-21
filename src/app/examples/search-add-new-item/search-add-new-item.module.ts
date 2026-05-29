import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SearchAddNewItemExampleComponent } from './search-add-new-item.component';

@NgModule({
  declarations: [SearchAddNewItemExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SearchAddNewItemExampleComponent }])
  ]
})
export class SearchAddNewItemExampleModule {}
