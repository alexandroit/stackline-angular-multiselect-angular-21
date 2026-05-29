import { DropdownExample } from '../../shared/example.model';

export function createReactiveFormsExample(): DropdownExample {
  return {
  slug: "reactive-forms",
  title: "Reactive forms",
  kicker: "Forms",
  description: "Reactive-form style selected value handling.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "skills",
      modelName: "reactiveFormsSelected",
      settingsName: "reactiveFormsSettings",
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
          id: 6,
          itemName: "HTML5"
        }
      ],
      settings: {
        enableSearchFilter: true,
        text: "Select Skills",
        badgeShowLimit: 3,
        skin: "material"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  text: \"Select Skills\",\n  badgeShowLimit: 3\n}",
      template: false
    }
  ]
};
}
