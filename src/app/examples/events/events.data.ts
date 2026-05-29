import { DropdownExample } from '../../shared/example.model';

export function createEventsExample(): DropdownExample {
  return {
  slug: "events",
  title: "Events",
  kicker: "Events",
  description: "onSelect/onDeSelect/onSelectAll/onDeSelectAll event logging.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "eventsSelected",
      settingsName: "eventsSettings",
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
          id: 3,
          itemName: "Portugal"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 3,
        text: "Events",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 3\n}",
      template: false
    }
  ]
};
}
