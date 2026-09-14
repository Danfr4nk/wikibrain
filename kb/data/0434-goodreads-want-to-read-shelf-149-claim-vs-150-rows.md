+++
id            = "dat:0434-goodreads-want-to-read-shelf-149-claim-vs-150-rows"
layer         = 1
type          = "datum"
title         = "Goodreads 'want to read' shelf: page claims 149 titles, its own table carries 150 unique titles"
claim         = "The want-to-read page headlines **149 titles** on Dan's Goodreads 'want to read' shelf (average rating 4.11; 19 rated 4.4+; highest-rated *The Sinister Truth: Mk-Ultra* by Ciaccia at 4.75), sourced to `raw/self/dox-md/DAN_COMP.md` — an image-transcription export of his full Goodreads shelves — and states this shelf was never mined before this pass. Counting the page's own Full List table gives **150 unique data rows, zero duplicates**: the headline is off by one from its own table. The page's Dimensions table is consistent with the row count only in the title column; the sub-claims (~34 Trump-era politics titles, ~18 ancient Rome, ~14 intelligence/conspiracy history, plus a distinct NYC-history thread) are the page's own approximations, not independently verified here."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 9248 (229 lines); byte-identical to raw/old-wiki-export-2026-09-04/whole.txt lines 3020-3229 (verbatim match verified programmatically). Table rows counted from the page body itself: 152 pipe-led rows minus header and separator = 150 data rows, 150 unique titles, no duplicates. The underlying DAN_COMP.md export is NOT held in this repo, so the 149-vs-150 question is internal to the page: one of the two numbers is the page's own error. Arithmetic of the Dimensions table (avg 4.11, 19 at 4.4+, Mk-Ultra 4.75 top) was not independently recomputed against the table rows here."
importance    = 2
tags          = ["favorites", "books", "goodreads", "old-wiki", "count-discrepancy"]
created       = "2026-09-09"
+++

## What the check confirms

The page is verbatim identical in the corpus and the old wiki, so there is no
transcription drift: whatever numbers the page holds are the prior wiki's own.
Its Full List table is internally consistent (all 150 rows well-formed, no
duplicated titles), which makes the headline 149 an honest off-by-one rather
than a table defect.

## What it leaves open

The primary source (`raw/self/dox-md/DAN_COMP.md`, an image transcription of the
Goodreads shelves) is not held in this repository, so neither 149 nor 150 can be
confirmed against the actual shelf, and the Dimensions metrics (avg 4.11, 19
at 4.4+, Mk-Ultra 4.75 highest) were not recomputed from the 150 rows. Any
downstream use of the want-to-read counts should state the page's own
inconsistency rather than silently picking one number. The sub-cluster
approximations (~34/~18/~14) and the MindHub-profiler/NYC-thread observations
are the page's editorial pattern-matching and carry no source beyond the table
itself.
