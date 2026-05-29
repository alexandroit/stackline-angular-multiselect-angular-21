import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SearchFilterByPropertyExampleComponent } from './search-filter-by-property.component';

@NgModule({
  declarations: [SearchFilterByPropertyExampleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SearchFilterByPropertyExampleComponent }])
  ]
})
export class SearchFilterByPropertyExampleModule {}
