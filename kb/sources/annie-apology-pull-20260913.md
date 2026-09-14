+++
id          = "src:annie-apology-pull-20260913"
layer       = 0
type        = "source"
title       = "Annie apology-history corpus pull (2026-09-13): four message exports, apology-language regex sweep"
source_type = "message-corpus"
acquired    = "2026-09-13"
provenance  = "Computed in-session by the main agent from Google-Sheets-converted message CSVs on disk. Apology-language regex: sorry|apolog|forgive|my fault|my bad|i was wrong|put you through hell|don't deserve|dont deserve|feel bad|feel terrible|feel awful|feel horrible|guilty|guilt|i regret (case-insensitive). Bare = 3 words or fewer; substantive = more than 12 words. Direction filtered to received (her messages) except the meta-apology search, which scanned Dan's sent messages."
reliability = "primary"
location    = "~/workspace/wiki-sync/repos/wikibrain/raw/drive-sweep/20260911/gsheets/message-csv/"
confidence  = "high"
importance  = 4
created     = "2026-09-13"
tags        = ["annie-ulmer", "apology", "corpus", "method"]
+++

## What this is

The raw material behind `dat:1505-annie-apology-frequency`. Four exports swept:

- `MASTER_MESSAGES_DB_DUMP.from-gsheet.MASTER_MESSAGES_DB_DUMP.csv.csv` — Annie handles `+12124702449` (17,145 msgs) and `annieulmr@aol.com` (3,645); received pre-2023-08 window used for the early sample.
- `imessage_ALL_both_all_now.from-gsheet.imessage_ALL_both_all_now.csv.csv` — contacts `+17244346811` (Annie's PA number, 31,122 received, 2015-11 → 2018-12), `+17249204125` (alternate number, 4,805 received, 2018-12 → 2020-06), `+12124702449` (11,360 sent scanned for Dan's meta-apology messages).
- `annie_all_time_logs.from-gsheet.annie_all_time_logs.csv.csv` — 9,962 received, 2022-12-31 → 2026-06-05 (received coverage effectively 2025-08 → 2026-06), 459 apology hits.
- `annie_last6months_imessage.from-gsheet.annie_last6months_imessage.csv.csv` — 23,707 received, 2023-08-09 → 2025-08-19, 694 apology hits.

The two 2025+ exports overlap; counts are never summed across them. The 2015–2021 handle sweep is partial:
2020–2022 is thin (`alulmer28@gmail.com`, 802 msgs in imessage_ALL, unswept). The 2015–2019 sample
(35,927 received) is large enough for the trajectory claims.

Full method log and verbatim examples:
`~/workspace/wiki-sync/scratchpad/2026-09-13-annie-apology-history.md` (raw pull),
`~/workspace/wiki-sync/scratchpad/2026-09-13-annie-apology-synthesis.md` (extrapolated synthesis).
