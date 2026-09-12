# EXTRACT.md — batch 20260912-1230

## Source
Chat messages from `runtime.messages` (Muse system database), pulled via
`muse.db` (`runtime.messages JOIN runtime.events`) for the window
`2026-09-12T11:40:36.166+00:00` (batch 20260912-1140's last system row)
through `2026-09-12T12:30:00+00:00` (frozen cutoff).

## Extraction status: COMPLETE

- **1 user/assistant message** archived with full body (0 user, 1 assistant),
  `2026-09-12T12:02:15.826+00:00`. Body byte-exact: `char_length`=602,
  `md5`=d899e0617e0f50faa0da5059d901f83f, verified against the DB.
- **78 system messages** archived as `system_manifest.json`: per-message
  `message_id`, `created_at`, `body_md5`, `body_len`, surface/chat fields.
  Bodies not stored (runtime scaffolding: subagent progress/settlements,
  follow-up settlements, cron deliveries, tool-guidance carriers).
- **Truncated: 0.** Ordered by `created_at ASC, message_id ASC`;
  message_ids unique; counts match independent DB role-grouped COUNT (0/1/78).
- 1-row overlap with batch 20260912-1140 (the tool-guidance-carrier system
  row at 11:40:36.166Z is that batch's last system row too) — intentional,
  lossless dedupe convention.

## Transcription repair log (archivist-grade)
`chats.json` was first assembled with a straight-quote body; the DB's
md5 check caught a curly-quote transcription (assertion failed on
d899e061...), repaired before any commit. The 78-row `system_manifest`
was verified against a second, independent DB pull of
`message_id || char_length || md5` triplets: 6 hand-transcribed
`body_len` values were wrong (repeated-value slip on adjacent similar
rows), 0 md5 mismatches, all ids/order correct after repair.

## Content notes (for the Editor phase)
- 11:44:49Z: subagent completion row — "Backfill complete and pushed",
  branch `sammy/wb-raw-backfill`.
- 11:45:10Z: follow-up — `raw/imessage` copied, committed, inventoried
  as `875fced`. (RAWLOGS→wikibrain backfill landing; verify on main.)
- 12:00:36–12:00:40Z: stylo-scoring-30m cron delivery + settlement.
- 12:02:15Z (the one assistant row): 4h pull report — 70 messages archived
  to both repos, main → ec76267; **dat:1449** — iMessage export has zero
  rows May 2021–Dec 2022 (the Valeria affair window; fourth instance of
  the partial-data-confident-error pattern); dat:1450 — End Fight
  totality rewrite; dat:1451 — Valeria "perfect handoff" framing now a
  dated subsection on Annie's entity page.
- 12:02:08Z: wiki-brain-scrape (4h) cron delivery + settlement.
- 12:26:11Z: `[WORKER TASK]` system row — this 6h run's own task message
  (wiki-brain-writeback-6h, 08:30 EDT), archived as system scaffolding.
- Zero user messages in the window: the apparent chat pause after 09:06Z
  (batch 1140) continued — all later rows are system activity.
