import { DropdownExample } from '../../shared/example.model';

export function createSingleSelectionExample(): DropdownExample {
  return {
  slug: "single-selection",
  title: "Single selection",
  kicker: "Selection mode",
  description: "Single-select behavior without checkboxes.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "singleSelectionSelected",
      settingsName: "singleSelectionSettings",
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
        }
      ],
      settings: {
        singleSelection: true,
        showCheckbox: false,
        enableCheckAll: false,
        text: "Single selection",
        skin: "classic"
      },
      optionsText: "{\n  singleSelection: true,\n  showCheckbox: false,\n  enableCheckAll: false\n}",
      template: false
    }
  ]
};
}
