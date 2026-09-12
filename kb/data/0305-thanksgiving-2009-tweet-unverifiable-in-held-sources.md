+++
id            = "dat:0305-thanksgiving-2009-tweet-unverifiable-in-held-sources"
layer         = 1
type          = "datum"
title         = "The 2009-11-26 'thanksgiving at the bryn mawr house' tweet is old-wiki-quoted with no held-source re-verification path"
claim         = "The master timeline's Tier-1 entry for **2009-11-26** quotes Dan's thanksgiving tweet — *\"happy thanksgiving everyone!!! im thankful to have...the bryn mawr house\"* — describing an empty house without cable, internet, or furniture but with his studio gear. The old wiki's full-sail-2008-2010 page carries the quote (whole.txt:76182) with the page's own note that *\"the tweet archive can corroborate or correct this\"*. The tweet archive is not held in this repository, the held iMessage corpus contains no 2009 rows, and wb-corroborate's Twitter check is documented unreliable — so the quote cannot be independently re-verified here."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: master-timeline Tier-1 entry at corpus__3.txt ~110640 ('2009-11-26 — thanksgiving at the bryn mawr house'); old-wiki-export whole.txt:76182 (the quoted tweet with the corroboration note). Searched corpus/messages.csv for 'thanksgiving' in 2009 (no 2009 rows exist) and for 'bryn mawr' (0 hits in any year)."
importance    = 1
tags          = ["master-timeline", "full-sail", "twitter", "unverified", "testimony"]
created       = "2026-09-09"

[when]
start = "2009-11-26"
end   = "2009-11-26"
+++

## Why it is filed despite low importance

This is the standing example of the tweet-archive gap: the old wiki itself
flags these entries as pending corroboration, and every regeneration of the
timeline re-prints them as Tier-1 events. The node records that the gap is
still open. If the tweet archive ever lands in the repo, the 2009–2010 tweet-
quoted entries (thanksgiving, the 2009-11-25 'studio > any club' line, the
2009-12 tattoo-era posts) are a bounded re-verification batch — dat:0242 is
the wave-1 concert-index tweet crosscheck, a different batch.
