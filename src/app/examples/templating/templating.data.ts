import { DropdownExample } from '../../shared/example.model';

export function createTemplatingExample(): DropdownExample {
  return {
  slug: "templating",
  title: "Templating",
  kicker: "Templates",
  description: "Custom item and chip templates.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "templateItems",
      modelName: "templatingSelected",
      settingsName: "templatingSettings",
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
          id: 31,
          itemName: "Primary",
          detail: "Main interface color",
          color: "#3f51b5"
        },
        {
          id: 33,
          itemName: "Warning",
          detail: "Attention state",
          color: "#ed6c02"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 3,
        maxHeight: 220,
        text: "Templating",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 3,\n  maxHeight: 220\n}",
      template: true
    }
  ]
};
}
