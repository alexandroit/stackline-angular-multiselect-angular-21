import { DropdownExample } from '../../shared/example.model';

export function createMethodsExample(): DropdownExample {
  return {
  slug: "methods",
  title: "Methods",
  kicker: "API",
  description: "Method-focused example with selected state ready for imperative actions.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "methodsSelected",
      settingsName: "methodsSettings",
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
        enableSearchFilter: true,
        badgeShowLimit: 3,
        text: "Methods",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 3\n}",
      template: false
    }
  ]
};
}
