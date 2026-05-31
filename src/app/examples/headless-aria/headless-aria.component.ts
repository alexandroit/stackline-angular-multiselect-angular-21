import { Component, OnInit } from '@angular/core';
import {
  AngularMultiselectOptionState,
  AngularMultiselectState,
  defineAngularMultiselectSettings
} from '@stackline/angular-multiselect-dropdown';

import { CountryOption, HEADLESS_ARIA_COUNTRIES } from './headless-aria.data';

@Component({
  standalone: false,
  selector: 'app-headless-aria-example',
  templateUrl: './headless-aria.component.html',
  styleUrls: ['./headless-aria.component.scss']
})
export class HeadlessAriaExampleComponent implements OnInit {
  example = { slug: 'headless-aria' };
  countries: CountryOption[] = [];
  selectedItems: CountryOption[] = [];
  state: AngularMultiselectState<CountryOption>;

  ngOnInit() {
    this.countries = HEADLESS_ARIA_COUNTRIES;
    this.selectedItems = [this.countries[0]];
    this.state = new AngularMultiselectState<CountryOption>({
      data: this.countries,
      selectedItems: this.selectedItems,
      settings: defineAngularMultiselectSettings<CountryOption>({
        text: 'Choose countries',
        primaryKey: 'id',
        labelKey: 'itemName',
        searchBy: ['itemName', 'region', 'code'],
        listboxAriaLabel: 'Custom country options',
        ariaLabel: 'Headless country picker'
      }),
      onChange: (items) => {
        this.selectedItems = items;
      }
    });
  }

  get trigger() {
    return this.state.getTriggerState();
  }

  get listbox() {
    return this.state.getListboxState();
  }

  get visibleOptions() {
    return this.state.getOptionStates();
  }

  get triggerLabel() {
    return this.selectedItems.length
      ? this.selectedItems.map((item) => item.itemName).join(', ')
      : 'Choose countries';
  }

  onOptionKeydown(event: KeyboardEvent, option: AngularMultiselectOptionState<CountryOption>, index: number) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      this.state.toggleItem(option.item);
      this.state.activeKey = option.id;
      this.focusOption(option.id);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.state.close();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex = event.key === 'ArrowDown'
        ? Math.min(index + 1, this.visibleOptions.length - 1)
        : Math.max(index - 1, 0);
      const next = this.visibleOptions[nextIndex];
      this.state.activeKey = next.id;
      this.focusOption(next.id);
    }
  }

  remove(item: CountryOption) {
    this.state.removeItem(item);
  }

  private focusOption(id: string) {
    setTimeout(() => document.getElementById(id)?.focus(), 0);
  }
}
