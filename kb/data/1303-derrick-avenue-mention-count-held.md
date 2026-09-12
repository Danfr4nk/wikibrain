+++
id            = "dat:1303-derrick-avenue-mention-count-held"
layer         = 1
type          = "datum"
title         = "Derrick Avenue: 40 text mentions in held corpus (2015-11-30 – 2026-08-11); arrival-signal vocabulary"
claim         = "wiki/places/derrick-avenue.md reports forty-five uses of 'Derrick' between November 2015 and August 2025, the great majority a bare arrival signal ('On Derrick', 'Just got on derrick') — the page's finding is that it is the single most repeated piece of shared vocabulary between Dan and Annie that is not about the relationship. **Held measurement:** 40 rows in corpus/messages.csv contain 'derrick' in the text field, ranging 2015-11-30 to 2026-08-11. The page's 45 was counted over wider exports (all_imessages_complete_dump.txt, imessage_2124702449_both_all_now.csv); the held pull is smaller and newer, so the delta (45 vs 40) is consistent with different pulls rather than a dispute. The page's geographic reconstructions (the lower Belmont x Derrick corner, the country club pass, Route 43 approach, the climb, the closures) are all message-incidental and are relayed as the page's testimony; the 'derrick ave gang' = 'the whole ulmer/mechling crew' gloss is a single Dan phrasing carried by the page. No source in raw/ describes the street — the page is explicit that everything is reconstructed from incidental mention."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
measurement   = true
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt (w28 assignment). Held count: case-insensitive regex over corpus/messages.csv text column, 40 rows; first 2015-11-30, last 2026-08-11. Held timestamps UTC."
importance    = 1
tags          = ["derrick-avenue", "places", "annie", "measurement", "held-verified"]
created       = "2026-09-10"
+++

[when]
start = "2015-11-30"
end   = "2026-08-11"
