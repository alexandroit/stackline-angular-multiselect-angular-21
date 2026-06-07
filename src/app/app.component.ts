import { Component, HostListener, OnInit } from '@angular/core';
import {
  AngularMultiselectOptionState,
  AngularMultiselectState,
  defineAngularMultiselectSettings
} from '@stackline/angular-multiselect-dropdown';

type SkinName = 'classic' | 'material' | 'dark' | 'custom' | 'brand';
type RouteName = 'classic' | 'coverage' | 'skin-switcher' | 'dialog-overlay' | 'material' | 'extra' | 'headless-aria';

interface CountryOption {
  id: number;
  itemName: string;
  name: string;
  capital: string;
  category: string;
  region: string;
  flag: string;
  caption: string;
  disabled?: boolean;
}

interface SkillOption {
  id: number;
  itemName: string;
  category: string;
}

interface PersonOption {
  id: number;
  name: string;
  itemName: string;
  category: string;
}

interface LiveRoute {
  path: RouteName;
  title: string;
  description: string;
}

interface LiveExample<T extends Record<string, any> = any> {
  id: string;
  number: string;
  title: string;
  description: string;
  dataName: string;
  selectedName: string;
  settingsName: string;
  eventPrefix: string;
  data: T[];
  selected: T[];
  settings: any;
  template?: boolean;
  overflow?: 'bottom' | 'top';
  formValidation?: boolean;
  methods?: boolean;
  lazy?: boolean;
  addFromFilter?: boolean;
  allowDisabledToggle?: boolean;
  note?: string;
  codeSnippets?: CodeSnippet[];
}

interface CodeSnippet {
  label: 'HTML' | 'TS' | 'JSON';
  code: string;
}

const COUNTRY_SEEDS = [
  ['Brazil', 'BR', 'Brasilia', 'South America', 'Americas'],
  ['Canada', 'CA', 'Ottawa', 'North America', 'Americas'],
  ['Portugal', 'PT', 'Lisbon', 'Southern Europe', 'Europe'],
  ['Argentina', 'AR', 'Buenos Aires', 'South America', 'Americas'],
  ['Germany', 'DE', 'Berlin', 'Western Europe', 'Europe'],
  ['Mexico', 'MX', 'Mexico City', 'North America', 'Americas'],
  ['Colombia', 'CO', 'Bogota', 'South America', 'Americas'],
  ['Uruguay', 'UY', 'Montevideo', 'South America', 'Americas'],
  ['Costa Rica', 'CR', 'San Jose', 'Central America', 'Americas'],
  ['Chile', 'CL', 'Santiago', 'South America', 'Americas'],
  ['Peru', 'PE', 'Lima', 'South America', 'Americas'],
  ['Ecuador', 'EC', 'Quito', 'South America', 'Americas'],
  ['Panama', 'PA', 'Panama City', 'Central America', 'Americas'],
  ['Dominican Republic', 'DO', 'Santo Domingo', 'Caribbean', 'Americas'],
  ['Jamaica', 'JM', 'Kingston', 'Caribbean', 'Americas'],
  ['Bahamas', 'BS', 'Nassau', 'Caribbean', 'Americas'],
  ['Barbados', 'BB', 'Bridgetown', 'Caribbean', 'Americas'],
  ['Belize', 'BZ', 'Belmopan', 'Central America', 'Americas'],
  ['Paraguay', 'PY', 'Asuncion', 'South America', 'Americas'],
  ['Ireland', 'IE', 'Dublin', 'Northern Europe', 'Europe'],
  ['Spain', 'ES', 'Madrid', 'Southern Europe', 'Europe'],
  ['France', 'FR', 'Paris', 'Western Europe', 'Europe'],
  ['Italy', 'IT', 'Rome', 'Southern Europe', 'Europe'],
  ['Netherlands', 'NL', 'Amsterdam', 'Western Europe', 'Europe'],
  ['Belgium', 'BE', 'Brussels', 'Western Europe', 'Europe'],
  ['Switzerland', 'CH', 'Bern', 'Western Europe', 'Europe'],
  ['Austria', 'AT', 'Vienna', 'Western Europe', 'Europe'],
  ['Sweden', 'SE', 'Stockholm', 'Northern Europe', 'Europe'],
  ['Norway', 'NO', 'Oslo', 'Northern Europe', 'Europe'],
  ['Denmark', 'DK', 'Copenhagen', 'Northern Europe', 'Europe'],
  ['Finland', 'FI', 'Helsinki', 'Northern Europe', 'Europe'],
  ['Iceland', 'IS', 'Reykjavik', 'Northern Europe', 'Europe'],
  ['Czech Republic', 'CZ', 'Prague', 'Central Europe', 'Europe'],
  ['Slovakia', 'SK', 'Bratislava', 'Central Europe', 'Europe'],
  ['Slovenia', 'SI', 'Ljubljana', 'Southern Europe', 'Europe'],
  ['Croatia', 'HR', 'Zagreb', 'Southern Europe', 'Europe'],
  ['Greece', 'GR', 'Athens', 'Southern Europe', 'Europe'],
  ['Malta', 'MT', 'Valletta', 'Southern Europe', 'Europe'],
  ['Luxembourg', 'LU', 'Luxembourg', 'Western Europe', 'Europe'],
  ['Estonia', 'EE', 'Tallinn', 'Northern Europe', 'Europe'],
  ['South Africa', 'ZA', 'Pretoria', 'Southern Africa', 'Africa'],
  ['Kenya', 'KE', 'Nairobi', 'East Africa', 'Africa'],
  ['Ghana', 'GH', 'Accra', 'West Africa', 'Africa'],
  ['Botswana', 'BW', 'Gaborone', 'Southern Africa', 'Africa'],
  ['Namibia', 'NA', 'Windhoek', 'Southern Africa', 'Africa'],
  ['Rwanda', 'RW', 'Kigali', 'East Africa', 'Africa'],
  ['Tanzania', 'TZ', 'Dodoma', 'East Africa', 'Africa'],
  ['Senegal', 'SN', 'Dakar', 'West Africa', 'Africa'],
  ['Mauritius', 'MU', 'Port Louis', 'East Africa', 'Africa'],
  ['Seychelles', 'SC', 'Victoria', 'East Africa', 'Africa'],
  ['Cabo Verde', 'CV', 'Praia', 'West Africa', 'Africa'],
  ['Japan', 'JP', 'Tokyo', 'East Asia', 'Asia'],
  ['Singapore', 'SG', 'Singapore', 'Southeast Asia', 'Asia'],
  ['Malaysia', 'MY', 'Kuala Lumpur', 'Southeast Asia', 'Asia'],
  ['Thailand', 'TH', 'Bangkok', 'Southeast Asia', 'Asia'],
  ['Indonesia', 'ID', 'Jakarta', 'Southeast Asia', 'Asia'],
  ['Philippines', 'PH', 'Manila', 'Southeast Asia', 'Asia'],
  ['Nepal', 'NP', 'Kathmandu', 'South Asia', 'Asia'],
  ['Bhutan', 'BT', 'Thimphu', 'South Asia', 'Asia'],
  ['Sri Lanka', 'LK', 'Sri Jayawardenepura Kotte', 'South Asia', 'Asia'],
  ['Australia', 'AU', 'Canberra', 'Oceania', 'Oceania'],
  ['New Zealand', 'NZ', 'Wellington', 'Oceania', 'Oceania'],
  ['Fiji', 'FJ', 'Suva', 'Oceania', 'Oceania'],
  ['Samoa', 'WS', 'Apia', 'Oceania', 'Oceania']
] as const;

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly packageVersion = '21.2.3';
  readonly angularRuntime = '21.2.14';
  readonly skins: SkinName[] = ['classic', 'material', 'dark', 'custom', 'brand'];
  readonly routes: LiveRoute[] = [
    {
      path: 'classic',
      title: 'Basic usage',
      description: 'Classic selector, counters, search, groups, limits, templates, and form-safe controlled ngModel.'
    },
    {
      path: 'coverage',
      title: '21.2.3 coverage',
      description: 'Keyboard contract, ARIA state, async object preservation, and renderless helper coverage.'
    },
    {
      path: 'skin-switcher',
      title: 'Skin switcher',
      description: 'Change only settings.skin and keep the same data, model, events, and markup.'
    },
    {
      path: 'dialog-overlay',
      title: 'Dialog overlay',
      description: 'Body overlay examples for overflow containers, dialogs, drawers, and clipping surfaces.'
    },
    {
      path: 'material',
      title: 'Material skin',
      description: 'Material-style visual treatment using the same Angular component contract.'
    },
    {
      path: 'extra',
      title: 'Extra coverage',
      description: 'Forms, methods, lazy loading, multiple dropdowns, disabled state, and event callbacks.'
    },
    {
      path: 'headless-aria',
      title: 'Headless + ARIA',
      description: 'Custom Angular HTML driven by AngularMultiselectState and ARIA state helpers.'
    }
  ];

  readonly countries = this.createCountries();
  readonly headlessHtmlCode = [
    `<button [attr.role]="trigger.role"`,
    `  [attr.aria-expanded]="trigger.ariaExpanded"`,
    `  [attr.aria-controls]="trigger.ariaControls">`,
    `  {{ headlessLabel }}`,
    `</button>`,
    ``,
    `<div role="listbox" aria-multiselectable="true">`,
    `  <div role="option" aria-selected="true" aria-checked="true">`,
    `    <span class="country-flag" [ngClass]="flagClass(option.item.flag)"></span>`,
    `    Custom row HTML`,
    `  </div>`,
    `</div>`
  ].join('\n');
  readonly headlessTsCode = [
    `state = new AngularMultiselectState<CountryOption>({`,
    `  data: countries,`,
    `  selectedItems,`,
    `  settings: defineAngularMultiselectSettings<CountryOption>({`,
    `    primaryKey: 'id',`,
    `    labelKey: 'itemName',`,
    `    searchBy: ['itemName', 'capital', 'region']`,
    `  })`,
    `});`
  ].join('\n');
  readonly skills: SkillOption[] = [
    { id: 1, itemName: 'Angular', category: 'Frontend' },
    { id: 2, itemName: 'TypeScript', category: 'Frontend' },
    { id: 3, itemName: 'RxJS', category: 'Frontend' },
    { id: 4, itemName: 'Node.js', category: 'Backend' },
    { id: 5, itemName: 'GraphQL', category: 'Backend' },
    { id: 6, itemName: 'Docker', category: 'DevOps' },
    { id: 7, itemName: 'Playwright', category: 'Testing' },
    { id: 8, itemName: 'Karma', category: 'Testing' }
  ];
  readonly people = this.createPeople();
  readonly stackBlitzBase = 'https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21';

  currentPath: RouteName = 'classic';
  skinSwitchSkin: SkinName = 'classic';
  skinSwitchExample!: LiveExample<CountryOption>;
  disabledMap: Record<string, boolean> = {};
  eventLog: string[] = ['ready'];
  formName = '';
  formEmail = 'ascasc@aa.com';
  keyboardTarget = 'option';
  keyboardSettings = {
    spaceTriggerToggles: true,
    spaceOptionToggles: true,
    tabMovesFocus: true,
    arrowsNavigateOptions: true,
    escapeCloses: true,
    backspaceRemovesFocusedBadge: true,
    backspaceRemovesLastOnEmptySearch: false,
    spaceOptionAction: 'toggle' as 'toggle' | 'toggle-and-next'
  };
  keyboardExample!: LiveExample<CountryOption>;
  asyncExample!: LiveExample<CountryOption>;
  headlessState!: AngularMultiselectState<CountryOption>;

  classicExamples: LiveExample[] = [];
  materialExamples: LiveExample[] = [];
  extraExamples: LiveExample[] = [];
  overlayExamples: LiveExample[] = [];

  ngOnInit() {
    this.bootstrapExamples();
    this.initHeadlessState();
    this.syncRoute();
  }

  @HostListener('window:hashchange')
  onHashChange() {
    this.syncRoute();
  }

  get activeRoute() {
    return this.routes.find((route) => route.path === this.currentPath) || this.routes[0];
  }

  get visibleExamples() {
    if (this.currentPath === 'material') {
      return this.materialExamples;
    }

    if (this.currentPath === 'dialog-overlay') {
      return this.overlayExamples;
    }

    if (this.currentPath === 'extra') {
      return this.extraExamples;
    }

    if (this.currentPath === 'coverage') {
      return [this.keyboardExample, this.asyncExample];
    }

    return this.classicExamples;
  }

  get headlessTrigger() {
    return this.headlessState.getTriggerState();
  }

  get headlessListbox() {
    return this.headlessState.getListboxState();
  }

  get headlessOptions() {
    return this.headlessState.getOptionStates();
  }

  get headlessGroups() {
    const groups: Array<{ name: string; items: AngularMultiselectOptionState<CountryOption>[]; selected: boolean }> = [];

    this.headlessOptions.forEach((option) => {
      const name = option.item.region || 'Other';
      let group = groups.find((entry) => entry.name === name);
      if (!group) {
        group = { name, items: [], selected: false };
        groups.push(group);
      }
      group.items.push(option);
    });

    groups.forEach((group) => {
      group.selected = group.items.length > 0 && group.items.every((option) => option.selected);
    });

    return groups;
  }

  get headlessLabel() {
    const selected = this.headlessState.selectedItems;
    return selected.length ? selected.map((item) => item.itemName).join(', ') : 'Build your own picker';
  }

  get visibleHeadlessBadges() {
    return this.headlessState.selectedItems.slice(0, 2);
  }

  get hiddenHeadlessBadgeCount() {
    return Math.max(0, this.headlessState.selectedItems.length - this.visibleHeadlessBadges.length);
  }

  get headlessSummary() {
    return this.headlessState.selectedItems.length
      ? `${this.headlessState.selectedItems.length} selected`
      : 'No selected countries';
  }

  get headlessJsonCode() {
    return this.format({
      selected: this.headlessState.selectedItems.length,
      visible: this.headlessOptions.length,
      listbox: this.headlessListbox.id,
      aria: 'combobox + listbox + aria-selected + aria-checked'
    });
  }

  setRoute(path: RouteName) {
    window.location.hash = `/${path}`;
  }

  setSkinSwitchSkin(skin: SkinName) {
    this.skinSwitchSkin = skin;
    this.skinSwitchExample.settings = this.makeSettings(skin, `Skin ${this.labelForSkin(skin)}`, {
      badgeShowLimit: 3,
      maxHeight: 220
    });
    this.refreshCodeFor(this.skinSwitchExample);
    this.record('skin switch', skin);
  }

  labelForSkin(skin: SkinName) {
    return skin.charAt(0).toUpperCase() + skin.slice(1);
  }

  flagClass(code: string) {
    const normalized = (code || '').trim().toLowerCase();
    return /^[a-z]{2}$/.test(normalized) ? `fi fi-${normalized}` : 'fi fi-un';
  }

  record(type: string, value: any) {
    let label = this.describeValue(value);
    this.eventLog = [`${type}: ${label}`, ...this.eventLog].slice(0, 12);
  }

  clearLog() {
    this.eventLog = [];
  }

  trackExample(_index: number, example: LiveExample) {
    return example.id;
  }

  trackOption(_index: number, option: AngularMultiselectOptionState<CountryOption>) {
    return option.key;
  }

  toggleDisabled(example: LiveExample) {
    const next = !this.disabledMap[example.id];
    this.disabledMap[example.id] = next;
    example.settings = {
      ...example.settings,
      disabled: next
    };
    this.refreshCodeFor(example);
    this.record(`${example.eventPrefix} disabled`, next ? 'on' : 'off');
  }

  appendNextChunk(example: LiveExample) {
    if (!example.lazy) {
      return;
    }

    const nextChunk = this.people.slice(example.data.length, example.data.length + 20);
    if (!nextChunk.length) {
      this.record(`${example.eventPrefix} lazy`, 'no more rows');
      return;
    }

    example.data = example.data.concat(nextChunk);
    this.refreshCodeFor(example);
    this.record(`${example.eventPrefix} lazy`, `${nextChunk.length} rows`);
  }

  addFilterItem(example: LiveExample<CountryOption>, query: string) {
    const trimmed = (query || '').trim();
    if (!trimmed) {
      return;
    }

    const next = this.createCountryFromQuery(trimmed, example.data.length);
    example.data = example.data.concat(next);
    example.selected = example.selected.concat(next);
    this.refreshCodeFor(example);
    this.record(`${example.eventPrefix} created`, next);
  }

  reloadAsyncData() {
    const preserved = this.asyncExample.selected.slice();
    const nextData = this.countries.slice().reverse();
    this.asyncExample.data = this.mergeSelectedIntoData(nextData, preserved);
    this.asyncExample.selected = preserved;
    this.refreshCodeFor(this.asyncExample);
    this.record('async refresh', `${this.asyncExample.selected.length} selected objects preserved`);
  }

  toggleKeyboardSetting(key: keyof AppComponent['keyboardSettings']) {
    if (key === 'spaceOptionAction') {
      return;
    }

    (this.keyboardSettings[key] as boolean) = !(this.keyboardSettings[key] as boolean);
    this.syncKeyboardSettings();
  }

  setSpaceOptionAction(action: 'toggle' | 'toggle-and-next') {
    this.keyboardSettings.spaceOptionAction = action;
    this.syncKeyboardSettings();
  }

  selectHeadlessVisible() {
    const current = this.headlessState.selectedItems.slice();
    const next = this.mergeSelectedIntoData(current.concat(this.headlessState.getVisibleOptions()), []);
    this.headlessState.setSelectedItems(next);
  }

  toggleHeadlessGroup(group: { name: string; items: AngularMultiselectOptionState<CountryOption>[]; selected: boolean }) {
    if (group.selected) {
      group.items.forEach((option) => this.headlessState.removeItem(option.item));
      return;
    }

    const current = this.headlessState.selectedItems.slice();
    const next = this.mergeSelectedIntoData(current.concat(group.items.map((option) => option.item)), []);
    this.headlessState.setSelectedItems(next);
  }

  removeHeadless(item: CountryOption) {
    this.headlessState.removeItem(item);
  }

  onHeadlessOptionClick(option: AngularMultiselectOptionState<CountryOption>) {
    this.headlessState.toggleItem(option.item);
    this.headlessState.activeKey = option.id;
  }

  onHeadlessOptionKeydown(
    event: KeyboardEvent,
    option: AngularMultiselectOptionState<CountryOption>,
    index: number
  ) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      this.onHeadlessOptionClick(option);
      this.focusOption(option.id);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.headlessState.close();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex =
        event.key === 'ArrowDown'
          ? Math.min(index + 1, this.headlessOptions.length - 1)
          : Math.max(index - 1, 0);
      const next = this.headlessOptions[nextIndex];
      this.headlessState.activeKey = next.id;
      this.focusOption(next.id);
    }
  }

  codeFor(example: LiveExample): CodeSnippet[] {
    if (!example.codeSnippets) {
      example.codeSnippets = this.buildCodeSnippets(example);
    }

    return example.codeSnippets;
  }

  private refreshCodeFor(example: LiveExample) {
    example.codeSnippets = this.buildCodeSnippets(example);
  }

  private buildCodeSnippets(example: LiveExample): CodeSnippet[] {
    return [
      { label: 'HTML', code: this.htmlSnippet(example) },
      { label: 'TS', code: this.tsSnippet(example) },
      { label: 'JSON', code: this.jsonSnippet(example) }
    ];
  }

  stackBlitzUrl(path: string) {
    const slug = path === 'classic' ? 'basic' : path;
    const file = `src/examples/${slug}/${slug}.component.ts`;
    return `${this.stackBlitzBase}?file=${encodeURIComponent(file)}&startScript=start&initialpath=${encodeURIComponent(
      `/${slug}`
    )}`;
  }

  private bootstrapExamples() {
    this.classicExamples = [
      this.example('classic', '01', 'basic-counter', 'Basic multi select', 'countries', this.countries, 'selectedCountries', 'countrySettings', this.countries.slice(0, 2), 'Select Countries', {
        badgeShowLimit: 3,
        clearAll: true
      }),
      this.example('classic', '02', 'all-visible-counter', 'All selected badges visible', 'countries', this.countries, 'visibleCountries', 'visibleBadgeSettings', this.countries.slice(0, 4), 'All selected visible', {
        badgeShowLimit: 10,
        clearAll: true
      }, {
        note: 'The +N counter disappears when every selected item is visible.'
      }),
      this.example('classic', '03', 'single-selection', 'Single selection', 'countries', this.countries, 'selectedCountry', 'singleSettings', this.countries.slice(0, 1), 'Select Country', {
        singleSelection: true,
        badgeShowLimit: 1
      }),
      this.example('classic', '04', 'search-filter', 'Search filter', 'countries', this.countries, 'searchSelectedCountries', 'searchFilterSettings', this.countries.slice(1, 3), 'Search countries', {
        searchPlaceholderText: 'Search',
        badgeShowLimit: 3,
        clearAll: true
      }),
      this.example('classic', '05', 'search-by-fields', 'Search by specific fields', 'countries', this.countries, 'searchBySelected', 'searchBySettings', this.countries.slice(2, 5), 'Search country or capital', {
        searchBy: ['itemName', 'capital'],
        searchPlaceholderText: 'Search country or capital',
        badgeShowLimit: 3
      }),
      this.example('classic', '06', 'grouped-options', 'Grouped options', 'countries', this.countries, 'groupedSelected', 'groupSettings', [this.countries[0], this.countries[4]], 'Grouped Countries', {
        groupBy: 'category',
        selectGroup: true,
        badgeShowLimit: 3
      }),
      this.example('classic', '07', 'limit-selection', 'Selection limit', 'countries', this.countries, 'limitedCountries', 'limitSettings', this.countries.slice(0, 2), 'Pick Two Countries', {
        limitSelection: 2,
        badgeShowLimit: 2
      }),
      this.example('classic', '08', 'limit-badges', 'Limit badges', 'countries', this.countries, 'badgeLimitedCountries', 'badgeLimitSettings', this.countries.slice(0, 5), 'Badge limit', {
        badgeShowLimit: 2,
        clearAll: true
      }),
      this.example('classic', '09', 'templating', 'Custom item and badge templates', 'countries', this.countries, 'templateCountries', 'templateSettings', this.countries.slice(0, 3), 'Countries With Templates', {
        groupBy: 'region',
        badgeShowLimit: 3
      }, {
        template: true
      }),
      this.example('classic', '10', 'add-filter-item', 'Search and add item', 'createdCountries', this.countries, 'createdSelected', 'createdSettings', this.countries.slice(0, 2), 'Add Country', {
        addNewItemOnFilter: true,
        addNewButtonText: 'Add country',
        badgeShowLimit: 3
      }, {
        addFromFilter: true
      }),
      this.example('classic', '11', 'disabled-toggle', 'Disabled state toggle', 'countries', this.countries, 'disabledSelected', 'disabledSettings', this.countries.slice(0, 3), 'Toggle disabled', {
        badgeShowLimit: 3
      }, {
        allowDisabledToggle: true
      }),
      this.example('classic', '12', 'custom-placeholder', 'Custom placeholder', 'countries', this.countries, 'placeholderCountries', 'placeholderSettings', [], 'Choose countries', {
        searchPlaceholderText: 'Search by name',
        badgeShowLimit: 3,
        clearAll: true
      })
    ];

    this.materialExamples = [
      this.cloneForSkin(this.classicExamples[0], 'material', '01'),
      this.cloneForSkin(this.classicExamples[3], 'material', '02'),
      this.cloneForSkin(this.classicExamples[5], 'material', '03'),
      this.cloneForSkin(this.classicExamples[8], 'material', '04')
    ];

    this.overlayExamples = [
      this.example('material', '01', 'overlay-bottom', 'Clipping-safe dropdown with tagToBody', 'overlayCountries', this.countries, 'overlaySelected', 'overlaySettings', this.countries.slice(0, 1), 'Dialog dropdown', {
        appendToBody: true,
        tagToBody: true,
        autoPosition: false,
        position: 'bottom',
        maxHeight: 180,
        badgeShowLimit: 2
      }, {
        overflow: 'bottom',
        note: 'The menu is appended to document.body and escapes overflow hidden containers.'
      }),
      this.example('material', '02', 'overlay-top', 'Body overlay auto direction', 'overlayCountries', this.countries, 'overlayTopSelected', 'overlayTopSettings', this.countries.slice(1, 3), 'Dialog dropdown top', {
        appendToBody: true,
        tagToBody: true,
        autoPosition: true,
        position: 'top',
        maxHeight: 180,
        badgeShowLimit: 2
      }, {
        overflow: 'top',
        note: 'The arrow and direction classes should match the real open direction.'
      })
    ];

    this.extraExamples = [
      this.example('classic', '13', 'form-validation', 'Controlled form validation', 'skills', this.skills, 'skillSelected', 'skillSettings', this.skills.slice(0, 1), 'Select skills', {
        groupBy: 'category',
        badgeShowLimit: 3,
        clearAll: true
      }, {
        formValidation: true
      }),
      this.example('classic', '14', 'long-list', 'Long list with keyboard scroll', 'people', this.people.slice(0, 120), 'selectedPeople', 'peopleSettings', this.people.slice(0, 3), 'Select People', {
        maxHeight: 140,
        primaryKey: 'id',
        labelKey: 'name',
        badgeShowLimit: 3
      }),
      this.example('classic', '15', 'lazy-loading', 'Local lazy loading', 'people', this.people.slice(0, 30), 'lazyPeople', 'lazySettings', [], 'Lazy People', {
        lazyLoading: true,
        maxHeight: 140,
        primaryKey: 'id',
        labelKey: 'name',
        badgeShowLimit: 3
      }, {
        lazy: true,
        note: 'Adds 20 rows each time the virtual scroller reaches the end.'
      }),
      this.example('classic', '16', 'methods', 'Ref methods', 'countries', this.countries, 'methodSelected', 'methodSettings', this.countries.slice(0, 2), 'Ref controlled', {
        badgeShowLimit: 3,
        clearAll: true
      }, {
        methods: true
      }),
      this.example('classic', '17', 'events', 'Events', 'countries', this.countries, 'eventSelected', 'eventSettings', this.countries.slice(1, 3), 'Event callbacks', {
        badgeShowLimit: 3,
        clearAll: true
      }),
      this.example('classic', '18', 'multiple-dropdowns', 'Multiple dropdown instances', 'countries', this.countries, 'multiSelected', 'multiSettings', this.countries.slice(0, 2), 'Primary dropdown', {
        badgeShowLimit: 2,
        clearAll: true
      }),
      this.example('brand', '19', 'styling', 'Brand skin styling', 'countries', this.countries, 'styledCountries', 'styledSettings', this.countries.slice(3, 5), 'Styled dropdown', {
        badgeShowLimit: 3,
        clearAll: true
      })
    ];

    this.keyboardExample = this.example('classic', '01', 'keyboard-contract', 'Combobox keyboard contract', 'countries', this.countries, 'keyboardSelected', 'keyboardSettings', this.countries.slice(0, 3), 'Keyboard contract', {
      badgeShowLimit: 3,
      clearAll: true,
      keyboard: this.keyboardSettings
    }, {
      note: 'Toggle each keyboard behavior below and verify focus stays predictable.'
    });

    this.asyncExample = this.example('classic', '02', 'async-preservation', 'Async object preservation', 'countries', this.countries, 'asyncSelected', 'asyncSettings', this.countries.slice(0, 3), 'Async source', {
      badgeShowLimit: 3,
      clearAll: true,
      searchBy: ['itemName', 'capital', 'region']
    }, {
      note: 'Refresh data order and selected object values should stay intact.'
    });

    this.skinSwitchExample = this.example('classic', '00', 'skin-switch', 'Settings-only skin switch', 'countries', this.countries, 'skinSwitchSelected', 'skinSwitchSettings', this.countries.slice(1, 4), 'Skin Classic', {
      badgeShowLimit: 3,
      maxHeight: 220
    });
  }

  private initHeadlessState() {
    this.headlessState = new AngularMultiselectState<CountryOption>({
      data: this.countries,
      selectedItems: this.countries.slice(0, 3),
      settings: defineAngularMultiselectSettings<CountryOption>({
        text: 'Build your own picker',
        primaryKey: 'id',
        labelKey: 'itemName',
        searchBy: ['itemName', 'capital', 'region'],
        listboxAriaLabel: 'Custom country options',
        ariaLabel: 'Custom country multiselect'
      })
    });
  }

  private syncRoute() {
    const aliases: Record<string, RouteName> = {
      basic: 'classic',
      live: 'classic',
      'body-overlay': 'dialog-overlay',
      dialog: 'dialog-overlay',
      headless: 'headless-aria'
    };
    const raw = window.location.hash.replace(/^#\/?/, '').trim();
    const path = (aliases[raw] || raw || 'classic') as RouteName;
    const valid = this.routes.some((route) => route.path === path);
    this.currentPath = valid ? path : 'classic';

    if (!window.location.hash || !valid) {
      window.history.replaceState(null, '', '#/classic');
    }
  }

  private syncKeyboardSettings() {
    this.keyboardExample.settings = {
      ...this.keyboardExample.settings,
      keyboard: { ...this.keyboardSettings }
    };
    this.refreshCodeFor(this.keyboardExample);
    this.record('keyboard settings', this.keyboardSettings);
  }

  private example<T extends Record<string, any>>(
    skin: SkinName,
    number: string,
    id: string,
    title: string,
    dataName: string,
    data: T[],
    selectedName: string,
    settingsName: string,
    selected: T[],
    text: string,
    options: any = {},
    extra: Partial<LiveExample<T>> = {}
  ): LiveExample<T> {
    return {
      id,
      number,
      title,
      description: extra.description || this.defaultDescription(id),
      dataName,
      selectedName,
      settingsName,
      eventPrefix: extra.eventPrefix || id.replace(/-/g, ' '),
      data: data.slice(),
      selected: selected.slice(),
      settings: this.makeSettings(skin, text, options),
      ...extra
    };
  }

  private cloneForSkin(example: LiveExample, skin: SkinName, number: string): LiveExample {
    return {
      ...example,
      id: `${skin}-${example.id}`,
      number,
      selected: example.selected.slice(),
      data: example.data.slice(),
      settings: this.makeSettings(skin, example.settings.text, {
        ...example.settings,
        skin
      })
    };
  }

  private makeSettings(skin: SkinName, text: string, options: any = {}) {
    return {
      singleSelection: false,
      text,
      selectAllText: 'Select all',
      unSelectAllText: 'Deselect all',
      enableCheckAll: true,
      enableSearchFilter: true,
      enableFilterSelectAll: true,
      filterSelectAllText: 'Select visible',
      filterUnSelectAllText: 'Clear visible',
      searchPlaceholderText: 'Search',
      badgeShowLimit: 4,
      maxHeight: 260,
      showCheckbox: true,
      clearAll: true,
      noDataLabel: 'No data',
      primaryKey: 'id',
      labelKey: 'itemName',
      skin,
      ...options
    };
  }

  private createCountries(): CountryOption[] {
    return COUNTRY_SEEDS.map(([itemName, name, capital, category, region], index) => ({
      id: index + 1,
      itemName,
      name,
      capital,
      category,
      region,
      flag: name,
      caption: `${capital} - ${region}`,
      disabled: itemName === 'Costa Rica'
    }));
  }

  private createPeople(): PersonOption[] {
    const categories = ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania'];
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Brown',
      'Jones',
      'Miller',
      'Davis',
      'Garcia',
      'Wilson',
      'Taylor',
      'Thomas',
      'Moore',
      'Martin',
      'Jackson',
      'Thompson'
    ];

    return Array.from({ length: 180 }, (_item, index) => ({
      id: index + 1,
      name: `${lastNames[index % lastNames.length]} ${index + 1}`,
      itemName: `${lastNames[index % lastNames.length]} ${index + 1}`,
      category: categories[index % categories.length]
    }));
  }

  private createCountryFromQuery(query: string, currentLength: number): CountryOption {
    return {
      id: currentLength + 1000,
      itemName: query,
      name: query.slice(0, 2).toUpperCase(),
      capital: query,
      category: 'Custom',
      region: 'Custom',
      flag: 'NA',
      caption: `${query} - Custom`,
    };
  }

  private mergeSelectedIntoData<T extends Record<string, any>>(data: T[], selected: T[]) {
    const seen = new Set<string>();
    const merged: T[] = [];

    selected.concat(data).forEach((item) => {
      const key = String(item && item.id !== undefined ? item.id : JSON.stringify(item));
      if (!seen.has(key)) {
        seen.add(key);
        merged.push(item);
      }
    });

    return merged;
  }

  private defaultDescription(id: string) {
    const descriptions: Record<string, string> = {
      'basic-counter': 'Search, select all, clear all, and selected chips in the Angular component.',
      'all-visible-counter': 'The counter should disappear when every selected item is visible in the trigger.',
      'single-selection': 'One selected value, searchable data, and close-on-selection behavior.',
      'search-filter': 'Filter visible options with the built-in search input.',
      'search-by-fields': 'Search only in configured object fields while the display label stays stable.',
      'grouped-options': 'Group rows by object category and select or clear a whole group.',
      'limit-selection': 'Stop new selections after the configured limit while removal remains available.',
      'limit-badges': 'Show a true +N badge only when selected items overflow the visible chip limit.',
      templating: 'Use Angular templates for menu rows and selected chips.',
      'add-filter-item': 'Create a new option from the current filter text.',
      'disabled-toggle': 'Toggle disabled mode without losing the selected model.',
      'custom-placeholder': 'Set empty-state and search placeholder text from settings.',
      'form-validation': 'Keep selected items in Angular form state and derive validation from the model.',
      'long-list': 'A compact max height keeps the list scrollable with pointer and keyboard navigation.',
      'lazy-loading': 'Append more rows when the scrollable menu reaches the end.',
      methods: 'Open, close, focus, select all, and clear from external controls.',
      events: 'Listen to open, close, select, deselect, select-all, and clear-all callbacks.',
      'multiple-dropdowns': 'Run independent selected arrays and settings in the same page.',
      styling: 'Use the skin system and CSS variables to align the dropdown with product UI.',
      'keyboard-contract': 'Space, Tab, arrows, Escape, and focused badge Backspace/Delete are configurable.',
      'async-preservation': 'Selected object values remain available when async option data refreshes.'
    };

    return descriptions[id] || 'Angular multiselect live behavior test.';
  }

  private htmlSnippet(example: LiveExample) {
    const content = [
      `<angular-multiselect`,
      `  [data]="${example.dataName}"`,
      `  [(ngModel)]="${example.selectedName}"`,
      `  [settings]="${example.settingsName}"`,
      `  (onSelect)="record('select', $event)"`,
      `  (onDeSelect)="record('deselect', $event)"`,
      `  (onSelectAll)="record('selectAll', $event)"`,
      `  (onDeSelectAll)="record('deselectAll', $event)"${example.lazy ? `\n  (onScrollToEnd)="appendNextChunk()"` : ''}${example.addFromFilter ? `\n  (onAddFilterNewItem)="addFilterItem($event)"` : ''}`,
      `>${example.template ? this.templateSnippet() : ''}`,
      `</angular-multiselect>`
    ];

    return content.join('\n');
  }

  private templateSnippet() {
    return [
      ``,
      `  <c-badge>`,
      `    <ng-template let-item="item">`,
      `      <span class="swatch-chip">`,
      `        <span class="flag-chip" [ngClass]="flagClass(item.flag)" aria-hidden="true"></span>`,
      `        {{ item.itemName }}`,
      `      </span>`,
      `    </ng-template>`,
      `  </c-badge>`,
      `  <c-item>`,
      `    <ng-template let-item="item">`,
      `      <span class="option-row">`,
      `        <span class="flag-chip" [ngClass]="flagClass(item.flag)" aria-hidden="true"></span>`,
      `        {{ item.itemName }} - {{ item.caption }}`,
      `      </span>`,
      `    </ng-template>`,
      `  </c-item>`
    ].join('\n');
  }

  private tsSnippet(example: LiveExample) {
    return [
      `${example.dataName} = ${this.formatDataSnippet(example.data, example.dataName)}`,
      `${example.selectedName} = ${this.format(example.selected.slice(0, 3))};`,
      ``,
      `${example.settingsName} = ${this.format(example.settings)};`,
      ``,
      `record(type: string, value: any) {`,
      `  this.events.unshift(type + ': ' + JSON.stringify(value));`,
      `}`,
      example.lazy ? `\nappendNextChunk() {\n  this.${example.dataName} = this.${example.dataName}.concat(nextRows);\n}` : '',
      example.addFromFilter ? `\naddFilterItem(query: string) {\n  this.${example.dataName} = this.${example.dataName}.concat(createItem(query));\n}` : ''
    ]
      .filter(Boolean)
      .join('\n');
  }

  private jsonSnippet(example: LiveExample) {
    return this.format({
      data: this.dataPreview(example.data),
      dataNote: example.data.length > 12 ? `${example.data.length} runtime options; showing the first 12 for live-page speed.` : undefined,
      selected: example.selected.slice(0, 6),
      renderedOptions: example.data.length,
      settings: example.settings
    });
  }

  private formatDataSnippet<T>(data: T[], dataName: string) {
    if (data.length <= 12) {
      return `${this.format(data)};`;
    }

    const visible = this.format(this.dataPreview(data));

    return [
      `${visible};`,
      `// ${dataName} has ${data.length} runtime options in this live route.`,
      `// The code panel shows the first 12 so the demo stays fast.`
    ].join('\n');
  }

  private dataPreview<T>(data: T[]) {
    return data.length > 12 ? data.slice(0, 12) : data;
  }

  private format(value: unknown) {
    return JSON.stringify(value, null, 2);
  }

  private describeValue(value: any) {
    if (Array.isArray(value)) {
      return `${value.length} items`;
    }

    if (value && value.itemName) {
      return value.itemName;
    }

    if (value && value.name) {
      return value.name;
    }

    if (typeof value === 'string') {
      return value;
    }

    return JSON.stringify(value);
  }

  private focusOption(id: string) {
    setTimeout(() => document.getElementById(id)?.focus(), 0);
  }
}
