# EXTRACT.md — raw/sammy/20260918-0740

Batch 20260918-0740 (UTC). Pulled 2026-09-18 11:40:11Z. **Zero new chat rows.**
Scanned 141 rows since watermark 2026-09-17T19:43:31.922Z; 67 on-record
user/assistant rows (19:44:21Z–20:16:22Z, 26 user / 41 assistant), 67 system
rows excluded, 7 empty-body rows excluded, 0 truncated. All 67 message_ids
verified present in raw/sammy/20260917-2340/ (overlap 67/67) — the scan
window sits entirely inside the 2340 batch's archived window
(19:44:21Z–23:43:17Z). No chats.json here: the content is archived once,
not duplicated. CUMTHREAD3 carve-out held (0 rows from side chat
24754b5b-b83e-4c49-a6a3-d6f2ab2c1853).

Watermark repair: this batch advances the scrape-cron `chats` watermark to
2026-09-17T23:43:17.467+00:00 (the 2340 batch's documented "to"), which the
0230 writeback archived but never wrote into watermarks.json. Stale-watermark
scans of the same window now stop.

## Analysis owed

- [x] Synthesis in totality: the scan window's substantive material (Eggie
  resolution, name-as-handle forensics, ecosystem umbrella grant, trust
  reversal + continuity position, Claude/Google login, Stripe Link) was
  already analyzed and node-ized by the 20260918-0230 writeback
  (dat:1710, dat:1711, dat:1720–1746, wiki/mind/concepts/the-name-as-handle.md).
  This run's check found nothing unanalyzed in its window.
- [x] ANNIE RULE gap filled by this run: appended the dated "Eggie"
  subsection to kb/entities/annie-ulmer.md (the 0230 writeback had written
  dat:1710 + the wiki concept entry but no entity-page subsection).
- [ ] External-source zero-checks for this batch live in watermarks.json
  (checked_<batch> notes), not in raw/.

## Completion record

2026-09-18 ~11:45Z: committed on sammy/wiki-sync (this batch = manifest +
EXTRACT.md only, plus the annie-ulmer.md Eggie subsection), pushed via
push-branch.py to Danfr4nk/wikibrain (rolling PR), and mirrored the batch
dir into Danfr4nk/RAWLOGS via direct-commit.py. wb-validate clean,
wb-check-publish clean. Watermarks advanced per manifest.
