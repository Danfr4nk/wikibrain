# EXTRACT.md — batch 20260915-1940

Raw archive of the 2026-09-15 19:40 EDT wiki-brain-scrape run — REMAINDER batch.
The 6h heartbeat already archived 2026-09-15T15:47:36.676+00:00 →
2026-09-15T18:34:43.509+00:00 as batch 20260915-1834 (165 rows, on main);
this batch covers only the unarchived remainder.
Watermark window: 2026-09-15T18:34:43.509+00:00 → 2026-09-15T19:52:18.802+00:00.
124 on-record user/assistant rows, main chat only. Side chat
24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 excluded entirely per Dan's 2026-09-15
total writeback exclusion; event-root mapping verified zero rows map to it.
No truncation; bodies complete. Deterministic (created_at, message_id) order.

## What this batch owes (analysis)

- [x] Archive raw transcript (chats.json)
- [x] KB datums + source node: dat:1592–1596 + src:sammy-chat-transcript-20260915-1940 (2026-09-15 20:0x UTC, batch agent)
- [x] connector hits: instagram 1 new item (own story 09:30:15Z, gap capture, expires 09-16) recorded in external.json + instagram.json; spotify snapshot unchanged (spotify.json); threads/fb/messenger zero new; gmail untouched; device no read path
- [ ] OPEN: Annie-thread side chat created 19:42:15Z has no rows inside this
      window (its rows, if any, land in a later batch — verify it was not
      ingested by the 6h heartbeat under a different batch name)
- [x] personality-instrument synthesis (19:18–19:20Z) → dat:1592 + dated hub
      note in wiki/mind/profile/index.md; no duplication (deduped against hub)
- [x] DJ-competence editorial: DJ rows are 16:43–17:45Z — inside batch
      20260915-1834's window, covered by dat:1584 on main; not this batch's work
- [x] in-person Annie contact (18:50Z) → dat:1593 + kb/entities/annie-ulmer.md
      section (verified: post-dates 1834's 18:34:43.509Z cutoff)
- [x] deployed-web-tool expectation (17:48–18:34Z kinship thread): inside
      1834's window, covered by dat:1580/dat:1581 on main

## Completion record (appended, never rewritten)

- 2026-09-15 20:17 UTC: raw staging rebuilt
  as remainder batch (chats.json 124 rows, external.json zero-hit, manifest.json,
  EXTRACT.md); awaiting kb agent, connectors agent, commit/push, RAWLOGS mirror.
- 2026-09-15 20:25 UTC: external.json folded connector hits (instagram story
  gap-capture 2026-09-15T09:30:15Z + spotify snapshot note); manifest.json
  recomputed with real sha256 for chats.json, external.json, instagram.json,
  spotify.json, EXTRACT.md. KB: dat:1592–1596 + source node created; prose in
  kb/entities/dan.md, kb/entities/annie-ulmer.md, wiki/mind/profile/index.md.
