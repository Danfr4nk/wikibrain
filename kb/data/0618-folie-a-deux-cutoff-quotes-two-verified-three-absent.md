+++
id            = "dat:0618-folie-a-deux-cutoff-quotes-two-verified-three-absent"
layer         = 1
type          = "datum"
title         = "The Folie à Deux cutoff: two 2019 quotes verified verbatim in the held corpus; the three 2025 quotes are absent from it"
claim         = "**Verified, verbatim, in the held iMessage corpus.** (1) *\"I can't be a hater because I love most of the albums but only folie a deux and prior, I'm just being a brat because I've had an awful day\"* — 2019-09-09 22:24:33 UTC. (2) *\"i'm listening to infinity on high and its like a really good album\"* — 2019-09-28 02:11:07 UTC, i.e. 2019-09-27 ~22:11 EDT, matching the page's cited date of 2019-09-27 once the corpus's UTC is converted to Eastern. These two messages are the primary evidence for the page's claim that the affection *\"stops at Folie à Deux and does not extend to anything the reunited band released after 2013.\"* **Absent from the held corpus (192,140 rows, 2011-03-19 → 2026-09-07):** (3) the 2025-07-22 *\"chatgpt just informed me that the secret fall out boy show i went to is the first and ONLY time that [Take This To Your Grave] was played in its entirety\"*; (4) the 2025-05-05 groomsmen line *\"a bag of cocaine, the first 3 fall out boy albums and the ghost of gore vidal\"*; (5) the 2025-02-17 *\"And more frightening is that I'm listening to old fall out boy and am like 'wow I really get it now.'\"* All three are present in the old-wiki export's FOB page; the ChatGPT quote's key phrase *\"first and ONLY time\"* is in the export but no message containing it, 'gore vidal', or 'frightening' exists in the held corpus. Filed as page-relayed, not held-record."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Direct Python scans of corpus/messages.csv: 'folie a deux' → exactly one row (2019-09-09 22:24:33); 'infinity on high' → exactly one row (2019-09-28 02:11:07). Negative scans over the full corpus for 'chatgpt just informed', 'take this to your grave', 'gore vidal', 'frightening', 'first 3 fall out boy', 'fall out boy albums' → zero rows. The 2019 quotes' Eastern conversion: 2019-09-28 02:11 UTC − 4h (EDT) = 2019-09-27 22:11 EDT — a timezone offset, not a displacement. The page itself (corpus__3.txt line 10741) carries all five quotes with dates 2019-09-27, 2025-07-22, 2025-05-05, 2025-02-17."
importance    = 3
tags          = ["corroborated-primary", "fall-out-boy", "unverified", "imessage", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2019-09-09"
end   = "2019-09-27"
+++

## What this means for the cutoff claim

The page's central psychological claim — the band he loves is the
2001–2008 band, the post-hiatus band is *\"a different act he has chosen
not to claim\"* — rests on testimony whose only two held-record instances
are both 2019 messages, and one of them is *\"I'm just being a brat
because I've had an awful day,\"* i.e. mood-flagged by the sender. The
hardening the page describes by 2025 (the groomsmen joke, the 'wow i
really get it now') has **no primary anchor in the held corpus**: the
messages are on the page, in the export, with dates, but the underlying
records are not in this repository's held iMessage set. Under the
contemporaneous-records-outrank-testimony rule, the 2019 cutoff is
verified and the 2025 hardening is unverified — which is a meaningful
distinction, because the page leans on the 2025 material to show the
cutoff *persists*, and that persistence is currently single-sourced
through the prior wiki.

## Not a contradiction, just a boundary

Absence from the held corpus is not absence from Dan's phone. The held
corpus is a 192,140-record slice with known gaps (see dat:0118's note on
per-thread CSV exports). The export may have drawn on a fuller slice. The
finding is only that this repository cannot re-derive them.
