+++
id            = "dat:0804-lewis-strosnider-uniontown-friendship-unheld"
layer         = 1
type          = "datum"
title         = "Lewis Strosnider: Uniontown vape-shop friendship and unresolved Mavic 2 sale — all claims unheld"
claim         = "Per the page, Lewis Strosnider was a Uniontown vape-shop friend whose March 2018–February 2019 Facebook Messenger thread records free graphic-design work on his business cards, a shared plan to take FAA Part 107 commercial-drone certification and build a construction-viewing business (seed money anticipated from the Fran estate 'in a few months' — the distribution landed Sept 1, 2020, over two years later), and a DJI Mavic 2 purchase (third of three drones that summer: Mavic Platinum Jul 24, David Beard's used unit for $700 ~Sep 4, Mavic 2 ~Sep 21, $800 repair on top of the crash) that became an unresolved sale negotiation ending when Dan announced the NYC move (Feb 1, 2019). **None of this is re-checkable here**: the stated sources are Facebook message HTML files and the drone details sit in cross-referenced threads (Matthew Palermo, David Beard), none of which is held in this repository (raw/facebook-threads/ holds only a manifest). The page is filed as the old wiki's attributed testimony with the sale's outcome, the Part 107 certification, and Lewis's current circumstances all open."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 62343 (102 lines). Repo check: raw/facebook-threads/ contains only MANIFEST.json; the message_1.html sources named in the page's frontmatter are not held. Held-corpus check: no 'strosnider' hits in corpus/messages.csv (iMessage would not cover a Facebook thread regardless). The mavic-drone threads on wiki/people/matthew-palermo and wiki/people/david-beard are outside this ingest wave; their cross-checks (dat:0397 covers the David Beard drone negotiation as unverifiable) already record the same exposure."
importance    = 2
tags          = ["lewis-strosnider", "uniontown-era", "drones", "facebook", "old-wiki", "unverified"]
created       = "2026-09-09"

[when]
start = "2018-03-30"
end   = "2019-02-08"
+++

## Why this is testimony-only

Every checkable element on the page — the estate-check expectation vs. the
Sept 1, 2020 landing, the three-drone summer, the Feb 1, 2019 NYC
announcement — sits behind a source this repository does not hold. The
internal logic is consistent (the July 2018 expectation predates the 2020
landing; the drone counts triangulate across three named threads), but
consistency among derivatives is not corroboration. A targeted Facebook
retrieval (the export is public per raw/SOURCES.md) could close the sale's
outcome; until then this node marks the page's status honestly.
