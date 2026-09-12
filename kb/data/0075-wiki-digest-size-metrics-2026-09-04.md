+++
id            = "dat:0075-wiki-digest-size-metrics-2026-09-04"
layer         = 1
type          = "datum"
title         = "The wiki digest's size metrics (497 pages, 49 contradictions, 605 gaps, 65 predictions) are independently consistent with the ingest queue"
claim         = "wiki/meta/digest.md — a generated report (bin/wiki-digest, mirroring DIGEST.md, dated 2026-09-04) — reports the wiki at 497 pages, 185 touched in the last 14 days, 79 pages reasoning from other pages via synthesizes:, 49 live contradictions, 605 open gaps and 65 standing predictions, with domain counts (people 175, interests 96, mind 78, self 59, timeline 42, work 15, meta 12, places 10, health 6, legal 4) and status counts (active 191, stable 166, closed 100, archived 29, stub 11). The headline count is independently corroborated: the ingest queue in this repo (ingest-queue.json) holds exactly 497 entries, and the domain counts for health (6) and legal (4) match the page inventory ingested by this worker. The remaining figures (contradictions, gaps, predictions, touched-in-14-days) are the wiki's self-report from its own generation pass and were not independently re-derived here."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Read from wiki/meta/digest.md (corpus__3.txt line ~17014). Cross-check run 2026-09-09: python json load of ingest-queue.json → 497 entries; the sample entry keys on corpus_line, matching the page-list mechanism. Health/legal domain counts checked against this worker's assigned page list (6 health, 4 legal). The digest page states it is generated and not to be hand-edited; no bin/wiki-digest or DIGEST.md exists in this repo, so the figures describe the old wiki's state at export."
importance    = 2
tags          = ["meta", "old-wiki", "verification", "provenance"]
created       = "2026-09-09"

[when]
date = "2026-09-04"
+++

## What this is for

The digest is the wiki's own instrument readout — the closest thing the
corpus has to a census of itself. Its headline numbers now have one
independent anchor (497 = 497), which is more than a self-report usually
gets. The figures worth citing onward: 49 live contradictions and 605 open
gaps as of 2026-09-04 are the scale of the unresolved surface this ingest
is working against, and 79 pages with `synthesizes:` premises are the
population `bin/wiki-climb check` watches for premise drift.

## Limits

This is a snapshot of 2026-09-04. The 185-pages-touched-in-14-days, 605
gaps and 65 predictions figures move with every ingest and contradiction
resolution; they should not be quoted as current without regeneration. The
activity log entries (2026-09-01 through 2026-09-04) are a changelog, not
data, and this node does not verify them.
