import { DropdownExample } from '../../shared/example.model';

export function createBasicExample(): DropdownExample {
  return {
  slug: "basic",
  title: "Basic multi",
  kicker: "Basic",
  description: "Classic multi-select with chips and select all.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "basicSelected",
      settingsName: "basicSettings",
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
          id: 2,
          itemName: "Canada"
        }
      ],
      settings: {
        enableSearchFilter: false,
        text: "Basic multi",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: false\n}",
      template: false
    }
  ]
};
}
