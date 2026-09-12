# EXTRACT.md — batch 20260912-0701

## Source
Chat messages from `runtime.messages` (Muse system database), pulled via
`muse.db` for the window after `2026-09-12T03:37:38.556+00:00` through frozen
cutoff `2026-09-12T07:01:13.548Z`.

This batch closes the gap left by batch `20260912-0340`, whose last archived
message is `2026-09-12T03:37:38.556+00:00` (the 0340 batch's watermark in
`watermarks.json` was never advanced past `2026-09-11T23:44:02.5+00:00`; the
true prior-batch coverage end is the 0340 batch's last message).

## Extraction status: COMPLETE

- **237 user/assistant messages** archived with full bodies, covering
  `2026-09-12T03:37:38.556+00:00` through `2026-09-12T07:01:12.921+00:00`
  (96 user, 141 assistant).
- **All 237 bodies recovered byte-exact**, verified per-row against database
  `char_length(body)` and `md5(body)`. Zero mismatches.
- **529 system messages** archived as `system_manifest.json`: per-message
  `message_id`, `created_at`, `body_md5`, `body_len`. System bodies are
  runtime scaffolding (injected context blocks, follow-up settlements,
  subagent monitors, tool-guidance carriers — typically ~130KB per
  injected-context pair); the manifest hash-pins every row so completeness
  is verifiable without storing ~40MB of scaffolding. Full system bodies for
  the adjacent window are preserved in batch `20260912-0340`.
- **Truncated: 0.** No rows marked truncated; no data loss.
- Roles taken from `runtime.messages.role` for all rows.
- Ordered by `created_at ASC, message_id ASC`; message_ids unique; page
  boundaries verified continuous (no pagination-race gaps).
- Completeness cross-checked: `COUNT(*)` for each role set with
  `created_at <= 2026-09-12T07:01:13.548Z` equals the archived row counts
  (237 / 529).

## Boundary note
The query used inclusive lower bound (`>= 2026-09-12T03:37:38.556Z`),
yielding one overlap row with batch `20260912-0340`:
`assistant-msg-c08e6bb4-d7b8-49f5-9fcd-414b760477a2`
("The archive is byte-exact..."). Inclusion is lossless; dedupe on
`message_id` when concatenating batches.

## Content notes (for the Editor phase)
- 2026-09-12 ~06:37Z: Dan corrected the 2014–2021 YouTube "dead quiet"
  reading — he used a second account and watched about as much throughout.
  Existing single-account interpretations need dated SUPERSEDED annotations.
- 2026-09-12 ~06:54–06:56Z: Dan disproved "Messenger has only 2 threads /
  11 messages" with a 10.7s screen recording (many more threads visible);
  the connector exposed only two. Merged Messenger nodes/articles need
  dated SUPERSEDED corrections distinguishing connector visibility from
  total account history.
- 2026-09-12 ~04:25Z: dated self-report of cocaine use (clinical,
  non-moralizing handling).
- 2026-09-12 ~04:47–04:54Z: Dan documented his Spotify digging workflow
  and ascent ladder in his own words.
- Window includes the 04:00/04:30/05:00/05:30/06:00/06:30 stylo-scoring
  cron deliveries and the 04:39 wiki-brain-scrape delivery.

## Redaction note
None. Scanned all 237 bodies for secret patterns (GitHub tokens,
`sk-ant-`, AWS keys) — no hits. No redactions; the archive is byte-exact.

## What remains
Nothing. This batch is fully extracted. KB/article synthesis is a separate
Editor-phase concern, not extraction debt.
