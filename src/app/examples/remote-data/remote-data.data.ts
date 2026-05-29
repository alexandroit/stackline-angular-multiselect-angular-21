import { DropdownExample } from '../../shared/example.model';

export function createRemoteDataExample(): DropdownExample {
  return {
  slug: "remote-data",
  title: "Data from remote API",
  kicker: "Remote data",
  description: "Remote-style object list with labelKey and grouping.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countriesMeta",
      modelName: "remoteDataSelected",
      settingsName: "remoteDataSettings",
      data: [
        {
          id: 1,
          name: "Brazil",
          itemName: "Brazil",
          capital: "Brasilia",
          region: "Americas"
        },
        {
          id: 2,
          name: "Canada",
          itemName: "Canada",
          capital: "Ottawa",
          region: "Americas"
        },
        {
          id: 3,
          name: "Portugal",
          itemName: "Portugal",
          capital: "Lisbon",
          region: "Europe"
        },
        {
          id: 4,
          name: "Germany",
          itemName: "Germany",
          capital: "Berlin",
          region: "Europe"
        },
        {
          id: 5,
          name: "Mexico",
          itemName: "Mexico",
          capital: "Mexico City",
          region: "Americas"
        }
      ],
      model: [
        {
          id: 1,
          name: "Brazil",
          itemName: "Brazil",
          capital: "Brasilia",
          region: "Americas"
        }
      ],
      settings: {
        enableSearchFilter: true,
        labelKey: "name",
        groupBy: "region",
        text: "Data from remote API",
        skin: "material"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  labelKey: \"name\",\n  groupBy: \"region\"\n}",
      template: false
    }
  ]
};
}
