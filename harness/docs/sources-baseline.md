# Sources baseline

Supersedes every earlier "16.2%" figure. The 16.2% number was a naive
exact-path read of frontmatter `sources:` entries against the repo tree.
The audit (2026-09-23/24, read-only against `origin/main` 6a66c70c)
established the real baseline by classifying every entry deterministically.

## Definitions

- **Corpus:** 617 wiki pages; 554 with a non-empty `sources:` field;
  2,287 entries total, 751 unique.
- **Resolved** means: the entry identifies a real file in the repo tree,
  directly (exact path), via the deterministic node-ref convention
  (`src:`/`dat:`/`pat:`/`int:` → `kb/sources/<core>.md`, fallback
  `kb/data/<core>.md`), or via a live directory prefix.
- **Apparent coverage (16.2%)** — naive: exact-path matches only. Retired.
- **Actual baseline (38.3%)** — unique entries resolved under the D1
  interpretation (exact path + node-ref convention + directory prefixes).
- **Theoretical ceiling (49.8%)** — if every deterministic remap and every
  ambiguous entry resolved; the remainder (~50.2%) is unrecoverable without
  new evidence (lost paths, dead local files, URL-only prose).
- **Post-D2 measured** — **40.8% unique-entry** coverage after the 2026-09-24
  D2 run remapped the 17 deterministic A-class entries (57 occurrences,
  53 pages) to their verified targets. Per-entry: 23.4%. (Audit projection
  was 40.6%; the +0.2pp is tree drift between the audit commit 6a66c70c
  and the repair commit.)

## Class census (unique entries / occurrences / pages with any)

| class | meaning | unique | entries | pages |
|---|---|---|---|---|
| P | exact path exists | 220 | 352 | 89 |
| N | node-ref convention resolves | 68 | 114 | 44 |
| A | deterministic remap (now resolved post-D2) | 17 | 57 | 53 |
| B | ambiguous — never guessed (D3, on hold) | 65 | 236 | 153 |
| C | lost path / no longer exists | 307 | 1,406 | 445 |
| C_noderef_gone | `src:`-shaped, node never written | 62 | 96 | — |
| D | dead local `/Users/daniel/...` path | 18 | 48 | 43 (4 alive via dir prefix) |
| E | URL / prose / unresolvable-as-file | 56 | 74 | 48 |

## Decision record (Dan, 2026-09-24 ~00:40 EDT)

- **D1 APPROVE** — deterministic interpretation of existing data; zero wiki edits.
- **D2 APPROVE** — mechanical, auditable, reversible (this run).
- **D3 HOLD** — "Don't let the harness guess identity"; ambiguous entries are
  named-reviewer (Sammy) work, separate task; review queue at
  `~/workspace/wiki-harness/audit/d3-review-queue.jsonl`.
- **D4 REJECT** — "Deleting the citation destroys information about what the
  corpus originally referenced." No citation is ever deleted for being
  unresolvable. The unresolved-marker pass runs once, AFTER D3, with the
  wording:
  `⚠ Source reference unresolved — original target no longer exists in current corpus.`

The load-bearing distinction, in Dan's words: "WikiBrain once pointed at this
thing, but the thing isn't currently here" versus "WikiBrain never had evidence
here." Nothing in D1/D2 silently executes D3 or D4 — the boundaries stay
explicit in the repair ledger (`dat:1921-sources-repair-d2-20260924`) and in
`bin/wb-sources-repair` (`--apply-queue` refuses while D3 is on hold).

## Regression gate

`bin/wb-sources-repair --check` is baseline-anchored: it fails if any of the
220 audit-P entries, 68 audit-N targets, or 17 D2 remap targets stops
resolving in the current tree. B/C/D/E entries are labeled, not resolved —
not this gate's business.

## Coverage math, current

`data/sources-index.json` (emitted by `bin/wb-harness`) carries per-page
`coverage` plus the class breakdown; the live figure is computed from it,
never from the naive exact-path count.
