+++
id            = "dat:0616-fall-out-boy-2007-touring-record-facebook-note-vs-table"
layer         = 1
type          = "datum"
title         = "Fall Out Boy 2007 touring record: the Facebook note's Cleveland date is table-absent, and the page double-counts the TRL taping"
claim         = "Two findings on the Fall Out Boy page's *\"The touring years (2007)\"* section: **(1) The page's arithmetic does not close.** It says the Facebook *\"Concerts I've gone to\"* note *\"shows three Fall Out Boy appearances in roughly eleven months, plus the Infinity On High release-day TRL taping\"* — but its own table lists exactly three FOB rows (2007-01-11 Cleveland Agora; 2007-02-06 TRL Studios NYC; 2007-11-19 Buffalo Mohawk Place) plus a Say Anything row (2007-05-06 Baltimore Rams Head). The Feb 6 TRL taping **is** one of the three, so *\"three … plus the TRL taping\"* counts it twice; four FOB shows are implied, three are listed. **(2) The Cleveland row exists only in the Facebook note.** The concert master table (36 rows, 2001–2019) carries the Feb 6, 2007 TRL show (row 21) and the Nov 19, 2007 Buffalo secret show (row 23) but **no Jan 11, 2007 Cleveland Agora entry** — a show attested only by the note, not by the researched table. The old wiki itself noticed the tension: its nicotine passage states *\"the concert table holds two 2007 Fall Out Boy dates and only one is promotional — 6 February 2007, Times Square.\"*"
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 10741 (219 lines); the touring table at lines 4574-4577 and the 'three … plus the TRL taping' framing at line 4569-4570. Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the concert index rows 21 (Feb 6, 2007 TRL Times Square; line 2200) and 23 (Nov 19, 2007 Mohawk Place Buffalo; line 2202) are present, and no Cleveland Agora row exists anywhere in the index. The old wiki's nicotine page states the 'two 2007 Fall Out Boy dates' point explicitly (lines 263-266 of whole.txt). The Facebook note source (raw/self/facebook/facebook-ihatedanfrank/) is unheld in this repo — facebook-threads/ holds only MANIFEST.json — so the Cleveland row cannot be checked against the note itself."
importance    = 3
tags          = ["concert-record", "old-wiki", "discrepancy", "facebook", "counts"]
created       = "2026-09-09"

[when]
start = "2007-01"
end   = "2007-11"
+++

## Why this matters

The page presents the 2007 itinerary as its central evidence that the
fandom *\"was an itinerary, not passive fandom\"* — and the itinerary is
strong even without the Cleveland date (two researched-table shows plus
the TRL taping inside eleven months, with the Buffalo secret show web-
verified in [`dat:0361`](0361-teen-concert-years-two-source-design-verified.md)).
But the page overstates its own case in two ways worth recording: the
double-counted TRL taping inflates the table's three FOB rows to four
implied shows, and the single hardest-to-verify row (Cleveland, Agora)
rests on the one source in the citation list that this repository does not
hold. The honest read: **two table-confirmed 2007 FOB appearances, one
note-only appearance, and one arithmetic slip.** The page also does not
resolve whether the note's Cleveland entry is a show Dan attended or one
he bought tickets to and missed — the concert index's own twitter cross-
check (see [`dat:0242`](0242-concert-index-twitter-crosscheck.md)) shows
the table is a purchase record, not an attendance record.

## What would settle it

The Facebook *\"Concerts I've gone to\"* note itself, or a 2007-era tweet
naming the Cleveland Agora show — the twitter archive is also unheld, so
neither check is available here.
