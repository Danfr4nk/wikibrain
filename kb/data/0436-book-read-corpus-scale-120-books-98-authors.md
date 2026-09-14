+++
id            = "dat:0436-book-read-corpus-scale-120-books-98-authors"
layer         = 1
type          = "datum"
title         = "Book read corpus: 120 books, 98 authors; rating distribution sums to 120 and the 86.7% single-appearance figure checks out"
claim         = "The read-books shelf holds **120 books across 98 unique authors**, all carrying ratings: 29 at 5 stars, 42 at 4, 32 at 3, 7 at 2, 1 at 1, and 9 at 0 — the distribution sums to exactly 120 and the 'High-rated (4+)' 71 equals 29+42. Top authors: Woodward 5, Wolff 5, Goldsworthy 4, Karl 3, then ten authors at 2. Read dates skew 2024 (53), 2023 (16), 2025 (5), 2022 (4), 2019 (1). The page's retired-'range' argument is internally consistent: 40 books tagged `trump` or `jan-6` (30 authors) plus 20 tagged `roman-republic`/`ancient-history`/`caesar` (14 authors), non-overlapping, = 60 of 120; and 85 of 98 authors appearing once = 86.7% (85/98 = 0.8673, verified). All 120 carry ratings, unlike the music favorites which are inclusion-only."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 9477 (200 lines); byte-identical to raw/old-wiki-export-2026-09-04/whole.txt lines 3230-3450 (verbatim match verified programmatically). Arithmetic verified by hand from the page's own Dimensions table: 29+42+32+7+1+9=120; 29+42=71; 85/98=0.8673; 40+20=60. The Goldsworthy leg (4 books, 5-star Caesar) is independently corroborated in dat:0197 and is not duplicated here. The underlying FAVS MASTERLIST.csv / FAVORITES DATA (2).md / goodreads_library_export.md are NOT held in this repo, so all counts trace to the old wiki's pipeline, not to a held primary."
importance    = 3
tags          = ["favorites", "books", "old-wiki", "counts", "verified-arithmetic"]
created       = "2026-09-09"
+++

## What the check confirms

The page's tables are internally coherent: every stated total is derivable
from the component rows it sits next to, and the two 2026 self-corrections
(the connections claim of 60/120/44 and the 2026-08-19 CONTRADICTION block)
agree with each other on the 40+20=60, 30+14=44 split. The verbatim
corpus/old-wiki match means no transcription drift between the two
generations of the wiki.

## What it does not confirm

None of the raw book sources are held here, so 120/98 and the rating
distribution are pipeline counts inherited from the prior wiki, not re-derived
facts. The 5-star examples named in prose (Hardcore History, Nuclear War,
American Prometheus, Rubicon, Caesar, Rise and Fall of the Third Reich) were
not checked title-by-title against the table; the detailed-snapshot table's
star counts (e.g. Caesar ★★★★★) are as the page renders them. Do not quote
the read-date distribution as a settled reading history without the CSV.
