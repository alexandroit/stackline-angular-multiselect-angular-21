export interface DropdownInstance {
  dataName: string;
  modelName: string;
  settingsName: string;
  data: any[];
  model: any[];
  settings: any;
  optionsText: string;
  template?: boolean;
}

export interface DropdownExample {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  surfaceClass?: string;
  dialog?: boolean;
  skinSwitcher?: boolean;
  dropdowns: DropdownInstance[];
}

export const EXAMPLE_SKINS = ['classic', 'material', 'dark', 'custom', 'brand'];
