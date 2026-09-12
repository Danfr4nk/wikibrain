+++
id            = "dat:1020-vertical-horizon-2002-post-gazette"
layer         = 1
type          = "datum"
title         = "Vertical Horizon — one documented live sighting: Jul 24, 2002, Post-Gazette Pavilion, credited opener (event not web-corroborated)"
claim         = "The concert-log-derived page records Vertical Horizon as an act Dan saw live once: Jul 24, 2002, a multi-act show at Post-Gazette Pavilion, Burgettstown, PA, co-billed with Barenaked Ladies and Guster, with Vertical Horizon credited as the opener that night ('Guster co-billed other years'). The page's stated source, raw/self/concerts/table.csv, is not held in this repo; the content appears byte-for-byte in the old-wiki export, including in the export's own master event list (row 2), so the datum is relayed through the prior wiki. A 2026-09-09 web search found no independent confirmation of this specific show — Vertical Horizon's setlist.fm 2002 concert map shows only one 2002 US entry and no Burgettstown record surfaced — so the event date/venue/co-bill rests solely on the unheld concert log via the prior wiki."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 12433 (38 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 6204-6218 verbatim and the master event list row 2 (line 2181) carries the same date/venue/bill. Web check 2026-09-09 (search queries: 'Vertical Horizon Barenaked Ladies Guster concert Post-Gazette Pavilion July 2002'; '\"Vertical Horizon\" \"Post-Gazette Pavilion\" 2002 concert'): no page confirming the Jul 24, 2002 Burgettstown bill was found; setlist.fm's Vertical Horizon 2002 concert map records one 2002 US show. Related: dat:0149, dat:0150, dat:0151, dat:1019 (concert-log relay siblings); dat:0482 (BNL co-bill continuity)."
importance    = 2
tags          = ["concert-record", "old-wiki", "attribution", "uncorroborated"]
created       = "2026-09-09"

[when]
start = "2002-07-24"
end   = "2002-07-24"
+++

## What the check confirms

Text fidelity only: the corpus snapshot, the performer page in the
old-wiki export, and the export's own master event list all agree on the
date, venue, bill, and the "Vertical Horizon credited opener that night"
note. The co-bill relationship with Barenaked Ladies is corroborated as a
billing pair in the old wiki's connections graph (the performer page's own
`co-occurs` edge).

## What it does not confirm

Unlike dat:1019, the underlying event could not be confirmed on the open
web at all — which is a property of 2002 amphitheater co-bill records,
not evidence against it. Dan's attendance is, as always in this cluster,
solely the unheld concert log's claim, relayed through the prior wiki.
The "Guster co-billed other years" parenthetical is the prior wiki's
editorial gloss; no source for it was located in this pass.
