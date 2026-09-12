+++
id            = "dat:0122-casey-bondarenka-switch-night-quotes-confirmed"
layer         = 1
type          = "datum"
title         = "Casey page: the 2015-11-29 switch-night exchange confirmed verbatim; the 'contested attribution' is resolved by the held corpus"
claim         = "All three load-bearing quotes on the Casey page confirmed verbatim in the held corpus, same thread: Dan's *\"Things are collapsing with lex. You might be seeing a lot more Annie very soon\"* (2015-11-29 23:33:27, sent); Casey's *\"Dude if you're breaking things with Alexis.. Can I fuck her? Lol\"* (2015-11-29 23:34:50 — 83 seconds later); Casey's *\"Wait is that Annie?\"* (2015-11-30 02:41:28, ~3 hours later, crossing midnight). **The page's contested-attribution problem does not exist in the held corpus**: the page says Sent rows carry no contact_handle in its export, so the 'collapsing' message is 'attributed to Casey by timing and content' — but in the held corpus that sent message sits *inside Casey's own thread*, which resolves the attribution mechanically. The page's 2026-08-17 correction ('roughly one week, not an established friendship') is also confirmed verbatim: *\"Casey will never stfu here\"* (2015-11-30 18:47:45) followed 23 seconds later by *\"He just started hanging out with us last week\"* (18:48:08), both from Dan in the Annie thread. The page cites these as '13:47–13:48' — local EST rendering; the corpus shows UTC (13:47 EST = 18:47 UTC in November). Substance unaffected. Count: the thread is 50 messages (14 Dan / 36 Casey); the page's '36 messages' is the received side, the same export-side pattern as the Bill, Bryan, and Bub pages."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page read directly (corpus__3.txt line 53025, ~100 lines). bin/corpus-query on corpus/messages.csv: 'Things are collapsing with lex' → 1 hit (+17245626199 thread, 2015-11-29 23:33:27, Me); 'Can I fuck her' → 1 hit (same thread, 2015-11-29 23:34:50); 'Wait is that Annie' → 1 hit (same thread, 2015-11-30 02:41:28); 'Casey will never stfu' → 1 hit (+17244346811, 2015-11-30 18:47:45, Me); 'just started hanging out with us' → 1 hit (+17244346811, 2015-11-30 18:48:08, Me). --who on Casey's thread → 50 matches, 14 sent / 36 received. Not separately checked: the Feb 15 2016 apology, the 'slippery slope… She's a hoe' warning, the Oct 2018 medical-marijuana-card message, the Ellen/car informant attribution (which the page itself leaves unproven)."
importance    = 4
tags          = ["casey-bondarenka", "corroborated", "quotes", "attribution", "imessage", "old-wiki", "2015"]
created       = "2026-09-09"
+++

## Why the attribution finding matters

The page treats the 'collapsing' message as a worked example of
[[wiki/mind/concepts/dans-law]] — the contested-attribution problem —
and its connections claim calls it 'a worked instance' of that problem.
In the held corpus there is no problem: thread grouping attributes the
message to Casey's thread directly. The dans-law framing was an artifact
of the page's export lacking thread context, not of the underlying data.
Downstream pages citing this as a dans-law instance should note the
resolution; the concept may still hold elsewhere, but not here.

## The nine-week arc, confirmed

Arrival ('just started hanging out with us last week,' Nov 30) →
insertion into the eviction-night household → 'asked to stay away'
(Dec 2) → full apology (Feb 15, 2016, per the page, unreplicated here) →
sporadic check-ins through Oct 2018. The correction from 'overstayed his
welcome' (implying an established friendship) to 'a near-stranger present
at close range for the most volatile fortnight in the record' is
supported by the messages, and it is the page's own correction — another
instance of the wiki auditing itself.
