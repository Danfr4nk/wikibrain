+++
id         = "dat:1834-token-pool-adjudication-20260920"
layer      = 1
type       = "datum"
title      = "Token pool adjudication 2026-09-20: runtime burn 426M/24h vs billed pool at 8% used"
claim      = "Two token meters measuring different things were reconciled 2026-09-20: the hourly runtime tracker logged 426M tokens over 24h (~16.9M/hour, 98% input — every turn re-reads full context), while his actual subscription status showed the 1B 'additional tokens' pool at 8% used with 919M left (no subscription, free weekly limit maxed until Sep 23). The runtime burn is NOT draining the billed pool 1:1 — either the runtime doesn't bill against the pool at all, or cached input gets a steep discount. The '1B lasts 2.5 days' statement delivered 20:30 EDT 2026-09-20 was retracted in-chat at 21:10 as a wrong assumption (it assumed pool drains at runtime rate)."
cites      = ["src:20260920-2340-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "His words: 'the tracker shows I've only used 8% of the 1B instead of the 43% you said' (21:09 EDT). Retraction delivered 21:10 EDT (assistant-msg-0699eda5). Methodology of the 426M figure was rechecked live against the CSV and found clean — the error was in the conclusion, not the count."
importance = 4
tags       = ["token-economics", "subscription", "correction"]
created    = "2026-09-20"

[when]
date   = "2026-09-20"
+++

<!-- prose for humans; the frontmatter is for machines -->
The adjudication triggered the cadence cuts (dat:1835) and the ~SLOW sigil (dat:1833).
