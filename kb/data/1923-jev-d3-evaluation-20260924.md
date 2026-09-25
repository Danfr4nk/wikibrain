+++
id         = "dat:1923-jev-d3-evaluation-20260924"
layer      = 1
type       = "datum"
title      = "Jev D3 evaluation: 65 labeled sources-repair decisions, 83% agreement, 39/39 rot at high confidence"
claim      = "2026-09-24 ~00:42-00:45 EDT: Sammy ran Dan's 65 hand-reviewed D3 sources-repair decisions (26 confirmed-target, 39 confirmed-unresolved, each verified against the live tree) through TypeSafe's Jev as a labeled set, per Dan's 'Let's TRY it just to see on something' (00:42:28Z) / 'let's let it try tk classify' (00:42:39Z). Result: 83% agreement overall; Jev went 39/39 on the rot/unresolved cases at 0.92-0.98 confidence. All 11 disagreements were one shape: Sammy said confirmed-target, Jev said 'needs investigation' at ~0.5 -- every one of those required diffing actual file bytes, which Jev never saw. The pilot 8/8 showed the same pattern: three 'wrong content' cases (message_1.html, messages.csv, comments.html) called unresolved at 0.92-0.98 (decisive); the five confirmed targets it got right but hedged ~0.48 vs ~0.46. Jev was never confidently wrong. Conclusion recorded in chat: Jev fits a triage/pre-sorter role -- auto-flags obvious rot, punts 'looks plausible, go verify' to humans -- not a decider (D3 identity-adjacent calls stay human per Dan's held line 'don't let the harness guess identity')."
cites      = ["src:20260924-0230-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Chat rows 2026-09-24T04:41-04:47Z, batch 20260924-0230 (~/workspace/wiki-sync/staging/20260924-0230/)"
importance = 5
tags       = ["jev", "typesafe", "evaluation", "sources-repair", "d3"]
created    = "2026-09-24"

[when]
date   = "2026-09-24"
+++

<!-- prose for humans; the frontmatter is for machines -->
