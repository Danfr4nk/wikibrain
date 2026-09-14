+++
id          = "src:messenger-drive-2026-09-12"
layer       = 0
type        = "source"
title       = "Facebook Messenger + Instagram DMs + TikTok DMs (Google Drive archives, ingested 2026-09-12)"
source_type = "document"
acquired    = "2026-09-12"
provenance  = "Google Drive folders: 'messages' (1TNc8NARvk2KPHzel4fYvG5cO-9tbnl_m, modified 2026-09-08; three more folder IDs hold byte-identical duplicate generations, parsed once) = Facebook Messenger DYI export generated 2022-09-05, 403 Google-Doc thread conversions; 'messages' (1NcOaRFOW3teWjUgYidhrwkjCuvDP8Oye, modified 2025-08-24) = Instagram DMs DYI export, native message_1.json, 107 inbox + 67 message requests; 'Direct Messages' (modified 2022-11-27) = TikTok DM text archive, 6 threads. Downloaded via hatch_gws_cli, Google Docs converted to text, parsed, deduped on (participant-set key, timestamp, sender, text). Companion CLI pull (11 msgs, Aug 2026) appended as extension with no overlap."
reliability = "primary"
location    = "raw/messenger-drive-2026-09-12/"
confidence  = "high"
importance  = 4
created     = "2026-09-12"
tags        = ["messenger", "facebook", "instagram", "tiktok", "messages", "raw-data"]
+++

## Contents

| Source | Platform | Records | Threads | Coverage |
|---|---|---|---|---|
| gdrive-fb-20220905 | Facebook Messenger | 15,741 | 282 | 2007-01-16 -> 2022-09-04 |
| gdrive-fb-20250824 | Instagram DMs | 11,678 | 127 | 2016-05-30 -> 2025-08-09 |
| gdrive-tiktok-dm-20221127 | TikTok DMs | 143 | 6 | 2021-08-19 -> 2022-11-24 |
| companion-cli-2026-09-12 | Facebook Messenger | 11 | 2 | 2026-08-14 -> 2026-08-26 |

Total: 27,573 unique records, 331 threads, 2007-01-16T11:49:07Z -> 2026-08-26T22:23:43Z.
Canonical JSONL: `raw/messenger-drive-2026-09-12/messenger_drive_canonical.jsonl`; thread index: `threads.json`; manifest: `MANIFEST.json`; excerpts: `notable-excerpts.md`.

Supersedes the "Messenger is not a substantive channel" negative finding in src:messenger-2026-09-12 - that conclusion rested on the broken 2-thread CLI sync. Messenger/IG DMs are a 27k-message channel, just not Dan's primary one (iMessage remains larger).
