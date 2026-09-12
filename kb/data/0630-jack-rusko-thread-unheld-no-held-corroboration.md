+++
id            = "dat:0630-jack-rusko-thread-unheld-no-held-corroboration"
layer         = 1
type          = "datum"
title         = "Jack Rusko: the 202-message 2017–2018 caddy thread is unheld; no corroboration available in this repository"
claim         = "The Jack Rusko page's entire substance — a fellow Nemacolin caddy and genuine friend through the 2017–2018 season, a 202-message thread ([phone redacted] per the corpus redaction convention), date range 2017-10-16 to 2018-08-09, the laptop loan bit ('Dan would u please get me my laptop', 'it's been a month friend what up with U?'), the post-Fran-death condolence (*\"Sorry to hear it Dan I'm glad you got to see her smile with her eyes open an at peace... she lived a hell of a life\"*), the spring/summer 2018 caddy logistics, and the Kenny gambling/skiing-money cautionary example — comes from `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv`, which is **not held** in this repository. A full-text scan of the held corpus (192,140 rows) for 'rusko' returns **zero** rows; 'jack' returns 156 rows, all false positives (jacket, jackpot, Monterey Jack, XLR jack). The page is present verbatim in the old-wiki export, so the datum is relayed through the prior wiki with nothing in this repository to check it against. The page's own framing ('Direction: Unreliable in this export — read as one-way') is preserved."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 57718 (49 lines); verified present verbatim in raw/old-wiki-export-2026-09-04/whole.txt. Direct Python scans of corpus/messages.csv: 'rusko' → 0 rows; 'jack' → 156 rows, manually reviewed as all non-name uses. The MASTER_MESSAGES_DB_DUMP.csv source was not found under raw/ or elsewhere in this repo. Handle not reproduced, per the corpus [phone redacted] convention. No existing kb node covers this page (grep for 'rusko' returned no other node)."
importance    = 2
tags          = ["jack-rusko", "old-wiki", "unverified", "nemacolin", "unheld-source"]
created       = "2026-09-09"

[when]
start = "2017-10-16"
end   = "2018-08-09"
+++

## What this is

An honest-gap filing. The page is a texture-heavy portrait (the laptop
loan, the Fran condolence) built on a thread this repository has never
seen. The Fran-death condolence, if genuine, would make Jack one of the
very few non-family voices in the record at that moment — which is exactly
why it needs a held record before it is cited as such. The master-dump
slice would also be the instrument to check the page's 'marked Received
throughout' direction caveat.

## What it is not

A contradiction. Nothing in the held corpus disputes the page; the held
corpus simply does not contain the thread. If the master dump is ever
ingested, this node is the checklist: the laptop-loan quotes, the
condolence wording, the 202-message count, and the 2017-10-16 →
2018-08-09 range are the claims to verify.
