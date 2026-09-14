+++
id            = "dat:0589-employment-block-2021-2023-consolidated"
layer         = 1
type          = "datum"
title         = "2021–2023 employment block: tenure facts consolidated from dat:0452/dat:0626; held corpus is even thinner than the page's 1,465-row figure (282 rows, zero in Nov 2021)"
claim         = "The 2021–2023 employment-block period page is a narrative wrapper around the Au Za'atar tenure, whose atomic facts are already filed: **dat:0452** (41-month tenure Mar 2021–Aug 2024, Midtown 58th & 1st, equal tip split, shed territory, involuntary end, $15/hr + tip pool, Annie's separate East Village hostess stint, Ghassan-not-Dimitri Sergio correction) and **dat:0626** (the night-class alibi, 18+ months, unheld dansynth-sourced) — not re-covered here. Spot-check against the held corpus: the page says 'the iMessage dump holds only 1,465 rows for 2021 and none in the November birthday window.' The held corpus is **thinner still — 282 rows dated 2021, and zero in November 2021** — so the birthday-window gap confirms on the held record too; the 1,465 figure belongs to the larger unheld MASTER_MESSAGES_DB_DUMP.csv. 'zaatar' returns 10 rows and 'tarik' 15 across the 192,140-record held corpus — the tenure's texture is effectively absent from held messages, as dat:0452 already noted. The period page's remaining quantitative claims — ~690 shifts and 445 visits (Google location history), 5 LIFE-calendar events in 2021 vs 254 in 2018 — rest on unheld sources and are filed as page-attributed."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read from corpus__3.txt line 117882 (178 lines); dat:0452 and dat:0626 read in full for overlap elimination. Held-corpus counts by direct Python CSV scan of corpus/messages.csv: 282 rows with date_sent starting '2021'; 0 with '2021-11'; 'zaatar' 10 rows, 'tarik' 15 rows (case-insensitive, all 192,140 records). No message content reproduced beyond counts."
importance    = 2
tags          = ["au-zaatar", "2021-2023", "timeline", "imessage", "old-wiki", "consolidation"]
created       = "2026-09-09"

[when]
start = "2021-01-01"
end   = "2023-12-31"
+++

## What the check confirms

The page's 'thin record' framing understates how thin: the held corpus
has roughly one-fifth the rows the page cites from the larger dump, and
the November 2021 zero holds in both. The period's documented shape —
one anchor institution, near-silence elsewhere — is therefore the
strongest-supported claim on the page.

## What it does not confirm

The Shed-economy narrative, the Dimitri promotion account, the
prejudice datum, the Suz birthday visit, and the Valeria affair
placement: all sourced to the unheld STORYTIME sessions and dox-md
material. They are filed as the page's claims, consistent with
dat:0452's filing, and unreplicated in the held corpus.
