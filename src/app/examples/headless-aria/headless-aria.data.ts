export interface CountryOption {
  id: number;
  itemName: string;
  region: string;
  code: string;
}

export const HEADLESS_ARIA_COUNTRIES: CountryOption[] = [
  { id: 1, itemName: 'Brazil', region: 'Americas', code: 'BR' },
  { id: 2, itemName: 'Canada', region: 'Americas', code: 'CA' },
  { id: 3, itemName: 'Portugal', region: 'Europe', code: 'PT' },
  { id: 4, itemName: 'Colombia', region: 'Americas', code: 'CO' },
  { id: 5, itemName: 'Germany', region: 'Europe', code: 'DE' },
  { id: 6, itemName: 'Mexico', region: 'Americas', code: 'MX' },
  { id: 7, itemName: 'France', region: 'Europe', code: 'FR' },
  { id: 8, itemName: 'Chile', region: 'Americas', code: 'CL' }
];
