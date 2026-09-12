+++
id            = "dat:0479-bob-woodward-five-books-no-five-star"
layer         = 1
type          = "datum"
title         = "Bob Woodward: 5 books in the favorites list, tied for the highest author count, zero 5-star ratings"
claim         = "wiki/interests/favorites/books/authors/bob-woodward.md places 5 Woodward titles in the favorites list — \"tied for the highest count of any author in the favorites list\" — with zero 5-star ratings: \"The books get read; they don't get loved.\" The page contrasts this with Michael Wolff (\"3 five-stars from 5 books\") and names Woodward's Trump books as *Fear*, *Rage*, *Peril*, *War* (four of the five)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8909 (44 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 2656-2698 verbatim, including the \"5 books — tied for the highest count\" line, the \"Wolff has 3 five-stars from 5 books\" sentence, and the four Trump titles. The page's stated source, raw/self/favorites/FAVS MASTERLIST.csv, is not held in this repository (raw/self/ is on Drive only, per SOURCES.md), so the count itself is text-fidelity-verified between the two wiki copies, not re-derived from the CSV."
importance    = 2
tags          = ["interests", "books", "favorites", "old-wiki", "testimony"]
created       = "2026-09-09"

[when]
start = "2026-06-22"
end   = "2026-07-11"
+++

## What the check confirms

The corpus snapshot (2026-09-04) and the old-wiki export (2026-09-04) carry
identical text for this page — frontmatter, the 5-book/zero-5-star claim,
the Wolff contrast, the four named Trump titles, and the
methodology critique (*\"Woodward is the access-maximizing long game\"*).

## What it does not confirm

The underlying CSV is not on disk here. The count — 5 books, tied-highest
among authors, zero 5-stars — is the wiki's own measurement, carried as
attributed. The eclecticism page (this worker, [`dat:0480`](0480-eclecticism-count-spine.md))
repeats the Woodward-5 / Wolff-5 figures in its author-count table, which
is the same single source cited twice, not an independent corroboration.
The fifth Woodward title (Fear, Rage, Peril, War are four) is not named on
the page.

## Corroboration from a second wiki surface

[`dat:0344`](0344-michael-wolff-five-books-three-five-stars.md) independently
verified the counts against the old wiki's *machine-derived* books-shelf
tables (a different surface from the author page): the Top Authors table
lists Woodward 5 and Wolff 5 with Karl 3, and the 5-star-authors table lists
Wolff 3 / Karl 2 / Plutarch 2 — the maximum of 3 supporting both \"highest
journalist\" and \"highest overall\" readings of Wolff. The Woodward-5/zero
figures thus stand on two old-wiki surfaces, though still not on the
primary CSV, which this repository does not hold.
