import { DropdownExample } from '../../shared/example.model';

export function createLimitSelectionExample(): DropdownExample {
  return {
  slug: "limit-selection",
  title: "Limit selection",
  kicker: "Limits",
  description: "Limits selection to two items.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "longCountries",
      modelName: "limitSelectionSelected",
      settingsName: "limitSelectionSettings",
      data: [
        {
          id: 11,
          itemName: "Federative Republic of Brazil"
        },
        {
          id: 12,
          itemName: "United States of America"
        },
        {
          id: 13,
          itemName: "United Kingdom of Great Britain and Northern Ireland"
        },
        {
          id: 14,
          itemName: "Portuguese Republic"
        },
        {
          id: 15,
          itemName: "Canada"
        },
        {
          id: 16,
          itemName: "Argentina"
        }
      ],
      model: [
        {
          id: 11,
          itemName: "Federative Republic of Brazil"
        },
        {
          id: 12,
          itemName: "United States of America"
        }
      ],
      settings: {
        enableSearchFilter: true,
        limitSelection: 2,
        badgeShowLimit: 2,
        text: "Limit selection",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  limitSelection: 2,\n  badgeShowLimit: 2\n}",
      template: false
    }
  ]
};
}
