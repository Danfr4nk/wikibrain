+++
id          = "src:myactivity-2026-09-12"
layer       = 0
type        = "source"
title       = "Google MyActivity exports (4 files, Drive-sourced, ingested 2026-09-12)"
source_type = "document"
acquired    = "2026-09-12"
provenance  = "Four MyActivity.html files found in Dan's Google Drive via filename search and downloaded 2026-09-12: two exported 2022-07-20 (17.1MB + 10.8MB Search/YouTube splits; 88.9MB combined-view), two exported 2025-07-30 (17.1MB + 10.8MB). Distinct from the per-product Takeout MyActivity files already in RAWLOGS. Parsed to 108,821 unique actions (deduped from 118,255) covering 2006-09-10 to 2025-07-27; timestamps converted America/New_York to UTC; redirect-wrapped URLs unwrapped. Raw HTMLs stored gzipped in raw/myactivity-2026-09-12/ with parsed JSONL and manifest."
reliability = "primary"
location    = "raw/myactivity-2026-09-12/"
confidence  = "high"
importance  = 4
created     = "2026-09-12"
tags        = ["myactivity", "google", "search-history", "raw-data", "takeout"]
+++

## Contents

| File | Actions | Coverage |
|---|---|---|
| myactivity-2022-07-20-big.html | 88,425 | 2007-05-01 -> 2022-05-31, Search/Visit heavy |
| myactivity-2022-07-20-2.html | 10,757 | 2009-05-24 -> 2022-05-14, YouTube heavy |
| myactivity-2025-07-30-a.html | 17,401 | ~2006 -> 2025-07-05, reverse-chronological |
| myactivity-2025-07-30-b.html | 1,672 | ~2007 -> 2025-05-22, reverse-chronological |
| myactivity-unique.jsonl | 108,821 | 2006-09-10T22:04:51Z -> 2025-07-27T04:00:43Z |

Action breakdown: Searched for 52,646; Visited 38,372; Watched 16,302; Viewed 949; Disliked 168; Liked 148; Subscribed to 138; Defined 86; misc 12.

See MANIFEST.json in raw/myactivity-2026-09-12/ for dedup method and caveats. Key caveat: 2023-2024 volume collapses across all action types simultaneously (a logging change, not behavior); coverage ends 2025-07-27.
