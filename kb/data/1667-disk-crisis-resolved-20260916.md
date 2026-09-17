+++
id         = "dat:1667-disk-crisis-resolved-20260916"
layer      = 1
type       = "datum"
title      = "VM disk crisis resolved 97% to 35% after zip verification sweep"
claim      = "Dan's VM hit 97-100% disk (100G). A verification sweep checked the four big zips against the RAWLOGS repo before any deletion: the 2.1G backfill zip is a zipball of a commit that's an ancestor of main; the 1.4G ig3 Instagram bundle and two takeout zips (2.1G + 850MB) are byte-identical to files in staging — safe as long as staging stays. Dan said 'Just the zips' then 'dump whatever you can.' Result: 97% to 35%, 65G free — 31 stale worktrees (~50G), 4 verified zips + 3 orphan dirs (~9G), trash emptied. Deliberately kept: rawlogs-sweep/staging (9.1G, the deleted zips' contents only exist there) and browser_downloads videos. Open gap: 971 ig3 Instagram files never made it to RAWLOGS (that push died with GitHub 500s)."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 3
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

<!-- prose for humans; the frontmatter is for machines -->
