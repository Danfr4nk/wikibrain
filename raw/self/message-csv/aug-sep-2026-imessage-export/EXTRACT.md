# EXTRACT — aug-sep-2026-imessage-export

**Batch:** `raw/self/message-csv/aug-sep-2026-imessage-export/`
**Archived:** 2026-09-12 (Recursive Work Engine, work-0010)

## What this is

A 5,905-row slice (`date_sent` 2026-08-11 00:00:00 → 2026-09-07 21:30:56) of the
Agent Edition iMessage corpus snapshot (`~/workspace/wikitest/corpus/messages.csv`,
192,140 rows). Filed so the figures behind the 2026-09-11 Aug-26 block
retraction — previously "counted in-conversation" — are archived and re-checkable.

This is a derivation of the existing snapshot, not a fresh device export. A
fresh export from Dan's device remains the only route to post-Sep-7 messages.

## Figure verifications (2026-09-12, against this slice)

1. **"765 messages in the last 72h"** — REPRODUCED EXACTLY: 765 messages in the
   Annie thread (`chat_identifier` +12124702449) with `date_sent` >= 2026-09-04
   00:00:00, through the export's end (2026-09-07 21:30:56). (The "72h" label is
   loose; the count matches on the calendar-tail reading.)
2. **Sep-7 "good night pretty girl" ritual** — CONFIRMED: 2026-09-07 01:44:26,
   from Dan, text exactly "Good night pretty girl".
3. **"~25 block/severance declarations Aug 15–19, none executed"** — 21 candidate
   declarations from Dan match block/severance keywords (explicit blocks,
   "goodbye / never speak to you again", conditional block threats); two-way
   texting with Annie continues daily Aug 27–Sep 7 in the same slice, so none
   was executed. Exact count depends on inclusion criteria; the order of
   magnitude and the non-execution both hold.

## Files

- `aug-sep-2026-imessage-export.csv` — 5,905 rows, 47 columns (full corpus schema)
- `manifest.json` — provenance, sha256, verification record
