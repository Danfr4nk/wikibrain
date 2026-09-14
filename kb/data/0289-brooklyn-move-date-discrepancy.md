+++
id            = "dat:0289-brooklyn-move-date-discrepancy"
layer         = 1
type          = "datum"
title         = "Brooklyn move date: Facebook 'places lived' says 2010-01-03; the tweet record has Dan in Florida until 2010-02-28 — contradiction documented, unresolved"
claim         = "The master timeline carries two Tier-1 entries for the 2010 Brooklyn move that disagree by eight weeks: Facebook's `places lived` field says Brooklyn NYC from **3 January 2010**, while the tweet archive has Dan in Florida through late February — *\"moving to brooklyn in 9 days\"* (20 February 2010) and *\"peace out, florida\"* (28 February 2010). The old wiki (whole.txt:11649, 94985, 104234/104236) already held this as an explicit contradiction ('Both records are his own; one is timestamped by the platform and one was typed into a profile field'), and the timeline reproduces both sides. The 2010-02-17 Amtrak trip with Rick (Pittsburgh → New York) and the 2010-02-19 'COME STAY. be moved in by march 1' line are consistent with the February dating."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Observed directly: the master-timeline entries at corpus__3.txt ~110690–110700 (★ 2010-01-03 twitter/Facebook disagreement) and the old-wiki-export lines cited above. The Facebook export is not held in this repository (raw/facebook-threads/ holds only MANIFEST.json), so the 'places lived' field cannot be re-read here; the tweet archive is not held here either and wb-corroborate's Twitter check is documented unreliable — so neither side of the contradiction can be independently re-verified in this pass. The 2010-02-17/18/19 and 2010-02-28 entries are consistent across both wikis."
importance    = 3
tags          = ["master-timeline", "brooklyn", "move", "contradiction", "facebook", "twitter", "unverified"]
created       = "2026-09-09"

[when]
start = "2010-01-03"
end   = "2010-03-01"
+++

## Assessment

This is a genuine, self-admitted contradiction, not an error: a profile field
typed by hand (January 3) against platform-timestamped posts (February 20/28).
The contemporaneous-record rule favors the tweets — people backdate 'places
lived' fields routinely, and the February evidence is a coherent sequence
(Amtrak scouting trip 2/17–18, 'moved in by march 1' target 2/19, 'peace out,
florida' 2/28). But the Facebook field is also his own hand, and the export is
unavailable, so the honest filing is *documented, unresolved* — which is
exactly how both wikis hold it.

## What would resolve it

The Facebook export's `places lived` field (unavailable — gitignored), or a
dated lease / first-rent record for the Williamsburg/Bedford address. Neither
is held here.
