import { spawnSync } from 'node:child_process';

const approvedAdvisories = new Set([
  'https://github.com/advisories/GHSA-5p2g-fcmc-qvqq',
  'https://github.com/advisories/GHSA-w3rx-r6r6-pgpr'
]);

const audit = spawnSync(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['audit', '--json'],
  { encoding: 'utf8' }
);

if (audit.error) throw audit.error;

let report;

try {
  report = JSON.parse(audit.stdout);
} catch {
  throw new Error(`npm audit did not return JSON: ${audit.stderr || audit.stdout}`);
}

if (report.error) {
  throw new Error(`npm audit failed: ${report.error.summary || report.error.code}`);
}

const vulnerabilities = report.vulnerabilities || {};
const approved = new Set();

function isApprovedRootAdvisory(via) {
  return (
    typeof via === 'object' &&
    via !== null &&
    via.name === 'image-size' &&
    via.severity === 'high' &&
    approvedAdvisories.has(via.url)
  );
}

function hasNoCompatibleFix(fixAvailable) {
  return (
    fixAvailable === false ||
    (typeof fixAvailable === 'object' &&
      fixAvailable !== null &&
      fixAvailable.isSemVerMajor === true)
  );
}

let changed = true;

while (changed) {
  changed = false;

  for (const [name, finding] of Object.entries(vulnerabilities)) {
    if (approved.has(name)) continue;

    const via = Array.isArray(finding.via) ? finding.via : [];
    const onlyApprovedPaths =
      via.length > 0 &&
      via.every((item) =>
        typeof item === 'string' ? approved.has(item) : isApprovedRootAdvisory(item)
      );

    if (
      finding.severity === 'high' &&
      hasNoCompatibleFix(finding.fixAvailable) &&
      onlyApprovedPaths
    ) {
      approved.add(name);
      changed = true;
    }
  }
}

const unexpected = Object.keys(vulnerabilities).filter((name) => !approved.has(name));

if (unexpected.length > 0) {
  throw new Error(
    `Unexpected dependency audit findings: ${unexpected.join(', ')}. ` +
      'Only the two unfixed image-size parser advisories in Angular build tooling are accepted.'
  );
}

if (approved.size === 0) {
  console.log('Dependency audit passed with no vulnerabilities.');
} else {
  console.log(
    'Dependency audit accepted only the unfixed image-size parser advisories ' +
      `through development tooling: ${[...approved].join(', ')}.`
  );
}
