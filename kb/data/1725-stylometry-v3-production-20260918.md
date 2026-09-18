+++
id         = "dat:1725-stylometry-v3-production-20260918"
layer      = 1
type       = "datum"
title      = "Stylometry v3 delivered and wired into production"
claim      = "v3 delivered 01:31Z, installed byte-exact from the PR branch, 59/59 tests green (the delivery report's 20 failures were report-side; the branch won). v2 adapter needed alignment. Production wiring live 01:47Z: 30-min loop, scorer reads the 94,503 sent texts + recent chat, topic profiles rebuilt on the real corpus, v2 bridge verified. Deep-read trigger fires on real v2 flags only; entity axis dead until the name registry is populated. Measurement week ends ~Sep 22-23; cutover decision Wed Sep 23 9:00 AM on Dan's calendar."
cites      = ["src:sammy-chat-transcript-20260918-0230"]
confidence = "high"
provenance = "Sammy-Dan main-chat transcript, 2026-09-18 (0230 window), src:sammy-chat-transcript-20260918-0230"
tags       = ["stylometry", "ai-collaboration"]
created    = "2026-09-18"

[when]
date   = "2026-09-18"
+++

Delivery 01:31Z (commit 60b40bf, 3,355-line feature). Install 01:35Z byte-exact; the 20 'failures' in the delivery report were report-side artifacts, the branch's tests all passed. Dan's call: 'trust your own judgement if you think it's wrong' — the build got four live corrections beyond Claude's draft (recipient resolution, flag-vs-alert split, calibration dedup, splitter-routed null). 01:47Z production wiring: scorer loop every 30 min, reads 94,503 sent texts + recent chat, topic profiles rebuilt on real corpus. Entity axis dark until the name registry exists.
