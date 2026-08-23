# @stackline/angular-multiselect-dropdown Angular 21 Playground

Lightweight StackBlitz playground for the Angular 21 line of `@stackline/angular-multiselect-dropdown`.

This playground currently installs `@stackline/angular-multiselect-dropdown@21.2.4`
against Angular `21.2.21`, the final tested security patch in this project.

This project includes the full live test matrix in one Angular app. Each example is isolated in its own folder, Angular module, route, and data object:

```text
src/app/examples/basic/basic.module.ts
src/app/examples/basic/basic.component.ts
src/app/examples/basic/basic.component.html
src/app/examples/basic/basic.component.scss
src/app/examples/basic/basic.data.ts
```

The same pattern is used for every route.

Shared layout follows the same maintainable Angular shape:

```text
src/app/app.component.ts
src/app/app.component.html
src/app/app.component.scss
src/app/shared/example-page.component.ts
src/app/shared/example-page.component.html
src/app/shared/example-page.component.scss
```

- settings-only skin switching
- classic, material, dark, custom, and brand skins
- accessibility-focused keyboard and ARIA contract checks
- `aria-selected` plus `aria-checked` multiselect state checks
- template slot examples for custom badges, labels, items, headers, and empty states
- renderless/headless state helper examples for custom Angular HTML
- dialog and overflow clipping support with `tagToBody`
- search, single selection, grouping, templating, limits, lazy loading, virtual scrolling, events, and disabled states

## Routes

Every route has its own module, component, template, stylesheet, and data file.

| Example | Route |
| --- | --- |
| Basic usage | `/basic` |
| Keyboard contract | `/keyboard-contract` |
| ARIA state | `/aria-state` |
| Template slots | `/template-slots` |
| Headless + ARIA | `/headless-aria` |
| Single selection | `/single-selection` |
| Search filter | `/search-filter` |
| Custom search from API | `/custom-search-api` |
| Search filter by property | `/search-filter-by-property` |
| Search and add new item | `/search-add-new-item` |
| Group by | `/group-by` |
| Templating | `/templating` |
| Template-driven forms | `/template-driven-forms` |
| Reactive forms | `/reactive-forms` |
| Virtual scrolling | `/virtual-scrolling` |
| Lazy loading from API | `/lazy-loading-api` |
| Data from remote API | `/remote-data` |
| Using in list for loop | `/list-loop` |
| Using inside dialog | `/dialog` |
| Multiple dropdowns | `/multiple-dropdowns` |
| Load dynamic data | `/dynamic-data` |
| Methods | `/methods` |
| Events | `/events` |
| Disabled state | `/disabled` |
| Limit selection | `/limit-selection` |
| Limit badges | `/limit-badges` |
| Custom placeholder | `/custom-placeholder` |
| Styling | `/styling` |

## Run

```sh
npm ci
npm start
```

Run the same build and vulnerability gate used by CI:

```sh
npm run check
```

## StackBlitz

```text
https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start
```

Open a specific route by adding `initialpath`:

```text
https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fsearch-filter
```

## License

The playground source is available under the [MIT License](LICENSE), including
the retained attribution for the original Cuppa Labs project. Dependencies
retain their respective licenses.
