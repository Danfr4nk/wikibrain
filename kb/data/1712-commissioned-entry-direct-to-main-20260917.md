+++
id         = "dat:1712-commissioned-entry-direct-to-main-20260917"
layer      = 1
type       = "datum"
title      = "Standing order: commissioned wiki entries ride to main same-turn"
claim      = "Dan ordered (17:22:49 EDT 2026-09-17) that specifically commissioned wiki entries go write -> gates -> main in the same turn via direct-commit.py, never waiting on the 6h cron."
cites      = ["src:sammy-chat-transcript-20260917-2030"]
confidence = "high"
importance = 4
tags       = ["wiki", "standing-order"]
created    = "2026-09-18"

[when]
date   = "2026-09-17"
+++

2026-09-17 17:22:49 EDT, main chat. Standing order from Dan (verbatim): "From now on any time i tell you to write an entry specifically, go ahead and ride it all the way to merging to main."

Operational meaning: when he specifically commissions a wiki entry, Sammy writes it, runs the gates (wb-validate, wiki-minimums), and pushes it to main via direct-commit.py in the same turn — never leaving it untracked for the 6h cron. The local working-tree copy is removed after the push so the cron doesn't double-commit it.

Context: he had just asked "I don't see the article in 'new entries'" (17:22:05, twice) about the commissioned name-as-handle entry; it had been pushed to main minutes earlier and was awaiting the site rebuild. The order generalizes from that friction: commissioned work should not sit in queues.

Recorded in ~/AGENTS.md the same day ("Commissioned entries ride to main same-turn"). This node is the kb record of the order itself, sourced to the contemporaneous chat row (message_id 06477cb4-664d-46fa-95ae-1bcb0a74093c).
