+++
id         = "dat:1832-musictrainer-week-1-scorecard-result-20260920"
layer      = 1
type       = "datum"
title      = "MusicTrainer week-1 scorecard result: acc 0.633, precision 0, recall 0"
claim      = "MusicTrainer's week-1 taste-model scorecard (Discover Weekly Sep 14 2026, scored 2026-09-20): 19/30 correct (accuracy 0.633), precision 0, recall 0. All 8 locked KEEP predictions were wrong (Damaio, Double Dutch, Break Up Song, Six Shooter, Combat Mode, One Drink, Diamonds, REMEDY — REMEDY was the model's highest-confidence keep at p=0.39). The 3 actual keeps — Bad Habit (Jai Wolf, SAYAK DAS), Energy (Flava D, Stush), Untouchable (Cymek) — were all missed; the model carried no audio features on them (blind-fallback group). 5 more tracks were liked-but-not-added (atmosphere, Dreaming, OPAL, Janice STFU - Dubstep, Break Up Song — like without playlist add). Keep-label caveat: labels assume the current crate is FUNDAMENTAL FLAW, unconfirmed by Dan."
cites      = ["src:20260920-1830-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Machine-readable week-1 labels at raw/sammy/20260920-dw-week1-labels/dw_20260914_labels.json (30 rows, byte-exact in-repo; predicted_keep/actual_keep/correct/liked/playlist_added per row; 19 correct rows counted from JSON). In-chat scorecard delivery (assistant-msg-f63a251a, 13:13 EDT 2026-09-20) carried the same headline numbers, delivered into the 1830 batch's transcript. Cross-validated: JSON count 19/30 == 0.6333; all 8 predicted_keep rows actual_keep=false; all 3 actual_keep rows predicted_keep=false. This node is the machine-readable result of the week-1 complete log on wiki/work/tech/projects/musictrainer-autopsy.md."
importance = 3
tags       = ["musictrainer", "music", "prediction", "instrument", "week1"]
created    = "2026-09-20"

[when]
date   = "2026-09-20"
+++

<!-- prose for humans; the frontmatter is for machines -->
