+++
id         = "dat:1863-jev-calibration-sweep-revival-20260921"
layer      = 1
type       = "datum"
title      = "Jev eval sweep revived: calibration lands, 0.6 gate, 4,400-pair sweep running"
claim      = "The TypeSafe Jev evaluation (integrated Sep 19, then dead on connection-refused errors and parked awaiting a fresh API key) was revived 2026-09-21. Dan asked 'are we still using jev' (22:04Z); told it was parked, he pasted a fresh API key at 22:06Z and refused rotation ('no im not rotating it just use it'), with the key used transiently and not stored. Calibration against 81 hand-audited edges: direction 84%, relation typing 80% (a dumb always-guess-the-common-one baseline gets 48%, so this is real signal), fine-grained strength 12% exact. The money finding: confidence scores are honest — at 0.6+ confidence it's right 75-100% of the time, so 0.6 is the gate threshold. Whole calibration cost under two cents. A full sweep (~4,400 pairs, a few hours, under a buck) is running in the background with results pending. Related Jev nodes: dat:1809 through dat:1813 and dat:1820 (proposal, verdict, login, key, integration, arc)."
cites      = ["src:20260921-2340-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Sammy 22:04Z: 'Integrated Sep 19, then the eval sweep died on connection-refused errors and never finished. It's been parked ever since, waiting on a fresh API key from you.' Dan 22:06Z: '<API key redacted in public copy> and no im not rotating it just use it lmao'. Sammy 22:08Z: 'Against your 81 hand-audited edges: direction 84%, relation typing 80% (a dumb always-guess-the-common-one baseline only gets 48%, so that's real signal). Fine-grained strength is weak — 12% exact... At 0.6+ confidence it's right 75–100% of the time, so 0.6 is your gate threshold. Cost for the whole calibration: under two cents.' / 'Full sweep's running in the background now — ~4,400 pairs, a few hours, still under a buck... Key's not stored anywhere, per your order.'"
importance = 5
tags       = ["typesafe", "jev", "eval", "gating", "2026-09"]
created    = "2026-09-21"

[when]
date   = "2026-09-21"
+++

<!-- prose for humans; the frontmatter is for machines -->
