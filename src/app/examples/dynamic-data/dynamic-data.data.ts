import { DropdownExample } from '../../shared/example.model';

export function createDynamicDataExample(): DropdownExample {
  return {
  slug: "dynamic-data",
  title: "Load dynamic data",
  kicker: "Dynamic data",
  description: "Dynamic item list that can be swapped by the host app.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "fruits",
      modelName: "dynamicDataSelected",
      settingsName: "dynamicDataSettings",
      data: [
        {
          id: "a",
          itemName: "Apple"
        },
        {
          id: "b",
          itemName: "Banana"
        },
        {
          id: "c",
          itemName: "Orange"
        },
        {
          id: "d",
          itemName: "Grape"
        }
      ],
      model: [],
      settings: {
        enableSearchFilter: true,
        text: "Select Items",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  text: \"Select Items\"\n}",
      template: false
    }
  ]
};
}
