import { DropdownExample } from '../../shared/example.model';

export function createListLoopExample(): DropdownExample {
  return {
  slug: "list-loop",
  title: "Using in list for loop",
  kicker: "Repeating controls",
  description: "Dropdown configuration suitable for repeated list rows.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "listLoopSelected",
      settingsName: "listLoopSettings",
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
          id: 1,
          itemName: "Brazil"
        },
        {
          id: 3,
          itemName: "Portugal"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 2,
        text: "Using in list for loop",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 2\n}",
      template: false
    }
  ]
};
}
