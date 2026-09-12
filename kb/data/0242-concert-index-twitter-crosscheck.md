+++
id            = "dat:0242-concert-index-twitter-crosscheck"
layer         = 1
type          = "datum"
title         = "Concert-record index: the twitter cross-check's tweet evidence verifies exactly, but its row references do not resolve against the master list it sits next to"
claim         = "The index page `wiki/interests/concert-record/index.md` (corpus line 8396) carries a 2026-09-04 twitter cross-check arguing the concert table is a *purchase* record, not an attendance record: seven Orlando shows from 98 days of the twitter archive, three absent from the table. **Every tweet quotation in that section verifies exactly against the corpus's own twitter-2008 tweet rows** — text, status ID and clock time all match. **But the section's row references do not resolve against the master event list printed on the same page**: it cites row 26 for Jedi Mind Tricks (the list's row 26 is Panic! at the Disco; Jedi Mind Tricks is row 29), row 29 for the Fall Out Boy/XL-ent bill (row 29 is Jedi Mind Tricks; Fall Out Boy is row 30), and rows 36 and 40 for the Hey Monday / There For Tomorrow BACKBOOTH ticket (row 36 is High Tide 4, row 25 is Hey Monday, and there is no row 40). Its closing sweep — *\"Rows 6, 16, 17, 27 and 32 are all undated or unidentified\"* — likewise fails against the printed list, where row 27 (Jul 29, 2008 Warped Tour) is fully dated and identified. The cross-check was written against a different row numbering than the master list it now sits next to."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 8396 (198 lines); the twitter cross-check occupies lines 8472-8528 and the master event list lines 8431-8469. Each quoted tweet was verified against the corpus twitter-2008 page's own tweet rows: 'at the roots show. i can dig that.' at 2008-10-07 20:29:38 UTC (status 950145069); 'trans-siberian orchestra tonight.' 2008-11-15 22:04:00 UTC (1007490860) and 'wow that was SUPER lame.' 2008-11-16 04:07:46 UTC (1007840482); 'Jedi mind tricks' 2008-11-18 02:19:17 UTC (1010616996) and 'holy fuck, jedi mind tricks are so fucking scary.' 2008-11-18 06:50:30 UTC (1010897278); 'Flying to Orlando for hey monday tomorrow. Wooo' 2008-12-28 00:40:45 UTC (1081551627) and 'Hate airport days.' 2008-12-28 15:38:45 UTC (1082383557). All match the section's quoted texts and stated clock times (EDT/EST conversions check out). The row references were compared field-by-field against the printed master list rows 25-30 and 36 in the same file. The whole.txt old-wiki export carries the same page at lines 2174-2250 with the same inconsistent numbering, so the mismatch predates this repository — it is inherited, not introduced."
importance    = 4
tags          = ["concert-record", "twitter", "old-wiki", "internal-inconsistency"]
created       = "2026-09-09"

[when]
start = "2008-09-24"
end   = "2008-12-31"
+++

## What the check confirms — the evidentiary core is solid

The thesis stands on its own evidence. The seven-show table is accurate:
The Roots (7 Oct 2008), Cobra Starship / Hit The Lights / Forever The
Sickest Kids (13 Nov) and Trans-Siberian Orchestra (15 Nov) are absent from
the master list, while All Time Low (18 Oct), Jedi Mind Tricks (17 Nov) and
Fall Out Boy / The Academy Is / We The Kings (12 Dec) are present. The
timestamps are exact to the minute — e.g. the two TSO tweets at 22:04:00
UTC and 04:07:46 UTC are 17:04 and 23:07 EST, as quoted. The Trans-Siberian
Orchestra case does exactly the work the section claims for it: announced
at 17:04, dismissed as \"SUPER lame\" at 23:07, absent from the compiled
record. A purchase log cannot hold a show somebody walked into or decided
was not worth remembering, and the section proves it from the primary
archive.

The Hey Monday GAP NARROWED block is likewise verified: the 2008-12-19 and
2008-12-27 tweets exist in the archive rows at the stated UTC times, and
they do date the show to 28 December 2008 independent of the BACKBOOTH
ticket join.

## What the check breaks — the cross-references are stale

The section's `row N` citations describe a table that is not the one
printed above them. The likeliest cause is that the cross-check was written
against the raw `table.csv` row numbering (or an earlier master-list
revision) and the master list was later re-sequenced without updating the
references. Whatever the cause, **as published, the citations do not
resolve**: a reader following \"row 26\" lands on the wrong show twice, and
\"row 40\" does not exist at all.

Two knock-on findings from the same comparison:

- **The narrowed Hey Monday date was never propagated back.** The master
  list's row 25 still reads *\"Hey Monday · 2008 · Unknown · Orlando, FL ·
  Still open — band formed 2008 in West Palm Beach; exact Orlando show
  unresolved.\"* The page now contains, in the same body, the evidence that
  the exact show is 28 December 2008 and a row that says it is unresolved.
- **The 47-removed-stubs claim is unverified here.** *\"On 2026-08-29 the
  operator removed 47 single-appearance artist stubs\"* appears only on this
  page; no commit in this repository records it, and the old wiki's git
  history is not held here to check. It is carried as the page's assertion,
  not as a verified event.

The inconsistency does not touch the section's thesis — the tweet evidence
is primary and exact — but it does mean the page currently misdirects on
three of its seven rows. The fix is mechanical: re-point the citations at
the printed master list (rows 28, 29, 30, 25) and propagate the settled Hey
Monday date into row 25.
