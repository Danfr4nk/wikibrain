# Extraction Report — scrape batch 20260923-0230

- **Batch:** `20260923-0230`
- **Method:** gap extraction from runtime message ledger (muse.db)
- **Window:** 2026-09-22T23:19:42.977Z → 2026-09-23T06:26:45Z (chats.json through 2026-09-23T06:00:57.847Z, last recorded row)
- **Source:** `runtime.messages` — 100% of main-chat rows in the window are in the main chat (side-chat leakage: 0)
- **Pull method:** SQL `WHERE created_at > '2026-09-22T23:19:42.977Z' AND created_at <= '2026-09-23T06:26:45Z'` (no timestamp-prefix collisions; boundary row `assistant-msg-d2bae670...` excluded, owned by batch 20260922-2340)

## Counts

| | count |
|---|---|
| total rows | 440 |
| user turns | 165 |
| assistant turns | 275 |
| content rows | 353 |
| empty-body rows (slots, tombstones) | 87 |
| media rows (image + video files, 2026-09-23 04:19–04:27 UTC) | 3 (2 jpeg + 1 message carrying 2 mp4) |
| attachment references | `[file:...]` / `[image:...]` markers preserved verbatim |

## Segments
- Segment 1 (200 rows): 00:02:36 → 01:15:11 UTC
- Segment 2 (155 rows): 01:15:36 → ~04:00 UTC
- Segment 3 (85 rows): 04:08:50 → 06:00:57 UTC

## Session coverage

Chat kinds present: `direct` (main chat). 100% of rows in the window
are `chat_kind = direct`. No side chats in range — **the main chat is the
complete row source.**

## Verification
- Row count against db: 440 == 440 ✓
- Body-char total against db: 133,654 == 133,654 ✓
- Per-row length check on all 85 segment-3 rows ✓ (3 fixed: thread-name
  unicode glyphs in two token-check rows; one message_id suffix corrected
  against db; one 6-char body fix)
- Empty-body rows verified 0-length in db, not truncation loss ✓
- Duplicate exclusion: boundary row owned by 20260922-2340 ✓
- Duplicates deduped by message_id (0 within-batch dups) ✓

## Watermarks
- first row: 2026-09-23T00:02:36.249Z
- last row: 2026-09-23T06:00:57.847Z
- extraction ran: 2026-09-23 06:26:45Z
