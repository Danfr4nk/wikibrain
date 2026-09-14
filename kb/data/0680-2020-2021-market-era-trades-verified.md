+++
id            = "dat:0680-2020-2021-market-era-trades-verified"
layer         = 1
type          = "datum"
title         = "Market era trade-level details verify in the held corpus: the FSLY tip, 112 shares, the $25k peak, the CCIV bloodbath"
claim         = "The 2020–2021 market-era page's trade-level claims verify against held iMessage records: (1) The FSLY tip came from Jerad Friedline in chat `jfriedline@gma` on **2020-09-20 23:40 UTC** (19:40 EDT): *'FSLY... busy at the moment but will send my research tomorrow. I made a little over $200k from April - now from this stock alone'*, *'Amazon is using Fastly on Amazon.com over their own AWS hosting, that's all you need to know'*, *'Buy FSLY and do not touch for 2-3 years'* — Dan replies 'just buy FSLY?' and on 2020-09-26 writes *'i can't believe i caiught you when i did on that fastly tip'*, and on 2020-09-30 *'112 shares my dude'* — the page's '~$15k into 112 Fastly shares' checks out (112 shares at the late-September FSLY price is the right order of magnitude). (2) The bloodbath: **2021-02-23 14:24 UTC** Dan: *'I bought fucking calls on CCIV yesterday'*, two minutes later *'But my $25k just turned into 17k'* — the Robinhood ~$25k peak and the CCIV day land together exactly as the page's February row has them. (3) The 'choomed' trading: **2021-02-05 01:59 UTC** Dan: *'So I was really choomed this morning and moved a bunch of stock that I probably shouldn't have just because I was too high'* — the page's 'profitable GME put executed while \"choomed\"' has its mechanism confirmed, though no held message names the GME put specifically. Not found verbatim: the ~$4k FSLY profit figure, the 100 AMC shares, the DOGE tip. The page's own Gaps section (no exit accounting, unknown whether positions survived into 2021–23) stands — the corpus shows the $25k→$17k drawdown but no final P&L."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "All quotes located by exact-substring search in corpus/messages.csv; directions from the is_from_me field (FSLY tip and research from Jerad's handle, the rest from Dan). The Jerad attribution for the FSLY chat comes from the chat_identifier 'jfriedline@gma' itself. Timestamps are the CSV's UTC date_sent; EDT conversions verified for September 2020 and February 2021 (UTC-4/UTC-5)."
importance    = 4
tags          = ["2020-2021-market-era", "timeline", "old-wiki", "corpus", "quote-verification"]
created       = "2026-09-09"

[when]
start = "2020-09-20"
end   = "2021-02-23"
+++

## Side finding

The FSLY tip chat (`jfriedline@gma`) is a different thread from the
+19165013615 chat that carried the 'josh brannan is innocent.wav'
([`dat:0678`](0678-josh-brannan-wav-artifact-verified.md)) — Jerad
appears under at least two handles. The page's claim that Jerad is 'the
unique contact node through which Dan's first retail market position
entered his behavioral repertoire' is held-corpus solid: the September
2020 FSLY exchange is the first market-position entry in the messages,
and it is Jerad's tip.
