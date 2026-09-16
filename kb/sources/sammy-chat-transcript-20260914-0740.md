+++
id         = "src:sammy-chat-transcript-20260914-0740"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260914-0740 (05:24:28Z-08:11:05Z) [rescued]"
claim      = "Source record for rescued batch 20260914-0740: 128 rows (126 system / 2 assistant / 0 user), deduplicated against raw/sammy/20260914-0630/chats.json (117 rows). Window 2026-09-14T05:30:08.272Z-2026-09-14T08:11:05.09Z, all surface=main_chat. 68 rows byte-exact full bodies (md5-verified SQL-side); 60 rows archived as body_excerpt (first 6000 chars) with body_bytes, body_md5, truncated=true (rows exceeding the 64KB db row limit and long worker scaffolding). The original 04:05 EDT scrape worker was interrupted mid-run; rescue completed by main agent 2026-09-14 ~08:08-08:15Z via direct muse.db pulls, delta-merged to quiescence. Externals: zero new across device/facebook/instagram/messenger/spotify/threads (instagram story viewer_count 57, up from 43; spotify 125 playlists unchanged, paused on blunn 'don't need u (i do)' in 'Baby's First Stalker'). Files: raw/sammy/20260914-0740/chats.json, manifest.json, EXTRACT.md, externals/*.json. Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
source_type = "other"
provenance = "runtime.messages + runtime.events pull via muse.db, 2026-09-14T05:24:28Z..2026-09-14T08:11:05Z, offset-paginated then delta-merged to quiescence, per-row md5 SQL-side"
reliability = "primary"
extraction = "Pulled 2026-09-14 08:08-08:15Z. Rescue of interrupted 20260914-0740 worker (inventory-current.json, 392 entries from 03:46:15Z, partially staged bodies/). Final archive covers post-0630 rows only; the 392-entry inventory's earlier overlap was superseded by the successful 0630 batch."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026", "rescue"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

Rescued batch 20260914-0740: the 04:05 EDT worker died mid-scrape; the
archive was rebuilt from its staging inventory plus direct DB pulls and
merged to quiescence. All-machinery window (Dan asleep 01:30-04:10 ET) -
stylo workers, memory-loop, goals bookkeeping, feed drafts, cron handoffs,
compaction notices. The two substantive rows are the 02:30 heartbeat
completion report and the 03:00 stylo 6h report (media-gen spike after
midnight; substance markers as joke-artifacts). Zero external new items.
