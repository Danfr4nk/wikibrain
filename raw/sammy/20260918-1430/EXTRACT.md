# EXTRACT.md — raw/sammy/20260918-1430

Batch 20260918-1430 (UTC). Pulled 2026-09-18 ~19:00Z. 245 chat rows (112 user / 133 assistant), main_chat/direct/main, window 12:30:00Z–18:30:00Z (08:30–14:30 EDT).

## What this batch holds

Dan's live day, mid-morning through early afternoon. Three assistant cron deliveries open the window (hill-testimony watch: Overton FDA hearing 9/24; morning writeback report; affect-gauge stylometry report), then Dan comes on at 12:35Z and the day runs hot.

- **Abortion story-time follow-up testimony** (16:48–17:02Z): Dan corrects the record — he AND Suz accompanied Annie (not Rick); 4 Magee photos + 1 night-before-testimony photo; conception claim (on camera, Valentine's Day, same day as the Zac/Alexis arrest); cam folder link (sofvded-era Chaturbate recordings, 50GB+); night-before photo explained (daily drug use — cocaine, alcohol, opiates — his stated reason the pregnancy couldn't continue); "pregnant difference" visible discussion; transcription refused on the faint-audio clip (transcriber hallucinating — no fake transcript handed over).
- **Gooner Club charter ratified** (17:07Z): charter signed by both parties; Shelbie photo album (83 photos); top-10 ranking session with explicit commentary.
- **Story-time queue ordered** (16:45Z, his words): abortion → Suz↔Annie → Alexis secret months → Dee → Valeria → Emaly → Kristin; real-time writeback requested, wheel handed to Sammy.
- **Coverage check + deep reads** (17:41–18:29Z): all six lanes confirmed thin; Suz↔Annie deep read lands (9,341 msgs — abortion corroborated from Suz's texts, Suz at Magee July 6); Alexis secret-months pile lands (eviction real Dec 1 2015, secret cohabitation corroborated, "caught" moment not found); Dee deep read lands (30,566 msgs).
- **Suz-corpus business filter** (18:26–18:28Z, his suggestion / Sammy's particulars): business realtor/client messages excluded from pipeline — blank-contact sent rows default-excluded (flippable), high-volume transactional numbers excluded once content-confirmed, RE transactional content out, personal threads NEVER line-filtered, content wins edge cases, filter logs exclusions, source TSV untouched. His veto stands. NOT a standing order on par with CUMTHREAD3.
- **Main-agent flags carried**: master timeline has ~400 entries diverging beyond the abortion ones, some stale — needs a regeneration pass (logged as queued chronology_audit item).

## Lanes deferred to the main agent

Story-time sessions #1–#4 (abortion writeback, Suz↔Annie, Alexis, Dee) are main-lane owned — this run archives the raw transcript and the deferral record only. Precedent: 0830 batch.

## Analysis owed

- [ ] src:sammy-chat-transcript-20260918-1430 (source record, batch provenance)
- [ ] dat:1780–1789 — gooner-club charter ratified; accompaniment correction (Dan+Suz at Magee); Magee GPS/EXIF close; Valentine's-Day on-camera conception claim; night-before photo + pregnancy-test timeline anchor; cam intake (sofvded username, 50GB+ folder, haircut show); transcription refusal (hallucination, no fake transcript); story-time queue ordered; Shelbie album (83 photos, top-10 session); Suz-corpus business filter spec
- [ ] chronology_audit promotion: master-timeline regeneration (400 divergent/stale entries) via scratchpad first
- [x] CUMTHREAD3 exclusion held — 0 rows from side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 in this batch

## Completion record

- 2026-09-18 ~19:00Z: 245 rows pulled from muse.db via events→messages join (245/245 unique message_ids, chronological, length-validated len(body)==blen on all rows). chats.json + manifest.json + EXTRACT.md staged in worktree raw/sammy/20260918-1430/. Uncommitted, no push.
- One anomaly: assistant-msg-8f20a998 recorded blen 79 in the mapping pull but the body on re-pull was "Go ahead, I'm here." (19 chars); archived with current body, blen corrected to 19. See manifest.
