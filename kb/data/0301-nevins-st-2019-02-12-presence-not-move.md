+++
id            = "dat:0301-nevins-st-2019-02-12-presence-not-move"
layer         = 1
type          = "datum"
title         = "2019-02-12 '46 Nevins St': the corpus confirms Dan's presence there — the timeline's 'moves to' is stronger than the message supports"
claim         = "The master timeline's Tier-1 entry for **2019-02-12** states *\"Dan moves to 46 Nevins St, Brooklyn\"* (from `wiki/places/46-nevins-street` · Chronology). The held corpus confirms his **presence** at that address that day: Dan's message (is_from_me=1) of **2019-02-12 22:33:57 UTC** (= 17:33 EST) reads *\"I'm at 46 Nevins. Let me know when you're running\"*, and a 2019-02-13 01:26:04 UTC message gives *\"46 Nevins street\"* — both in the context of supply coordination. Presence at an address during transactional coordination is not evidence of a residential move; the timeline's 'moves to' characterization is one inference step beyond the held record."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "moderate"
extraction    = "Observed directly: searched corpus/messages.csv for 'nevins' — hits include message_id rows dated 2019-02-12 22:33:57 UTC and 2019-02-13 01:26:04 UTC (is_from_me=1) with the quoted texts, plus a 2019-02-08 inbound 'I can probably do some drop offs when I get back to the city' and a 2019-02-10 'I sent something back home'. The supply-coordination context comes from the message text itself ('Let me know when you're running'). Timeline entry at corpus__3.txt ~114150."
importance    = 2
tags          = ["master-timeline", "46-nevins-street", "brooklyn", "residence", "corpus-verification", "inference-check"]
created       = "2026-09-09"

[when]
start = "2019-02-08"
end   = "2019-02-13"
+++

## Assessment

The February 2019 window is genuinely transitional — the 2019-02-10 'I sent
something back home' line and the surrounding supply messages show Dan
operating out of Brooklyn while his base is unclear. '46 Nevins' is a real
location trace with a real date. The node exists to keep the *residency* claim
and the *presence* claim separate: the wiki's places chronology may have
stronger evidence for the move than the held messages show (a lease, a
dormant-address record), but the corpus alone does not establish it.
