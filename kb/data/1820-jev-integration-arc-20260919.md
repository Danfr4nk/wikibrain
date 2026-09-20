+++
id         = "dat:1820-jev-integration-arc-20260919"
layer      = 1
type       = "datum"
title      = "Jev/TypeSafe arc 2026-09-19: beta invite, evaluation-first approval, key paste, 39-edge cleanup, retention terms"
claim      = "17:05:10Z Dan proposed a goal integrating TypeSafe's Jev model into Wiki Brain gating (beta invite; 'you're the boss of the Wiki Brain... approve or deny'); Sammy verified the invite in his Gmail (waitlist 2:12am, account-ready 12:17, his own Google sign-in 12:18) and approved evaluation-first: yes/no/score-with-confidence shape fits mechanical gates, but beta untested - benchmark before authority. 18:20:19Z Dan pasted the live API key in chat (REDACTED in this batch's archive per credential policy; 18:57:18Z Sammy told him to revoke it and use the secure connector card instead; his reply 'No I didn't' + an image - ambiguous). PR129 pitch read: 81 edges / 1569 nodes, 65 structural, zero narrative; 2335 untyped cite-links; 5117 candidates. 19:45-19:50Z cleanup executed: 39 edges flipped about->participated_in (evt--about-->ent is never correct per schema: about = 'a record OF'); 1 held - the ARD hearing -> Rick edge, because the record says Rick talked himself OUT of attending, so participated_in would be a lie (open: delete or re-relate, Dan's call). PR129 merged to main. Beta retention terms pulled: TypeSafe does not train on inputs, but zero retention is enterprise-only - beta keeps request contents 'as long as reasonably necessary... or otherwise in support of our business or commercial purposes,' usable for debugging/product improvement, deletion on request; sweep gated on Dan's call. Smoke test via bin/jev-eval: Suz business thread 0.92, Dee thread 0.02, ambiguous fragment spread probability and admitted ~zero confidence. Dan 19:39:36Z 'Proceed' (re the Jev build-out; retention call still his)."
cites      = ["src:20260919-2340-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Chat rows 2026-09-19, batch 20260919-2340 (raw/sammy/20260919-2340/)"
importance = 4
tags       = ["jev", "typesafe", "wiki-gating", "graph-cleanup"]
created    = "2026-09-19"

[when]
date   = "2026-09-19"
+++

<!-- prose for humans; the frontmatter is for machines -->

<!-- cross-batch note: the 1232 batch (landed on origin/main mid-run) holds the finer-grained login mechanics for the same arc: dat:1809-jev-gating-proposal, dat:1810-jev-verdict-evaluation-first, dat:1811-jev-login-success, dat:1812-jev-api-key-provided, dat:1813-jev-model-integration-chat, dat:1814-google-device-prompt-blocks-signin. This node adds what that batch does not cover: the PR129 pitch read, the 39-edge cleanup with the held ARD→Rick edge, the beta retention terms, and the jev-eval smoke-test scores. -->
