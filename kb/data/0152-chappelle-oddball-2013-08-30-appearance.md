+++
id            = "dat:0152-chappelle-oddball-2013-08-30-appearance"
layer         = 1
type          = "datum"
title         = "Saw Dave Chappelle at the Oddball Comedy & Curiosity Festival, Aug 30, 2013, Post-Gazette Pavilion, Burgettstown, PA"
claim         = "The operator saw Dave Chappelle perform live at the **Oddball Comedy & Curiosity Festival** on **Aug 30, 2013**, Post-Gazette Pavilion (First Niagara Pavilion), Burgettstown, PA — recorded in the concert log as *\"Confirmed.\"* The old wiki dates attendance the same night by three independent records: the concert log's ticket, a contemporaneous timestamped post, and the operator's own 2026 retelling of the night. The timestamped post is a 2013-08-30 22:54 ET post — *\"Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh\"* — carrying a Vine, placing him at the festival naming the companion (Katie Fletcher), a companion no ticket records."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 8594, 40 lines); matches the old-wiki dave-chappelle page verbatim (raw/old-wiki-export-2026-09-04/whole.txt lines 2360-2377) and the master event list row 35 (line 2214). The 22:54 post is asserted by two old-wiki pages — the oddball festival page connections (line 1949: a Vine posted at 22:54 on 30 August 2013 proving attendance) and the katie-fletcher page (whole.txt line 54908ff; the corpus copy at corpus__3.txt line 61262-61328 quotes the six-post table). The katie-fletcher page names its own sources as `raw/self/twitter/archive.jsonl` plus dansynth material (whole.txt lines 54913-54918), i.e. the old wiki read the twitter archive directly rather than inferring the post — but that archive is on Drive (`raw/self/twitter/`), not pulled in this repository, so the tweet and Vine themselves were not directly read here; the iMessage corpus (corpus/messages.csv) contains no mention of Oddball and could not corroborate. Lineup of the 2013 Oddball bill per the old wiki's festival page includes Chappelle, Hannibal Buress and John Mulaney (lines 1940-1946)."
importance    = 3
tags          = ["concert-record", "old-wiki", "contemporaneous-record", "attribution"]
created       = "2026-09-09"

[when]
start = "2013-08-30"
end   = "2013-08-30"
+++

## What the check confirms

The appearance is the best-supported claim among the concert-record pages
ingested so far: concert log, master event list, and performer page all
agree, and the old wiki's festival page adds that attendance is dated by a
contemporaneous timestamped post — the instrument that takes this out of
pure log-reliance. The companion named by the post (Katie Fletcher) is a
separate datum filed under the katie-fletcher page.

## What it does not confirm

The 22:54 post and the Vine are asserted by the prior wiki, not directly
read in this session: the twitter archive sits on Drive and was not pulled,
and the concert log (`table.csv`) is not held here. The oddball page's
claim of \"three independent records\" (ticket, Vine, 2026 retelling) is the
prior wiki's synthesis, and the 2026 retelling itself is thirteen years
post-hoc. Pulling `raw/self/twitter/` and re-reading the post would promote
this to high.
