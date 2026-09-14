+++
id            = "dat:0123-2015-annie-read-impact-analysis"
layer         = 1
type          = "datum"
title         = "2015 Annie read impact analysis: coverage stats check out; Nov 24 introduction inference confirmed; corrections queue partly stale"
claim         = "The impact-analysis working page (coverage 2015-11-28 → 2015-12-31, '34 days, 13,635 messages, ~160 events') checks out within 0.3%: the held corpus holds 13,561 messages in Annie's thread plus 39 in Casey's thread for the window (13,600). Its key dating inference is confirmed verbatim — Annie's *\"HAPPY ONE WEEK SINCE LEX HANDED YOU TO ME ❤️❄️❤️❄️❤️❄️❤️❄️❤️❄️❤️\"* (2015-12-01 14:37:05) puts the introduction at **~Nov 24, 2015**, four days before the corpus opens 'mid-relationship.' Also confirmed verbatim: *\"happy 7 years. enjoy your herpes. bye\"* (2015-12-03 21:29:45 — from Dan, in the Annie thread, consistent with the eviction-week hostility the queue files under Alexis). **Queue status:** the page states 'None have been applied,' but several items have since been applied on their target pages — the Casey one-week correction (applied 2026-08-17, cf. dat:0122), the 'j's' needle/ice separation from MyFreeCams history (applied 2026-08-16 on annie-ulmer.md), and the mutual-exit framing of the bond switch (corrected 2026-08-02 on annie-ulmer.md: the 24-hour switch was Dan's, previously misattributed to Annie). The Suz-as-primary-supplier (Dec 29: $200, Dec 31: $120), Zach-cover-story-to-threat, and Alexis post-eviction items have no applied-status marker found in this pass. Treat the queue as a historical record of the read's findings, not as a live todo list."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page read directly (corpus__3.txt line 101848, 435 lines through 102283). Coverage check: bin/corpus-query --who +17244346811 --from 2015-11-28 --to 2015-12-31 → 13,561; --who +17245626199 same window → 39. Quotes: 'HAPPY ONE WEEK SINCE LEX HANDED YOU TO ME' → 1 hit 2015-12-01 14:37:05 (+17244346811); 'enjoy your herpes' → 1 hit 2015-12-03 21:29:45 (Me, same thread); 'I have stuck to the story 100%' → 1 hit 2015-12-01 03:21:06 (Me) — the page files it under Nov 30, a late-night boundary case. Applied-status cross-checks: casey-bondarenka.md CORRECTED 2026-08-17 note; annie-ulmer.md changelog 2026-08-16 ('j's' incident) and 2026-08-02 (mutual exit framing)."
importance    = 4
tags          = ["2015", "annie-ulmer", "bond-switch", "corrections-queue", "corroborated-partial", "old-wiki"]
created       = "2026-09-09"
+++

## The Nov 24 inference

This is the page's most durable factual contribution: the corpus opens
2015-11-28 already mid-relationship ('already calling Dan love of my
life'), and the Dec 1 'one week' message back-dates the introduction to
Nov 24. That makes the 'day Dan met her' (Nov 24) distinct from 'first
in-person contact' (Nov 29, golf course, per the page's 1.1) — a
distinction the main Annie page collapses when it says Dan left Alexis
'within 24 hours of meeting Annie.' Both can be true (met Nov 24,
in-person Nov 29, switch night Nov 29), but the wiki should keep the two
dates separate.

## On the queue's staleness

A corrections queue that says 'none have been applied' while its items
are being applied elsewhere is a coordination hazard: a future worker
could 'apply' the Casey correction a second time or, worse, 'correct'
something the 08-16/08-17 passes already settled. This node is the
marker: check target pages before working queue items 3.1, 3.2, and 3.6.
