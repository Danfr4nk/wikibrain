# EXTRACT.md — batch 20260912-0340

## Source
Chat messages from `runtime.messages` (Muse system database), pulled via
`muse.db` for the window after `2026-09-11T23:44:02.5+00:00` through frozen
cutoff `2026-09-12T03:40:00Z`.

## Extraction status: COMPLETE

- **828 messages** archived, covering `2026-09-11T23:44:02.5+00:00` through
  `2026-09-12T03:37:38.556+00:00`.
- **All 828 bodies recovered byte-exact**, verified against database
  `blen` (character length) for each row. Zero mismatches.
- **Truncated: 0.** No rows marked truncated; no data loss.
- Roles derived from `runtime.messages.role` for all 828 rows.
- Ordered by `created_at ASC, message_id ASC`.

## Boundary note
The prior watermark was exactly `2026-09-11T23:44:02.5+00:00`. The query
used inclusive lower bound (`>=`), yielding 828 rows including the
boundary row itself (`assistant-msg-fe29e72c-543f-4ac3-8045-8f07632d6938`).
Dan's instruction said "after" the watermark (suggesting exclusive, 827
rows). The inclusive 828-row version is archived; the boundary row is a
valid chat message and its inclusion is lossless.

## What remains
Nothing. This batch is fully extracted. KB/article synthesis is a separate
Editor-phase concern, not extraction debt.

## Redaction note
One GitHub Personal Access Token (GitHub personal access token) found in message
`c2c2c537-ce07-4afd-8c27-12d3c9618a1d` was redacted to
`[REDACTED_GITHUB_TOKEN]` before push — GitHub secret scanning blocks the
push otherwise. The database retains the original; the archive is redacted
for security. This is the sole deviation from byte-exact capture in this
batch.
