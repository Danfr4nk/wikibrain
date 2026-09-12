+++
id            = "dat:0389-dan-carlin-favorites-masterlist-absent"
layer         = 1
type          = "datum"
title         = "Dan Carlin favorites page: 2-book claim repeats the prior wiki; FAVS MASTERLIST.csv is not held"
claim         = "The page `wiki/interests/favorites/books/authors/dan-carlin.md` reports **2 books** — *Blueprint for Armageddon* and *Wrath of the Khans*, both framed as Hardcore History podcast-to-book adaptations — citing `raw/self/favorites/FAVS MASTERLIST.csv` as its source. That CSV is not present anywhere in this repository (`raw/self/` has no favorites subtree), so the 2-book count and the adaptation framing are available here only as repetition of the prior wiki. Corpus page and old-wiki export are text-identical (corpus__3.txt ~8953–8995; whole.txt `wiki/interests/favorites/books/authors/dan-carlin.md`)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8953 (43 lines); byte-identical against raw/old-wiki-export-2026-09-04/whole.txt except wrapper separators. find for '*FAV*' under raw/ returns nothing; `raw/self/` does not exist in the repo. The page's own changelog (2026-07-11: 'Full rewrite from stub') predates the snapshot."
importance    = 2
tags          = ["favorites", "books", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"
+++

## What this establishes and what it does not

**Established:** the 2-book Dan Carlin claim and the podcast-to-book framing
are what the prior wiki said on 2026-09-04, in both of its surviving copies.

**Not established here:** that Dan's favorites list actually contains exactly
these two Carlin titles, or that they entered the list as book adaptations.
The underlying list the page names as its source is not held. Treat the count
as old-wiki attribution, not as a checked corpus fact.

## Cross-references

- [`dat:0196`](0196-favorites-masterlist-unavailable-precedent.md) — the
  favorites-masterlist absence is a known, precedented limitation.
- [`dat:0390`](0390-jonathan-karl-favorites-masterlist-absent.md),
  [`dat:0391`](0391-trump-books-topic-count-unverified.md),
  [`dat:0392`](0392-war-books-topic-counts-absent.md) — same missing-source
  pattern on the sibling favorites pages, same wave.
