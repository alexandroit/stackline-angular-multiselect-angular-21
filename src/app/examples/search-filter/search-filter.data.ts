import { DropdownExample } from '../../shared/example.model';

export function createSearchFilterExample(): DropdownExample {
  return {
  slug: "search-filter",
  title: "Search filter",
  kicker: "Search",
  description: "Searchable dropdown with select-all support.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "searchFilterSelected",
      settingsName: "searchFilterSettings",
      data: [
        {
          id: 1,
          itemName: "Brazil"
        },
        {
          id: 2,
          itemName: "Canada"
        },
        {
          id: 3,
          itemName: "Portugal"
        },
        {
          id: 4,
          itemName: "United States"
        },
        {
          id: 5,
          itemName: "Argentina"
        },
        {
          id: 6,
          itemName: "Germany"
        },
        {
          id: 7,
          itemName: "Mexico"
        },
        {
          id: 8,
          itemName: "Colombia"
        }
      ],
      model: [
        {
          id: 4,
          itemName: "United States"
        }
      ],
      settings: {
        enableSearchFilter: true,
        text: "Search filter",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true\n}",
      template: false
    }
  ]
};
}
