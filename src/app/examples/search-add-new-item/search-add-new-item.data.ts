import { DropdownExample } from '../../shared/example.model';

export function createSearchAddNewItemExample(): DropdownExample {
  return {
  slug: "search-add-new-item",
  title: "Search and add new item",
  kicker: "Search",
  description: "Allows creating a new item from the search box.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "searchAddNewItemSelected",
      settingsName: "searchAddNewItemSettings",
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
      model: [],
      settings: {
        enableSearchFilter: true,
        addNewItemOnFilter: true,
        addNewButtonText: "Add country",
        text: "Search and add new item",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  addNewItemOnFilter: true,\n  addNewButtonText: \"Add country\"\n}",
      template: false
    }
  ]
};
}
