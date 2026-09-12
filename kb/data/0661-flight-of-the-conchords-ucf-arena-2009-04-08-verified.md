+++
id            = "dat:0661-flight-of-the-conchords-ucf-arena-2009-04-08-verified"
layer         = 1
type          = "datum"
title         = "Flight of the Conchords' April 8, 2009 UCF Arena show is verified against the concert master list"
claim         = "The artist page `wiki/interests/favorites/music/artists/flight-of-the-conchords.md` records one live appearance: April 8, 2009, Flight of the Conchords, UCF Arena, Orlando, FL, marked 'Confirmed.' The concert-record master list (row 31) carries the identical entry: 'Apr 8, 2009 | Flight of the Conchords | UCF Arena | Orlando, FL | Confirmed.' The page's stated sources, `raw/self/concerts/table.csv` and `raw/self/twitter/archive.jsonl`, are not held in this repository's `raw/` tree."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 10960 (49 lines); whole.txt carries the same page at line 4707. Master-list row 31 read from corpus__3.txt line 8460. Field-for-field match. raw/self/ is absent from this repository's raw/ tree."
importance    = 2
tags          = ["concert-record", "old-wiki", "cross-page-verification"]
created       = "2026-09-09"

[when]
start = "2009-04-08"
end   = "2009-04-08"
+++

## What this checks

Same fidelity question as [`dat:0659`](0659-cobra-starship-meadowlands-2008-05-04-verified.md):
the stub reproduces its source table without drift. It does. Unlike the
Cobra Starship page, no second appearance is evidenced anywhere in the
corpus for this act — the twitter archive yields no competing Conchords
show, and the index page's cross-check does not name one — so the '1 time'
claim stands uncontradicted here.
