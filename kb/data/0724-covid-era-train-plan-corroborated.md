+++
id            = "dat:0724-covid-era-train-plan-corroborated"
layer         = 1
type          = "datum"
title         = "The September 2020 train-plan burst verifies: ~212 messages in six days on the Annie thread; 'I have messed shit up' is verbatim; 'seven Xanax bars' is old-wiki only"
claim         = "The covid-era page (corpus line 21954) describes a September 10–16, 2020 episode in which Annie planned to take the train to Dan and 'sent 200+ messages over multiple days' working out logistics, with Dan 'managing seven Xanax bars' and Annie writing 'I have messed shit up. Multiple times.' A bounded scan of the held corpus for 2020-09-10 through 2020-09-16 on the Annie thread (empty chat id, 69/71 inbound from the alulmer28@gmail.com handle) counts 141 Dan-outbound + 71 inbound rows — 212 combined — supporting the '200+ messages over multiple days' figure exactly. Annie's line verifies verbatim as message 27246 (2020-09-13 04:31:30 UTC = 00:31 EDT Sept 13): 'I have messed shit up. Multiple times.' The 'seven Xanax bars' figure appears nowhere verbatim in the held corpus — a case-insensitive scan of all 2020 messages for 'xanax bar' returns no row with 'seven' — and currently exists only in the old wiki's narrative of the episode."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: rows dated 2020-09-10 to 2020-09-16 UTC on the Annie chat — 141 is_from_me=1, 71 is_from_me=0 (69/71 inbound handle alulmer28@gmail.com), 212 combined. Message_id 27246 text 'I have messed shit up. Multiple times' verbatim, date_sent '2020-09-13 04:31:30' (00:31 EDT). Full-corpus 2020 scan for /xanax/i with 'seven' or '7' in the same row: zero hits. The page's 'managing seven Xanax bars' is therefore the old wiki's unattested detail, not the corpus's."
importance    = 4
tags          = ["covid-era", "annie-ulmer", "message-corpus", "old-wiki", "measurement", "timezone"]
created       = "2026-09-09"

[when]
start = "2020-09-10"
end   = "2020-09-16"
+++

## What the numbers say about the episode

Two hundred twelve messages in six days is not logistics — it is the
relationship's 2020 operating mode, and the page's framing of the train
plan as the episode's center understates the volume's meaning. The
verifiable core (the count, Annie's verbatim line) is solid; the
pharmacological detail (seven bars) is the old wiki's embroidery on a
real exchange. The distinction is the finding.

## Cross-reference

[`dat:0157`](0157-bekah-2020.md) and [`dat:0347`](0347-august-2020-politics.md)
cover adjacent 2020 threads; the '8pm curfew / living in beirut' quote's
provenance is carried separately in
[`dat:0725`](0725-covid-era-curfew-quote-old-wiki-only.md).
