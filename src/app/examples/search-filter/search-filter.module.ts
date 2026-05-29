import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SearchFilterExampleComponent } from './search-filter.component';

@NgModule({
  declarations: [SearchFilterExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SearchFilterExampleComponent }])
  ]
})
export class SearchFilterExampleModule {}
