+++
id         = "dat:1601-stylometry-v2-scoring-core-20260915"
layer      = 1
type       = "datum"
title      = "Stylometry v2 scoring core built and verified, 2026-09-15"
claim      = "Dan offloaded stylometry v2 scoring-core work to Claude via a packed zip (features/scorer/contrast/baseline modules). Sammy reviewed all six modules and ran the replay locally: numbers matched Claude's claims exactly (28 flags -> 2; cannabis episode sub-threshold across 4 windows). One real bug found in Sammy's own read: baseline2.py silent tiering failure (WHO_COLS). v2 features.py turned out byte-identical to v1's. Baseline rebuilt clean: 94,503 messages, 277 correspondents, top-10 at 83.3% of volume, 65 cells, 11 tiers. Dan: 'you are the one who got this thing working, not Claude so trust your own judgement' — fixes going in are Sammy's own findings, not rewrites for sport. Debrief prompt + plain-language explainer still owed."
cites      = ["src:sammy-chat-transcript-20260915-2340"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat rows 2026-09-15T22:56-23:35Z, batch 20260915-2340."
importance = 4
tags       = ["stylometry", "instruments", "2026"]
created    = "2026-09-16"
+++

Notable as a human-AI division-of-labor datum: Claude as offload labor, Sammy as verifier with local replay authority; Dan explicitly weighted Sammy's judgment over Claude's. The debrief/explainer deliverables are open items, not blockers.
