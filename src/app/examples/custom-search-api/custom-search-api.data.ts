import { DropdownExample } from '../../shared/example.model';

export function createCustomSearchApiExample(): DropdownExample {
  return {
  slug: "custom-search-api",
  title: "Custom search from API",
  kicker: "Search",
  description: "Search example using a custom label key and API-like objects.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countriesMeta",
      modelName: "customSearchApiSelected",
      settingsName: "customSearchApiSettings",
      data: [
        {
          id: 1,
          name: "Brazil",
          itemName: "Brazil",
          capital: "Brasilia",
          region: "Americas"
        },
        {
          id: 2,
          name: "Canada",
          itemName: "Canada",
          capital: "Ottawa",
          region: "Americas"
        },
        {
          id: 3,
          name: "Portugal",
          itemName: "Portugal",
          capital: "Lisbon",
          region: "Europe"
        },
        {
          id: 4,
          name: "Germany",
          itemName: "Germany",
          capital: "Berlin",
          region: "Europe"
        },
        {
          id: 5,
          name: "Mexico",
          itemName: "Mexico",
          capital: "Mexico City",
          region: "Americas"
        }
      ],
      model: [
        {
          id: 1,
          name: "Brazil",
          itemName: "Brazil",
          capital: "Brasilia",
          region: "Americas"
        }
      ],
      settings: {
        enableSearchFilter: true,
        labelKey: "name",
        badgeShowLimit: 2,
        text: "Custom search from API",
        skin: "material"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  labelKey: \"name\",\n  badgeShowLimit: 2\n}",
      template: false
    }
  ]
};
}
