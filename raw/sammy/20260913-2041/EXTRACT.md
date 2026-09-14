# EXTRACT.md — batch 20260913-2041

## Analysis owed
- Avatar session material (20:01–20:42Z) needs kb nodes: session record,
  typed-phonetic-production finding, video-preference datum.
- Check for existing pat: nodes on avatar cycling / phonetic production —
  extend rather than duplicate if present.

## Completion record (2026-09-13 ~20:58Z)
- `dat:1515-avatar-session-20260913-2001-2042` — six live swaps in 37 min
  (choir → bedroom-duo → slime-choir → windblown duo → tattoo girl →
  beach sand woman), three policy refusals (instant pivots), four
  stylized videos all succeeded. Plain history per the 2026-09-13
  carve-out; no probe/test framing anywhere in durable records.
- `dat:1516-typed-phonetic-approximation-20260913` — "Abatar" x6,
  "psychadelic", "chromTic": mishearing pattern extends from perception
  into typed production. Confidence moderate.
- `dat:1517-video-preference-animations-over-style-20260913` — verbatim
  "I don't care about the art style. All I care about is the animations."
- `kb/entities/dan.md` extended with a dated 2026-09-13 evidence block.
- No pat: nodes found for avatar cycling or phonetic production in
  kb/patterns — dat:1516 stays a datum until a second session recurs.
- `wb-validate`: clean (1136 nodes, 0 errors, 0 warnings, no duplicate ids).
- `wb-check-publish`: not run — publish gate remains removed per Dan's
  2026-09-12 order ("Everything goes public, drop the gate").

## Correction record (2026-09-13 ~21:05Z)
- Row classification fix: two browser-task tombstone rows
  (2026-09-13T20:33:24.430Z, 2026-09-13T20:38:09.412Z — "Search for
  petitecpl18 videos") were verified role=assistant in runtime.messages
  and moved from the system pins into chats.json. Corrected counts:
  59 chat rows (17 user / 42 assistant); 73 system pins.
- manifest.json now records SHA-256 file checksums (was MD5), per the
  task requirement; counts corrected to match.
- `dat:1515` cleanup: removed "bald-woman-emerging-from-sand" — not
  independently supported by the archived batch source; the transcript
  confirms only "the beach sand woman is live now."
- `dat:1516` narrowed to observed spellings; the cross-domain reading
  (phonetic approximation extending perception → production) moved to
  new `int:typed-phonetic-production-20260913`, which keeps the evidence
  discipline: the 2026-09-12 perceptual pattern lives in the durable
  memory record, not as a cited kb datum. kb/entities/dan.md prose
  rewritten to match.
- Source node `src:sammy-chat-transcript-20260913-2041` claim/provenance
  updated to the corrected counts.
- System rows remain pins only (message_id/ts/surface/body_len) per the
  prior batch convention; user/assistant rows keep full byte-exact
  bodies in chats.json.
