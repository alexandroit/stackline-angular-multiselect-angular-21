export function makeSettings(skin: string, text: string, options: any = {}) {
  return {
    singleSelection: false,
    text,
    selectAllText: 'Select all',
    unSelectAllText: 'Clear all',
    enableCheckAll: true,
    enableSearchFilter: true,
    searchPlaceholderText: 'Search',
    badgeShowLimit: 4,
    maxHeight: 260,
    showCheckbox: true,
    noDataLabel: 'No data',
    skin,
    ...options
  };
}
