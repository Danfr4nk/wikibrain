+++
id            = "dat:0296-al-2018-11-01-repayment-demand-verified"
layer         = 1
type          = "datum"
title         = "Al's 2018-11-01 repayment demand ('It's been months...') — verified verbatim in the held corpus"
claim         = "The master timeline's Tier-2 entry for **2018-11-01** states that Al confronted Dan over the money — the debt-confrontation message. The held corpus contains the message (chat [phone redacted], inbound, message_id 67588) of **2018-11-01 19:52:21 UTC** (= 15:52 EDT), verbatim: *\"It's been months and you haven't gave me my money yet so I'm asking you one time only please give me my money\"*. This is the opening of the November 2018 debt thread that runs through the December 2018 drug-run coordination."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: searched corpus/messages.csv for 2018-11-01 rows matching 'money'; message_id 67588 matched with the full quoted text. Timeline entry at corpus__3.txt ~113968."
importance    = 2
tags          = ["master-timeline", "al", "debt", "cocaine", "supply-network", "corpus-verification"]
created       = "2026-09-09"

[when]
start = "2018-11-01"
end   = "2018-11-01"
+++

## Relation to existing findings

[`dat:0154`](0154-al-2018-supply-thread-debt-confrontation.md) already covers
the 2018 Al supply thread and debt confrontation in full. This node exists only
to pin the timeline entry's specific date and quote to the held corpus row —
it is a verification anchor, not a new claim. The 'one time only' phrasing
frames the demand as a final warning, which is consistent with the thread's
escalation arc documented in dat:0154.
