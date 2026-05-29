import { DropdownExample } from '../../shared/example.model';

export function createCustomPlaceholderExample(): DropdownExample {
  return {
  slug: "custom-placeholder",
  title: "Custom placeholder",
  kicker: "Placeholder",
  description: "Custom placeholder and empty-state copy.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "customPlaceholderSelected",
      settingsName: "customPlaceholderSettings",
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
        text: "Choose markets",
        noDataLabel: "No markets found",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  text: \"Choose markets\",\n  noDataLabel: \"No markets found\"\n}",
      template: false
    }
  ]
};
}
