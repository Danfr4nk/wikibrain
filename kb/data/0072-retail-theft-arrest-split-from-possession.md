+++
id            = "dat:0072-retail-theft-arrest-split-from-possession"
layer         = 1
type          = "datum"
title         = "The Combos retail theft is a separate 2015 matter, and the record of it is stronger than the page claims"
claim         = "The Combos incident — a retail theft of Combos snacks in 2015, a few weeks after the possession arrest — is real and separate: until 2026-08-03 the wiki titled the page \"2015 Arrest (Retail Theft / 'The Combos Incident')\" and carried the possession case's lawyer, ARD, Judge Wagner hearing and barracks trips under it, and per the operator the two events are both real, weeks apart, with all the machinery belonging to the drug arrest. Against the page's claim that \"the corpus contains no contemporaneous account of the theft,\" the authoritative message corpus holds contemporaneous December 2015 first-party text: 2015-12-09 \"To go fix the combos incident\" and \"Fuckin combos\"; 2015-12-11 \"COMBOS,\" \"Because I took combos,\" and Dan quoting the barracks trooper — \"DID YOU STEAL MORE COMBOD\" (19:22:13); 2015-12-12 an inbound \"I wonder if stealing combos\" (Annie's tease). The trooper joke, quoted same-day, is first-party evidence the theft was chargeable and known to the same barracks. The page's Feb 17, 2016 \"My combos are paid off\" fine line was not located in the corpus in this pass. Store, date, charge grading and disposition remain absent."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:wikitest-rebuild-session-2026-09-09"
confidence    = "high"
extraction    = "The page text was read from wiki/legal/2015-retail-theft-arrest.md (corpus__3.txt line ~16657). Verification run 2026-09-09 by case-insensitive fixed-string grep over corpus/messages.csv (203,626 rows, sha256-verified): eight rows contain \"combos,\" seven from 2015-12-09 to 2015-12-12 and two from 2026-01-14 (a later unrelated use). The 2015-12-11 \"DID YOU STEAL MORE COMBOD\" row is outbound (Me), i.e. Dan quoting the trooper, matching the page's account of when the joke happened. The inbound 2015-12-12 row truncates at \"I wonder if stealing combos\" — the page's fuller \"counts as poison\" ending is not in the corpus row and remains the wiki's transcription."
importance    = 4
tags          = ["legal", "old-wiki", "corpus", "verification", "corroboration"]
created       = "2026-09-09"

[when]
start = "2015-12-09"
end   = "2015-12-12"
+++

## What the corpus adds beyond the page

The page treats the theft as evidenced only by later jokes and a trooper's
rib. The corpus rows are stronger: Dan writing \"Because I took combos\" on
2015-12-11 is a same-week admission of the act, and \"To go fix the combos
incident\" on 2015-12-09 puts him dealing with its consequences. The
\"no contemporaneous account\" line should be retired.

The December clustering also re-dates the jokes' context: the page says the
trooper line came \"during the December 2015 barracks trips over the
possession case,\" and the corpus rows sit exactly inside those trips
(Dec 9–11, matching [`dat:0070`](0070-ard-disposition-and-da-bar.md)'s
timeline of the barracks paperwork visits). That consistency is worth
recording: the Combos material and the possession-case material occupy the
same three days, which is presumably how one event's lawyer and ARD ended
up filed under the other for three weeks.

## What is still missing

The store, the exact date of the theft, the value of the goods, the charge
grading and the disposition. The \"few weeks\" interval and the order of the
two incidents rest on the operator alone. The Feb 17, 2016 \"My combos are
paid off\" line is the wiki's transcription and was not found in the
authoritative corpus.
