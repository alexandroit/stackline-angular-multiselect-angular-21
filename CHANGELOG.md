# Changelog

All notable repository changes are documented here.

## Unreleased

- Updated Angular, Angular CLI, and the Angular build system to 21.2.21.
- Updated Zone.js to 0.16.2 and regenerated the reproducible npm lockfile.
- Added Node 22/24 CI, a high-severity vulnerability gate, and a private
  security-reporting policy.
- Confirmed the application runtime audit is clean. Four moderate development
  server findings remain upstream in Angular 21 with no compatible backport;
  optional image tooling is excluded from the CI gate and production output.
