+++
id = "dat:1438-messenger-empty-channel"
layer = 1
type = "datum"
title = "Facebook Messenger is an empty channel: 2 threads, 11 messages, all August 2026"
claim = "A full Messenger pull (sync threads --older 3650, 2026-09-12) returns exactly 2 threads and 11 messages, all dated 2026-08-14 to 2026-08-26. Search for known contacts (Annie, Tom, Alexis) returns zero hits. The September 2026 Facebook export likewise contained posts only, no messages folder. Dan's messaging life is iMessage (192,140 messages, Mar 2011-Sep 2026); Messenger is not a substantive channel and cannot be mined for relationship history."
cites = ["src:messenger-2026-09-12"]
confidence = "high"
tags = ["messenger", "coverage", "methodology", "negative-finding"]
importance = 3
created = "2026-09-12"

[[edges]]
rel = "about"
target = "ent:dan"
strength = "strong"
asserted_by = "llm"
+++

**SUPERSEDED 2026-09-12 (~03:00 EDT).** Dan corrected this finding in conversation: his Messenger app contains "a ton of messages" — the 2-thread result was a shallow/broken CLI sync, not the account's true state. The companion's thread discovery returned only 2 threads despite 320 contacts on the same account, and sync/repair surfaced nothing further. The "empty channel" conclusion is withdrawn. See dat:1440. The 11 messages in raw/messenger-2026-09-12/ remain valid as far as they go, but are a partial pull, not a complete inventory.

**Evidence class:** negative finding bounding the corpus. Raw: `raw/messenger-2026-09-12/`.

1. **The complete inventory.** Thread 1: Ryan Lisac (INBOX), 6 messages, 2026-08-14/15/17 - Dan asks whether a Tesla sub includes SUPERGROK; Dan shares "Caakehorn.github.io/home ... Built in 2 hours with Claude code lol" with instructions ("Leave the text box empty and press submit - that's the code"); Ryan reports it didn't work, "still asked for a code." Thread 2: Kristin Shaelene (PENDING/message request), 5 messages, 2026-08-26, all from her, none answered: "What's up you piece of shit?", "Long time no talk my fellow neuro fuck", a missed call, "Fag", "Ew lol".
2. **No history depth.** sync threads --older 3650 surfaced nothing older; the cache's oldest timestamp is 2026-08-14. Either Dan never used Messenger meaningfully or older threads are inaccessible to the companion - either way, no relationship history is recoverable here.
3. **Corroboration from the export.** The 2026-09-08 Facebook export (2,928 files, 156MB) contains posts and docs but no messages/ directory - consistent with negligible Messenger use.
4. **Methodological consequence.** Any wiki claim requiring message evidence must source iMessage/SMS, not Messenger. Do not treat Messenger silence as relationship silence.
