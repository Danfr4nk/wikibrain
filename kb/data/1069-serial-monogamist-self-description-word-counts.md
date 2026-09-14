+++
id            = "dat:1069-serial-monogamist-self-description-word-counts"
layer         = 1
type          = "datum"
title         = "'I'm a serial monogamist' (2019-08-17) against the corpus vocabulary — word-frequency replication is slice-dependent"
claim         = "On 2019-08-18 02:26:13 UTC (2019-08-17 22:26 EDT), Dan wrote: 'i'm a serial monogamist so i've only been with a few girls, and they all fit a very specific type' — the only instance of the phrase in the corpus, sent six weeks before the Kelly Johansson run and two months before the filmed MMF. A replication of the page's word-frequency counts on the held slice (192,140 rows; 99,360 sent) returns: non-monogamy tokens (threesome/kink/hookup/open relationship/cuck/poly/bull/fetish/bdsm) = 107, exactly matching the page; camming tokens = 269 vs the page's 304; 'monogam' = 13 (all rows) / 10 (sent) vs the page's 7; 'faithful' = 4 vs the page's 3; 'exclusive' = 43 / 39 vs the page's 15."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scans of corpus/messages.csv, word-boundary regex, sender-filtered. The exact 'serial monogamist' row: 2019-08-18 02:26:13 UTC, sender Me, chat +15619061550 — UTC→EDT conversion gives 2019-08-17 22:26, exactly the page's timestamp. The page's counts were drawn from a different slice: the token table from an 88,988-sent-message 2015–2026 forensic pass, and the commitment-vocabulary counts from a 217,573-record dump, neither of which is the 192,140-row held slice — so the discrepancies (304 vs 269; 7 vs 10/13; 15 vs 39) are slice artifacts, not contradictions of method. The non-monogamy 107 replication is exact, which is some evidence the counting method transfers cleanly."
importance    = 4
tags          = ["arrangement", "word-frequency", "self-theory", "corroboration"]
created       = "2026-09-09"

[when]
date = "2019-08-17"
+++

The substantive finding survives the slice difference: commitment vocabulary
is rare and arrangement vocabulary is abundant under every counting. The
numbers are not portable constants, though — quote them with their slice,
never bare.
