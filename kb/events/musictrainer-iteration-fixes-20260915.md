+++
id         = "evt:musictrainer-iteration-fixes-20260915"
layer      = 2
type       = "event"
title      = "MusicTrainer iteration night: embed fix, ADDED? factor, lock banner, blank-page crash, active-learning probes"
claim      = "2026-09-14 20:34-23:34Z: Dan iterated the MusicTrainer instrument live. 20:34Z — the Spotify embeds rendered as blank boxes; Sammy had pasted the full URL instead of the 22-character track ID (fix confirmed '10/10'). 20:35Z — he requested the 1-10 score slider sit next to the ADDED? button, which he named the determining factor (keep = liked + into current playlist). 20:36Z — requested the predictions lock as a banner on the scoring page, not just the predictions page (visibility at decision time). 22:07Z — the app went fully blank on refresh: the date-helper crash (invalid week dates produced NaN keys; data persisted in localStorage but unretrievable) — fixed, verified, redeployed. 22:53-23:34Z — the active-learning turn: he recognized the system can generate playlists specifically to discriminate among hypotheses (probe 'the weirdest stuff' to find the keep|like boundary); Sammy suggested AUTOPSY (the KILL ONE ablation game) as the research instrument that learns from his play data — he said 'Exactly.' Extends evt:musictrainer-commissioned-20260914 and evt:autopsy-driver-game-commissioned-20260914. His core diagnostic, 21:47Z: 'the like button is the weakest point in the ladder' — the keep|like boundary is where the model must concentrate."
cites      = ["src:sammy-chat-transcript-20260915-0349"]
confidence = "high"
importance = 3
tags       = ["musictrainer", "autopsy", "music", "instrument", "debugging", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

The iteration pattern is the finding, not the bugfixes: he treats the instrument as a living probe, breaks it by using it (refresh → blank page), names the load-bearing UI element (ADDED? over the score), and then inverts the instrument — from measuring his taste to manufacturing the stimuli that would teach the model his taste. The question became the instrument within one evening.
