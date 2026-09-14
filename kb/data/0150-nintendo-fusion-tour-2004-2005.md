+++
id            = "dat:0150-nintendo-fusion-tour-2004-2005"
layer         = 1
type          = "datum"
title         = "Nintendo Fusion Tour — two documented editions: ~Oct 22-23, 2004 (Rostraver Ice Garden) and Sep 28–Nov 23, 2005 (tour window)"
claim         = "The concert-log-derived page records two documented Nintendo Fusion Tour editions: **~Oct 22-23, 2004**, Rostraver Ice Garden, Belle Vernon, PA, noted *\"Confirmed via routing (immediately before Oct 24 Philadelphia)\"*, lineup Story of the Year · Lostprophets · Letter Kills; and **Sep 28–Nov 23, 2005**, Various (tour) / Multiple cities, noted *\"Confirmed tour window\"*, lineup Fall Out Boy · Motion City Soundtrack · Panic! at the Disco · The Starting Line · Boys Night Out. The page's stated source is `raw/self/concerts/table.csv`, which is not held in this repository's raw/ tree; the same page content appears byte-for-byte in the old-wiki export, so the datum is relayed through the prior wiki with no independently held concert log to check it against."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8132 (49 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the festival page at lines 1902-1920 matches the corpus page verbatim, and master event list rows 11 and 15 (lines 2190, 2194) carry the same dates/venues/notes. The page's own source, raw/self/concerts/table.csv, was not found anywhere under raw/ or elsewhere in this repository, so the date/venue/lineup claims are attributed through the prior wiki only. Same single-source-reliance caveat as dat:0149; no artist stub for these acts is held in kb/ yet."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2004-10"
end   = "2005-11"
+++

## What the check confirms

The corpus page and the old-wiki export agree exactly on both editions —
dates, venues, cities, notes and lineups. The routing note on the 2004
edition is preserved verbatim, and the 2005 edition is explicitly framed as a
tour window rather than a single attended date (which is why its venue/city
are \"Various (tour) / Multiple cities\" — no claim is made about *which*
2005 stop he attended).

## What it does not confirm

Same as [`dat:0149`](0149-high-tide-4-2019-04-20.md): the concert log itself
is not held here, so the old wiki is the instrument and has not been
re-calibrated. The 2004 edition's date is approximate (~Oct 22-23) and the
routing confirmation (\"immediately before Oct 24 Philadelphia\") is the prior
wiki's own inference, repeated without the underlying routing document.
