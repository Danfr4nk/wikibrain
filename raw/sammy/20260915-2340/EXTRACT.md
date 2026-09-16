# EXTRACT.md — raw/sammy/20260915-2340

Batch: 20260915-2340 (4h scrape; recovery run after the 19:40 EDT run's extraction
subagent timed out before consolidation).
Window: 2026-09-15 16:04–19:49 EDT (2026-09-15T20:04:10Z–2026-09-15T23:49:40Z),
357 unique messages, on-record user/assistant rows only.

## Recovery notes
- Extraction slices 02–09 (357 rows) were recovered from staging and consolidated
  into chats.json by the parent agent; slices carried reduced provenance
  (message_id/role/created_at/body only — no chat_id/surface).
- CUMTHREAD3 exclusion enforced: side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853
  contributes ZERO rows (verified at consolidation and at archive time).
- The 20:40 writeback retry's claimed raw batch 20260915-2040 was vapor — no
  files existed in its worktree; worktree and branch removed 2026-09-15 ~20:53 EDT.
  This batch supersedes that window (20:04–23:49Z).

## Analysis owed
- Synthesis pass against the full corpus: new factual claims -> kb/data/,
  patterns -> kb/patterns/, interpretations -> kb/interpretations/,
  entity pages extended with dated evidence blocks.
- External checks from the failed 19:40 run: instagram/threads/facebook/messenger/
  spotify/device were all checked (zero new items everywhere); recorded in that
  run's report; no external hits to archive for this batch.

## Completion record
[appended when synthesis is committed]

## Completion record — 2026-09-15 ~21:00 EDT (recovery run)

Analysis committed: 1 source node (src:sammy-chat-transcript-20260915-2340),
6 datums (dat:1597 tom-maison-annie-trysts, 1598 avatar-likeness-refusal-held,
1599 tag-action-system, 1600 age-tool-shipped, 1601 stylometry-v2-core,
1602 work-inventory-pdf); extended ent:tom-maison, ent:annie-ulmer,
pat:orchestration-as-scaffold-20260915; wiki prose added to
wiki/mind/psychosexual/arrangement-history.md ("The Tom Maison trysts").
External checks: carried from the failed 19:40 run's report — all sources
zero new items, no external hits archived. CUMTHREAD3 exclusion held
throughout (0 rows).
