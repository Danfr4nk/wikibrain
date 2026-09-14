+++
id            = "dat:0390-jonathan-karl-favorites-masterlist-absent"
layer         = 1
type          = "datum"
title         = "Jonathan Karl page claims 3 books with no star ratings but names only 2; FAVS MASTERLIST.csv is not held"
claim         = "The page `wiki/interests/favorites/books/authors/jonathan-karl.md` reports **3 books, no star ratings recorded**, naming only *Front Row at the Trump Show* and *Betrayal* — the third book is never named anywhere on the page. Its stated source is `raw/self/favorites/FAVS MASTERLIST.csv`, which is not held in this repository, so neither the 3-book count nor the missing-rating detail can be checked here; the page is available only as repetition of the prior wiki. Corpus page and old-wiki export are text-identical (corpus__3.txt ~8996–9197; whole.txt `wiki/interests/favorites/books/authors/jonathan-karl.md`)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8996; byte-identical against raw/old-wiki-export-2026-09-04/whole.txt except wrappers. The page's 'In Favorites' section ('3 books. No star ratings recorded.') contradicts its own named list (two titles) with no third title supplied."
importance    = 2
tags          = ["favorites", "books", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"
+++

## What this establishes and what it does not

**Established:** on 2026-09-04 the prior wiki said Karl had 3 books with no
star ratings while naming only two — an internal inconsistency in the page
itself.

**Not established here:** which book is the third, whether the count is 3,
whether any ratings were recorded. Without the CSV the page's numbers are
attributed claims, and the unnamed-third-book gap is a data-quality defect in
the page itself, not just an unverifiable claim.

## Cross-references

- [`dat:0196`](0196-favorites-masterlist-unavailable-precedent.md) — favorites
  masterlist absence precedent.
- [`dat:0389`](0389-dan-carlin-favorites-masterlist-absent.md),
  [`dat:0391`](0391-trump-books-topic-count-unverified.md),
  [`dat:0392`](0392-war-books-topic-counts-absent.md) — same wave, same
  missing-source pattern.
