+++
id            = "dat:1362-twitter-2008-page-record-count"
layer         = 1
type          = "datum"
title         = "The 2008 twitter page holds 95 record headings, matching its own 95-of-213 claim"
claim         = "wiki/self/twitter/2008 (2026-08-29) presents the 2008 pre-archive layer: 95 of the 213 backfilled tweets, from the 2008-09-24 Winter Park opener through the Full Sail arrival era. Measurement of the old-wiki artifact: the page body contains exactly 95 timestamped record headings, matching its own '95 of 213' claim. The page's substantive 2008 claims — the Full Sail arrival framing, the October 16 nicotine quit and December 22 restart, the concert-going entries — are sourced to the unheld archive.jsonl and are filed as page-attributed testimony. No held source covers the 2008 tweets."
cites         = ["src:old-wiki-export-2026-09-04"]
measurement   = true
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 80387 (789 lines). Counted timestamped record headings (^**YYYY-MM-DD HH:MM:SS UTC**) with grep: 95. The measurement is of the old-wiki artifact (the page's completeness claim), so no attributed_to is carried; the tweet contents themselves remain page-attributed testimony from the unheld archive.jsonl."
importance    = 3
tags          = ["twitter", "2008", "archive", "measurement", "full-sail"]
created       = "2026-09-09"

[when]
start = "2008-09-24"
end   = "2008-12-31"
+++

The count matches the page's own claim — the 2008 layer is as complete as
the page says it is, on the page's own terms. Whether the 213-tweet
backfill is itself complete is the hub's open question (dat:1361), not
this page's.
