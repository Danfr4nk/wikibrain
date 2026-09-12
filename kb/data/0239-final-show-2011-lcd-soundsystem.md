+++
id            = "dat:0239-final-show-2011-lcd-soundsystem"
layer         = 1
type          = "datum"
title         = "Final Show (2011): the corpus names the artist the festival page says is unrecorded — LCD Soundsystem, Apr 2 2011, MSG"
claim         = "The festival page `wiki/interests/concert-record/festivals/final-show-2011.md` records one edition — **Apr 2, 2011, Madison Square Garden, New York NY**, *\"Billed as last show ever; reunited 2016. (Artist/show identity unrecorded in source.)\"* — and the date, venue and note are consistent across every page that carries the event. But the artist identity the page says is unrecorded is in fact named twice elsewhere in the same corpus: the researched-record timeline page lists row 21 as `LCD Soundsystem — \"final\" show — 2011-04-02 — Madison Square Garden — New York, NY — Billed as last ever; reunited 2016`, and the 2010s period page names *\"the LCD Soundsystem MSG farewell (April 2011)\"* as a dated attendance anchor dense in the Facebook likes record. The hedge is true only of the page's stated source, `raw/self/concerts/table.csv`; the corpus as a whole resolves the identity."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:facebook-export-2026-06-23"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8064 (32 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the festival page at lines 1819-1848 matches the corpus page verbatim, and master event list row 32 (line 2211) carries the same date/venue/note. The LCD Soundsystem identifications were read in the old-wiki export: the researched-record row 21 at line 102435 and the 2010s period page's Facebook-likes claim at line 104451 (matching corpus lines 108867 and 117417). The page's stated source, raw/self/concerts/table.csv, is not held anywhere in this repository (see dat:0149); the researched record's source, raw/interests/captures/2026-08-01_222556_concerts-researched.csv, is likewise not held. So the artist identification is corroborated cross-page but ultimately single-provenance (the old wiki's materials)."
importance    = 3
tags          = ["concert-record", "old-wiki", "attribution", "cross-page"]
created       = "2026-09-09"

[when]
start = "2011-04-02"
end   = "2011-04-02"
+++

## What the check confirms

The event itself is triply consistent inside the corpus: the festival page,
the master event list (row 32), and the researched-record timeline all give
**April 2, 2011, Madison Square Garden, New York NY**, billed as the last
show ever, with a 2016 reunion. No page disagrees on any of these fields.

## What the check corrects

The festival page's note — *\"Artist/show identity unrecorded in source\"* —
is scoped to its stated source (the concert table CSV) and reads, on the
page, as though the identity is unknown. It is not unknown to the wiki:

- The researched record (`wiki/timeline/events/teen-concert-years`), a
  36-row CSV-backed reconstruction \"against venue routing, tour histories
  and support-act billing,\" names the act outright: row 21, `LCD
  Soundsystem — \"final\" show`.
- The 2010s period page names *\"the LCD Soundsystem MSG farewell (April
  2011)\"* as a **dated attendance anchor** in the Facebook likes record —
  a different source class (platform likes, not the operator's table) making
  the same identification.

Two different instrument classes in the old wiki's kit — a researched
routing pass and a Facebook-likes read — converge on the same artist for the
same dated event. That is a genuine cross-page resolution, and the festival
page should point at it rather than hedge.

## What it does not confirm

Neither the concert table CSV nor the researched CSV is held in this
repository, so the chain still terminates at the prior wiki's materials.
No primary artefact (ticket, order confirmation, contemporaneous
check-in) for Dan's attendance is in `raw/`. The Facebook likes that the
2010s page leans on are fetched (src:facebook-export-2026-06-23) but the
likes record itself was not re-read in this pass; the claim is taken as the
old wiki transcribed it. Confidence on date/venue/note is high; on the
artist identity it is moderate — corroborated twice, but both tellings
share one provenance chain.
