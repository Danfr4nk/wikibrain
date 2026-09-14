+++
id            = "dat:0619-fob-music-list-2024-six-deep-cuts-nintendo-fusion-overclaim"
layer         = 1
type          = "datum"
title         = "Fall Out Boy page: the six 'MUSIC LIST (start-2024)' track titles are page-relayed, and the 2005 Nintendo Fusion Tour window is listed as an appearance it is not"
claim         = "Two findings on the Fall Out Boy page's supporting claims. **(1) The six-track 'MUSIC LIST (start-2024)' selection** — *\"Tell That Mick He Just Made My List of Things to Do Today,\" \"Yule Shoot Your Eye Out,\" \"Thriller,\" \"Our Lawyer Made Us Change The Name Of The Song So We Wouldn't Get Sued,\" \"What A Catch, Donnie\"* — plus the page's own caveat that *\"No 'Sugar, We're Goin Down,' no 'Dance, Dance'\"* — is relayed through the old-wiki export; the stated source `raw/self/favorites/FAVS MASTERLIST.csv` is not held in this repository (see [`dat:0438`](0438-favorites-masterlist-totals-2016-entries.md), which confirms the masterlist pipeline totals but not individual rows). The 'deep cuts over hits' completist pattern is the page's reading and is filed as such. **(2) The supplementary-appearances table lists the Sep 28–Nov 23, 2005 Nintendo Fusion Tour as a Fall Out Boy appearance, but the underlying entry is a tour window, not an attended date.** The concert index's row 15 notes only *\"Confirmed tour window\"* with venue *\"Various (tour)\"* — it names no stop Dan attended. [`dat:0150`](0150-nintendo-fusion-tour-2004-2005.md) already established that the 2005 edition *\"is explicitly framed as a tour window rather than a single attended date … no claim is made about which 2005 stop he attended.\"* The FOB page inherits the row and relabels it as an appearance; that promotion is the page's, not the table's."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10741 (219 lines); the 'In Favorites' section and the supplementary-appearances table rows for Aug 1, 2005 / Sep 28–Nov 23, 2005 / Feb 6, 2007 / Nov 19, 2007 / Dec 12, 2008. Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt (same rows) and against dat:0150's finding on the 2005 Nintendo Fusion edition. The 2007 Facebook statuses ('swooning over the new FOB', 'in New York City to see Fall Out Boy at TRL') cited by the page could not be checked: the facebook export is unheld (facebook-threads/ holds only MANIFEST.json)."
importance    = 2
tags          = ["fall-out-boy", "favorites", "concert-record", "old-wiki", "unverified"]
created       = "2026-09-09"

[when]
start = "2005-08-01"
end   = "2024-12-31"
+++

## What survives

The deep-cuts reading is internally coherent — six non-single selections,
the title-as-joke habit, the page's own *\"What A Catch, Donnie\"* analysis —
and the page is admirably explicit that the 'why' is speculative (the
lyrics-as-timbre caveat). What survives as data is the *track list itself*;
the source CSV is unheld, so the list is page-relayed. The 2005 Nintendo
Fusion row's promotion from tour window to appearance should be reverted
or annotated on any downstream use: per [`dat:0150`](0150-nintendo-fusion-tour-2004-2005.md)
it is the one row in the FOB page's supplementary table that the master
list never claimed was attended.
