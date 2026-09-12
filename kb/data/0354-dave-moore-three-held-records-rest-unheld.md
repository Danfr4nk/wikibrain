+++
id            = "dat:0354-dave-moore-three-held-records-rest-unheld"
layer         = 1
type          = "datum"
title         = "Dave Moore: 3 of the page's records verify verbatim in the held corpus; the load-bearing ones (the 2018-04-01 social-worker messages, the letter-authorship read) are from the unheld dox-scan dump"
claim         = "Dave Moore — Diane's second husband, Dan's step-grandfather by marriage — appears in **exactly 3 records in the held iMessage corpus**, all verified verbatim: 2018-04-03, Dan — *\"just glad that diane and dave aren't super upset, they're probably busy working through the tragedy of her death and that's why they haven't checked in on her\"* (written the day before Fran died); 2018-08-01, Annie — *\"Wait wtf. Your mom ran into Dian and Dave today?!\"* (the only documented post-funeral contact between the two halves of the family); and Dan's 2020-03-28 (local; 2020-03-29 03:52 UTC) — *\"i hope diane and dave both drown in their own vomit after simultaneously contracting coronavirus\"*. The page's two load-bearing records — the 2018-04-01 pair reporting Dave 'speaking on her behalf' to the hospital's social workers (*\"meanwhile diane moore hasn't been able to be reached by anyone. dave is 'speaking on her behalf' and it's very unusual stuff\"* / *\"no comment required. it's just wild, the social workers are talking to dave moore about the day-to-day stuff lol\"*) and the 2018-04-03 letter-authorship read (*\"i think dave wrote it — read the last paragraph. 'any violation of the rules will be considered trespassing' ....\"*) — are **absent from the held corpus**; they come from the unheld `raw/self/dox-scan/all_imessages_complete_dump.txt`. The page's 'exactly nine records across five years' is therefore unverifiable here (3 of 9 found). The operator's 2026-08-17 identification of the feared 'grandparents who already hated you' as **'Dian and Dave'** (closing the Diane-and-George guess) is operator testimony from the unheld capture `raw/people/captures/2026-08-17_230820_gap-diane-shrum.md`, recorded in the old wiki at whole.txt lines 48228-48243. The exclusion letter itself and Dan's authorship read are already adjudicated in [`dat:0172`](0172-diane-exclusion-letter-correction.md); the Florida-condo sale the page attributes to the pair is flagged as an open gap by the old wiki itself ('no document, price or date is in the corpus', whole.txt lines 11979, 48456)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 53970 (135 lines). Held-corpus verification via corpus/messages.csv: line 60357 (2018-04-03 05:52:18 UTC — local 2018-04-03 01:52 EDT), line 76839 (2018-08-01 20:58:04 UTC — local 16:58 EDT, annieulmr@aol.com), line 117664 (2020-03-29 03:52:18 UTC — local 2020-03-28 23:52 EDT; ~4h offset is timezone, not displacement). Negative searches ('speaking on her behalf', 'social workers', 'roasting of', 'any violation of the rules', \"no 'e' is irate\", 'irate and irrational') returned zero hits in the held corpus. Pattern count for 'diane and dave|dian and dave|dave moore': 3 rows. The page's stated sources (dox-scan dump, 2026-08-17 capture) are not held in this repo (no raw/self/, no raw/people/captures/)."
importance    = 3
tags          = ["people", "dave-moore", "fran-coldren", "2018", "old-wiki", "corroboration", "unheld-source"]
created       = "2026-09-09"

[when]
start = "2018-04-01"
end   = "2020-03-28"
+++

## What the held corpus can and cannot do here

Three of the page's records check out to the character — including the
page's own headline pair-appearances table entries for 2018-04-03,
2018-08-01 and 2020-03-28. But the two records on which the page's thesis
turns — Dave speaking for the unreachable Diane to the hospital, and Dan's
authorship read of the trespassing letter — live in a dump this repository
does not hold. The page is honest that the authorship read is Dan's prose
reading, not evidence, and that Dave 'is never quoted, never messages
anyone in the corpus' — both of which the held corpus confirms by the
absence.

## Open

The dox-scan dump (`raw/self/dox-scan/all_imessages_complete_dump.txt`)
and the 2026-08-17 capture remain the missing primaries for six of the
page's nine records, including the 'Dian and Dave' identification that
re-shaped the Fran material. The Florida-condo disposition stays a gap on
the old wiki's own terms.
