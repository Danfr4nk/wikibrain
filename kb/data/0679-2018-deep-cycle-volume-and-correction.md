+++
id            = "dat:0679-2018-deep-cycle-volume-and-correction"
layer         = 1
type          = "datum"
title         = "2018 deep cycle: ~40k message volume confirmed (40,500 held vs 40,514 claimed); the $750-correction's underlying message is unheld"
claim         = "Two findings on the 2018-deep-cycle period page: (1) **Volume confirmed.** The page's connection edge cites a '40,514-message 2018 whole-corpus total' as confirming the period's '~40k msgs/yr' figure. The held corpus holds **40,500 rows dated 2018** — a 0.03% difference, consistent with different pulls or dedup keys. The '~40k' figure and the 'first-recorded volume peak' framing survive. (2) **Correction's source unheld.** The page's CORRECTED [2026-08-18] block states: 'The corpus holds one $750 statement — an accusation about a single week, made in a 13 December 2018 argument' — which operating_manual.md had generalised into a standing 'mom borrow $750/wk' rate. The held corpus contains **zero** '$750'-related messages anywhere in December 2018; the only 2018 '750' hits are two 7:50 meetup times, a Coinbase verification code, and Dan's own 2018-09-18 'It's not like I haven't spent $750 in garbage in the past 48 hours.' There are 74 held messages on 2018-12-13, none of them a $750 accusation. The correction's direction (rate does not exist; direction inverted) is therefore attested by the wiki's own re-read but its underlying message is not in the held pull — it likely lives in the unheld raw/self/message-csv/* pulls or LIFE REPORT. The companion claim in the same block — ~$14,000 Dan-to-Suz movement in August–October 2018 — was not re-run here; it is referred to the suzanne-frank and estate-money-spine pages."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "2018 row count by date_sent prefix over corpus/messages.csv. '750' searched case-insensitively across the full 2018 text field (4 hits, enumerated) and across 2018-12-1* with money/week combinations (0 hits). 2018-12-13 row count: 74, sampled. Timestamps are the CSV's UTC date_sent."
importance    = 3
tags          = ["2018-deep-cycle", "timeline", "old-wiki", "corpus", "quote-verification"]
created       = "2026-09-09"

[when]
start = "2018-01-01"
end   = "2018-12-31"
+++

## Notes

The page's other quantitative claims — 254 LIFE-calendar events, the
dealer-thread economics (Zaco, Johnny, Teddy), the Cash App limits —
rest on LIFE_EVENTS_CALENDAR.md, LIFE REPORT, and the unheld
message-csv pulls, none of which are in this repository. The correction
block itself is a model of the wiki's self-repair machinery working
(operating_manual.md's generalisation caught and reversed with
direction), even though the evidence for it is not held here.
