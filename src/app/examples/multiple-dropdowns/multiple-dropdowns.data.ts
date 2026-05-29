import { DropdownExample } from '../../shared/example.model';

export function createMultipleDropdownsExample(): DropdownExample {
  return {
  slug: "multiple-dropdowns",
  title: "Multiple dropdowns",
  kicker: "Multiple controls",
  description: "Two independent dropdown instances on one route.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "countries",
      modelName: "multipleDropdownsSelected",
      settingsName: "multipleDropdownsSettings",
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
          id: 1,
          itemName: "Brazil"
        }
      ],
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 2,
        text: "Multiple dropdowns",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  badgeShowLimit: 2\n}",
      template: false
    },
    {
      dataName: "skills",
      modelName: "multipleDropdownsSkillsSelected",
      settingsName: "multipleDropdownsSkillsSettings",
      data: [
        {
          id: 1,
          itemName: "Angular"
        },
        {
          id: 2,
          itemName: "JavaScript"
        },
        {
          id: 3,
          itemName: "HTML"
        },
        {
          id: 4,
          itemName: "CSS"
        },
        {
          id: 5,
          itemName: "ReactJS"
        },
        {
          id: 6,
          itemName: "HTML5"
        }
      ],
      model: [
        {
          id: 1,
          itemName: "Angular"
        }
      ],
      settings: {
        text: "Select Skills",
        skin: "material",
        enableSearchFilter: true,
        badgeShowLimit: 2
      },
      optionsText: "{ enableSearchFilter: true, badgeShowLimit: 2 }",
      template: false
    }
  ]
};
}
