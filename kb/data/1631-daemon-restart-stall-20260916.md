+++
id         = "dat:1631-daemon-restart-stall-20260916"
layer      = 1
type       = "datum"
title      = "Agent daemon restart killed heartbeat workers 2026-09-16"
claim      = "Per main-agent context messages in-chat 2026-09-16 (~06:31 and 06:35 UTC): the agent daemon restarted ~02:34 EDT, killing five consecutive 6h-heartbeat workers mid-run. The heartbeat was re-queued on the restarted daemon. Watch whether the re-queued run completes — five consecutive kills is the stall signature to monitor."
cites      = ["src:1624-sammy-chat-transcript-20260916-0740"]
confidence = "moderate"
importance = 3
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

<!-- prose for humans; the frontmatter is for machines -->
