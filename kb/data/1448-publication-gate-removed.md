+++
id            = "dat:1448-publication-gate-removed"
layer         = 1
type          = "datum"
title         = "Publication gate removed (2026-09-12): Dan's 'everything goes public' directive"
claim         = "On 2026-09-12 Dan directed: 'Everything goes public, drop the gate.' The GitHub Pages deploy had been failing on every push since at least 2026-09-12 because bin/wb-check-publish ('Refuse to publish sensitive material') found 364 problems in the built site: 38 distinct phone numbers and 4 email addresses across the rendered wiki/kb prose. The most frequent hits were Dan's own identifiers — +12124702449 (22 files), +17244346811 (16 files), +17249204125, and phloxenheim@gmail.com — plus third-party numbers (Jerad Friedline +19165013615, Jim Shaffer +14125139408, Tuquick +17248123683, Ally Lubin allylubin@gmail.com, others). The workflow step was removed from .github/workflows/pages.yml, bin/wb-check-publish was deleted, and the stale references in ROADMAP.md and kb/README.md were annotated SUPERSEDED. The 'everything goes in' raw-archive directive (2026-09-10) now extends to the published site: no pre-deploy PII exclusion runs."
cites         = ["src:operator-testimony-2026-09-12"]
attributed_to = "src:operator-testimony-2026-09-12"
confidence    = "high"
extraction    = "GitHub Actions logs for run 34730282106 (validate job, step 'Refuse to publish sensitive material'); phone/email tallies from the step's 364-problem output. Directive verbatim from Dan in chat 2026-09-12 ~21:30 EDT."
importance    = 4
tags          = ["publication-gate", "github-pages", "directive", "2026"]
created       = "2026-09-12"
+++

## What was removed

- `.github/workflows/pages.yml`: the "Refuse to publish sensitive material" step
  (`python3 bin/wb-check-publish`) deleted from the `validate` job, along with its
  comment block.
- `bin/wb-check-publish`: script deleted.
- `ROADMAP.md` (§Privacy) and `kb/README.md`: stale gate references annotated
  `SUPERSEDED 2026-09-12`.

## What still runs

`bin/wb-validate`, the invariant/corpus/census regression tests, and the three
builders (`wb-build`, `wb-archive`, `wb-corpus`) are untouched. Only the
publish-time PII refusal is gone.

## Historical notes left intact

`kb/data/0037-publication-gate-fails-safe.md`,
`kb/data/0038-validator-hole-is-the-exemption-i-made.md`, and
`kb/patterns/partial-data-confident-error.md` describe the gate catching real
leaks on earlier dates. Those records are accurate history and were not edited.
