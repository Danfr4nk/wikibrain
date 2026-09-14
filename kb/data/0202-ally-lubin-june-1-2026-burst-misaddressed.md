+++
id            = "dat:0202-ally-lubin-june-1-2026-burst-misaddressed"
layer         = 1
type          = "datum"
title         = "The June 1, 2026 Ally burst was misaddressed to an unmonitored email handle, not rejected"
claim         = "At 20:06:05 on **June 1, 2026** — nineteen hours and thirty-eight minutes after signing off the eleven-year relationship with Annie at 00:27:49 — Dan opened the Ally channel for the first time in fourteen months with **nine outbound messages** (eight between 20:06 and 20:15, one more at 23:23), closing on *\"...lets make haste\"* to marry him. No reply appears in any export. Per the operator's 2026-08-20 answer (T0 first-person): *\"Ally didn't actually get the message I sent on 1 June. She is convinced I had her blocked but this is not and was never true.\"* The burst went to the iCloud email handle, which she does not monitor. Corroboration from her side: her first line on August 18, 2026 — before any of this is discussed — is *\"Why do I have 2 numbers for you and an iCloud,\"* which states the same mechanism. The page's own premise was also corrected: nine messages, not ten. The correction propagates: at least one of this channel's long silences is a routing artifact, and the fourteen-month and thirty-eight-month gaps cannot be read as pure dormancy without checking which handle each burst was sent to (written back to the dormancy-not-exit synthesis)."
cites         = ["src:operator-testimony-2026-09-09",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:operator-testimony-2026-09-09"
confidence    = "high"
extraction    = "Read directly from corpus__3.txt line 47902 (the June 1, 2026 section of wiki/people/ally-lubin.md); matches raw/old-wiki-export-2026-09-04/whole.txt verbatim. All quotations above are the page's verbatim transcriptions of the operator's 2026-08-20 gap-closure and of Ally's August 18, 2026 line. The underlying message files (ally-lubin_last-7-days_20260820.csv, chat.db) are not held in this repo, so the burst's timestamp and the nine-message count are relayed through the prior wiki; the *meaning* of the silence (misaddressed vs rejected) is the operator's own testimony, corroborated independently by her unprompted 2026-08-18 observation. The email handle identifier is redacted in the working corpus copy and is not reproduced here."
importance    = 4
tags          = ["people", "testimony", "old-wiki", "correction"]
created       = "2026-09-09"

[when]
start = "2026-06-01"
end   = "2026-06-01"
+++

## What the check confirms

The corpus page and the old wiki agree exactly on the burst (nine messages,
the 20:06:05 timestamp, the Annie-closure sequencing at 00:27:49) and on the
operator's misaddressing answer with her corroborating first line.

## What it does not confirm

No message export was examined here, so the burst's own text is the prior
wiki's transcription. What this node adds over dat:0201's counts is the
*attribution of the silence*: a celebrated \"no-reply\" interval that was
neither rejection nor blocking.

## Note on testimony weight

This is one of the few places in this ingest where the operator's 2026
testimony is corroborated by an independent, unprompted statement from the
other party — her August 18 line predates any discussion of the June 1 gap.
Two-party agreement on the mechanism raises this above ordinary recall.
