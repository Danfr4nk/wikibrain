+++
id            = "dat:1340-standup-only-openmic-evidence-claim-fails"
layer         = 1
type          = "datum"
title         = "The page's 'only direct evidence of a completed open-mic set' claim is contradicted by Dan's own 2020 message, and the cited Bobby message is absent from the held corpus"
claim         = "wiki/interests/stand-up-comedy states that 'An October 2, 2019 message to Bobby is the corpus's only direct evidence of a completed open-mic performance — a specific bombed bit' ('a hooker using my credit card to cut a line of coke'). Two problems. First, that exact quoted line does not occur anywhere in the held corpus/messages.csv — no 'cut a line' message, no hooker-bit message on or near 2019-10-02; the nearest hooker-adjacent rows in October 2019 are Dan's 2019-10-13 'and the hookers' (row 38506) and the 2019-10-21 VIPKelly exchange (rows 37933/37937). Second, even if the Bobby message were genuine, the 'only' is false against the held record: on 2020-03-29 03:26:54 UTC Dan himself writes 'yeah i've had a few really good sets but it's hard to judge from an open mic because most of the crowd are the other comics' (row 32043, sender Dan), a first-person claim of completed sets — preceded three minutes earlier by 'just open mic' (row 32055). The exclusivity claim does not survive reading the corpus."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Scanned corpus/messages.csv on 2026-09-09 for /cut a line|credit card to cut/i (zero hits) and all 'hooker' hits in October 2019; scanned all October 2019 rows from Dan for open-mic mentions. Rows 32043/32055 (2020-03-29, both sender Dan) were found via the /open mic/i scan. The page's claim lives in its connections frontmatter (the bobby-cole edge) and in the specials-as-ritual section; it is the page's assertion being held against the corpus, which is why both cites appear with the attribution to the old wiki. Absence of the Bobby message from the held slice is consistent with the page's own source list (the bobby-cole thread body comes from a Facebook HTML file and the master CSV dump, not the held slice)."
importance    = 4
tags          = ["stand-up-comedy", "contradiction", "open-mic", "corpus"]
created       = "2026-09-09"

[when]
date = "2020-03-29"
+++

## What the page gets right anyway

The page's larger arc is unaffected: Dan's own words place him at open mics
as early as September 2019 ("i'm supposed to do an open mic tomorrow," row
37304) and still doing them in March 2020. The "whether or not a set ever
happened" hedge elsewhere on the page is, if anything, disproven by its own
connections claim — and by this corpus read.

## Held open

Whether the October 2, 2019 Bobby Cole message exists at all. It is absent
from the held slice but the page's sources for it (a Facebook message HTML
file and `all_imessages_complete_dump.txt`) are not held, so the claim is
*unchecked*, not disproven. The *exclusivity* claim is disproven.
