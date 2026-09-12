+++
id            = "dat:0151-rolling-rock-town-fair-2001-2004"
layer         = 1
type          = "datum"
title         = "Rolling Rock Town Fair — three documented editions (Aug 4, 2001; Jul 27, 2002; Jul 31, 2004), Westmoreland Fairgrounds"
claim         = "The concert-log-derived page records three documented Rolling Rock Town Fair editions, all at Westmoreland Fairgrounds, Latrobe / Mt. Pleasant, PA: **Aug 4, 2001** (*\"Confirmed.\"*, lineup Stone Temple Pilots · Deftones · Incubus · Live · Oleander · Staind · Tantric); **Jul 27, 2002** (*\"Alien Ant Farm cancelled (bus accident); Tommy Lee filled in.\"*, lineup Godsmack · Outkast · Nickelback · P.O.D. · Sevendust · Default · Injected · Tommy Lee); **Jul 31, 2004** (*\"Heavy rain/mud reported; no postponement found.\"*, lineup Staind · Disturbed · Velvet Revolver · Three Days Grace · Finch · Finger Eleven · Hoobastank · N.E.R.D · Sevendust). The page's stated source is `raw/self/concerts/table.csv`, which is not held in this repository's raw/ tree; the same page content appears byte-for-byte in the old-wiki export, so the datum is relayed through the prior wiki with no independently held concert log to check it against."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8229 (50 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the festival page at lines 1998-2020 matches the corpus page verbatim, and master event list rows 1, 3 and 9 (lines 2180-2188) carry the same dates/venues/notes. The 2002 substitution (Alien Ant Farm → Tommy Lee) is independently repeated on the Outkast and Default performer pages (lines 5696-5713, 4355-4372). The page's own source, raw/self/concerts/table.csv, was not found anywhere under raw/ or elsewhere in this repository. Related: the Mike Cordaro people-entry (line 58111) notes he and the operator attended the fair together as kids — a separate datum, not checked here."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2001-08"
end   = "2004-07"
+++

## What the check confirms

The corpus page and the old-wiki export agree exactly on all three editions
— dates, venue, notes and lineups. The 2002 Tommy Lee substitution is
corroborated across three old-wiki pages (the festival page plus the Outkast
and Default performer pages), making it the best-supported single claim on
the page.

## What it does not confirm

Same single-source-reliance caveat as
[`dat:0149`](0149-high-tide-4-2019-04-20.md) and
[`dat:0150`](0150-nintendo-fusion-tour-2004-2005.md): the concert log is not
held in this repository, so the old wiki is the instrument and has not been
re-calibrated. The 2004 \"heavy rain/mud\" note and its \"no postponement
found\" qualifier are the prior wiki's own research conclusion, repeated
without the underlying weather/event documents.
