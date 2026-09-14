+++
id            = "dat:0290-first-tattoo-2010-01-23-unverifiable-here"
layer         = 1
type          = "datum"
title         = "First tattoo 2010-01-23 (letter A for Alexis): sourced to the tweet archive via the old wiki's testimony ledger; not re-verifiable from held sources"
claim         = "The master timeline's Tier-1 entries state that on the evening of **23 January 2010** Dan got his first tattoo — the letter **A** (for Alexis) — five weeks before the move to Brooklyn, and that he posted about it the same night (*\"my first tattoo! I have her on me forever now <3\"*). The old wiki's testimony ledger t009 scores this from the tweet archive: *\"the letter 'A' for Alexis, tattooed 23 January 2010\"*. The held iMessage corpus (corpus/messages.csv) begins in 2011 and contains no 2010 traffic; the tweet archive and Facebook export are not held in this repository. The claim is therefore present in the old wiki with stated provenance but cannot be independently re-verified in this pass."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: master-timeline entries at corpus__3.txt ~110700–110714 (★ 2010-01-23, two entries, 'On the evening of 23 January 2010, five weeks before the move north, Dan got his first tattoo: the letter A'); old-wiki-export whole.txt:13229 (t009 testimony ledger), 39703 (claim: 'Dan's first tattoo, dated to 23 January 2010, is Alexis's initial'), 39918–39921 ('my first tattoo! I have her on me forever now <3'). Searched corpus/messages.csv for 'first tattoo' and 'have her on me forever' — the only tattoo-adjacent hit is a 2018 Annie message ('Honey you getting tattoos doesn't have to be an explanation...'), unrelated. No 2010-dated messages exist in the held corpus at all."
importance    = 3
tags          = ["master-timeline", "tattoo", "alexis-armel", "twitter", "unverified", "testimony"]
created       = "2026-09-09"

[when]
start = "2010-01-23"
end   = "2010-01-23"
+++

## Why low confidence is the honest filing

The quote (*\"my first tattoo! I have her on me forever now <3\"*) and the
date are specific enough to be checkable — against the tweet archive, which the
old wiki cites but this repo does not hold. Nothing in the held sources
contradicts it; nothing confirms it. It stays a testimony-ledger claim until
the tweet archive (or a dated photo) is in hand. Note the tattoo is absent from
the 'six tattoos named on 14 July 2026' list that t009 was scoring — the ledger
itself flags the list as incomplete, which is consistent rather than
contradictory.
