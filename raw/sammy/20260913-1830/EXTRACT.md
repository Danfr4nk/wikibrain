# EXTRACT.md — batch 20260913-1830

## What this batch is
Chat-transcript scrape (6h cron `wiki-brain-writeback-6h`), window
2026-09-13T15:46:00.595Z → 2026-09-13T18:30:00.000Z. 103 user/assistant rows
(37 user / 66 assistant, byte-exact bodies, aggregate-verified: 21,823 UTF-8
bytes = DB `octet_length` aggregate exactly, 21,614 chars = DB `length`
aggregate exactly, 0-row seam at both boundaries) + 466 system pins
(aggregate-pinned: count/bytes/ts-range per page + first/last row anchors;
see "Pin-manifest limitation" below).

99 rows came from the pre-compaction DB dump
(`~/workspace/agents/508640c1-…/tool-output/db-call_01a09c0835af7671bf7c7b301bc3b0d5.json`,
byte-identical, 20,873 body bytes); the final 4 rows (18:29:45Z–18:29:58Z)
were re-queried live and transcribed verbatim (741 bytes, aggregate-checked).
Seam query 15:46:00.595Z–15:46:14.225Z returned 0 rows: no gap, no overlap
with batch 20260913-1540 except the shared boundary system row
`follow_up_settlement:8a486f79-…` at 15:46:00.595Z (counted in both batches;
noted, not hidden).

External sources (all connected, all healthy): instagram/threads/facebook/
messenger/spotify **zero new** (newest items exactly at watermarks; spotify
now-playing unchanged: "don't need u (i do)" by blunn, progress_ms 1494,
PAUSED, context playlist "Baby's First Stalker"); device: no read path
(standing).

Cutoff note: frozen at 18:30:00.000Z; later rows land next run. Watermark
advances to 2026-09-13T18:30:00.000+00:00.

## Pin-manifest limitation (honest record)
The 1540 batch shipped per-row hash pins (794 × message_id/ts/surface/
body_md5/body_len). That was possible because the runtime persisted db tool
output to agent tool-output dirs. After ~18:29Z the runtime stopped
persisting new db tool output (verified: a post-18:29 test query and a
subagent test query both returned inline only; no files written). Exporting
466 per-row (mid, md5) pairs would have required hand-transcription —
rejected as unreliable. This batch aggregate-pins instead: per-page
(200/200/66) row counts, ts ranges, total body bytes
(DB: 466 rows, 2,917,800 bytes, 15:46:00.595Z–18:29:59.257Z), plus exact
first/last-row (message_id, body_md5, body_len) anchors per page in
system-manifest.json. A future re-query of the same window reproduces all
of these exactly. Per-row pins resume when tool-output persistence returns.

## What the analysis found (durable, evidence-grade)
- [x] Telemetry Lab improvement pass (16:43–17:12Z) →
  `dat:1505-telemetry-lab-methodology-corrections-20260913`: transformation
  matrix decomposed to pitch/yaw/roll; "bootstrap" renamed landmark-noise
  jitter; Wilson display corrected (honest n=0 / n<4 states); ethnicity
  selector from actual bank groups; landmark geometry to pixel space with
  roll-corrected canthal tilt; phase-1 adiposity "heavy tail" traced to
  detector artifact (SD 0.0364 → 0.0155); real confound relocated to
  phase-2 jaw-soft variants; 55/55 harness checks green; JS drift audit
  blocked pending harness infra. Strongest fresh Archivist/Editor material.
- [x] Dan's totality doctrine for article construction (16:50–17:06Z) →
  `dat:1506-totality-doctrine-article-construction-20260913`: "Remember we
  aren't just looking at what's on the page as finished… We want to look at
  the data IN TOTALITY… to find new speculations, conclusions, connections
  and broader impact in dans life… The brain isnt looking at thing in a
  compartmentalized way… We want to BUILD. Brain." Standing editorial
  doctrine: rebuild from corpus/kb/raw/personality/messages/timing/
  location/money/music — never polish existing prose as if finished.
- [x] `petite_cpl18` / `littlecpl18` (17:29–17:38Z) →
  `dat:1507-petite-cpl18-littlecpl18-chaturbate-2016`: two SEPARATE defunct
  2016 Chaturbate accounts (spelling is the identifier); "sister" label was
  uncorroborated aggregator fantasy tag, not fact. Raw-grade; no wiki prose
  unless tied to documented analysis.
- [x] Ally "twins" claim — RESOLVED 18:29:57–58Z (was "unresolved" at
  18:28Z) → `dat:1508-ally-twins-claim-resolution-20260913`: cross-platform
  search (both iMessage threads, full Messenger thread, Instagram, corpus)
  found the ONLY "twin" exchange is **July 5, 2013** — Dan telling Ally he'd
  broken up with his BK girlfriend three hours after meeting *her* twin
  (a third girl); Ally's on-the-record reply: "Not my twin." Annie wasn't in
  his life yet (met 2015). The 2018/2019 "Dan called Ally and Annie twins"
  claim does not corroborate: his only "twin" utterances that era were about
  matching watches with a guy and a "fraternal twins" video-tag joke with
  another guy. Wiki edit queued (main thread active on this; no race).
- [x] Avatar history (plain, per carve-out — no probe framing):
  rave-baby option 2 activated 18:28Z (`dat:1509-avatar-20260913-1830`);
  Dan's next request 18:28:54Z answered with 4 new options off the
  car-backseat shot at 18:29:45–47Z ("Pick the one you want and it's live");
  no selection recorded by 18:30Z cutoff.
- Main-conversation owned (NOT this job's lane; recorded so nothing is
  double-claimed): 35-page commission + corpus-wideout + 100-article link
  pass (15:47–16:19Z); rewrite-mind-Q1 merge `061fff6` (17:06Z); corpus
  coverage report 16:10Z (585 entries, 139 handles, 45 stubs, 5 missing,
  17 work items; gaps: no NYC Round Two page, no childhood/Seven Springs
  spine, no stylometry-tracker wiki presence, two unidentified high-volume
  numbers, three duplicate-person-page pairs).

## What the analysis owes
- [x] kb/data nodes dat:1505–1509 + kb/sources
  `src:sammy-chat-transcript-20260913-1830` (this batch)
- [x] Editor: Telemetry Lab section of `wiki/work/tech/attraction-guide.md`
  updated with 2026-09-13 methodology corrections (dated; no stale
  "bootstrap"/heavy-tail claims existed in wiki prose to supersede —
  verified by grep)
- [ ] Queued: Ally Lubin page — add twins-claim resolution (evidence:
  dat:1508); deferred to avoid racing the live main thread
- [ ] Media registry: checked `media/registry.json` for unlinked
  non-`embed_excluded` records (see self-check note)
