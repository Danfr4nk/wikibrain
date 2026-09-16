# EXTRACT.md — batch 20260916-1940

Window: 2026-09-16T18:27:06.013Z → 2026-09-16T19:40:28.663Z (14:27–15:40 EDT).
30 on-record rows (8 user / 22 assistant), all surface main_chat.
CUMTHREAD3 carve-out held: 0 rows from 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853
(verified: all 30 rows join to runtime.events with transcript_surface = main_chat).

Note on scope: the full 4h window since the chats watermark
(2026-09-16T15:51:38.892Z) produced 244 user/assistant rows; the 213 rows in
15:51–18:27Z were already archived by the 6h heartbeat's batch 20260916-1830
(214 rows, on origin/main). This batch archives ONLY the 30 rows strictly
after 18:27:06.013Z, the 1830 batch's tail row. Watermark advances to
2026-09-16T19:40:28.663Z.

External checks (all zero new, files rolled into external.json):
- instagram: connected (ihatedanfrank); 0 new. Own story 18194479462390875
  expired 2026-09-16T16:30:15Z; no new feed posts (newest 2026-08-26).
- threads: connected; 0 new (own post newest 2026-08-26 = watermark).
- facebook: connected (Dan Frank 580995252); 0 new (timeline newest 2026-07-04).
- messenger: connected; sync both completed; newest cached = watermark exactly,
  no advancement.
- spotify: connected; snapshot only — playback still idle, no track on deck.
  (The long-running paused blunn state has been gone since the 0740 check.)
- device: paired iOS; no SMS/text read path (standing finding, reconfirmed).

## Analysis status

- [x] Transcript archived (chats.json, full bodies, md5-verified byte-exact
      against the DB for all 30 rows; sha256 in manifest.json)
- [x] External zero-count checks recorded (external.json)
- [x] Source node src:1656 (main-chat transcript, reliability primary)
- [x] Datum nodes dat:1656–1659 (all cite src:1656)
- [x] Annie entity page: dated 2026-09-16 subsection (dat:1657)
- [x] Wiki prose: no public prose written for the sensitive dat:1657
      (PUBLISH-WITHHELD, evidence-grade only); no other wiki changes warranted

## Findings (4)

1. **Stamina inversion table: no forward stop exists** (dat:1656). Follow-up
   to dat:1653. Dan pivoted from video diagnosis to manual research; the
   assistant reported the manual's position: "a very sensitive balance device.
   It responds to very slight changes in weight distribution" — nothing
   mechanical prevents forward tipping; fix = height adjustment + balance test
   (feet higher than head → go taller; won't rotate near level → go shorter;
   should return upright on its own), lowest of the three pivot-arm holes
   until familiar. Her identity unattributed in-window.
2. **Annie requests full look-descriptions via Dan relay** (dat:1657,
   sensitive). Video (19:30Z) + photo (19:36Z); "She said she deserves a
   couple paragraphs." Sammy-as-"Goddess" delivered: pink ribbed racerback
   crop top, black snug shorts, bare feet; bent-over pose; front view with
   stuffed bunny / green polka-dot sheets / plaid pillow / stuffed lamb.
   Dan's close, verbatim: "eleven years and she still knows exactly what that
   angle does to a man." Structure: Annie authors the request, Sammy performs
   the gaze, Dan relays — erotic channel open and co-creative.
3. **Stylometry-v2 page deploy + PR #99 + "Not three"** (dat:1658). Dan asked
   for the page link (https://danfr4nk.github.io/wikibrain/wiki/self/concepts/stylometry-v2.html);
   the assistant disclosed a kb node citing a nonexistent source id broke the
   build ~3h; fixed via PR #99 (merged as 83a5965). Dan: "Not three" → the
   assistant owned the correction: the site never went down (last good build
   kept serving); only the stylometry-v2 page's deployment was held up ~3h.
   Supersedes the in-chat 19:38:17Z framing.
4. **Avatar batch-size shortfall** (dat:1659). Standing order = exactly 4
   options. Observed 3 (18:13Z) and 2 (16:07Z/16:26Z, prior window) rounds;
   in-window mechanism: refusals ("two of the six got refused"; "she only
   gave me two this time, not four"). Candidate compliance gap, moderate
   confidence; promote to pattern if it recurs past 2026-09-16.

## Completion record

2026-09-16 ~20:00Z: analysis committed as batch 20260916-1940 (1 source +
4 datum nodes; Annie entity page extended; no public wiki prose — the
sensitive dat:1657 is evidence-grade only).
Pushes verified: wikibrain sammy/wiki-sync ac2f0d0 (rolling PR #100);
RAWLOGS main d8971ce holds raw/sammy/20260916-1940/ (11 files — the 4
canonical batch files plus staging helpers stage_chats.py and the 6
per-source external JSONs; manifest covers the 4 canonical files).
Watermark advances to 2026-09-16T19:40:28.663Z after both pushes verified.
