import { DropdownExample } from '../../shared/example.model';

export function createStylingExample(): DropdownExample {
  return {
  slug: "styling",
  title: "Styling",
  kicker: "Theme",
  description: "Custom-skin route showing CSS variable styling.",
  surfaceClass: "custom-skin-sample",
  dialog: false,
  skinSwitcher: true,
  dropdowns: [
    {
      dataName: "templateItems",
      modelName: "stylingSelected",
      settingsName: "stylingSettings",
      data: [
        {
          id: 31,
          itemName: "Primary",
          detail: "Main interface color",
          color: "#3f51b5"
        },
        {
          id: 32,
          itemName: "Success",
          detail: "Positive feedback state",
          color: "#2e7d32"
        },
        {
          id: 33,
          itemName: "Warning",
          detail: "Attention state",
          color: "#ed6c02"
        },
        {
          id: 34,
          itemName: "Danger",
          detail: "Destructive state",
          color: "#d32f2f"
        }
      ],
      model: [
        {
          id: 32,
          itemName: "Success",
          detail: "Positive feedback state",
          color: "#2e7d32"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 3,
        maxHeight: 220,
        text: "Styling",
        skin: "custom"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 3,\n  maxHeight: 220\n}",
      template: true
    }
  ]
};
}
