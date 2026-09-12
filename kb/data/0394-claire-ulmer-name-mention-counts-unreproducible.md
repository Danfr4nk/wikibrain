+++
id            = "dat:0394-claire-ulmer-name-mention-counts-unreproducible"
layer         = 1
type          = "datum"
title         = "Claire page's child name-mention counts cannot be reproduced from the 192,140-row held corpus"
claim         = "The page `wiki/people/claire-ulmer.md` reports mention counts for three child names — Alice 66, Otto 31, Waylon 2 — and a Wednesday-share analysis built on 217,573 corpus records, with 257 Claire mentions. A full-text pass over the held `corpus/messages.csv` (192,140 rows) returns **zero** hits for each of the three child names and **210** Claire hits. The page's figures therefore depend on records the held corpus does not contain (the larger 217,573-record dump), not on an error in the held file — they are unreproducible here, not falsified. Corpus page and old-wiki export are text-identical."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt; verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt `wiki/people/claire-ulmer.md`. Full-text search of the held 192,140-row CSV for the three child names returned 0/0/0 rows; 'Claire' returned 210 rows against the page's 257. The page's analysis explicitly cites the 217,573-record corpus as its source."
importance    = 3
tags          = ["people", "old-wiki", "attribution", "corpus-gap", "unverified"]
created       = "2026-09-09"
+++

## What this establishes and what it does not

**Established:** the held corpus cannot reproduce the Claire page's
name-frequency and weekday analyses. Any downstream use of those counts must
carry the 'unheld records' provenance.

**Not established here:** that the counts are wrong. The page's source was a
larger records set (217,573 records vs the 192,140 rows held here); the
difference may be exactly the missing records. Do not relabel this datum
'page debunked' — label it 'not reproducible from held data'.

## Cross-references

- [`dat:0064`](0064-jay-lauer-overdose-ellen-thread-origin.md) — the 217,573 /
  192,140 records-set mismatch is precedented; this is another instance of it.
