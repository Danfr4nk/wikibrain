+++
id            = "dat:1162-annual-volume-suz-table-unverifiable-in-held-slice"
layer         = 1
type          = "datum"
title         = "Annual Dan-vs-Suz volume table: numbers derive from a per-handle source set not held here; held slice cannot reproduce them"
claim         = "The Annual Message Volume page plots yearly sent-message totals for Dan vs. Suz (Dan: 281/2453/1850/3066/1891/1517/259/483/1206/1202/619 for 2015/16/17/18/19/20/21/23/24/25/26; Suz: 267/2132/1866/4191/2426/1964/440/519/1818/2044/1204) and reads a two-phase pattern with a 2017 hinge: Dan ahead 2015–2016, near-tie 2017 (1850 to 1866), Suz permanently ahead from 2018, widening to ~1.94:1 in 2026. The dataset's source is the per-year table on wiki/people/suzanne-frank, built from the master dump's per-handle exports — not from the held 192,140-row messages.csv. In the held slice, Suz appears on +17243228715 only from 2023 onward (2025: Dan 590 / other 1009; 2026: Dan 656 / other 1242): same direction as the page's 2025–26 figures (1202/2044, 619/1204) but not the same numbers, as expected from different corpus slices (192,140 vs. 217,573 rows). The 2015–2022 yearly figures have no Suz-thread rows in the held slice at all, so the table's counts, the 2017 hinge, and the two-phase pattern are the page's attributed testimony — unverifiable, and not falsifiable, from held data. The page itself declines to name any mechanism for the 2017 hinge."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 29403 (140 lines); the old-wiki export carries it verbatim with the same chart frontmatter. Attempted held verification: scanned corpus/messages.csv for Suz's identifiers (old-wiki lists +172****8715, suzfrank addresses). +17243228715 has 3,500 rows but only from 2023-01 onward; no Suz-thread rows exist for 2015–2022 in the held export. The page's corpus-start date 2015-11-17 matches the held corpus's first unnamed-thread date, which is consistent but not identifying."
importance    = 3
tags          = ["suzanne-frank", "volume", "dataset", "testimony", "unheld-source", "corpus-gap"]
created       = "2026-09-10"
+++

## Notes

- The page carries two RE-CHECKED blocks (2026-08-28, 2026-09-04) confirming that later additions to the suzanne-frank page (eviction episode, Fred Adams messages) did not touch any volume figure — the arithmetic is internally stable; it is the underlying per-handle sources that are unheld.
- If the master dump's per-handle exports become held, this is the highest-value re-verification target among the dataset pages in this batch: exact yearly counts with a specific hinge claim.
