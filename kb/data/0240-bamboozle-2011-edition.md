+++
id            = "dat:0240-bamboozle-2011-edition"
layer         = 1
type          = "datum"
title         = "The Bamboozle 2011: Apr 29–May 1, 2011, New Meadowlands Stadium, East Rutherford NJ (Lil Wayne, Mötley Crüe, Taking Back Sunday, A Day to Remember)"
claim         = "The festival page `wiki/interests/concert-record/festivals/the-bamboozle-2011.md` records one attended edition: **Apr 29 – May 1, 2011, New Meadowlands Stadium, East Rutherford NJ**, with the lineup Lil Wayne · Mötley Crüe · Taking Back Sunday · A Day to Remember. The researched-record timeline independently dates the same festival to **2011-04-29** (New Meadowlands Stadium, same four acts), consistent with attendance on the festival's opening day rather than a different weekend. The page content matches the old-wiki export verbatim; the page's stated source, `raw/self/concerts/table.csv`, is not held in this repository, so the edition rests on the prior wiki's materials alone."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8279 (42 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the festival page at lines 2024-2065 matches the corpus page verbatim, and master event list row 33 (line 2212) carries the same date range/venue/lineup. The researched-record timeline's dating (2011-04-29, New Meadowlands Stadium, Lil Wayne, Mötley Crüe, TBS, A Day to Remember) was read in the old-wiki export at line 104465. The page's stated source, raw/self/concerts/table.csv, is not held anywhere in this repository (see dat:0149)."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2011-04-29"
end   = "2011-05-01"
+++

## What the check confirms

Festival page, master list row 33, and the researched-record timeline agree
on the event, the venue and the four named acts. The date fields differ only
in granularity — the festival page and master list give the full festival
window (Apr 29 – May 1), the researched record pins **2011-04-29**, the
opening day. Read together, the corpus dates his attendance to the first day
of the festival, not merely somewhere in the window.

## What the page omits (not a contradiction)

The researched record that this same timeline page carries also holds a
`2008-05-03 | Bamboozle | Meadowlands, NJ` row — an earlier edition of the
same festival, at the same site, three years before. The Bamboozle festival
page records only the 2011 edition. Nothing in the corpus says he attended
the 2008 edition; it is a routing row in the researched CSV, noted here so
the 2008 row is not mistaken for a second attended edition.

## What it does not confirm

Same single-source-reliance caveat as [`dat:0239`](0239-final-show-2011-lcd-soundsystem.md)
and [`dat:0149`](0149-high-tide-4-2019-04-20.md): the concert log
(`table.csv`) is not held here, so date, venue and lineup are attributed
through the prior wiki only. No ticket or contemporaneous record of
attendance is in `raw/`.
