+++
id         = "dat:1921-sources-repair-d2-20260924"
layer      = 1
type       = "datum"
title      = "D2 sources repair run (2026-09-24): 57 deterministic remaps across 53 pages"
claim      = "On 2026-09-24, 57 wiki frontmatter `sources:` entries across 53 pages were remapped to their deterministic §5-table targets (D2, Dan-approved); no page body touched, no citation deleted, no ambiguous target guessed."
cites      = ["src:sources-repair-proposal-20260923"]
confidence = "high"
importance = 4
tags       = ["sources-repair", "epistemics", "maintenance"]
created    = "2026-09-24"
+++

## D2 repair run — 2026-09-24

Executed Dan's approved decision D2 (mechanical, auditable, reversible) from the
sources-repair proposal (2026-09-23/24). Every replacement below is a verbatim
frontmatter `sources:` entry rewritten to the §5 deterministic-remap table's
target, verified byte-present in the repo tree before the edit (fail-stop).
No page body text touched; no entry deleted; no ambiguous entry guessed.

Totals: 57 replacements across 53 pages;
rules R-EXT ×3 (bare kb/data/<id> → kb/data/<id>.md),
R-EVT ×5 (intake/events.jsonl, claims/events.jsonl → testimony/events.jsonl),
TABLE ×49 (moved raw-drive-sweep / misc paths). R-DIR-ALIVE (4 live directory
prefixes) required no page edits and is covered by the D1 adapter.

### Full change table (page | old entry | new entry | rule)

| page | old | new | rule |
|---|---|---|---|
| wiki/health/chemical-architecture.md | `intake/events.jsonl` | `testimony/events.jsonl` | R-EVT |
| wiki/health/cocaine.md | `intake/events.jsonl` | `testimony/events.jsonl` | R-EVT |
| wiki/health/intake-ledger.md | `intake/events.jsonl` | `testimony/events.jsonl` | R-EVT |
| wiki/interests/hasan-piker.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/interests/music/aliases/mogzart.md | `raw/self/twitter/tweets_sample_2019-2026.txt` | `raw/drive-sweep/20260911/twitter/profile-samples/tweets_sample_2019-2026.txt` | TABLE |
| wiki/meta/claim-validity.md | `claims/events.jsonl` | `testimony/events.jsonl` | R-EVT |
| wiki/mind/psychosexual/arrangement-history.md | `raw/self/message-csv/imessage_export_7248123683_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_7248123683_20260624.csv` | TABLE |
| wiki/mind/synthesis/dan-annie-fallout-verdict.md | `raw/self/message-csv/imessage_export_7248123683_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_7248123683_20260624.csv` | TABLE |
| wiki/mind/synthesis/four-financial-inversions.md | `raw/self/message-csv/aug-sep-2026-imessage-export` | `raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv` | TABLE |
| wiki/mind/synthesis/political-psyops.md | `raw/self/chats/___ The J6 Chat.md` | `raw/googlechat/the-j6-chat.md` | TABLE |
| wiki/mind/synthesis/provision-grammar.md | `raw/self/message-csv/aug-sep-2026-imessage-export` | `raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv` | TABLE |
| wiki/mind/synthesis/severance-language-atlas.md | `kb/data/0081-explicit-commitment-architecture` | `kb/data/0081-explicit-commitment-architecture.md` | R-EXT |
| wiki/mind/synthesis/severance-language-atlas.md | `kb/data/0090-block-retraction-2026-09-11` | `kb/data/0090-block-retraction-2026-09-11.md` | R-EXT |
| wiki/mind/synthesis/severance-language-atlas.md | `kb/data/1292-block-unblock-loop-severance-recount-129-128` | `kb/data/1292-block-unblock-loop-severance-recount-129-128.md` | R-EXT |
| wiki/mind/synthesis/the-register-never-closes.md | `intake/events.jsonl` | `testimony/events.jsonl` | R-EVT |
| wiki/mind/synthesis/twitter-2024-cognitive-state.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/mind/synthesis/vacancy-rule.md | `raw/self/message-csv/imessage_export_3307038747_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_3307038747_20260624.csv` | TABLE |
| wiki/people/annie-ulmer.md | `raw/self/message-csv/imessage_export_7248123683_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_7248123683_20260624.csv` | TABLE |
| wiki/people/jerel-coles.md | `raw/self/message-csv/imessage_export_7248123683_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_7248123683_20260624.csv` | TABLE |
| wiki/people/john-carney.md | `raw/self/location/2026-06-22-ingest/Location History (Timeline)/Semantic Location History/2019/2019_FEBRUARY.json` | `raw/sammy/20260912-location-history/semantic/2019/2019_FEBRUARY.json` | TABLE |
| wiki/people/katherine-palakovich.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/people/kevin-mckiernan.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/people/marty-jackson.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/people/renae-holland.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/people/tuquick-17248123683.md | `raw/self/message-csv/imessage_export_7248123683_20260624.csv` | `raw/drive-sweep/20260911/imessage/imessage_export_7248123683_20260624.csv` | TABLE |
| wiki/places/90th-st-manhattan.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/self/concepts/chatgpt.md | `raw/self/twitter/tweets_sample_2019-2026.txt` | `raw/drive-sweep/20260911/twitter/profile-samples/tweets_sample_2019-2026.txt` | TABLE |
| wiki/self/concepts/llm.md | `raw/self/twitter/tweets_sample_2019-2026.txt` | `raw/drive-sweep/20260911/twitter/profile-samples/tweets_sample_2019-2026.txt` | TABLE |
| wiki/self/location-history.md | `raw/self/archives/google-data-export-index-20260623.html` | `raw/drive-sweep/20260911/takeout-index/google-data-export-index-20260623.html` | TABLE |
| wiki/self/twitter.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter.md | `raw/self/twitter/tweets_sample_2019-2026.txt` | `raw/drive-sweep/20260911/twitter/profile-samples/tweets_sample_2019-2026.txt` | TABLE |
| wiki/self/twitter/2009.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2010.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2011.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2012.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2013.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2014.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2015.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2016.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2017.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2018.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2019.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2020.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2021.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2022.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2023.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2024.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2025.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/self/twitter/2026.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/timeline/events/2026-08-26-visible-change.md | `wiki/mind/synthesis/august-26-block-retraction` | `wiki/mind/synthesis/august-26-block-retraction.md` | TABLE |
| wiki/timeline/periods/covid-era-2020.md | `raw/self/archives/google-data-export-index-20260623.html` | `raw/drive-sweep/20260911/takeout-index/google-data-export-index-20260623.html` | TABLE |
| wiki/timeline/periods/nyc-first-era-2010-2013.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/timeline/periods/nyc-first-era-2010-2013.md | `raw/self/twitter/tweet-archive.xlsx` | `raw/twitter/tweet-archive.csv` | TABLE |
| wiki/work/creative-license-exit.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/work/creative-license.md | `raw/self/gmail-captures/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | `raw/gmail/2026-08-10-creative-license-kevin-mckiernan-gmail.md` | TABLE |
| wiki/work/full-sail-2008-2009.md | `raw/self/facebook/facebook-export-2026-06-23` | `kb/sources/facebook-export-2026-06-23.md` | TABLE |
| wiki/work/tech/imessage-tooling/overview.md | `ingest-queue.md` | `ingest-queue.json` | TABLE |

### Explicit decision boundaries (Dan's order, 2026-09-24 ~00:40 EDT)

- D1 APPROVED — deterministic interpretation of existing data; zero wiki edits
  (harness adapter: SRC_REMAP table, node-ref convention, directory-prefix
  semantics, entry-kind classification; derived files under site/ never resolve
  a sources: entry).
- D2 APPROVED — the changes above; mechanical, auditable, reversible.
- D3 ON HOLD — nothing in this run guesses an ambiguous target. The 65 B-class
  entries stay exactly as written; resolution is named-reviewer (Sammy) work,
  separate task, tracked in the D3 review queue — NOT silently executed here.
- D4 REJECTED — no citation was deleted. Deleting a citation destroys information
  about what the corpus originally referenced. The 'WikiBrain once pointed at this
  thing, but the thing isn't currently here' vs 'WikiBrain never had evidence here'
  distinction is load-bearing: the 307 C-class and 62 C_noderef_gone entries keep
  their original spellings until the marking pass (which runs once, AFTER D3).
  Dan's D4 marker wording, reserved for that later pass:
  `⚠ Source reference unresolved — original target no longer exists in current corpus.`

### Coverage progression

16.2% apparent (naive exact-path) → 38.3% actual baseline (D1 interpretation)
→ ~40.8% post-D2 measured (this run; 17 A-class entries now resolve, 298/730
unique entries; per-entry 23.4%).
The 38.3% figure replaces 16.2% everywhere in project docs. Theoretical ceiling
49.8%; ~50.2% unrecoverable without new evidence (B/C/D/E classes).

Verification: `bin/wb-sources-repair --check` (baseline-anchored regression gate:
220 audit-P + 68 audit-N entries + 17 remap targets must resolve; green at run
time), `bin/wb-validate` clean, full local CI-order run green before push.
