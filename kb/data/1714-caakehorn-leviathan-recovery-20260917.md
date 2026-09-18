+++
id         = "dat:1714-caakehorn-leviathan-recovery-20260917"
layer      = 1
type       = "datum"
title      = "Caakehorn/leviathan recovery findings and Drive quota diagnosis, 2026-09-17"
claim      = "leviathan zips are deleted-repo snapshots with git history (81 commits); the /Users/Suzanne/wiki project clone holds the only caakehorn-era wiki history; Drive is at 100% (2.199TB) and takeout exports did not cause it; the zip-to-Drive-to-branch recovery is agreed but not yet executed."
cites      = ["src:sammy-chat-transcript-20260917-2030"]
confidence = "moderate"
importance = 4
tags       = ["caakehorn", "leviathan", "recovery", "google-drive"]
created    = "2026-09-18"

[when]
date   = "2026-09-17"
+++

2026-09-17 16:41–16:54 EDT, main chat. Caakehorn/leviathan recovery findings:

- leviathan_0_r2ka.zip / leviathan_1_j344.zip = deleted caakehorn/leviathan repo snapshots WITH git history (81 commits, Jul 29–30).
- Splash <galaxy-cluster> WebGL2 particle engine (~50k GPU particles); no supernova in the code.
- The wikibrain caakehorn-era clone at /Users/Suzanne/wiki project: 7,505 files, 976MB, mid-July 2026 working copy. The current Danfr4nk/wikibrain history starts 2026-09-10 (September rebuild dropped everything before), so the clone holds the only caakehorn-era history — unless the Aug 18 bundle ever landed, which it hadn't at last check.
- The clone's working tree has uncommitted changes (CLAUDE.md, index.md, a deleted log-archive file) with (failed-wiki-project)-prefixed untracked copies — someone marked the old project as failed and walked away.

Plan agreed in-chat: Dan zips the clone → uploads to Google Drive → Sammy pulls it down → full diff (wiki pages, inbox, raw) → push the history to a branch (e.g. history/caakehorn-era).

Blocker surfaced 16:54–16:56: his Google Drive is at exactly 100% — 2.199TB used of 2.199TB. Breakdown: Takeout folder 3.3GB; "My MacBook Pro" tree 1.79TB; XXX/MEDIA trees ~980GB combined; ~1TB in Photos + Gmail. The takeout exports did NOT cause the quota (a rounding error at ~3.1TB scale); the ~1TB in Photos is the blind spot — likely iPhone auto-sync to Google Photos. He asked "was it those account exports that took me over" / "that took me from 95% full to 100%" — the numbers say no: 2.4GB doesn't move the needle 5%.

STATUS AT WINDOW END: NOT YET EXECUTED. The zip → Drive → pull-down → diff → branch push is still open. Dan was told to clear ~1GB before the upload will go through.
