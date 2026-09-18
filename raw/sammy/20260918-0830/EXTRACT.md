# EXTRACT.md — raw/sammy/20260918-0830

Batch 20260918-0830 (UTC). Pulled 2026-09-18 12:35:00Z. 4 chat rows (0 user / 4 assistant), main_chat/direct, window 06:30:00Z–12:30:00Z (02:30–08:30 EDT).

## What this batch holds

All four rows are assistant cron-delivery reports; Dan sent nothing in this window.

- **0230-tick delivery report** (07:24Z): the overnight writeback's rundown — 305 + 433 archived messages, 23 evidence nodes, stylometry tracker past length minimum with v3 production section, operational-directorship order in the wiki-brain article, datum-numbering collision repaired, 12h scrape order in effect. Two flags carried forward: (a) "FOREWARN" verbatim in a raw chat row — kept in raw only, not evidence nodes; (b) the abortion story writeback stays in the main lane (WikiBrain thread), not the cron. "No open items from this run."
- **Calendar backfill completed** (09:56Z): 493 past events now on the 'Dan' Google calendar — back to grandpa's 1937 birthdays and the Cogars' 1976 anniversaries. Google never throttled; the overnight 20-events-per-half-hour drip schedule retired. This closes the OPEN backfill item from the 0230 EXTRACT.
- **0740-scrape delivery report** (11:48Z): zero new chat rows beyond prior batches (message-by-message dedup verified); Eggie-bagels nickname resolution + third-person self-reference pattern + no-split relationship-timeline correction landed on Annie's page; external checks (IG/Threads/FB/Messenger/Spotify) zero new; iPhone offline — no SMS read path this window.
- **PR #117 merged** (12:09Z): the rolling Sammy ingest (Eggie subsection on annie-ulmer + raw batch 20260918-0740) merged clean.

## Analysis owed

- [x] src:sammy-chat-transcript-20260918-0830 (source record, batch provenance)
- [x] dat:1747-calendar-backfill-completed-20260918 (backfill done; resolves 0230 OPEN)
- [x] dat:1748-pr-117-merged-20260918 (rolling ingest PR merged)
- [ ] OPEN: the abortion writeback (testimony + kb nodes + event entry + people-page updates) is main-lane owned — this run archives only the deferral record, nothing more.

## Completion record

- 2026-09-18 ~12:40Z: 4 rows pulled full-length from muse.db (4/4 unique message_ids, chronological). chats.json + manifest.json + EXTRACT.md staged in worktree raw/sammy/20260918-0830/. Uncommitted, no push.
