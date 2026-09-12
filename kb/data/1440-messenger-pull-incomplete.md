+++
id = "dat:1440-messenger-pull-incomplete"
layer = 1
type = "datum"
title = "Messenger CLI pull 2026-09-12 was incomplete: the 2-thread result is a tool limitation, not the account state"
claim = "The 2026-09-12 Messenger companion pull (2 threads, 11 messages) is a partial/broken sync, not a complete inventory. Dan reports his Messenger app contains 'a ton of messages.' The same authenticated account (fb_user_id 580995252, 'Dan Frank') returns 320 contacts via the companion, yet thread discovery (sync threads --older 3650, sync both, repair, per-folder listing INBOX/PENDING/ARCHIVED/SPAM) surfaces only 2 threads, both non-E2EE, both August 2026. The Kristin PENDING thread was genuinely sitting in his message-request approval queue - he had not seen it, and he reports he may be unable to approve it (possible re-block on her end). The 'empty channel' conclusion in dat:1438 is withdrawn; Messenger remains an unmined source. The authoritative route is a fresh Facebook 'Download Your Information' export with messages included (the 2026-09-08 export contained posts only, no messages/)."
cites = ["src:messenger-2026-09-12"]
confidence = "high"
tags = ["messenger", "coverage", "methodology", "correction"]
importance = 4
created = "2026-09-12"
supersedes = "dat:1438-messenger-empty-channel"

[[edges]]
rel = "about"
target = "ent:dan"
strength = "strong"
asserted_by = "llm"
+++

**Evidence class:** correction of a same-day finding. Supersedes dat:1438.

1. **What the tool returned.** `hatch_messenger_cli` (connected, has_keys:true) after full sync: exactly 2 threads - Ryan Lisac (INBOX, 6 msgs, Aug 14-17) and Kristin Shaelene (PENDING, 5 msgs, Aug 26). Sync reported thread_count=0 new; repair changed nothing.
2. **Why it's wrong.** Dan, looking at the same account on his phone: "there's like a ton of messages in there." The companion also lists 320 contacts on this account - a 2-thread account with 320 contacts is not credible. Thread discovery is broken or scoped (both returned threads are non-E2EE; E2EE-default threads since late 2023 may be invisible to this sync path).
3. **The Kristin thread detail stands.** It was genuinely in PENDING/message requests - Dan had not seen it before this pull surfaced it. His report: he cannot approve the request, possibly because she re-blocked him on Messenger. The 5 messages (Aug 26, all hers, unanswered) are archived in raw/messenger-2026-09-12/.
4. **Next step.** Authoritative Messenger history requires a Facebook DYI export with the messages box checked, then ingest. The companion CLI cannot currently be trusted for thread inventory.
