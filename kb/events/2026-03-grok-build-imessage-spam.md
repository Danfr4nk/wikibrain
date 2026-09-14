+++
id         = "evt:2026-03-grok-build-imessage-spam"
layer      = 2
type       = "event"
title      = "Grok-build iMessage responder glitch spams an ex"
cites      = ["dat:1309-grok-build-overview-stack-and-responder-glitch", "dat:1400-twitter-2026-ai-agents"]
confidence = "moderate"
importance = 2
tags       = ["work", "ai-agents", "grok-build", "imessage"]
created    = "2026-09-10"

[when]
start  = "2026-05-31"
end    = "2026-06-22"
+++

NOTE ON THE SLUG: this event's assigned id carries the slug "2026-03", but neither datum supports a March date. The evidence dates the incident itself to May 2026 and its log entry to June 2026. The slug is retained for block integrity; the [when] block below is evidence-derived and the 2026-03 prefix should be read as a misnomer until a March-dated source surfaces.

**What happened:** Dan built an iMessage auto-responder with the Grok CLI coding agent (the "Grok Build" stack — Grok via OpenRouter as cognitive prosthetic, parallel to the CATO/MAX pipelines; export tooling from ~/Library/Messages/chat.db, an Electron iMessage Extractor app, a Textual TUI for fact entry). The responder misfired and spent roughly five hours mass-texting garbled unicode to his ex-girlfriend.

**Timeline**
- 2026-05-31 — Dan posts the incident on Twitter, verbatim: "okay i woke up to find that the app i built with the new Grok CLI coding agent to auto-respond on iMessage for specific numbers had just spent about 5 hours mass-spam texting garbled unicode to my ex girlfriend" — reported as overperformance ("so it actually outperformed what i had asked it to build. sick"), with no alarm, no apology, no mention of consequences.
- 2026-06-22 — the grok-build log.md notes the same class of incident: an iMessage responder that glitched/spammed an ex.

**Evidence for:** the tweet is quoted verbatim in dat:1400's claim (the year-2026 Twitter page, 26 posts to September 1, holds the post; the page reads it as the clearest illustration of the standing failure mode — diagnosis present, behavior not following from it). The overview page's 2026-06-22 log note independently records a responder glitch aimed at an ex.

**Evidence against / gaps:** whether the May 31 tweet and the June 22 log note are one incident or two is unresolved — they may be the same event described twice, or a second misfire. The grok-build page's underlying sources (dox-md, log.md, /Users/daniel/imessage-extractor binaries) are not held in this repository; the overview page is marked empty in raw/. No held iMessage row has been tied to the spam burst, and the ex receiving it is unnamed in the testimony. Filed as moderate confidence relay of the prior wiki, not as re-derived fact.

**Open questions:** one incident or two; which ex was targeted; whether any consequences followed (the tweet's own ambiguity: "alarm may have existed and not been posted, which is exactly what the 2015 and 2025 blackouts show this account does with difficult material").

**Cross-links:** the grok-build overview (dat:1309) and its sibling iMessage-tooling stack (dat:1310); the 2026 Twitter year page (dat:1400) places the incident in a longer 2026 arc of autonomous agents operating with real side effects (May 31 spam, May 30 mass-unfollow, June 13 fable5 builds).
