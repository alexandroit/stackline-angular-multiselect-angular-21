import { DropdownExample } from '../../shared/example.model';

export function createTemplateDrivenFormsExample(): DropdownExample {
  return {
  slug: "template-driven-forms",
  title: "Template-driven forms",
  kicker: "Forms",
  description: "Template-driven form style example with validation-friendly state.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "skills",
      modelName: "templateDrivenFormsSelected",
      settingsName: "templateDrivenFormsSettings",
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
      model: [],
      settings: {
        enableSearchFilter: true,
        text: "Select Skills",
        badgeShowLimit: 3,
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  text: \"Select Skills\",\n  badgeShowLimit: 3\n}",
      template: false
    }
  ]
};
}
