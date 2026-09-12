+++
id            = "dat:1019-nofx-warped-tour-2006-burgettstown"
layer         = 1
type          = "datum"
title         = "NOFX — one documented live sighting: Vans Warped Tour, Jul 27 2006, Post-Gazette Pavilion (web-corroborated)"
claim         = "The concert-log-derived page records NOFX as an act Dan saw live once: Jul 27, 2006, Vans Warped Tour, Post-Gazette Pavilion, Burgettstown, PA, with a lineup note listing AFI, Rise Against, Thursday, Motion City Soundtrack and NOFX. The page's stated source, raw/self/concerts/table.csv, is not held in this repo's raw/ tree; the same content appears byte-for-byte in the old-wiki export, so the datum is relayed through the prior wiki. The event itself is independently corroborated on the web: the Vans Warped Tour 2006 stopped at Post-Gazette Pavilion, Burgettstown, PA on Jul 27, 2006, and NOFX is on the billed lineup (with AFI, Rise Against, Thursday, Motion City Soundtrack all present). What is NOT corroborated is Dan's attendance — that rests entirely on the unheld concert log."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 11893 (37 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 4040-4059 verbatim, and the master event list row 20 (line 2199) carries the same date/venue/lineup. Web check 2026-09-09: concertarchives.org Vans Warped Tour 2006 concert page lists the Burgettstown stop and the band line-up including NOFX, AFI, Rise Against, Thursday, Motion City Soundtrack (https://www.concertarchives.org/concerts/vans-warped-tour--631); the 2006 date list (Billboard via metalunderground, https://www.metalunderground.com/news/details.cfm?newsid=18348) gives Jul 27: Burgettstown, Pa. (Post-Gazette Pavilion); a first-person review of the Burgettstown show dated Jul 27 2006 mentions seeing NOFX that day (https://readjunk.com/reviews/livereviews/warped-tour-2006-post-gazette-pavilion-burgettstown-pa/). raw/self/concerts/table.csv was not found under raw/ or elsewhere in this repo. Related: dat:0149, dat:0150, dat:0151 (concert-log relay siblings)."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution", "corroborated"]
created       = "2026-09-09"

[when]
start = "2006-07-27"
end   = "2006-07-27"
+++

## What the check confirms

The corpus snapshot and the old-wiki export agree exactly — one NOFX
sighting, Warped Tour 2006, Post-Gazette Pavilion, Burgettstown, PA, Jul
27. The public facts of the event (date, venue, NOFX on the bill alongside
the page's four named co-lineup acts) check out on three independent web
sources. Attendance itself is not verifiable from the web.

## What it does not confirm

The concert log is the instrument and is not held; as with
[`dat:0149`](0149-high-tide-4-2019-04-20.md),
[`dat:0150`](0150-nintendo-fusion-tour-2004-2005.md) and
[`dat:0151`](0151-rolling-rock-town-fair-2001-2004.md), this datum is
relay-through-the-prior-wiki with no held primary to re-calibrate against.
The page's opener ("saw live 1 time between 2006" — the odd "between 2006"
phrasing is the prior wiki's, preserved) is text-fidelity only.
