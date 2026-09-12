+++
id          = "src:messenger-2026-09-12"
layer       = 0
type        = "source"
title       = "Facebook Messenger pull (Companion API, 2026-09-12)"
source_type = "document"
acquired    = "2026-09-12"
provenance  = "Pulled via hatch_messenger_cli (Messenger Companion, fb user id 580995252, connected). sync both, sync threads --older 3650, then full message pull per thread. Full thread list returns exactly 2 threads; search for known contacts (Annie, Tom, Alexis) returns 0 hits. Raw per-thread JSON in raw/messenger-2026-09-12/threads/ plus parsed messenger-all.jsonl and MANIFEST.json."
reliability = "primary"
location    = "raw/messenger-2026-09-12/"
confidence  = "high"
importance  = 2
created     = "2026-09-12"
tags        = ["messenger", "facebook", "messages", "raw-data"]
+++

## Contents

| Thread | Folder | Messages | Coverage |
|---|---|---|---|
| Ryan Lisac | INBOX | 6 | 2026-08-14 -> 2026-08-17 |
| Kristin Shaelene | PENDING (message request) | 5 | 2026-08-26 |

Total: 2 threads, 11 messages, 2026-08-14T02:50:52Z -> 2026-08-26T22:23:43Z.

Negative finding: Messenger is not a substantive channel for Dan. The 2026-09-08 Facebook export contained posts only (no messages/ directory); the iMessage corpus (192,140 messages, Mar 2011-Sep 2026) is where his messaging life lives. Do not treat Messenger silence as relationship silence.
