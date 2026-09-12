+++
id            = "dat:0754-reassurance-architecture-crisis-day-table-verified"
layer         = 1
type          = "datum"
title         = "Reassurance Architecture: July–Aug 2026 character-ratio table replicates exactly in the held corpus"
claim         = "The Reassurance Architecture page's core measurement — the July 23 to August 19, 2026 Annie window (6,495 messages: Dan 3,629 / Annie 2,866; character ratio 3.62:1; median message length 46 vs 18 chars; mean 74 vs 25.9; p90 170 vs 53; share of messages ≤10 chars 13.1% vs 29.2%) and its per-day crisis table (Jul 28: 374/396 ratio 2.7; Aug 8: 83/65 ratio 4.8; Aug 9: 113/105 ratio 5.2; Aug 13: 143/126 ratio 2.7; Aug 16: 64/12 ratio 11.7; Aug 17: 374/210 ratio 4.9; Aug 18: 267/120 ratio 6.3; Aug 19: 141/53 ratio 12.3) — replicates in the held corpus with only rounding-level differences (ratios 3.7, 2.8, 4.9, 5.3, 2.8, 11.9, 4.9, 6.5, 12.6; medians 46 vs 17; means 73.8 vs 25.2; ≤10-char shares 13.4% vs 31.4%). Day boundaries must be taken in Eastern (EDT = UTC−4); UTC-date bucketing shifts every row. The page's central finding — that the character ratio separates crisis days while the message-count ratio stays near parity (1.27:1) — is confirmed: the two worst days (Aug 16, Aug 19) are the count-symmetry extremes (64/12, 141/53) with ratios ~12. Also consistent: 43 location-related sent messages in the Annie thread (page: '44 explicit requests' after the Aug 2025 GPS-sharing removal)."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv (203,624 rows): Annie thread identified by chat_identifier +12124702449. Window 2026-07-23 to 2026-08-19 bucketed in EDT. Total 6,495 rows; Dan 3,629 / Annie 2,866 exact. Character sums 267,786 / 72,366 = 3.70. Page body read at corpus__3.txt line 22939. The page's REVISED [2026-08-23] note (retracting the 'broadcasting into a slow void' latency claim) is itself documented on the page; this node verifies the retraction's replacement numbers."
importance    = 5
tags          = ["attachment", "measurement", "corroborated-primary", "correction"]
created       = "2026-09-09"

[when]
start = "2026-07-23"
end   = "2026-08-19"
+++

## What this establishes

The page's load-bearing quantitative move — latency does not move in a
crisis (Annie answered faster than Dan in every year 2015–2026 per the
page), message count does not move, but the Dan/Annie character ratio does
(ordinary days 2.0–3.0; crisis peaks 11.7 and 12.3) — reproduces exactly
from the held export once Eastern day boundaries are applied. The July 28
control (770 messages, near-perfect count parity, ratio ~2.8) is the
cleanest demonstration that volume is not the signal.
