# Security Policy

## Supported Version

This playground tracks its checked-in Angular 21 patch line. It is a private npm
application used for documentation and is not published as a package.

The installed application runtime is clean. Patched overrides are enforced for
the Angular development server and its UUID dependency. Angular's Less compiler
still reaches `image-size`, whose ICNS, JXL, and HEIF parser advisories do not
have an upstream patched release. The repository does not process untrusted
images during builds, and the affected tool is absent from deployed output.

`npm run audit:dependencies` fails on every finding except those two exact
unfixed advisories and will also fail once npm reports a compatible fix.

## Reporting

Do not open a public issue for a suspected vulnerability. Use GitHub's private
vulnerability reporting feature:

https://github.com/alexandroit/stackline-angular-multiselect-angular-21/security/advisories/new

Include affected files or routes, reproduction steps, impact, and any proposed
mitigation. Reports will be acknowledged as soon as practical.

## Scope

Security support covers this repository's source and build. Angular and other
third-party dependencies retain their own support policies and licenses.
