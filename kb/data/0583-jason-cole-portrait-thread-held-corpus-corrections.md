+++
id            = "dat:0583-jason-cole-portrait-thread-held-corpus-corrections"
layer         = 1
type          = "datum"
title         = "Jason Cole pet-portrait thread: held corpus has 189 rows (114 Dan / 75 Jason) — the page's 'one-sided' 75 is Jason's side only; Dec 14 rupture verified verbatim"
claim         = "The Jason Cole page's core narrative verifies against the held corpus, with two corrections. **(1) Count and direction.** The page says 75 messages, 'read as one-way (Jason to Dan)' because its source export (MASTER_MESSAGES_DB_DUMP.csv) marked direction unreliably. The held corpus holds **189 rows** for the [phone redacted] thread over the same span (2015-12-10 18:48:37 UTC → 2016-12-14 21:15:20 UTC, matching the page's date range): **114 from Dan, 75 from Jason**. The page's 75 is exactly Jason's side — the 'sustained one-sided correspondence' framing is an artifact of the dump export, not the thread. **(2) Phrase placement.** The page places *'this is my job now brother'* in the December 14 final exchange; the held message carrying it is **2016-12-05** 19:09:51 UTC (Jason: *'This is my job now brother so I need to treat it as such'*), in the message that also states the waived half-down norm — the Dec 14 messages do not repeat it. **Verified verbatim:** the Annie-surprise line (2016-12-03 02:36:04 UTC, Jason: *'You have to swear on everything you won't show Annie. She's gonna lose her shit. And that game is fire'* — the page drops the trailing clause); the commission start (2016-11-18 01:10:35 UTC = Nov 17 20:10 EST, Dan: *'A portrait would be fine but if you wanna go another direction I'm cool with that'* — the page's 'starting November 17'); the Dec 14 rupture — Dan *'You'll get your $85 chill the fuck out'* (19:43:37 UTC), *'I'm blocking you and I'll tell u when I'm home'* (20:10:14 UTC), *'Oh and go tell Harshman more shit to get him shittier with me'* (20:10:58 UTC) — the 'deflection toward unrelated past grievances' the page names is the Harshman line — and Jason's closer *'I've devalued anything about the fun or creative merit because you don't care about other people's time enough to communicate clearly and stick to your word? I can't help but think I'm not the one devaluing things here.'* (21:15:20 UTC, the thread's last row). **The page's gap stands:** no held message confirms payment; whether the friendship survived is undocumented."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread located in corpus/messages.csv by the page's distinctive quotes ('swear on everything', 'my job now brother'); all rows above are direct reads. The handle is given as [phone redacted] per the corpus convention — the digits are deliberately not reproduced here (the old-wiki export carries third-party handles unredacted; this repository does not). Page body read from corpus__3.txt line 58957 (53 lines), matching whole.txt lines 52608-52660. Direction counts: 114 is_from_me=1 / 75 is_from_me=0 out of 189 rows with this chat_identifier. Timestamps UTC; December 2016 is EST (UTC−5)."
importance    = 4
tags          = ["jason-cole", "imessage", "verbatim-quote", "count-correction", "annie-ulmer"]
created       = "2026-09-09"

[when]
start = "2015-12-10"
end   = "2016-12-14"
+++

## What the check confirms

The page's narrative — warm commission, stonewalling from Dec 5, rupture
Dec 14 — is the held thread's narrative. The two headline quotes verify
verbatim, the date range is exact, and the page's characterization of the
final exchange (broken meeting times, deflection to unrelated grievances,
professionalism asserted) matches the held Dec 14 rows, including the
Harshman deflection the page describes without naming.

## What the check corrects

The thread is not one-sided. Dan wrote 114 messages in it — the page's
75-message figure is Jason's side only, and its 'increasingly pained
one-sided correspondence' framing inherits a limitation of the dump
export it cited. The held corpus removes that limitation: direction is
reliable here. The substantive finding (he stonewalled on payment) is
unchanged; the texture is two-sided.

## What stays open

Payment, and the friendship's survival — exactly the page's stated gaps.
Dan's 'You'll get your $85' is a promise on the record, not a receipt.
