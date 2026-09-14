+++
id            = "dat:0241-vans-warped-tour-four-editions"
layer         = 1
type          = "datum"
title         = "Vans Warped Tour: four documented editions, 2005–2008, all at Post-Gazette Pavilion, Burgettstown PA"
claim         = "The festival page `wiki/interests/concert-record/festivals/vans-warped-tour.md` records four attended editions, all at **Post-Gazette Pavilion, Burgettstown PA**: **Aug 1, 2005** (Fall Out Boy, Alexisonfire, Gogol Bordello, Hawthorne Heights); **Jul 27, 2006** (AFI, Rise Against, Thursday, Motion City Soundtrack, NOFX); **Aug 8, 2007** (Paramore, Coheed & Cambria, All Time Low, Bad Religion); **Jul 29, 2008** (Anberlin, All Time Low, Against Me!, 3OH!3). The page matches the old-wiki export verbatim, master event list rows 13, 20, 22 and 27 carry the same dates/venues/lineups, and the researched-record timeline rows 8, 9, 10 independently carry the 2005–2007 editions with the same lineups. The page's stated source, `raw/self/concerts/table.csv`, is not held in this repository."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8321 (75 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the festival page at lines 2078-2125 matches the corpus page verbatim, and master event list rows 13, 20, 22, 27 (lines 2192, 2199, 2201, 2206) carry identical date/venue/lineup fields. The researched-record timeline's 2005-2007 Warped rows (lines 102400-102405 of the export) match on dates and lineups. The page's stated source, raw/self/concerts/table.csv, is not held anywhere in this repository (see dat:0149)."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2005-08-01"
end   = "2008-07-29"
+++

## What the check confirms

All four editions are consistent across the festival page, the master event
list and — for 2005–2007 — the researched-record timeline: same dates, same
venue, same named acts. Four consecutive summers at the same venue, a
pattern the page's uniform \"Warped Tour date\" notes preserve without
comment.

## What it does not confirm

The 2008 edition (Jul 29, 2008) appears on the festival page and in the
master list but has no row in the researched-record timeline's 36-show CSV
as transcribed — one edition less corroborated than the other three, though
nothing contradicts it. As with the sibling festival nodes, the underlying
concert log is not held here, so all four editions rest on the prior wiki's
materials alone; no ticket or contemporaneous record is in `raw/`.
