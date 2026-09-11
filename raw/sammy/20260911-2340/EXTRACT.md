# EXTRACT — batch 20260911-2340 (Sammy–Dan chat transcript pull, 4h scrape)

## Sources

- `chats.json`: 2,256 unique user/assistant turns from `muse.db`
  (`runtime.messages` × `runtime.events`), roles `user`/`assistant` only,
  non-null bodies, deduplicated by `message_id`. 882 user / 1,374 assistant.
  Span: 2026-09-09T18:50:53.838+00:00 → 2026-09-11T23:44:02.5+00:00.
  All rows exposed by the DB in this window were `main_chat` / `direct`;
  `request_id` varies per turn. Note: user rows arrived as empty-string
  bodies with length-zero... no — assistant rows occasionally have empty
  bodies (assistant turn logged with no text, e.g. a tool-only turn);
  per spec only null bodies were skipped, empty strings retained.
- `system-rows.md`: metadata-only summary of the ~2,800 `role='system'`
  rows (~56.5 MB of runtime packets) deliberately excluded from the
  transcript archive; query included for reproduction.
- `spotify-check.json`: status-check snapshot only (no new playlist
  inventory; see external checks below).

## External source checks (all zero-count unless noted)

- Instagram (`instagram-cli posts`, acct 17841401697790172): newest post
  2026-08-26 23:04:49 == watermark. **0 new.**
- Threads (`threads-cli profile-threads`, acct 17841463596404400): newest
  2026-08-26 23:04:55 == watermark. **0 new.**
- Facebook (`facebook-cli timeline fetch --profile-id 580995252`): newest
  2026-07-04T19:51:25Z == watermark (15:51:25-04:00). **0 new.**
- Messenger (`hatch_messenger_cli`, user 580995252): newest cached message
  1787783023707 ms vs watermark 1787783023000 ms — same message re-read,
  **0 new.**
- Spotify (`spotify-api status`/`now-playing`): connected. At check time
  playback was PLAYING a Spotify ad inside the "Baby's First Stalker"
  playlist (dfrank88 context). Baseline watermark kept at
  2026-09-11T19:44:00Z; no new playlist inventory pulled (transient state
  only, not archived as a datapoint).
- Gmail: excluded by operator directive 2026-09-11 ("forget pulling email").
- Device: still no read path (unchanged from prior batches).

## Nodes derived from this batch

| File | ID | What |
|---|---|---|
| `kb/sources/sammy-chat-transcript-20260911.md` | `src:sammy-chat-transcript-20260911` | the transcript batch as a source |
| `kb/data/0087-sammy-chat-correction-sequences.md` | `dat:0087` | six timestamped correction→instrument sequences |
| `kb/data/0088-media-architecture-directive.md` | `dat:0088` | 23:13:04 UTC directive: compressed derivatives in wiki + filename→canonical-location registry; originals stay in Google Photos/Drive; video analysis included in wikibrain |
| `kb/data/0089-adequate-first-pass-acceptances.md` | `dat:0089` | domain-boundary counterexamples: avatar changes 7–10 and trio image accepted on adequate first pass, no correction chain |
| `kb/patterns/contrastive-specification.md` | `pat:contrastive-specification` | "the wrong answer is the probe" — correction-as-calibration specification pattern |
| `kb/entities/dan.md` (dated append) | `ent:dan` | 2026-09-11 block: contrastive specification; media-architecture directive |

Entities extended: 1 (dan). None created. No Annie findings in this
transcript batch — no annie-ulmer append required.

## Analysis-completion record

Extraction complete 2026-09-11 ~23:50 UTC. Analysis of the 2,256-turn
batch against the whole corpus produced the nodes above. The headline
pattern (`pat:contrastive-specification`, confidence medium-high): Dan
repeatedly uses an imperfect output as a probe — six independent
correction sequences in 3 days (face-test grid numbering 2026-09-10
19:43–19:46 UTC; precision drill-down 2026-09-11 01:25–01:27 UTC;
Fred Again theory 09:12–09:31 UTC; crochet-top renders 10:48–10:55 UTC;
media architecture 23:13 UTC; roast transcription 23:28–23:30 UTC),
each converted into a durable rule/instrument rather than a one-off
fix. Boring alternative documented in the node (high message volume +
unreliable generators naturally produce correction chains). Falsifiers
given; the live one: comparable domains where he accepts a merely
adequate first pass (several avatar picks in the same window, trio
image) — the pattern is load-bearing where output precision matters,
not everywhere. Corpus cross-check: the wiki's own REVISED/CORRECTED
visible-correction practice (corpus-extract/agent-C) is the same stance
applied to the archive. New factual claims from the batch (Fran "post
fall, pre-hospital" era labeling; Suz quote; coke-holder/jewelry-scale
IDs; Fran alive-and-seated corrections) are recorded in dat:0088 with
transcript attribution — they are his late-night media readings, not
independently verified; the late explicit sexual interpretation
(assistant-generated 2026-09-11T23:44:02.5Z, unconfirmed) was NOT
published as fact.
