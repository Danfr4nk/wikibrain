+++
id            = "dat:0845-lauryn-ashly-facebook-thread-metadata-correction"
layer         = 1
type          = "datum"
title         = "Lauryn Ashly: FB manifest shows 50 message blocks (25 from Dan, 2014 and 2020), not ~25 both directions; bodies unavailable"
claim         = "The Facebook thread with Lauryn Ashly exists in the held metadata: the facebook-threads manifest lists a thread with counterparty **Lauryn Ashly** holding **50 message blocks, 25 from Dan, in years 2014 and 2020** — correcting the page's '~25 (both directions)'. The thread bodies are unavailable (raw/facebook-threads/ holds only MANIFEST.json), so the page's substantive quotes — the 2014 Rob Orange / grief exchange, the September 2020 'unfortunately i do not' decline, the March–April 2020 arrangement asks — are old-wiki/Facebook-sourced testimony, not re-checkable in this repository. The 2020 metadata presence is consistent with the page's 2020 recontact, and the 2014 presence with the Rob Orange death (2013-10-21), but neither content claim can be independently verified here."
cites         = ["src:facebook-export-2026-06-23",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 62251, 92 lines). Manifest entry read from raw/facebook-threads/MANIFEST.json (python scan of 396 threads): counterparty 'Lauryn Ashly', 50 message blocks, 25 from the operator, years [2014, 2020]. The page's 'september 2020 ... Denver all weekend, but unfortunately i do not' quote was located in whole.txt:55968 — old-wiki testimony, no held body to check against. No held iMessage rows for Lauryn Ashly were found."
importance    = 2
tags          = ["lauryn-ashly", "facebook", "thread-metrics", "correction", "unverified", "metadata-only"]
created       = "2026-09-09"

[when]
start = "2014"
end   = "2020"
+++

## Why this node matters

The page's most important structural claim — that the Lauryn Ashly thread
is the corpus's only contemporaneous account of Rob Orange's death — hangs
on bodies nobody in this repository can read. The metadata correction (50
vs 25) is solid; the grief-exchange and decline quotes stay at testimony
level. A future worker with the raw FB export should re-derive the thread
wholesale.
