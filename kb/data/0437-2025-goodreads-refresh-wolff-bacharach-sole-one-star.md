+++
id            = "dat:0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star"
layer         = 1
type          = "datum"
title         = "2025 Goodreads refresh: Wolff complete-series read, Bacharach correction (one logged title, 2022 was the shelving date), and the corpus's only 1-star rating"
claim         = "The books page's 2025 update, built on a second, more recent Goodreads export (`raw/self/google-drive-export/goodreads_library_export.md`, 103 rows, 63 marked 'read'), records: (a) most-recent reads running *The Price of Justice* (Leamer, Jan 20 2025) → *All or Nothing: How Trump Recaptured America* (Wolff, May 20 2025) → *Shocking Psychological Studies* (Polk, May 20 2025) → *The Politics of Fear* (Goldwag, May 20 2025) → *Abundance* (Klein, Jul 16 2025, re-logged); the Wolff read completes all four Trump-era books plus this 2025 volume — a complete-series read of one author; (b) a 2026-08-08 correction: only **one** Bacharach title was ever logged (*The Doorposts of Your House and on Your Gates*, 2017, rated 5 stars), 2022 was the shelving date not the publication year, and *The Bend of the World* appears in neither the Goodreads export nor FAVS MASTERLIST.csv — which matters because *The Bend of the World* is the novel Dan names as the site of the 155-Virginia-Ave coincidence chain, while the book he demonstrably read is the one Bacharach identified in Feb 2021 as the Uniontown novel; (c) *None of This Rocks* (Trohman memoir) is the corpus's **only 1-star rating**, read Feb 2023. Note: 63 'read' in the fresher export vs. 120 in the masterlist are different snapshots of the same shelf at different times, not a contradiction."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 9477 (200 lines); byte-identical to raw/old-wiki-export-2026-09-04/whole.txt lines ~3390-3430 (verbatim match verified programmatically as part of the whole-page check). Quotations are transcribed from the page body. The underlying goodreads_library_export.md is NOT held in this repo; the Bacharach correction and the 103-row/63-read figures rest on the old wiki's rendering of that export. The 'only 1-star rating' claim is consistent with the read-corpus rating distribution in the same page (My Rating 1 = 1). The 're-logged' reading of the *Abundance* duplicate entry is the page's own inference."
importance    = 3
tags          = ["favorites", "books", "goodreads", "old-wiki", "correction", "jacob-bacharach"]
created       = "2026-09-09"

[when]
start = "2025-01"
end   = "2025-07"
+++

## What the check confirms

The page documents its own correction history honestly: the 2026-08-08
Bacharach correction names the exact prior error ('Two of his books read and
both top-rated', dating the novel to 2022, *The Bend of the World* as a second
five-star entry) and the evidence that killed it. The sole-1-star claim is
arithmetically consistent with the same page's Dimensions table. The two
export sizes (120 vs 63 read) are presented on the page as different snapshots,
which is the correct reading — the 2025 export is partial coverage, not a
recount.

## What it does not confirm

The export itself is unheld, so the Bacharach correction is the old wiki's
attested reading of its own raw file, not re-verifiable here. Whether the 103
rows of the 2025 export are a *subset* of the 120 or a partially-overlapping
set is not stated on the page. The coincidence-chain significance of *The Bend
of the World* vs. the read book is referred to wiki/people/jacob-bacharach and
wiki/places/155-virginia-ave; this node does not re-adjudicate that thread.
