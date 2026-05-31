import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'basic', loadChildren: () => import('./examples/basic/basic.module').then((m) => m.BasicExampleModule) },
  { path: 'keyboard-contract', loadChildren: () => import('./examples/keyboard-contract/keyboard-contract.module').then((m) => m.KeyboardContractExampleModule) },
  { path: 'aria-state', loadChildren: () => import('./examples/aria-state/aria-state.module').then((m) => m.AriaStateExampleModule) },
  { path: 'template-slots', loadChildren: () => import('./examples/template-slots/template-slots.module').then((m) => m.TemplateSlotsExampleModule) },
  { path: 'headless-aria', loadChildren: () => import('./examples/headless-aria/headless-aria.module').then((m) => m.HeadlessAriaExampleModule) },
  { path: 'single-selection', loadChildren: () => import('./examples/single-selection/single-selection.module').then((m) => m.SingleSelectionExampleModule) },
  { path: 'search-filter', loadChildren: () => import('./examples/search-filter/search-filter.module').then((m) => m.SearchFilterExampleModule) },
  { path: 'custom-search-api', loadChildren: () => import('./examples/custom-search-api/custom-search-api.module').then((m) => m.CustomSearchApiExampleModule) },
  { path: 'search-filter-by-property', loadChildren: () => import('./examples/search-filter-by-property/search-filter-by-property.module').then((m) => m.SearchFilterByPropertyExampleModule) },
  { path: 'search-add-new-item', loadChildren: () => import('./examples/search-add-new-item/search-add-new-item.module').then((m) => m.SearchAddNewItemExampleModule) },
  { path: 'group-by', loadChildren: () => import('./examples/group-by/group-by.module').then((m) => m.GroupByExampleModule) },
  { path: 'templating', loadChildren: () => import('./examples/templating/templating.module').then((m) => m.TemplatingExampleModule) },
  { path: 'template-driven-forms', loadChildren: () => import('./examples/template-driven-forms/template-driven-forms.module').then((m) => m.TemplateDrivenFormsExampleModule) },
  { path: 'reactive-forms', loadChildren: () => import('./examples/reactive-forms/reactive-forms.module').then((m) => m.ReactiveFormsExampleModule) },
  { path: 'virtual-scrolling', loadChildren: () => import('./examples/virtual-scrolling/virtual-scrolling.module').then((m) => m.VirtualScrollingExampleModule) },
  { path: 'lazy-loading-api', loadChildren: () => import('./examples/lazy-loading-api/lazy-loading-api.module').then((m) => m.LazyLoadingApiExampleModule) },
  { path: 'remote-data', loadChildren: () => import('./examples/remote-data/remote-data.module').then((m) => m.RemoteDataExampleModule) },
  { path: 'list-loop', loadChildren: () => import('./examples/list-loop/list-loop.module').then((m) => m.ListLoopExampleModule) },
  { path: 'dialog', loadChildren: () => import('./examples/dialog/dialog.module').then((m) => m.DialogExampleModule) },
  { path: 'multiple-dropdowns', loadChildren: () => import('./examples/multiple-dropdowns/multiple-dropdowns.module').then((m) => m.MultipleDropdownsExampleModule) },
  { path: 'dynamic-data', loadChildren: () => import('./examples/dynamic-data/dynamic-data.module').then((m) => m.DynamicDataExampleModule) },
  { path: 'methods', loadChildren: () => import('./examples/methods/methods.module').then((m) => m.MethodsExampleModule) },
  { path: 'events', loadChildren: () => import('./examples/events/events.module').then((m) => m.EventsExampleModule) },
  { path: 'disabled', loadChildren: () => import('./examples/disabled/disabled.module').then((m) => m.DisabledExampleModule) },
  { path: 'limit-selection', loadChildren: () => import('./examples/limit-selection/limit-selection.module').then((m) => m.LimitSelectionExampleModule) },
  { path: 'limit-badges', loadChildren: () => import('./examples/limit-badges/limit-badges.module').then((m) => m.LimitBadgesExampleModule) },
  { path: 'custom-placeholder', loadChildren: () => import('./examples/custom-placeholder/custom-placeholder.module').then((m) => m.CustomPlaceholderExampleModule) },
  { path: 'styling', loadChildren: () => import('./examples/styling/styling.module').then((m) => m.StylingExampleModule) },
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: '**', redirectTo: 'basic' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
