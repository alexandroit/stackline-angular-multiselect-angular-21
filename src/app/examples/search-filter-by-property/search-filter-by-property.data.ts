import { DropdownExample } from '../../shared/example.model';

export function createSearchFilterByPropertyExample(): DropdownExample {
  return {
  slug: "search-filter-by-property",
  title: "Search filter by property",
  kicker: "Search",
  description: "Searches items by a configured label property.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countriesMeta",
      modelName: "searchFilterByPropertySelected",
      settingsName: "searchFilterByPropertySettings",
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
          id: 3,
          name: "Portugal",
          itemName: "Portugal",
          capital: "Lisbon",
          region: "Europe"
        }
      ],
      settings: {
        enableSearchFilter: true,
        labelKey: "name",
        searchBy: [
          "name",
          "capital"
        ],
        text: "Search filter by property",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  labelKey: \"name\",\n  searchBy: [\n    \"name\",\n    \"capital\"\n  ]\n}",
      template: false
    }
  ]
};
}
