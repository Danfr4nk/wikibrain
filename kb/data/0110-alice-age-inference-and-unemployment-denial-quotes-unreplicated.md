+++
id            = "dat:0110-alice-age-inference-and-unemployment-denial-quotes-unreplicated"
layer         = 1
type          = "datum"
title         = "Alice page's two load-bearing quotes (age inference, unemployment denial) are not replicable in the held corpus"
claim         = "Two quotes do the page's heaviest evidentiary work and neither is replicable here: (1) **2025-06-19** — *\"I missed the first four years of Alice's fucking life\"*, the sole basis for the ~2019–2020 birth inference; (2) **2025-03-31** — *\"I got the letter I was denied unemployment\"* inside the *\"should we tip annie?\"* message, asserted as **the only record in the corpus of Annie applying for unemployment** and the date of her income collapse (March 2025). In the held corpus: 0 hits for \"missed the first four years\", \"should we tip annie\", \"will not fall asleep\", and \"denied unemployment\"; the 16 \"unemployment\" hits are all 2020-era and mostly Dan's own. Both quotes live in the unheld dox-scan dump."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:operator-testimony-2026-09-09",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Quotes transcribed verbatim from the corpus page (corpus__3.txt line 46906, \"What the record holds\" and \"What it establishes about Annie\" sections). Cross-checked with bin/corpus-query and bin/wb-corroborate against corpus/messages.csv (192,140 messages): all four exact phrases return zero hits; \"unemployment\" alone returns 16 hits, none from Annie in 2025, none about a denial letter. The page's frontmatter sources are the dox-scan dump and a per-thread CSV, neither held here — so the quotes are the old wiki's transcriptions of records not in this repository, and the \"only record in the corpus\" superlative is asserted over a corpus this ingest cannot see."
importance    = 4
tags          = ["quotes", "unverified", "annie-ulmer", "old-wiki", "corpus-mismatch"]
created       = "2026-09-09"

[when]
start = "2025-03-31"
end   = "2025-06-19"
+++

## Why this is filed low, not as a contradiction

Absence in the held corpus is `never_observed`, not `known_not_to_occur` —
and here the held corpus is known-incomplete relative to the page's source
(see [`dat:0109`](0109-alice-counts-range-from-dump-not-held-here.md)). The
page's two claims may be exactly true of the dox-scan dump. What this node
records is that **the two most load-bearing sentences on the page are
single-transcription claims about records nobody here can re-read** — the
birth-date inference and the income-collapse dating both hang from one
unreplicated message each.

## The "only record" superlative is the fragile part

\"The only record in the corpus of Annie applying for unemployment\" is a
universal claim over 217,573 records. In the 192,140 records held here there
is *no* Annie unemployment record at all — consistent with the page's claim
*if* the dump has one, but the superlative cannot be checked from here, and
a single missed message in either direction breaks it. Pulling the dox-scan
dump would close both quotes in one move.
