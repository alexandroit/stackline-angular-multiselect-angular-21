import { DropdownExample } from '../../shared/example.model';

export function createVirtualScrollingExample(): DropdownExample {
  return {
  slug: "virtual-scrolling",
  title: "Virtual scrolling",
  kicker: "Large data",
  description: "Large list with constrained dropdown height.",
  surfaceClass: "",
  dialog: false,
  skinSwitcher: false,
  dropdowns: [
    {
      dataName: "largeList",
      modelName: "virtualScrollingSelected",
      settingsName: "virtualScrollingSettings",
      data: [
        {
          id: 101,
          itemName: "Item 01"
        },
        {
          id: 102,
          itemName: "Item 02"
        },
        {
          id: 103,
          itemName: "Item 03"
        },
        {
          id: 104,
          itemName: "Item 04"
        },
        {
          id: 105,
          itemName: "Item 05"
        },
        {
          id: 106,
          itemName: "Item 06"
        },
        {
          id: 107,
          itemName: "Item 07"
        },
        {
          id: 108,
          itemName: "Item 08"
        },
        {
          id: 109,
          itemName: "Item 09"
        },
        {
          id: 110,
          itemName: "Item 10"
        },
        {
          id: 111,
          itemName: "Item 11"
        },
        {
          id: 112,
          itemName: "Item 12"
        },
        {
          id: 113,
          itemName: "Item 13"
        },
        {
          id: 114,
          itemName: "Item 14"
        },
        {
          id: 115,
          itemName: "Item 15"
        },
        {
          id: 116,
          itemName: "Item 16"
        },
        {
          id: 117,
          itemName: "Item 17"
        },
        {
          id: 118,
          itemName: "Item 18"
        },
        {
          id: 119,
          itemName: "Item 19"
        },
        {
          id: 120,
          itemName: "Item 20"
        },
        {
          id: 121,
          itemName: "Item 21"
        },
        {
          id: 122,
          itemName: "Item 22"
        },
        {
          id: 123,
          itemName: "Item 23"
        },
        {
          id: 124,
          itemName: "Item 24"
        },
        {
          id: 125,
          itemName: "Item 25"
        },
        {
          id: 126,
          itemName: "Item 26"
        },
        {
          id: 127,
          itemName: "Item 27"
        },
        {
          id: 128,
          itemName: "Item 28"
        },
        {
          id: 129,
          itemName: "Item 29"
        },
        {
          id: 130,
          itemName: "Item 30"
        },
        {
          id: 131,
          itemName: "Item 31"
        },
        {
          id: 132,
          itemName: "Item 32"
        },
        {
          id: 133,
          itemName: "Item 33"
        },
        {
          id: 134,
          itemName: "Item 34"
        },
        {
          id: 135,
          itemName: "Item 35"
        },
        {
          id: 136,
          itemName: "Item 36"
        },
        {
          id: 137,
          itemName: "Item 37"
        },
        {
          id: 138,
          itemName: "Item 38"
        },
        {
          id: 139,
          itemName: "Item 39"
        },
        {
          id: 140,
          itemName: "Item 40"
        }
      ],
      model: [
        {
          id: 104,
          itemName: "Item 04"
        }
      ],
      settings: {
        enableSearchFilter: true,
        maxHeight: 140,
        badgeShowLimit: 3,
        text: "Virtual scrolling",
        skin: "classic"
      },
      optionsText: "{\n  enableSearchFilter: true,\n  maxHeight: 140,\n  badgeShowLimit: 3\n}",
      template: false
    }
  ]
};
}
