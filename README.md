# @stackline/angular-multiselect-dropdown Angular 21 Playground

Lightweight StackBlitz playground for the Angular 21 line of `@stackline/angular-multiselect-dropdown`.

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
- dialog and overflow clipping support
- classic and material skins
- search, single selection, grouping, templating, limits, lazy loading, virtual scrolling, events, and disabled states

## Run

```bash
npm install
npm start
```

## StackBlitz

```text
https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start
```

Open a specific route by adding `initialpath`:

```text
https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-21?startScript=start&initialpath=%2Fsearch-filter
```
