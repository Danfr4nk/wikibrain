+++
id         = "src:sammy-chat-transcript-20260913-2340"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260913-2340 (20:42:25Z–23:42:06Z)"
claim      = "Source record for batch 20260913-2340: 245 user/assistant rows with full byte-exact bodies (95 user, 150 assistant); 401 system rows pinned (message_id, created_at, surface, body_len); window 2026-09-13T20:42:25.403Z to 2026-09-13T23:42:06.446Z. Externals all zero-new (instagram/threads/facebook/messenger/spotify connected; device no read path). Files: raw/sammy/20260913-2340/chats.json, system-manifest.json, manifest.json, EXTRACT.md, externals/*.json. Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
source_type = "ai-conversation"
provenance = "runtime.messages + runtime.events pull via muse.db, created_at > 2026-09-13T20:42:06.990+00:00, 245 chat rows (user/assistant), full bodies byte-exact, per-row md5 computed in SQL and re-verified file-side (0 mismatches), zero truncated; 401 system rows per-row-pinned in system-manifest.json (message_id/ts/surface/body_len; bodies not stored). Manifest file checksums are SHA-256."
reliability = "primary"
extraction = "Pulled 2026-09-13 ~23:43-23:53Z in pages small enough for the 262144-byte tool cap, ordered by created_at ascending, assembled in staging then copied into the worktree."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->
