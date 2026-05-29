import { DropdownExample } from '../../shared/example.model';

export function createLimitBadgesExample(): DropdownExample {
  return {
  slug: "limit-badges",
  title: "Limit badges",
  kicker: "Limits",
  description: "Shows selected count once visible badges exceed the limit.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "longCountries",
      modelName: "limitBadgesSelected",
      settingsName: "limitBadgesSettings",
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
        },
        {
          id: 14,
          itemName: "Portuguese Republic"
        },
        {
          id: 15,
          itemName: "Canada"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 2,
        maxHeight: 220,
        text: "Limit badges",
        skin: "material"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 2,\n  maxHeight: 220\n}",
      template: false
    }
  ]
};
}
