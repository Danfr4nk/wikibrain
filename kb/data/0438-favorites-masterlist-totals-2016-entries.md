+++
id            = "dat:0438-favorites-masterlist-totals-2016-entries"
layer         = 1
type          = "datum"
title         = "Favorites masterlist totals: 2,016 entries — music 1,860 (1,477 unique artists, inclusion-only), books 120, art 25 all-5-star, movies 11 unrated"
claim         = "The favorites index holds **2,016 total entries** from FAVS MASTERLIST.csv: Music 1,860 (92.3%, 1,477 unique artists, ~1.26 avg per artist, inclusion-only with 0 rated), Book 120 (6.0%, 98 unique authors, all rated 29@5/42@4), Art 25 (1.2%, 25 unique creators, all rated 5 — painters/architects), Movie 11 (0.5%, unrated, sparse metadata). Category counts sum to exactly 2,016; 1860/1477 = 1.259 ≈ 1.26 as stated. Music release-year spike: 2025 (530), 2026 (197), 2024 (145). FB-continuity counts: Elliott Smith 7, Fall Out Boy 6, Say Anything 6, Lil Wayne 5 music likes; 2007 status updates prefigure current top artists. The page explicitly notes the CSV itself contains no 'sub-bass' or 'Jimmy Pop' strings — those links are contextual from chats and the production spine."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10190 (50 lines); byte-identical to raw/old-wiki-export-2026-09-04/whole.txt lines 3950-3990 (verbatim match verified programmatically). Arithmetic verified: 1860+120+25+11=2016; 1860/2016=0.9226; 120/2016=0.0595; 25/2016=0.0124; 11/2016=0.0055; 1860/1477=1.259. The underlying FAVS MASTERLIST.csv is NOT held in this repo, so these are the old wiki's pipeline totals, not re-derived. No existing kb node covers the favorites index totals (checked dat:0059-0257 by grep for '2016', '1,477')."
importance    = 3
tags          = ["favorites", "masterlist", "old-wiki", "counts", "verified-arithmetic"]
created       = "2026-09-09"
+++

## What the check confirms

Every total on the index page recomputes cleanly from its components — this
is the tightest arithmetic on any page in this ingest so far. The music
column's 'inclusion only (0 rated)' stands against the book column's 'all
rated', which dat:0436 corroborates at the book end.

## What it does not confirm

The CSV is unheld, so 2,016 and its category split are the prior wiki's
assertion. The release-year distribution (530/197/2024-145) and the
cluster/FB-continuity claims were not recomputed — they rest on the page's
'deep parse' of the same unheld file. Per standing governance these are
snapshot counts of the masterlist export, not living totals: do not reuse them
as current without re-pulling the CSV.
