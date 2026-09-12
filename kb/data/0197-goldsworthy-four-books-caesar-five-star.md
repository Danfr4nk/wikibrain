+++
id            = "dat:0197-goldsworthy-four-books-caesar-five-star"
layer         = 1
type          = "datum"
title         = "Adrian Goldsworthy: 4 books in the favorites — the ancient-history cluster's highest author count, with the Caesar biography at 5 stars"
claim         = "Adrian Goldsworthy appears in the book favorites with **4 books — the highest count of any author in the ancient-history cluster** — and the Caesar biography received a **5-star rating**, \"one of a small number of books at that tier across the entire favorites list.\" The old wiki's books shelf corroborates both legs independently of the author page: its top-authors table reads *\"Goldsworthy, Adrian | 4\"* and its 5-star list names *\"Caesar (Goldsworthy).\"* The cluster titles include *Caesar's Civil War*, *Antony and Cleopatra*, and *The Punic Wars*. The page's descriptive framing (\"British military historian, Oxford-trained\"; the republic-falls-via-exceptional-men thesis) is the prior wiki's own synthesis and was not checked against publication metadata; file it as attributed-to-the-page, not as a datum."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8867 (42 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 2614-2653 verbatim, including the '4 books' and 5-star Caesar claims. Cross-checked against the old wiki's books shelf in the same export: 'Goldsworthy, Adrian | 4' (line 3289), 5-star examples including 'Caesar (Goldsworthy)' (line 3272), and shelf titles 'Caesar's Civil War | Goldsworthy, Adrian | 4.03', 'Antony and Cleopatra | Goldsworthy, Adrian | 3.97', 'The Punic Wars | Goldsworthy, Adrian | 4.20' (lines 3167, 3168, 3195). The underlying FAVS MASTERLIST.csv is not held in this repo, so the counts are corroborated across two old-wiki pages but not against the primary CSV. The claim that 4 is the highest count 'in the ancient-history cluster' specifically rests on the author page alone; the top-authors table is shelf-wide."
importance    = 2
tags          = ["favorites", "books", "old-wiki", "corroboration"]
created       = "2026-09-09"
+++

## What the check confirms

Three old-wiki surfaces agree on the two numbers that matter: the author
page's 4 books and 5-star Caesar, the shelf's top-authors count of 4, and the
shelf's 5-star list including the Caesar biography. This is the strongest
corroboration any favorites author in this ingest gets, because the shelf
tables are machine-derived from the masterlist rather than hand-written.

## What it does not confirm

The primary CSV is still unheld; the shelf tables inherit the same source
the author page used, so this is corroboration across pages, not across
sources. \"Highest in the ancient-history cluster\" was not independently
verified against the cluster's other authors. The biographical framing
(British, Oxford-trained, the sustained thesis) is encyclopedic but was not
checked against a publication record here — it is filed as the page's claim,
not established fact.
