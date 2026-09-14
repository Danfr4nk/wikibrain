+++
id            = "dat:0287-grandfather-jim-death-2019-10-02"
layer         = 1
type          = "datum"
title         = "'Grandfather Jim' who died 2019-10-02 is Annie's grandfather, confirmed verbatim from Dan's booking-conflict message; distinct from Morley Frank (d. 1998)"
claim         = "The master timeline's Tier-1 entries *\"2019-10-02 — Grandfather Jim dies\"* (from `wiki/people/annie-ulmer` · Chronology) and *\"2026-08-10 — Jim's death is now dated ... October 2, 2019, per a Dan message to a client explaining a possible booking conflict\"* (from `wiki/people/ellen-ulmer`) are confirmed against the held corpus. Dan's message of **2019-10-03 01:21:15 UTC** (2019-10-02 21:21 EDT) reads in full: *\"hey i just wanted to give you a heads up...Annie just found out that her grandfather died today. i'll know later tonight or tomorrow morning if it is going to conflict with monday night's booking...but i just wanted to let you know right away that we might need to push it back a day or two if possible\"*. A follow-up on 2019-10-12 notes *\"i mean her grandfathers funeral is at 8 or something so i do feel a little bad\"*. 'Her grandfather' = Annie's; this is not Dan's grandfather Morley Jay Frank (died 1998-12-13, Hopwood)."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: searched corpus/messages.csv for 'grandfather' in 2019 rows. message_id 39241 (2019-10-03 01:21:15 UTC, is_from_me=1, individual chat) gives the booking-conflict message quoted verbatim above — 'today' in local Eastern time is 2019-10-02, matching the wiki's dated finding exactly. message_id 38744 (2019-10-12 04:39:14 UTC, is_from_me=1, +17245571722) gives the funeral line. The 2026-08-10 wiki pass's description ('a Dan message to a client explaining a possible booking conflict') matches the 39241 message's content precisely, so the dating method is corroborated, not just the date."
importance    = 3
tags          = ["master-timeline", "annie-ulmer", "death", "corpus-verification", "disambiguation"]
created       = "2026-09-09"

[when]
start = "2019-10-02"
end   = "2019-10-12"
+++

## Disambiguation

The timeline's bare *\"Grandfather Jim dies\"* is easy to misread against Dan's
own line: his paternal grandfather Morley Jay Frank died 1998-12-13 (timeline
entries, GEDCOM). The source page is annie-ulmer · Chronology and the
corroborating message says *her* grandfather — Annie's. The ellen-ulmer page
carries the dating pass. No existing kb node covered this death; the name 'Jim'
itself is not expanded anywhere in the held corpus (the messages say only
'her grandfather').

## Confidence note

The date rests on 'died today' in a message timestamped 2019-10-02 21:21 EDT —
contemporaneous, first-party, and specific to the hour. This is the strongest
dating class in the corpus. The wiki's 2026-08-10 retrospective pass got it
right.
