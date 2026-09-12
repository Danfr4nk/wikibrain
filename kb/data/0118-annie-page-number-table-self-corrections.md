+++
id            = "dat:0118-annie-page-number-table-self-corrections"
layer         = 1
type          = "datum"
title         = "Annie page's number table: self-documented audit corrections; record boundary 2015-11-28 confirmed in held corpus; derived ratios unreplicated"
claim         = "Three findings on the 'By the numbers' table: **(1) Record boundary confirmed** — the page's 'Full record, all platforms (Nov 28 2015 – Mar 16 2026)' start date is exact: the earliest message in Annie's 2015–2019 thread (+17244346811) is 2015-11-28 23:47:54. **(2) The page audits itself** — its own CORRECTED notices (2026-08-20) document two count errors it caught and fixed: the dual-handle archive is 85,586 records (not 88,548; message texts contain newlines, so line counts ≠ message counts), and the alternate-number thread is 9,481 messages (not 4,812 — 4,812 was its *received* count; Dan's 4,669 in it had been invisible to every pass quoting the smaller figure). The triple-handle archive is 95,067 records. This is the wiki's correction machinery working as designed, and the node to cite for it. **(3) Not replicable here** — the headline '126,683 messages (Dan 57,696 / Annie 68,987)', the word-volume ratio 2.95:1 (188,167/63,700 words over 23,719 messages), the love-language rates (5.3% in 2016 → 0.1% in 2024), the verbal-abuse trajectory (9→36/month), Dan's exit declarations (127/110), and the 0/299+ severance-signal zero all derive from per-thread CSV exports not held in this repository. The 187:4 love-to-request ratio was already revised on the page itself (2026-07-18: matches her base request rate 97.2%, not evidence of a targeted instrument). File all derived ratios as page-computed, not held-record."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Table at corpus__3.txt ~line 51630 ('## By the numbers'); CORRECTED notices inline. Boundary check: bin/corpus-query --who +17244346811 earliest hit 2015-11-28 23:47:54. Source exports named on the page (imessage_7244346811+2124702449_both_all_now.csv, imessage_7244346811+7249204125+2124702449_both_all_now.csv, imessage_2124702449_both_all_now.csv) are not in raw/."
importance    = 4
tags          = ["annie-ulmer", "counts", "self-correction", "corroborated-partial", "old-wiki"]
created       = "2026-09-09"
+++

## Why the self-correction matters

The 2026-08-20 correction notice is unusually honest for a personal wiki:
it names the exact mechanism of the error (newlines in message texts
defeating line counts), shows the arithmetic that proves the fix
(44,513 + 41,073 = 85,586), and admits the substantive consequence (a page
quoting 4,812 'cannot be used to reason about reciprocity' in the
alternate-number thread). This is the standard the ingest queue should
hold other pages to: corrections with mechanisms, not silent edits.

## The 126,683, again

The headline count recurs here with a direction split (Dan 57,696 /
Annie 68,987). As filed in dat:0113, the held corpus totals ~97,891 Annie
messages across three handles; the 126,683 figure is not replicable from
held sources. The direction split at least shows the page's arithmetic is
internally consistent (sums to 126,683), which rules out transcription
error but not source inflation.
