import { DropdownExample } from '../../shared/example.model';

export function createGroupByExample(): DropdownExample {
  return {
  slug: "group-by",
  title: "Group by",
  kicker: "Grouping",
  description: "Groups options by a region field.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "groupedCountries",
      modelName: "groupBySelected",
      settingsName: "groupBySettings",
      data: [
        {
          id: 21,
          itemName: "Brazil",
          region: "Americas"
        },
        {
          id: 22,
          itemName: "Canada",
          region: "Americas"
        },
        {
          id: 23,
          itemName: "Portugal",
          region: "Europe"
        },
        {
          id: 24,
          itemName: "Germany",
          region: "Europe"
        },
        {
          id: 25,
          itemName: "Mexico",
          region: "Americas"
        },
        {
          id: 26,
          itemName: "Colombia",
          region: "Americas"
        }
      ],
      model: [
        {
          id: 21,
          itemName: "Brazil",
          region: "Americas"
        }
      ],
      settings: {
        enableSearchFilter: true,
        groupBy: "region",
        selectGroup: true,
        maxHeight: 220,
        text: "Group by",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  groupBy: \"region\",\n  selectGroup: true,\n  maxHeight: 220\n}",
      template: false
    }
  ]
};
}
