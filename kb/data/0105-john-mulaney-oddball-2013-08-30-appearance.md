+++
id            = "dat:0105-john-mulaney-oddball-2013-08-30-appearance"
layer         = 1
type          = "datum"
title         = "Saw John Mulaney at the Oddball Comedy & Curiosity Festival, Aug 30, 2013, Burgettstown, PA"
claim         = "The operator saw **John Mulaney** perform live at the **Oddball Comedy & Curiosity Festival** on **Aug 30, 2013**, at Post-Gazette Pavilion (First Niagara Pavilion), Burgettstown, PA — recorded in the concert log as *\"Confirmed.\"* Attendance that night is independently dated by the 2013-08-30 22:54 post (*\"Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh\"*, with Vine) documented in [`dat:0152`](0152-chappelle-oddball-2013-08-30-appearance.md); the performer-level claim — that Mulaney specifically was on that stop's bill — rests on the concert log, consistent with the published 2013 tour roster which names John Mulaney among the supporting acts."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:operator-testimony-2026-09-09",
                 "src:imessage-corpus-2026"]
attributed_to = "src:operator-testimony-2026-09-09"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 8671, 37 lines); matches the old-wiki john-mulaney page verbatim (raw/old-wiki-export-2026-09-04/whole.txt line 2439) and the master event list (line 104851). wb-corroborate over the iMessage corpus (192,140 messages): 0 hits for \"John Mulaney\", \"Mulaney\" and \"Oddball\" — NOT FOUND, not a negative finding given corpus gaps. Facebook threads are gitignored and were not checked. The concert log (raw/self/concerts/table.csv) is cited on the page but no copy is held in this repository. Web check 2026-09-09: the 2013 tour press (Glide Magazine, Consequence of Sound, mxdwn, June 2013) lists John Mulaney among the supporting acts and gives the Pittsburgh stop as Aug 30, 2013 at First Niagara Pavilion — the venue name matching the page's parenthetical. Same per-city lineup caveat as dat:0104: acts varied \"depending upon your city,\" so Mulaney-on-the-Pittsburgh-bill is the concert log's claim, not the press's."
importance    = 3
tags          = ["concert-record", "old-wiki", "contemporaneous-record", "attribution"]
created       = "2026-09-09"

[when]
start = "2013-08-30"
end   = "2013-08-30"
+++

## What the check confirms

Same structure as [`dat:0104`](0104-hannibal-buress-oddball-2013-08-30-appearance.md):
concert-log entry, performer page and master event list agree on date, venue
and \"Confirmed.\" status; attendance is independently dated by the 22:54 Vine
post; the tour-level public record confirms John Mulaney was on the 2013
Oddball bill and the Pittsburgh stop fell on this date at this venue.

## What it does not confirm

The Vine post and tweet (twitter archive on Drive, not pulled), the
ticket/concert log itself (table.csv not held), and the 2026 retelling
(thirteen years post-hoc) were not directly read. The iMessage corpus says
nothing either way. The two-stage caveat from dat:0104 applies here too:
attendance at the festival is firmer than attendance at any one set.

## Naming note

As with dat:0104, the contemporaneous 2013 tour press uniformly names the
venue **First Niagara Pavilion**, matching the page's parenthetical rather
than its lead (\"Post-Gazette Pavilion\"). Filed as observed, not as a
correction.
