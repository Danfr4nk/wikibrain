+++
id         = "evt:js-deploy-gate-ordered-20260914"
layer      = 2
type       = "event"
title      = "JS deployment gate ordered: WB_GATE_PASSWORD secret, SHA-256 digest only, bin/wb-gate (PR #78)"
claim      = "2026-09-14 19:21:51 EDT (23:21:51Z) — Dan ordered a JS password gate on the Pages reading surface, verbatim framing: 'Just a JS gate, I know it's theater.' Design: Pages stays public; repo stays public; direct asset URLs (corpus.txt/graph.json) bypass the prompt. Password comes from the WB_GATE_PASSWORD repo secret, and only its SHA-256 digest is embedded in the built page — Dan sets/rotates the password himself; Sammy never sees it. Injector bin/wb-gate runs in the Pages workflow after the builders. Work item queued as work-0082; PR #78 carries the implementation."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
importance = 4
tags       = ["wiki", "deploy", "gate"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
