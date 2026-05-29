import { DropdownExample } from '../../shared/example.model';

export function createDialogExample(): DropdownExample {
  return {
  slug: "dialog",
  title: "Using inside dialog",
  kicker: "Dialog support",
  description: "Clipping-safe dropdown with tagToBody inside an overflow container.",
  surfaceClass: "",
  dialog: true,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "dialogSelected",
      settingsName: "dialogSettings",
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
        tagToBody: true,
        appendToBody: true,
        autoPosition: false,
        position: "bottom",
        maxHeight: 180,
        badgeShowLimit: 2,
        text: "Using inside dialog",
        skin: "material"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  tagToBody: true,\n  appendToBody: true,\n  autoPosition: false,\n  position: \"bottom\",\n  maxHeight: 180,\n  badgeShowLimit: 2\n}",
      template: false
    }
  ]
};
}
