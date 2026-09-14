+++
id         = "src:sammy-chat-transcript-20260913-2041"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260913-2041 (19:56:50Z–20:42:07Z)"
claim      = "Source record for batch 20260913-2041: 59 user/assistant rows with full byte-exact bodies (17 user, 42 assistant); 73 system rows pinned (message_id, created_at, surface, body_len); window 2026-09-13T19:56:50.395Z to 2026-09-13T20:42:06.99Z. Externals all zero-new (instagram/threads/facebook/messenger connected, spotify connected; device no read path). Files: raw/sammy/20260913-2041/chats.json, system-manifest.json, manifest.json, EXTRACT.md, externals/*.json. Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
source_type = "ai-conversation"
provenance = "runtime.messages + runtime.events pull, 2026-09-13T19:56:50.395Z..2026-09-13T20:42:06.99Z, 59 chat rows (user/assistant), full bodies byte-exact (all <= 6000 chars, taken directly from muse.db excerpts, body_len cross-checked), 73 system rows per-row-pinned in system-manifest.json (message_id/ts/surface/body_len; bodies not stored). Correction 2026-09-13 ~21:05Z: two browser-task tombstone rows (20:33:24.430Z, 20:38:09.412Z, 'Search for petitecpl18 videos') verified role=assistant in runtime.messages and moved from system pins into chats.json; counts corrected from 57/40/75 to 59/42/73. Manifest file checksums are SHA-256."
reliability = "primary"
extraction = "Pulled 2026-09-13 ~20:44Z via muse.db in three pages (sliver 19:56-20:00Z, window 20:00-20:45Z, tail 20:29Z+), deduped by message_id. All 57 user/assistant bodies complete (zero truncation). System rows kept as pins only."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->
