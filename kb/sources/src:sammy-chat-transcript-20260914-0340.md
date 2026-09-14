+++
id         = "src:sammy-chat-transcript-20260914-0340"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260914-0340 (23:42:06Z–03:46:14Z)"
claim      = "Source record for batch 20260914-0340: 240 user/assistant rows (100 user / 140 assistant), byte-exact bodies, per-row md5-verified SQL-side and file-side (240/240, 0 mismatches, 0 truncated). Window 2026-09-13T23:51:17.935Z–2026-09-14T03:46:14.291Z, all surface=main_chat. System-role rows NOT archived this run: 4 muse.db attempts on role='system' timed out (statement timeout); logged as a gap for retry. Externals: instagram 1 NEW item (story, video, post_id 17976118472922462, 2026-09-13 ~18:05 local per posts listing / 21:05:11-04:00 per story expiry — tz discrepancy recorded, 43 viewers); threads/facebook/messenger zero new; spotify now-playing UNCHANGED (don't need u (i do) / blunn / progress_ms 1494 / PAUSED); device no read path. Files: raw/sammy/20260914-0340/chats.json, manifest.json, EXTRACT.md, externals/*.json. Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
source_type = "other"
provenance = "runtime.messages + runtime.events pull via muse.db, 2026-09-13T23:42:06.446Z..2026-09-14T03:46:14Z, keyset-paginated (200+40), full bodies, per-row md5 SQL-side verified file-side 240/240"
reliability = "primary"
extraction = "Pulled 2026-09-14 ~03:44Z. Chat rows: two muse.db pages (ORDER BY created_at, keyset on (created_at,event_seq)); system-pin pull failed 4x on statement timeout — see gaps in manifest.json."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
