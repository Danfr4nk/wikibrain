# EXTRACT.md — batch 20260915-0630

**Batch:** `20260915-0630` — Sammy–Dan chat transcript, window
2026-09-15T03:50:26.638Z → 2026-09-15T06:26:11Z (cutoff).

**What this is:** the canonical raw archive for the heartbeat run of
2026-09-15 06:30 EDT. All 237 message rows (104 user, 133 assistant)
pulled from the live conversation database (`muse.db`,
`runtime.messages` joined with `runtime.events`), roles `user`/`assistant`
only, surface `main_chat`/`subagent`. Byte-exact bodies; 0 missing, 0
truncated, 0 duplicates.

**How it was extracted:**

1. Two bounded `SELECT` queries against `muse.db`, filtered on
   `created_at > '2026-09-15T03:50:26.638Z'` (the local watermark written
   after batch 20260915-0340) through the cutoff `2026-09-15T06:26:11Z`.
   Deduplicated on `message_id`. Query result snapshots:
   - `~/workspace/agents/5739e01f-8bfc-48b8-b880-2da0d003e648/tool-output/db-call_01a0a3da6f017141bf3d2b21365c44ae.json`
   - `~/workspace/agents/5739e01f-8bfc-48b8-b880-2da0d003e648/tool-output/db-call_01a0a3da7cf27461b8484931a75c1a8d.json`
2. `~/workspace/wiki-sync/staging/20260915-0630/build-batch.py` assembled
   `chats.json` + `manifest.json`. No manual transcription.

**Deliberately discarded:** earlier manual staging files
`rows.jsonl`, `rows-fixed.jsonl`, `rows-all.jsonl` in the same staging
directory are noncanonical drafts and were NOT used. The canonical record
is the database pull above.

**The 0349 discrepancy (self-prosecuted, corrected on audit):** at
2026-09-15T05:16:15Z an assistant claimed batch `20260915-0349` had landed
in both repos with three new rows. The RAWLOGS audit on 2026-09-15 found the
real story: batch `20260915-0349` WAS extracted (pulled 2026-09-15T04:13:36Z:
563 rows, window 2026-09-14T19:40:34Z → 2026-09-15T03:50:26.638Z) and mirrored
to RAWLOGS main, but was never committed to wikibrain's `origin/main` or the
shared clone. The "both repos" claim was false. No transcript was lost:
0349's window overlaps the 0340 heartbeat window, and this batch continues
from the 0340 watermark. Remediation in this run: the RAWLOGS batch was
mirrored back into wikibrain as `raw/sammy/20260915-0349/` (EXTRACT.md,
chats.json, manifest.json — byte-identical; chats.json SHA-256 matches the
manifest record `4181504e...`). Event node
`kb/events/sammy-avatar-chronology-20260915-correction.md` and the
self-prosecution pattern node record the episode.

**File manifest:**

- `chats.json` — 118,296 bytes, SHA-256
  `f3be9b9819712954aea8f3283b4aaa5b3627f6272af5b31ad954ceadfcbef96d`
- `manifest.json` — counts, window, provenance, the 0349 note
- `EXTRACT.md` — this file

**KB evidence:** `kb/sources/src:sammy-chat-transcript-20260915-0630.md`;
event nodes `kb/events/*-20260915.md` cite it as the single source.
