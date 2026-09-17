+++
id         = "dat:1706-musictrainer-week-1-seed-30-dw-tracks-with-8-locked-keep-pre"
layer      = 1
type       = "datum"
title      = "MusicTrainer week-1 seed: 30 DW tracks with 8 locked keep-predictions"
claim      = "MusicTrainer's shipped seed (window.SEED_WEEK, dw-2026-09-14, predictionsLocked=true, lockedAt 2026-09-14T17:52:00-04:00) preloads all 30 Discover Weekly tracks of Sep 14 2026 with per-track locked predictions (predicted_keep boolean + p_keep). Eight KEEP predictions: Damaio (En:vy, 0.284), Double Dutch (Keys N Krates, 0.313), Break Up Song (Flozone, 0.26), Six Shooter (SNBRN, 0.304), Combat Mode (Mushroom Cloud, MontyCler, 0.26), One Drink (DLMT, 0.28), Diamonds (Malaa, 0.281), REMEDY (spüke, 0.39). Twenty-two DROP predictions, p_keep 0.219 for most, 0.198 for Rusko/Bassnectar 'High - Bassnectar Remix', 0.09 'The Box' (MEDIKAL), 0.093 'Flow' (Nitepunk), 0.038 'Rain' (Papa Khan). REMEDY's 0.39 is the model's highest-confidence keep; 'Rain' at 0.038 is the highest-confidence drop. All 30 start unscored; week-1 scoring reminder armed for 2026-09-20."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
reliability = "primary"
extraction = "In-chat lock event (17:54 EDT, 8 baseline keep-predictions locked and timestamped) from src:sammy-chat-transcript-20260914-1940; the 30-row table with per-track predicted_keep/p_keep read directly from the held shipped artifact ~/workspace/musictrainer/js/seed.js (regex-extracted, 30/30 blocks, verified against the seed's lockedAt). This node is the machine-readable seed of the week-1 complete log on wiki/work/tech/projects/musictrainer-autopsy."
importance = 3
tags       = ["musictrainer", "music", "prediction", "instrument", "week1"]
created    = "2026-09-17"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
