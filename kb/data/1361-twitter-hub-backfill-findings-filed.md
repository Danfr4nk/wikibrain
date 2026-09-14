+++
id            = "dat:1361-twitter-hub-backfill-findings-filed"
layer         = 1
type          = "datum"
title         = "The twitter hub's backfill findings — 213 pre-archive tweets, the 2016 correction, and its own unresolved fields — filed as testimony"
claim         = "wiki/self/twitter (modified 2026-09-03) is the archive hub. Its durable findings, all page-attributed: (1) the 2026-09-02 backfill recovered 213 pre-archive tweets, the earliest dated 2008-09-24T04:52:36 UTC ('i fucking looove winter park. this town is unreal.'); (2) the per-year table runs 2009–2024 with per-year counts (2014: 171, 2024: 258, 2016: 76) and marks 2016 'NOT complete — see below' via its own CORRECTION [2026-09-02] (a recovered 2016 tweet proved the spreadsheet span incomplete); (3) the account-id lookup returned id 16430736 but no created_at and no total tweet count — both remain unresolved on the page; (4) parts 2/3 of the 18 July 2022 radicalization thread were recovered by the backfill, superseding the O&A page's stale gap note (see dat:1337); (5) the hub's final 'gaps' paragraph still calls the 2013-08-17–2026-04-07 spreadsheet span 'complete for originals' — in tension with its own 2016 correction, an internal inconsistency preserved as-is. The hub's settlement table (Pro Tools purchase 2010-01-26, first tattoo 2010-01-23, the 2012 Brooklyn→Manhattan move dates, the Graduation-date contradiction against Facebook's 'lived in Brooklyn from February 2010') is all sourced to the unheld archive.jsonl and is filed as page-attributed testimony. Web corroboration of the tweet ids was attempted 2026-09-09 and is blocked by browser policy."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 101162 (345 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. The per-year counts cross-check against the year-page record-heading counts measured in this ingest (2014: 171 headings, 2024: 258 headings — exact matches to the hub's table). The underlying archive.jsonl is not held in this repo. The 2016-correction vs. final-gaps tension was found by reading both sections."
importance    = 4
tags          = ["twitter", "archive", "old-wiki", "2016-correction"]
created       = "2026-09-09"

[when]
start = "2008-09-24"
end   = "2026-09-03"
+++

## What the hub settles vs. what it leaves

- **Settled (by the hub's own account):** the 2008 pre-history exists; the
  year counts through 2024; the 2022 thread recovery.
- **Open:** account creation datetime, total tweet count, the 2016
  incompleteness (one recovered tweet proves the negative; the positive
  count is unknown), and the Graduation-vs-Facebook Brooklyn contradiction.
- **Self-contradictory:** the final gaps paragraph's 'complete for
  originals' against the 2016 correction two sections up. The hub is
  preserved with the tension intact.
