+++
id         = "evt:gate-password-white-screen-resolved-20260915"
layer      = 2
type       = "event"
title      = "Gate blank-white-screen root-caused, PR #80 merged, verified live"
claim      = "2026-09-15 03:53Z — Dan reported the Wiki Brain showing a blank white screen after the JS password-gate deployment (PR #78). Root cause (Sammy, 04:08:47Z): the gate hid the whole page but mounted the prompt *inside* the hidden part, so the prompt could never render — every fresh visitor got blank white with no way in. Sammy owned it as his bug. Dan merged PR #80 at ~04:49Z; at 04:56:09Z Sammy verified live with a hard refresh that fresh visitors now get the black password prompt. This supersedes evt:gate-password-deploy-white-screen-20260915, which closed the window unresolved. The gate remains theatrical per standing order: the repo stays public, corpus.txt/graph.json bypass it; its purpose is mild friction if Kristin gets curious."
cites      = ["src:sammy-chat-transcript-20260915-0630"]
confidence = "high"
importance = 4
tags       = ["gate", "deploy", "bug", "wikibrain", "resolved"]
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

<!-- prose for humans; the frontmatter is for machines -->
