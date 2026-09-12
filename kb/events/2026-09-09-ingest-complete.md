+++
id         = "evt:2026-09-09-ingest-complete"
layer      = 2
type       = "event"
title      = "The 2026-09-04 old-wiki export is fully ingested: 497/497 pages, dat:0059–1403"
cites      = ["dat:0059-nicotine-eighteen-year-record-from-twitter-archive", "dat:1403-vibe-coding-games", "src:old-wiki-export-2026-09-04"]
confidence = "high"
importance = 5
tags       = ["meta", "ingest"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

The 2026-09-04 old-wiki export — all 497 pages — was fully ingested into
the six-layer knowledge base. The ingest node range runs `dat:0059`
through `dat:1403` (with intentionally unused headroom; some numbers in
the range are spare overflow), 497 pages addressed to at least one datum
each, zero pages left unread. Wave accounting (six waves, thirty
workers, 75 pages per wave) is per the ingest coordinator's ledger
(`INGEST-NOTES.md`) and the repo's commit messages — repo bookkeeping,
not layer-1 evidence, cited here through the range's bookend datums
([`dat:0059`](../data/0059-nicotine-eighteen-year-record-from-twitter-archive.md),
[`dat:1403`](../data/1403-vibe-coding-games.md)) and the export itself
([`src:old-wiki-export-2026-09-04`](../sources/old-wiki-export-2026-09-04.md)).

## Timeline (per the ledger and commit record)

| when | what |
| :--- | :--- |
| 2026-09-09 | wave 1: 75 pages, dat 0059–0283, 5 workers |
| 2026-09-09/10 | wave 2: 75 pages, dat 0284–0523 (incl. the 7,654-line master timeline, solo) |
| 2026-09-10 | wave 3: dat 0524–0731 — 223/497 pages done |
| 2026-09-10 | wave 4: dat 0749–0955 — 298/497 done |
| 2026-09-10 | wave 5: dat 0974–1168 — 373/497 done |
| 2026-09-10 | wave 6: dat 1199–1403 — all 497/497 done; commit `68bb3e3` |

## What the ingest established, structurally

The ingest is the largest-scale test the citation regime has ever
survived: every one of ~1,345 datums was validated against the layer
invariant before commit, and the validator's rejections became new
worker-facing knowledge — the testimony `attributed_to` requirement, the
invented-`src:`-id failures, the `measurement` + `attributed_to`
incompatibility, the web-corroboration-belongs-in-`extraction` rule. The
schema learned from the load, not from theory.

Its three highest-value outputs are not the datums:

1. **A contradiction inventory.** The export is internally inconsistent
   in places (count corrections on nearly every people page — one side
   counted as both; stale timelines; superseded framings) and
   inconsistent with the held corpus in others (UTC-vs-Eastern timestamp
   slips; fragment-vs-complete extract divergences). The contradictions
   are the payload.
2. **A stale-page map.** The correction-propagation failure is now
   documented case by case: the June 1 attribution correction, the
   August 2009 graduation block, the Coles "never says yes" patch, the
   master-timeline stats drift. Each one is a repair order, several
   addressed to the operator.
3. **A coverage ledger.** Honest gaps are filed as gaps: unheld Facebook
   threads, unheld CSVs, the twitter-2025 blackout as
   export-incompleteness rather than fact, pages built on prior-wiki
   relay marked as relay.

## What was deliberately not done

- The export's `testimony` marking was never promoted by volume: every
  datum from it carries `attributed_to`, and corroboration still comes
  only from independent sources.
- Raw source gaps were not blocked on: unavailable threads and CSVs are
  filed honestly as unheld rather than reconstructed.
- Phone handles carried unredacted in the export were redacted to the
  corpus convention (`[phone redacted]`) before any publish path — the
  privacy machinery working as designed
  ([`evt:2026-09-09-privacy-cut-as-epistemic-concern`](2026-09-09-privacy-cut-as-epistemic-concern.md)).

## Open questions

- Whether the post-snapshot developments (dat:0058's correction, the
  Rick-silence break, the validation report's rec #1) get patched back
  into the wiki source, or whether the snapshot's staleness becomes the
  standing record of them.
- Whether the contradiction inventory ever becomes a propagation pass
  over the event pages that quote the stale claims.
