+++
id            = "dat:0160-annie-read-corpus-scale-and-method"
layer         = 1
type          = "datum"
title         = "The Annie Read: 97,768-message corpus, two-output method (chronology + working notes), partial progress as of 2026-08-18"
claim         = "The Annie Read is a systematic read pass over a **97,768-message** Annie corpus (built by `bin/annie-corpus` into `exports/annie-corpus.csv`), producing two outputs per window: `wiki/timeline/annie-record` (the chronology — what happened) and `wiki/timeline/annie-read-notes` (everything else the window established — entities, leads, motifs, corrections — recorded at the moment of maximum information so the read is paid for once). As of the 2026-08-18 synthesis pass, reading stood at **13,635 of 97,768 messages (13.9%)**, read through 2015-12-31, with ~160 events recorded. The read was adopted at the operator's suggestion on 2026-08-15. Each synthesis pass was evidence-gated: the 2026-08-17 pass cut 5 of 26 candidate rows and the 2026-08-18 pass cut 2 of 12 at the verbatim-quote gate."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 102283 (509 lines). The old-wiki export carries the same page (whole.txt line 95869ff, 37,899 chars) with the 97,768 figure, the two-output method, the progress tables and both synthesis passes. The 97,768 count is independently consistent with this repository's own governance (MEMORY.md: 'Annie: 97,768 unique messages, not 126k+'). The underlying annie-corpus.csv is not in this repository (only legacy/bin/annie-corpus), so the message-level read claims are the prior wiki's, not re-verified here. The read-notes page is a working document of the read process itself — its value is methodological, and it is filed as such."
importance    = 4
tags          = ["annie", "method", "corpus-scale", "old-wiki", "read-pass"]
created       = "2026-09-09"

[when]
start = "2026-08-15"
end   = "2026-08-18"
+++

## What the check confirms

The page exists in both the old wiki and the corpus copy with the same
structure, scale figure and progress numbers. The 97,768 figure is the
repository's canonical Annie-corpus size (it recurs in MEMORY.md's
governance note), and the progress percentages are internally consistent
(11,922/97,768 = 12.2%; 13,635/97,768 = 13.9%).

## What it does not confirm

None of the read's message-level findings were re-read here — the
annie-corpus.csv export is not held in this repository, and the
corpus/messages.csv iMessage export is a different instrument. Spot checks
done for sibling nodes (dat:0161–0163) verified individual quotes against
corpus/messages.csv, but the read pass as a whole is the prior wiki's work,
relay-recorded here.
