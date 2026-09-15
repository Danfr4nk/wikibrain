# EXTRACT — batch 20260915-1140 (raw archive only)

Run: 2026-09-15T12:16:10Z (finishing run).

## Effective archived window

2026-09-15T08:10:04.727Z (on-record reboot) → 2026-09-15T11:40:00+00:00.
421 rows: 210 system / 96 user / 115 assistant. All `truncated: false`.
First row: 2026-09-15T08:10:04.727+00:00 (the on-record reboot marker itself — Dan's 08:10:04.727Z turn, included per his boundary statement). Last row: 2026-09-15T11:37:38.346+00:00.
Next watermark: 2026-09-15T11:37:38.346+00:00.

## Excluded interval (content-free record)

2026-09-15T07:41:10.973+00:00 → 2026-09-15T08:10:04.727+00:00 — 42 rows
(19 system / 11 user / 12 assistant). No bodies, IDs, or summaries recorded.
Reason: user order 2026-09-15T08:09:41Z — nothing before the on-the-record
reboot is transmitted in the cron job; interval recorded without content.
Root request 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 fully excluded, as are all
IDs matching browser-task-tombstone%.

## Chunk / reassembly method

78 oversized system rows split into 20 groups (19×4, 1×2) and extracted in
60000-char chunks at offsets 1, 60001, 120001, 180001 per Dan's explicit
requirement (all 20 groups queried at all four offsets, including empty
trailing chunks). 80 chunk files staged at
~/workspace/wiki-sync/staging/20260915-1140/chunk_g{0..19}_off{1,60001,120001,180001}.json.
Only 2 of 78 bodies exceeded 180000 bytes (max 190,832), so only 2 rows had
non-empty offset-180001 chunks; the rest were verified empty via blen ≤ 180000.
Bodies reassembled as chunk(1)+chunk(60001)+chunk(120001)+chunk(180001).

## Byte-verification results

- 78/78 oversized bodies: len(body.encode("utf-8")) == blen. Zero mismatches,
  zero retries needed.
- 343/343 ordinary bodies (211 user/assistant + 132 ordinary system):
  byte-verified, zero mismatches. The reboot marker row (39 bytes) was fetched directly from the DB and verified.
- chats.json validated: 421 rows, 421 unique IDs, strict chronological order,
  nothing before the reboot marker, no forbidden root, no tombstones,
  chat_kind "direct" on all rows, surfaces 408 main_chat + 13 subagent.

## Notes

KB synthesis (coordinator): 17 nodes added (1 src, 13 datums dat:1563–1575, 2 patterns, 1 interpretation), dan.md + annie-ulmer.md extended. Wiki prose edits deferred per his 2026-09-15 sequencing order (rewrite only after alt game export + questions first); rewrite queued via wb-work. bin/wb-validate: clean, 2 warnings (both new patterns have empty counterexamples arrays).
