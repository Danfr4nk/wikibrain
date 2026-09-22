+++
id         = "dat:1860-telegram-inbox-watch-killed-20260921"
layer      = 1
type       = "datum"
title      = "Dan killed the telegram-inbox-watch cron, 2026-09-21"
claim      = "On 2026-09-21 at 14:26 UTC (10:26 EDT), Dan ordered the telegram-inbox-watch cron killed: 'Let's kill telegram-inbox-watch' / 'We don't need that anymore'. Context: the same morning's token check showed telegram-inbox-watch as the heaviest single consumer (4.6M of 6.0M tokens in the 7:05-8:05am window). The Telegram bot token he pasted earlier remains unrotated (rotation still pending him as of this run) — the watcher is dead but the secret it used is still live."
cites      = ["src:20260921-2340-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Dan 14:26:xxZ main chat: 'Let's kill telegram-inbox-watch' / 'We don't need that anymore' / 'Yup' / 'Done'. Token check 12:07Z: 'Heaviest: telegram-inbox-watch (4.6M), then heartbeat (560k).'"
importance = 3
tags       = ["cron", "telegram", "tokens", "2026-09"]
created    = "2026-09-21"

[when]
date   = "2026-09-21"
+++

<!-- prose for humans; the frontmatter is for machines -->
