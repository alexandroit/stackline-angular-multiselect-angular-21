# Changelog

All notable repository changes are documented here.

## Unreleased

- Updated Angular, Angular CLI, and the Angular build system to 21.2.21.
- Updated Zone.js to 0.16.2 and regenerated the reproducible npm lockfile.
- Added Node 22/24 CI, a high-severity vulnerability gate, and a private
  security-reporting policy.
- Patched the development server and UUID advisories with tested overrides.
- Added an exact advisory policy for the two unfixed `image-size` parser
  findings in Angular's Less compiler; every other audit finding remains fatal.
