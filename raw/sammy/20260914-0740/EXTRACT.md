# EXTRACT.md — batch 20260914-0740 (rescued)

## 2026-09-14 08:08–08:15Z — rescue completion (main agent)

The 04:05 EDT scrape worker was interrupted mid-run. Rescue path:
1. Kept the worker's staging inventory (`inventory-current.json`, 392 entries from 2026-09-14T03:46:15.357Z) and `externals/` snapshots (all zero-new, checked 08:10Z) as-is.
2. Pulled chat rows directly from `runtime.messages` via muse.db for `created_at > 2026-09-14T05:24:28Z` (the 0630 batch's last row), because the 0630 batch had already archived everything up to 05:24:28Z without advancing the global watermark.
3. First pull used offset pagination (OFFSET 0/60/120) and missed rows 51–60 and 111–120; caught by comparing against a live count and re-pulled. Lesson: paginate by timestamp, not offset, when the table is growing under you.
4. Merged three page files plus a delta query to quiescence; final delta check returned only 2 new rows (both `<system-reminder>` carriers about the rescue's own tool calls — the archive now contains the notices about its own construction).
5. Deduplicated against `raw/sammy/20260914-0630/chats.json` by message_id: 1 row overlapped and was excluded.
6. Full bodies for 68 rows (md5-verified SQL-side); 60 rows exceeded the 64KB db row limit or were long worker scaffolding — archived as `body_excerpt` (first 6000 chars) with `body_bytes`, `body_md5`, `truncated=true`.

Final: **128 rows** (126 system / 2 assistant / 0 user), window 2026-09-14T05:30:08.272Z–08:11:05.09Z.

## Content verdict

All-machinery window. Dan was asleep (01:30–04:10 ET). 126 system rows: stylo-scoring-30m workers (6 runs), stylo-report-6h, memory-loop, goals bookkeeping (transcript-chunk reconciliation), feed drafts (one unit filed: AI-slowdown pushback, Trump in Ireland, Asian AI stocks), cron handoffs, compaction notice, follow-up settlements.

The two assistant rows are the only non-scaffolding content:
- 06:50:57Z: the 02:30 heartbeat completion report (117 chats archived, dat:1534–1542, Chapo falsification, Au Za'atar 445→712, NYC move pinned) — already reported to Dan; logged as `wb` history.
- 07:00:58Z / 07:01:10Z: the 03:00 stylo 6h report (21:00–03:00 ET, 12 windows; all flags paste artifacts; media-gen 5%→18% after midnight; substance markers fired on the Kirkaversary joke and the geoguesser "acid" line — both jokes, not reports; four open questions to Dan, unanswered in-window).

One kb datum created: `dat:1543` (stylo 6h report readouts). No wiki article edits warranted — no new durable findings about Dan in this window.

## Externals (checked 2026-09-14T08:10:00Z, staged by worker)

- instagram: no new; same story (id 17976118472922462), viewer_count 57 (was 43 at 03:50Z).
- threads: no new; latest still 2026-08-26 'Just let me do your chores forever please'.
- facebook: no new; latest still 2026-07-04 'poetry'.
- messenger: no new; Kristin Shaelene 'Ew lol' 2026-08-26 = watermark.
- spotify: 125 playlists = baseline; paused on blunn "don't need u (i do)" in "Baby's First Stalker".
- device: no SMS/iMessage read path (unchanged).

## Gaps / notes

- The 60 truncated rows are fully reconstructible via body_md5 + body_bytes if the corpus is ever re-pulled with a higher row limit; they are worker scaffolding, not user prose, so nothing about Dan is lost.
- The worker's `inventory-current.json` + `bodies/` partial reconstruction (392 entries from 03:46:15Z) was superseded for chat purposes by the 0630 batch + this rescue; the staging is retained for audit.
- Watermark advance: chats → 2026-09-14T08:11:05.09Z; all external watermarks unchanged.
