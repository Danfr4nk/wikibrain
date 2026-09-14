+++
id            = "dat:0849-lukyan-mraz-manifest-window-confirms-count-off-by-one"
layer         = 1
type          = "datum"
title         = "Lukyan Mraz: FB manifest shows 35 blocks (21 from Dan, 2015–2016) vs the page's 36; grow/dispute content is unheld"
claim         = "The Facebook thread with Lukyan Mraz exists in the held metadata: **35 message blocks, 21 from Dan, in years 2015 and 2016** — against the page's '36 messages, August 2015–March 2016'. The date window matches; the count is off by one block. The thread bodies are unavailable (raw/facebook-threads/ holds only MANIFEST.json), so the page's substance — the 2015 grow attempt and equipment, the September 23, 2015 'Confirmed female on the first one' update, the money/equipment dispute read — is old-wiki/Facebook-sourced testimony, not re-checkable here. The old-wiki export does preserve the 'Confirmed female on the first one' quote as quoted material, which is at least verbatim testimony rather than paraphrase."
cites         = ["src:facebook-export-2026-06-23",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 63084, 84 lines). Manifest entry read from raw/facebook-threads/MANIFEST.json: counterparty 'Lukyan Mraz', 35 blocks, 21 from the operator, years [2015, 2016]. The 'Confirmed female on the first one' quote located in the old-wiki export (whole.txt:105107) as quoted FB material. No held iMessage rows for Lukyan Mraz were found."
importance    = 2
tags          = ["lukyan-mraz", "facebook", "thread-metrics", "correction", "unverified", "metadata-only"]
created       = "2026-09-09"

[when]
start = "2015-08"
end   = "2016-03"
+++

## Standing of the content

Metadata supports the page's frame (a real 2015–2016 thread, real
exchange, roughly the page's size). The grow and the dispute are one layer
down: quoted or paraphrased in the old wiki, never visible to a held
source. Treated as page-attributed pending a raw FB export.
