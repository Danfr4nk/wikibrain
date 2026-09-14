+++
id            = "dat:0704-barenaked-ladies-concert-log-single-source"
layer         = 1
type          = "datum"
title         = "The July 24, 2002 Barenaked Ladies show rests solely on the operator's self-kept concert log; no independent corroboration found"
claim         = "The page `wiki/interests/favorites/music/artists/barenaked-ladies.md` (corpus line 10402) records one appearance — Jul 24, 2002, multi-act show, Post-Gazette Pavilion, Burgettstown PA, with Guster and Vertical Horizon co-billed and Vertical Horizon credited opener — sourced entirely to `raw/self/concerts/table.csv`, the concert log Dan kept. Two public web searches (a combined lineup query; a date-quoted query against Concert Archives and fan archives) returned no independent listing of that date/venue/bill, so the claim is currently single-source: the operator's own log, with the page's own 'Guster co-billed other years' caveat the only check on the lineup detail."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10402 (41 lines): table row '| Jul 24, 2002 | Multi-act show | Post-Gazette Pavilion | Burgettstown, PA | Vertical Horizon credited opener that night (Guster co-billed other years). |' and infobox-adjacent note 'saw live 1 time between 2002'. Web corroboration attempted via browser.search 2026-09-09: query 'Barenaked Ladies Guster Vertical Horizon July 24 2002 Post-Gazette Pavilion Burgettstown' and '\"Barenaked Ladies\" concert \"July 24, 2002\" Burgettstown OR Star Lake Vertical Horizon' — no hit listing this show; concertarchives.org's BNL 2002 page rendered without its show list (JS-gated) and could not be checked. Nothing found contradicts the log either; it is simply the only witness."
importance    = 2
tags          = ["concert-record", "single-source", "old-wiki"]
created       = "2026-09-09"

[when]
date = "2002-07-24"
+++

## What was checked

The page is a stub of the kind the old wiki kept for single-appearance
artists (the concert index page notes 47 such stubs were removed 2026-08-29;
this one survived into the export). Every field on it — date, venue, city,
bill, opener credit — comes from one cell row of the operator's concert
table. There is no tweet, ticket scan, or second listing attached.

## What that means here

This is the normal case for the concert log: a self-kept purchase/attendance
record with no corroborating trace. It is filed as the page's assertion,
held at moderate confidence because the log has corroborated cleanly where
it could be checked (see [`dat:0705`](0705-gym-class-heroes-bamboozle-2008.md),
where the same log's Meadowlands entry resolves to a documented festival),
not because this row has been independently confirmed.

## Cross-reference

[`dat:0361`](0361-teen-concert-years-two-source-design-verified.md) covers
the concert log's two-source design; [`dat:0242`](0242-concert-index-twitter-crosscheck.md)
covers the index page's twitter cross-check.
