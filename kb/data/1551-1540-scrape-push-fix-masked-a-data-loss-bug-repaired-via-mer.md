+++
id         = "dat:1551-1540-scrape-push-fix-masked-a-data-loss-bug-repaired-via-mer"
layer      = 1
type       = "datum"
title      = "1540 scrape push fix masked a data-loss bug; repaired via merge commit 456f68e (2026-09-14)"
claim      = "2026-09-14 16:02Z (1540 scrape delivery): the scrape worker's push fix masked a data-loss bug — its branch was missing the heartbeat's 20260914-1230 batch, and merging it straight would have deleted that batch from main. Caught before push; repaired with a merge commit (parents [branch-tip, main-tip], tree = main's tree + the new batch); main at 456f68e with both batches intact; PR #68 closed. Operational lesson (recorded in AGENTS.md): scrape workers must merge origin/main into sammy/wiki-sync before pushing; the 6h heartbeat commits raw batches directly to main so the branch chronically trails; rebase is wrong here (it replays the deletion)."
cites      = ["src:sammy-chat-transcript-20260914-1830"]
confidence = "high"
provenance = "assistant delivery report 2026-09-14T16:02:15Z; byte-exact in raw/sammy/20260914-1830/chats.json; commit 456f68e verifiable in git history"
reliability = "primary"
perspective = "llm"
importance = 3
tags       = ["scrape", "pipeline", "merge"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
