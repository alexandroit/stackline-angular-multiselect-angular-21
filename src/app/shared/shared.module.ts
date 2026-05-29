import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';

import { ExamplePageComponent } from './example-page.component';

@NgModule({
  declarations: [ExamplePageComponent],
  imports: [CommonModule, FormsModule, RouterModule, AngularMultiSelectModule],
  exports: [CommonModule, FormsModule, RouterModule, AngularMultiSelectModule, ExamplePageComponent]
})
export class SharedModule {}
