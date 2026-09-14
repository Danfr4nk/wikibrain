+++
id            = "dat:0659-cobra-starship-meadowlands-2008-05-04-verified"
layer         = 1
type          = "datum"
title         = "Cobra Starship's May 4, 2008 Meadowlands appearance is verified against the concert master list"
claim         = "The artist page `wiki/interests/favorites/music/artists/cobra-starship.md` records a May 4, 2008 multi-act show at Meadowlands Sports Complex, East Rutherford, NJ, co-billed with Panic! at the Disco, Coheed and Cambria, Paramore, Gym Class Heroes, and The Academy Is..., with Panic! at the Disco and Coheed and Cambria co-headlining. The concert-record master list (`wiki/interests/concert-record/index.md`, row 26) carries the identical entry — same date, venue, city, billing order and note — so the artist page faithfully reproduces the source table. The page's stated source, `raw/self/concerts/table.csv`, is not held in this repository's `raw/`."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 10476 (38 lines); whole.txt carries the same page at line 4223 with the same table. Master-list row 26 read from corpus__3.txt lines 8456-8457: 'May 4, 2008 | Panic! at the Disco, Coheed and Cambria, Paramore, Gym Class Heroes, Cobra Starship, The Academy Is... | Meadowlands Sports Complex | East Rutherford, NJ | Panic! at the Disco & Coheed and Cambria co-headlined. Also: Paramore, Gym Class Heroes, Cobra Starship, The Academy Is.' Field-for-field match. raw/self/ is absent from this repository's raw/ tree, so table.csv itself is uncheckable here."
importance    = 2
tags          = ["concert-record", "old-wiki", "cross-page-verification"]
created       = "2026-09-09"

[when]
start = "2008-05-04"
end   = "2008-05-04"
+++

## What this checks

A narrow fidelity question: does the generated artist stub reproduce its
source table without drift? It does. Date, venue, city, full co-bill and
the co-headliner note all match master-list row 26 exactly. The
`connections` block's co-occurrence claim about the Panic! at the Disco
page is consistent with the same row.

## What it does not check

Whether Dan actually attended (the cross-check on the index page argues
the table is a purchase record, not an attendance record —
[`dat:0242`](0242-concert-index-twitter-crosscheck.md)). Attendance of
this specific show is not separately evidenced here.

## The count claim is handled separately

This page also asserts the appearance count is exactly one. That claim
fails against the corpus's own twitter archive — see
[`dat:0660`](0660-cobra-starship-second-show-2008-11-13-tweet.md).
