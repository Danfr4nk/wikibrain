+++
id            = "dat:0162-zach-clingan-drug-use-origin-disambiguation"
layer         = 1
type          = "datum"
title         = "Zach Clingan, not Zachariah Harshman: the Dec 9, 2015 texts are Clingan's, and Dan names him as the origin of his drug use"
claim         = "The December 9, 2015 confrontation texts (*\"I have to talk to you\"*, *\"have you lost your damn mind\"*, *\"keep my eyes open\"*) belong to **Zach Clingan**, not Zachariah Harshman — Dan names the sender himself (*\"Zach clingan just texted me\"*). The same day, Dan names Clingan as the origin of his drug use: *\"THAT is who introduced me to drugs\"* — verified verbatim in the held iMessage corpus (**2015-12-09 20:20:50 UTC, outbound**: *\"Literally makes me want to puke. THAT is who introduced me to drugs\"*). Clingan's warning to Annie is the first documented use of the switch against her by a third party. The correction was applied 2026-08-17 to zach-clingan (new section with the origin fact), zachariah-harshman (attribution block de-crediting the Dec 9 texts), and annie-ulmer."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "From the read-notes corrections queue and synthesis pass 2026-08-17 (corpus__3.txt line 102283ff; old-wiki export whole.txt line 95869ff, 'THAT is who introduced me to drugs' present). The origin quote was verified directly in corpus/messages.csv by csv parsing: exactly one row carries the text, date_sent 2015-12-09 20:20:50, is_from_me=1. The page's timestamps are Eastern; the corpus stores UTC (the ~5h offset), so 20:20:50 UTC = 15:20 EST, matching the page's 15:20 exactly. The attribution of the Dec 9 texts to Clingan ('Zach clingan just texted me') is the read pass's quotation from annie-corpus.csv, not re-verified here — but it is Dan's own in-thread identification, and the disambiguation from Harshman is what the datum turns on."
importance    = 4
tags          = ["annie", "correction", "2015", "imessage-corpus", "corroborated"]
created       = "2026-09-09"

[when]
start = "2015-12-09"
end   = "2015-12-09"
+++

## Why this node is high confidence

The load-bearing half — Dan naming the origin of his drug use — is a
first-party message read directly from the held corpus, timestamp-matched
to the minute once the UTC/Eastern offset is accounted for. The other half
is an attribution correction the read pass made from Dan's own naming in
the same thread. Both halves rest on Dan's words, not on the read pass's
inference, which is why the gate the synthesis pass ran (verbatim quote or
cut) matters: this row passed it.
