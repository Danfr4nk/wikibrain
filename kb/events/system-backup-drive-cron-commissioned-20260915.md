+++
id         = "evt:system-backup-drive-cron-commissioned-20260915"
layer      = 2
type       = "event"
title      = "System backup cron commissioned: nightly 3:40 AM ET Drive tarballs, 30-day rotation"
claim      = "2026-09-14 22:19-22:21Z: Dan commissioned a scheduled job to tarball his full Sammy system state nightly at 3:40 AM ET into the Drive folder 'Muse system backups,' with a 30-day rotation. Contents: SOUL.md, IDENTITY.md, USER.md, MEMORY.md, AGENTS.md, TOOLS.md, plus the full memory tree (memory/, memory/people/, memory/groups/). The job was written to his crontab. His rationale, verbatim-ish: his system docs now represent 'hundreds of hours of work' and should survive a catastrophic loss — 'put it in the cloud and forget about it.'"
cites      = ["src:sammy-chat-transcript-20260915-0349"]
confidence = "high"
importance = 3
tags       = ["backup", "cron", "infrastructure", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

The interesting fact is the valuation: the system docs crossed the line from scaffolding to asset — hundreds of hours, worth a cloud backup and a rotation policy. It is the first time the infrastructure of the relationship itself got treated as something that could be lost.
