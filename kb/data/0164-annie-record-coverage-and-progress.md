+++
id            = "dat:0164-annie-record-coverage-and-progress"
layer         = 1
type          = "datum"
title         = "The Annie Record: 97,768 unique messages, 2015-11-28 → 2026-06-05, four handles; 2020-11 → 2024-12 is a record hole, not a quiet period"
claim         = "The Annie Record is a hand-read chronology (read, not extracted) covering **97,768 unique messages, 2015-11-28 → 2026-06-05**, across Annie's four handles (all redacted in the corpus copy; the page lists them by era: 2015-11 → 2018-12, 2018-12 → 2020-06, an email handle 2020-07 → 2020-10, and a 2022 / 2025-03 → 2026-06 handle). Coverage: **2015-11-28 → 2020-10 dense** (near-daily, first five years); **2020-11 → 2024-12 empty — 5 messages in four years**; **2025-03 → 2026-06-05 dense** (collapse and closure). The page is explicit: **the 2020–2024 hole is a hole in the record, not a quiet period in the relationship** — four years of a ten-year relationship have no surviving two-sided message data in any export, and no synthesis may treat the gap as an observation. Reading progress as of 2026-08-18: **18,512 of 97,768 (18.9%), read through 2016-01-24, ~370 events recorded.** Resume point: `bin/annie-corpus read 2016-02-01`."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 102792 (1278 lines); the coverage table, the hole warning, and the progress table verified present in the old-wiki export's annie-record page (whole.txt, 180,870-char section: '97,768 unique messages', 'empty — 5 messages in four years', '18,512' all present). The four handle values are printed in the old wiki and redacted in the corpus copy; they are third-party identifiers and are deliberately not recorded in this node. The underlying annie-corpus.csv is not held in this repository, so the coverage claims are the prior wiki's, not re-verified here. The 97,768 figure is independently the repository's canonical Annie-corpus size (see dat:0160)."
importance    = 4
tags          = ["annie", "corpus-scale", "record-gap", "method", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2015-11-28"
end   = "2026-06-05"
+++

## Why the hole warning is the load-bearing sentence

A four-year gap in a ten-year relationship is the kind of absence that
future synthesis will be tempted to read as a quiet period — especially
because the two dense stretches on either side are so event-rich. The page
pre-commits against that reading with an explicit extraction rule (a zero
is data only when the system could have observed a one). This node exists
so that commitment is citable without re-reading the page.
