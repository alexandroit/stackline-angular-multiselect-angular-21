import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';

import { ExampleSourceComponent } from './example-source.component';

@NgModule({
  declarations: [ExampleSourceComponent],
  imports: [CommonModule, FormsModule, RouterModule, AngularMultiSelectModule],
  exports: [CommonModule, FormsModule, RouterModule, AngularMultiSelectModule, ExampleSourceComponent]
})
export class SharedModule {}
