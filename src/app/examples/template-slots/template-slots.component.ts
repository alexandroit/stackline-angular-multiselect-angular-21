import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

import { TEMPLATE_SLOT_COUNTRIES } from './template-slots.data';

@Component({
  standalone: false,
  selector: 'app-template-slots-example',
  templateUrl: './template-slots.component.html',
  styleUrls: ['./template-slots.component.scss']
})
export class TemplateSlotsExampleComponent implements OnInit {
  example = { slug: 'template-slots' };
  itemList = [];
  selectedItems = [];
  settings: DropdownSettings = {};

  ngOnInit() {
    this.itemList = TEMPLATE_SLOT_COUNTRIES;
    this.selectedItems = [TEMPLATE_SLOT_COUNTRIES[0], TEMPLATE_SLOT_COUNTRIES[2]];
    this.settings = {
      text: 'Template slot countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      groupBy: 'region',
      badgeShowLimit: 2,
      skin: 'brand',
      maxHeight: 260
    };
  }
}
