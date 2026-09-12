+++
id            = "dat:0106-extreme-sports-reconstruction-single-capture-provenance"
layer         = 1
type          = "datum"
title         = "The entire 2000–2006 extreme-sports reconstruction rests on one 2026 self-capture with no contemporaneous digital record"
claim         = "The wiki's **Extreme Sports** page — Dan's ~2000–2006 aggressive-inline/terrain-park adolescence — is built entirely from a **single retrospective self-capture** written **2026-08-09** (`raw/self/captures/2026-08-09_122727_extreme-sports.md`). The page itself states the reconstruction has no intake-digital record (no YouTube watch history, no social posts; it predates the Twitter record (2009) and the iMessage record (2015)) and that the specific dating of the 2001–2003 Vans trips, the exact Woodward years, and the 2006 terrain-park expansion are not independently confirmed outside this source. The capture file itself is **not held in this repository** — only the old wiki's rendering of it is."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:operator-testimony-2026-09-09",
                 "src:imessage-corpus-2026"]
attributed_to = "src:operator-testimony-2026-09-09"
confidence    = "high"
extraction    = "Corpus page read directly (corpus__3.txt line 8708, 84 lines); byte-identical to the old-wiki page (raw/old-wiki-export-2026-09-04/whole.txt line 2455) apart from separator decoration, i.e. the old wiki authored the page from the operator's capture and no independent lineage exists. The \"Corpus gaps\" section of the page is quoted verbatim above. wb-corroborate over the iMessage corpus: 1 hit for any of {\"Seven Springs\", \"Woodward\", \"LoveSac\", \"Vans Skatepark\"} — a 2026-03-14 message about Highlands Realty at Seven Springs, unrelated to the era; \"LoveSac\" has 0 hits. Morgantown call transcript (raw/morgantown-call-independent-stt-transcript-2026-09-09/): 0 mentions of Seven Springs, Woodward, inline, skatepark or LoveSac. The cited capture file was not found anywhere in raw/ (find over the tree returned nothing)."
importance    = 4
tags          = ["testimony", "provenance", "corpus-gap", "old-wiki", "unverified"]
created       = "2026-09-09"

[when]
start = "2000"
end   = "2006"
+++

## Why this is the load-bearing finding for the page

Every substantive claim on the page — the Tanner Hall era framing, the
Seven Springs park inventory, the Vans birthday trips, the Woodward summers,
the LoveSac story — is one instrument: the operator narrating his own
adolescence twenty years later, in a capture this repository does not hold.
The page is unusually honest about this (its closing section names every
unconfirmed date), and this node files the honesty rather than upgrading it.
Substantive claims from the page are filed separately
([`dat:0107`](0107-seven-springs-k2-condo-and-park-infrastructure.md),
[`dat:0108`](0108-vans-skatepark-woodward-summers-lovesac.md)) at low
confidence.

## The provenance parallel

This is the same provenance class as
[`dat:0209`](0209-bald-eagle-cummings.md): a 2026 single-capture
reconstruction of pre-digital adolescence with no corroborating record.
Both captures are needed by the corpus (they anchor the era markers), and
both are unverifiable in the sense the repository means — contemporaneous
platform-timestamped records outrank retrospective testimony, and here there
are none.
