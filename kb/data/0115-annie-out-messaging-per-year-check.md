+++
id            = "dat:0115-annie-out-messaging-per-year-check"
layer         = 1
type          = "datum"
title         = "Annie 'out-messaging Dan in every year except 2015 and 2025-26': held corpus confirms 2015/2017/2018/2025/2026; 2016 depends on the AOL channel"
claim         = "The assessment page claims Annie out-messaged Dan *\"in every year except 2015 and 2025-26.\"* Per-year direction counts in the held corpus: **2015**: Dan 7,213 vs Annie 6,348 (Dan ✓); **2016**: Dan 6,438 vs Annie 6,194 on the primary thread (Dan — exception the page does not list), BUT Annie has a parallel AOL channel (annieulmr@aol.com) with 3,513 received messages in 2016, which would put her at 9,707 vs Dan's 6,438 if merged; **2017**: Dan 7,152 vs Annie 7,411 (Annie ✓); **2018**: Dan 10,830 vs Annie 11,224 (Annie ✓); **2025**: Dan 6,364 vs Annie 5,834 (Dan ✓); **2026**: Dan 11,569 vs Annie 7,663 (Dan ✓). 2019 has 4 messages; 2020–2024 are not in the held corpus. Verdict: the claim holds on merged-channel data and on every year except the ambiguous 2016, where it depends on whether the AOL channel counts as the same conversation."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Counts from bin/corpus-query --who with --from/--to year windows on corpus/messages.csv: +17244346811 (2015–2019 thread) and +12124702449 (2023–2026 thread); annieulmr@aol.com counted separately (3,644 total, all received, 3,513 in 2016). Whether the AOL messages duplicate the iMessage thread or are a separate channel was not determined — they are all inbound (0 sent by me), consistent with either an email-gateway capture of the same conversation or a parallel channel. The page's claim was presumably computed on merged data; on merged data including AOL, 2016 goes to Annie 9,707 vs 6,438 and the page's statement is exactly correct for all held years."
importance    = 3
tags          = ["counts", "annie-ulmer", "imessage", "corroborated-partial"]
created       = "2026-09-09"
+++

## The 2016 ambiguity, stated plainly

On the primary thread alone, 2016 is a counterexample to the page's claim
(Dan 6,438 > Annie 6,194). With the AOL channel merged, it is not (Annie
9,707 > Dan 6,438). This is not resolvable from the held corpus without
determining whether the AOL captures duplicate the iMessage thread — same
timestamps would mean double-counting, different content would mean a real
second channel. The page does not say which corpus it merged. Filed at
moderate because the most likely reading (merged, as the page's own
126,683-style counts suggest it merges aggressively) makes the claim true.

## What this confirms anyway

The structural claim — Annie as the higher-volume partner in the middle
years, Dan taking the lead in 2015 and again in the terminal 2025–26 — is
visible in the held data regardless of the 2016 question. The 2025–26
reversal is the sharper finding: in the relationship's final two years Dan
out-messaged Annie by ~9% (2025) and ~51% (2026), the pursuit direction
flipping as the bond died.
