+++
id            = "dat:0569-a-day-to-remember-one-live-sighting-bamboozle-2011"
layer         = 1
type          = "datum"
title         = "A Day to Remember: one live sighting per the concert log — The Bamboozle 2011"
claim         = "The artist page records **exactly one** live sighting of A Day to Remember by the operator: The Bamboozle 2011, Apr 29 – May 1, 2011, New Meadowlands Stadium, East Rutherford NJ (lineup: Lil Wayne, Motley Crue, Taking Back Sunday, A Day to Remember), per the concert log he kept (`raw/self/concerts/table.csv`). The appearance itself is already covered by [`dat:0240`](0240-bamboozle-2011-edition.md); what this node adds is the page's count claim — 1 sighting, between 2011."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10240 (37 lines), byte-matching raw/old-wiki-export-2026-09-04/whole.txt lines 3987-4020. The master event list (row 33, whole.txt line 2212) carries the same date range, venue and lineup. The page's stated source, raw/self/concerts/table.csv, is not held in this repository — see the single-source caveat in dat:0240 and dat:0149. The '1 time between 2011' phrasing is the page's own synthesis of the single table row; no second sighting exists anywhere in the corpus."
importance    = 1
tags          = ["concert-record", "old-wiki", "attribution", "counts"]
created       = "2026-09-09"

[when]
start = "2011-04-29"
end   = "2011-05-01"
+++

## What the check confirms

The artist page is a one-row page: one table row, one note, one claimed
sighting, and all three match the Bamboozle 2011 edition already established
in [`dat:0240`](0240-bamboozle-2011-edition.md) (festival page, master list
row 33, and researched-record timeline all agree on date, venue and the four
named acts). The count of exactly one is the page's reading of its own single
row — there is no independent second datapoint, and nothing in the corpus
contradicts the count.

## What it does not confirm

The concert log (`table.csv`) remains unheld, so the sighting is attributed
through the prior wiki alone, as in dat:0240. No ticket or contemporaneous
record of attendance is in `raw/`.
