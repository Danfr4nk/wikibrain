+++
id         = "evt:musictrainer-iteration-fixes-20260915"
layer      = 2
type       = "event"
title      = "MusicTrainer iteration: embed-ID fix, lock banner, active-learning inversion"
claim      = "2026-09-14 (0349 scrape window): three MusicTrainer iterations not covered in the 0340 writeback's week-1 section. (1) 20:34Z — the Spotify embeds rendered as blank boxes; Sammy had pasted the full URL instead of the 22-character track ID; fix confirmed '10/10'. (2) 20:36Z — Dan requested the predictions lock as a banner on the scoring page itself (visibility at decision time, not just the predictions page); the banner's deploy caused the 22:30:46Z blank-page crash (it called a nonexistent date helper) — fixed in-thread, Dan confirmed 'Now we're working. Great work' at 22:48:23Z. (The 0340 writeback's blank-page account — wrong time, wrong cause, 'unresolved' — is corrected in wiki/work/tech/projects/musictrainer-autopsy.md against the transcript.) (3) 22:53–23:34Z — the active-learning inversion: Dan recognized the system can generate playlists specifically to discriminate among hypotheses ('probe the weirdest stuff' to find the keep|like boundary); Sammy proposed AUTOPSY's KILL ONE ablation as the research instrument that learns from his play data — he said 'Exactly.' His diagnostic, 21:47Z: 'the like button is the weakest point in the ladder' — the keep|like boundary is where the model must concentrate."
cites      = ["src:sammy-chat-transcript-20260915-0349"]
confidence = "high"
importance = 3
tags       = ["musictrainer", "autopsy", "music", "instrument", "debugging", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

The iteration pattern is the finding, not the bugfixes: he treats the instrument as a living probe, breaks it by using it, names the load-bearing UI element (ADDED? over the score — see the 0340 writeback), and then inverts the instrument — from measuring his taste to manufacturing the stimuli that would teach the model his taste. The question became the instrument within one evening. The blank-page correction matters because the wiki had the wrong cause on record; the transcript is the arbiter.
