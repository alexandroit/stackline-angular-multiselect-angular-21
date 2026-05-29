import { DropdownExample } from '../../shared/example.model';

export function createDisabledExample(): DropdownExample {
  return {
  slug: "disabled",
  title: "Disabled state",
  kicker: "State",
  description: "Disabled dropdown with existing selected value.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "disabledSelected",
      settingsName: "disabledSettings",
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
          id: 6,
          itemName: "Germany"
        }
      ],
      settings: {
        disabled: true,
        enableSearchFilter: true,
        text: "Disabled state",
        skin: "classic"
      },
      optionsText: "{\n  disabled: true,\n  enableSearchFilter: true\n}",
      template: false
    }
  ]
};
}
