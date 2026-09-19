+++
id         = "dat:1810-jev-verdict-evaluation-first-20260919"
layer      = 1
type       = "datum"
title      = "Sammy approves Jev as evaluation-first parallel test; denies inbox OTP path"
claim      = "2026-09-19T13:33 and 14:18 EDT Sammy approved the Jev proposal as a PARALLEL TEST, not a swap: run it alongside the existing gates, measure agreement for a week, then decide. Typed yes/no/score+confidence output fits the wiki's mechanical gates. Caveats: beta, no independent testing; the 'can't hallucinate' pitch is a guarantee about answer shape, not truth (vendor admits the 0% figure isn't empirical); independent reads show ~7x faster / ~30x cheaper, not the vendor's 444x. Denial: no inbox OTP raids — Dan was already signed in, so access goes via an API key from the TypeSafe dashboard instead."
cites      = ["src:sammy-chat-transcript-20260919-1835"]
confidence = "high"
reliability = "primary"
extraction = "assistant msgs 22eaf957, bcd47d60, 5d710dba, batch 20260919-1835."
importance = 4
tags       = ["jev", "gating", "evaluation", "verdict"]
created    = "2026-09-19"

[when]
date   = "2026-09-19"
+++

The verdict operationalizes Dan's own evaluation-first doctrine: Jev earns gating authority only by matching/beating current gates on held-out cases. Tracked as assistant-tracked item goal_728490ab6c0b ('Jev typed-decision gating evaluation for Wiki Brain'); the user-facing goal record is to be created in main chat.
