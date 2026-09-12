+++
id            = "dat:0674-jay-lauer-rick-exchange-unheld"
layer         = 1
type          = "datum"
title         = "The Jay Lauer intervention account — the page's 'single most important fact' — is absent from the held corpus"
claim         = "The page's most substantive claims about April 11, 2017 come from the Rick exchange, and none of it is in the held corpus: the 18:07 *'Had another friend die of an overdose today'* (zero hits for 'overdose today' or 'friend die of an overdose' in 192,140 rows), the intervention account *'I tried to help him. I talked to him about Suboxone, and told him how it helped me finally get out of that world. He went to the doctor and sold his prescription for heroin. At that point, there's nothing anyone else can do.'* (zero hits), Rick's Cross Creek warning — *'there is no turning back from opiates and heroin, that you lose a part of yourself and your ability to be happy'* (zero hits for 'cross creek' anywhere in the corpus), and the April 17 viewing message *'Mr. Mechling said to tell you hello. I had a cancel today so we came to the early viewing'* (zero hits). The 18:00–20:00 EDT window on April 11 contains exactly two held messages (the Ellen condolence and an Annie text) — no Rick exchange. All of this material rests on the page's first-listed source, the operator capture `raw/people/captures/2026-08-02_010509_jay-lauer-death.md`, which is not held in this repository. The intervention — 'the corpus's only documented instance of Dan attempting to move someone else out of the supply economy' — is therefore attested-but-unheld, and so is the 'only record of Rick delivering a direct addiction warning to his son.'"
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Full-text exact and case-normalised substring searches over corpus/messages.csv for each quoted string and for 'cross creek': all zero. Time-window scan of 2017-04-11 22:00–23:59 UTC returned two rows only. The operator capture is absent from this repository's raw/ tree (which holds only old-wiki-export-2026-09-04, facebook-threads/MANIFEST.json, and morgantown-call materials). The page's sources list names the capture first, consistent with it being the sole source for the Rick material."
importance    = 5
tags          = ["jay-lauer", "old-wiki", "corpus", "gap", "unverifiable"]
created       = "2026-09-09"

[when]
start = "2017-04-11"
end   = "2017-04-18"
+++

## Why this is the highest-importance node on the page

The page is explicit that the intervention quote is 'the single most
important fact on this page,' and two connection edges depend on it (the
supply-network 'only documented fatality' framing and the Rick 'only
record of a direct addiction warning' claim). Both are now one export
away from checkable. This does not impeach the capture — operator
captures are T0 testimony in the wiki's own protocol — but the claims
must be carried as testimony, not as corpus-verified fact, until the
capture or the underlying messages surface.

## What is verified, for the record

The death's dating from the Ellen/Lindsay/Annie messages, the Ellen
thread's opening, and the next-evening message are all held-corpus solid
([`dat:0673`](0673-jay-lauer-direction-and-count-corrections.md)).
The heroin specification, the 'only documented death attributable to
the drug economy' census claim, and the Betherin-ring/domestic-incident
detail (connections) are likewise unheld — the page's own Gaps section
already concedes the first two.
