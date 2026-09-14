+++
id            = "dat:1023-otto-held-slice-coverage-gap"
layer         = 1
type          = "datum"
title         = "Otto (Annie's nephew): page's 2023–2025 material absent from held slice; held slice extends mentions through 2026-08-03"
claim         = "The Otto page records 31 mentions between 2023-10-29 and 2025-06-16 (birthday in late October, younger than Alice, nap schedule 1:00–3:00 on 2025-03-07, 'Waylon' appearing twice on 2024-07-11) from sources not held here (all_imessages_complete_dump.txt, the per-contact CSV). The held corpus does not reproduce any of it: Annie's thread in the held slice runs 2023-01-01 → 2026-09-07 but carries exactly 28 'otto' mentions, the first on 2025-10-31 ('Dan i have been watching otto all morning') — there is no 'ottos party' on or near 2023-10-29, and 'Waylon' has zero hits corpus-wide. Conversely the held slice extends the record past the page's end: 28 mentions Oct 2025 → 2026-08-03, all inbound from Annie, showing Otto still in the childcare rotation through mid-2026 (watching Otto, haircuts, school pickups). Neither source alone is complete; the page's early material and the held slice's late material are disjoint, with a coverage seam at Oct 2025."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "corpus/messages.csv scanned directly with Python 2026-09-09: 28 rows matching \\botto in Annie's thread (+2124702449), 2025-10-31 → 2026-08-03, 27 inbound / 1 sent; 'Waylon' → 0 corpus-wide hits. Annie's thread in the held slice: 31,432 rows, 2023-01-01 → 2026-09-07. Page body read from corpus__3.txt line 65400 (80 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 59083 and 108357 verbatim. The page's own date_range (2023-10-29 → 2025-06-16) and its 31-count rest on the unheld full dump."
importance    = 3
tags          = ["imessage", "people", "family", "coverage-gap", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2025-10-31"
end   = "2026-08-03"
+++

## What the check confirms

Two disjoint bodies of evidence: (a) the page's, from the richer
unheld exports — first contact 2023-10-29 ('ottos party'), the 2025-03-07
nap-schedule line establishing him as younger than Alice, Waylon's two
2024-07-11 mentions; (b) the held slice's — 28 mentions, Oct 2025 →
Aug 2026, extending his presence in the household rotation eight months
past the page's 2025-06-16 end (Annie cutting Otto's hair 2026-01-05,
sick-school pickup 2026-01-22, etc.). Both are real on their own sources;
neither reproduces the other.

## What it does not confirm

Nothing in the held slice backs the page's 2023–mid-2025 Otto material
(first contact date, birthday, the Waylon footnote) — but the held
slice's Annie thread demonstrably lacks rows the page's export had, so
absence here is a coverage gap, not a refutation. The page's open gaps
(surname, birth year, who Waylon is) stand. Cross-reference:
[`dat:0109`](0109-alice-counts-range-from-dump-not-held-here.md) — the
same dump-not-held-here pattern on Alice's page.
