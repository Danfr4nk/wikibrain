+++
id         = "dat:1707-musictrainer-cumulative-target-90-accuracy-over-240-decision"
layer      = 1
type       = "datum"
title      = "MusicTrainer cumulative target: 90% accuracy over 240 decisions, 85% keep recall"
claim      = "MusicTrainer's shipped scoreboard defines the falsifiable target as: >=90% per-track accuracy over >=240 cumulative decisions, plus >=85% recall on keeps (TARGET_DECISIONS = 240 in ~/workspace/musictrainer/js/app.js; UI target-note: 'Target: >=90% per-track accuracy over >=240 decisions, plus >=85% recall on keeps'). The cumulative panel tracks progress toward 240 decisions. The keep-recall floor matters because accuracy alone is gameable on a low base keep rate — the 90% project must predict the keeps, not just the drops. Commissioning stated the headline goal (predict Discover Weekly keeps at 90%); the shipped app operationalizes it as this three-part target."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
reliability = "primary"
extraction = "90% headline goal from the commissioning exchange in src:sammy-chat-transcript-20260914-1940; the 240-decision floor and >=85% keep-recall component read directly from the shipped app source ~/workspace/musictrainer/js/app.js (const TARGET_DECISIONS = 240; target-note string). A stricter operationalization than the in-chat headline."
importance = 3
tags       = ["musictrainer", "music", "prediction", "instrument", "target"]
created    = "2026-09-17"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
