+++
id         = "dat:1683-ig-push-completion-20260917"
layer      = 1
type       = "datum"
title      = "IG 971 push completed 965/971; blob-GC root cause; 6-holdout chunk order"
claim      = "2026-09-17: the 971-file Instagram push to Danfr4nk/RAWLOGS completed at 965/971, byte-verified with zero mismatches. Root cause of the earlier 500s: not rate-limiting — GitHub garbage-collects unreferenced blobs within minutes, so the fix was 10-file batches with no delay between upload and commit (AGENTS.md Git Data API lessons). The 6 holdouts are 48-80MB IGTV videos exceeding the API's practical ~47MB blob ceiling; the web route died on GitHub's 25MB browser cap (login + device-code flow worked, repo untouched). Dan's order 04:19:22Z: 'Chunk them and push via the API.' Practical ceiling ~47MB raw (~64MB base64) documented."
cites      = ["src:1681"]
confidence = "high"
extraction = "Main chat 2026-09-17 04:13:59Z completion report; 04:18:54Z web-route dead-end; 04:19:22Z chunk order."
perspective = "self"
importance = 4
tags       = ["github", "rawlogs", "ig-push"]
created    = "2026-09-17"

[when]
date   = "2026-09-17"
+++

<!-- prose for humans; the frontmatter is for machines -->
