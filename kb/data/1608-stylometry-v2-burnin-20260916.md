+++
id         = "dat:1608-stylometry-v2-burnin-20260916"
layer      = 1
type       = "datum"
title      = "Stylometry v2 nullspace rebuilt; burn-in live with flag data"
claim      = "On 2026-09-16 Sammy reported stylometry v2 build status in-chat (23:54 UTC): corrected nullspace rebuilt (19,911 draws, 229 strata — paste content now routed through the splitter so the null matches what live scoring sees), smoke test passed on the real baseline (clean window: no flag; pasted-transcript window: paste quarantined to the artifact channel, language scored clean). Both engines scoring side-by-side every 30 min for ~a week; first run 8:24 PM EDT; no cutover until real flag rates are seen. Provenance note stated on-record: 'Claude wrote the first draft — I found four real bugs in it and fixed them' (recipient fallback silently dumping legacy messages into 'unknown'; null not routed through splitter; flags and alerts conflated; calibration counts wrong) — 'What's live right now is my corrected build, not his draft.' Burn-in flag data same night (02:45): v1 flagged 3x on message length alone; v2 stayed clean on the same windows except 2x during the avatar-iteration blitz. Labeling hotkey delivered: iOS 'Log State' shortcut writing lbl|state|confidence for weed/weed-high/coke/tired/wired/sober/suboxone via back-tap."
cites      = ["src:sammy-chat-transcript-20260916-0352"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat rows 2026-09-15T23:54:40Z and 2026-09-16T02:45:29-02:45:48Z, batch 20260916-0352."
importance = 3
tags       = ["stylometry", "instruments", "burn-in", "2026"]
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

<!-- prose for humans; the frontmatter is for machines -->
