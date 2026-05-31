import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from '@stackline/angular-multiselect-dropdown';

import { KEYBOARD_CONTRACT_COUNTRIES } from './keyboard-contract.data';

type KeyboardToggleKey =
  | 'space'
  | 'tab'
  | 'arrows'
  | 'escape'
  | 'backspaceRemovesLastWhenSearchEmpty'
  | 'deleteRemovesFocusedBadge';

@Component({
  standalone: false,
  selector: 'app-keyboard-contract-example',
  templateUrl: './keyboard-contract.component.html',
  styleUrls: ['./keyboard-contract.component.scss']
})
export class KeyboardContractExampleComponent implements OnInit {
  example = { slug: 'keyboard-contract' };
  itemList = [];
  selectedItems = [];
  settings: DropdownSettings = {};
  spaceMode: 'toggle' | 'toggle-and-next' = 'toggle';

  ngOnInit() {
    this.itemList = KEYBOARD_CONTRACT_COUNTRIES;
    this.selectedItems = [KEYBOARD_CONTRACT_COUNTRIES[0]];
    this.settings = this.makeSettings();
  }

  toggleKeyboard(key: KeyboardToggleKey) {
    const keyboard = Object.assign({}, this.settings.keyboard || {});
    keyboard[key] = keyboard[key] === false;
    this.settings = Object.assign({}, this.settings, { keyboard });
  }

  setSpaceMode(mode: 'toggle' | 'toggle-and-next') {
    this.spaceMode = mode;
    this.settings = this.makeSettings();
  }

  makeSettings(): DropdownSettings {
    return {
      text: 'Keyboard-tested countries',
      enableSearchFilter: true,
      searchAutofocus: false,
      badgeShowLimit: 3,
      maxHeight: 220,
      skin: 'classic',
      keyboard: {
        space: this.settings.keyboard?.space !== false,
        spaceOptionAction: this.spaceMode,
        tab: this.settings.keyboard?.tab !== false,
        arrows: this.settings.keyboard?.arrows !== false,
        escape: this.settings.keyboard?.escape !== false,
        backspaceRemovesLastWhenSearchEmpty: !!this.settings.keyboard?.backspaceRemovesLastWhenSearchEmpty,
        deleteRemovesFocusedBadge: this.settings.keyboard?.deleteRemovesFocusedBadge !== false
      }
    };
  }

  get settingsJson() {
    return JSON.stringify({ keyboard: this.settings.keyboard }, null, 2);
  }
}
