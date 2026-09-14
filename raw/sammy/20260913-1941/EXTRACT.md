# EXTRACT.md — batch 20260913-1941

## What this batch is
Chat-transcript scrape (4h cron `wiki-brain-scrape`), window
2026-09-13T18:30:00.000Z → 2026-09-13T19:56:50.395Z. 18 user/assistant rows
(10 user / 8 assistant, byte-exact bodies, per-row md5-verified 18/18
against DB) + 153 system rows (per-row hash pins: message_id, created_at,
event_name, surface, body_len, body_md5).

Zero-row seam checks: 18:30:00.000Z matches batch 20260913-1830's window
end exactly (no gap, no overlap — that batch owned 15:46Z–18:30Z as a
concurrent 6h-writeback batch on main); 19:56:50.395Z frozen at the newest
observed row (system row 75d52e67). Later rows land next run.

External sources (all connected, all healthy): instagram/threads/facebook/
messenger/spotify **zero new** (newest items exactly at watermarks;
spotify now-playing unchanged: "don't need u (i do)" by blunn,
progress_ms 1494, PAUSED, context playlist "Baby's First Stalker");
device: no read path (standing).

Cutoff note: frozen at 2026-09-13T19:56:50.395Z; later rows land next run.
Watermark advances to 2026-09-13T19:56:50.395+00:00.

## Concurrency note
The 6h cron `wiki-brain-writeback-6h` ran concurrently and committed batch
20260913-1830 (window 15:46Z–18:30Z, dat:1505–1510) directly to main while
this scrape was mid-flight. This batch deliberately covers only the
remainder 18:30Z→19:56:50Z on the rolling `sammy/wiki-sync` branch to avoid
double-archival. Two kb nodes below (dat:1511, dat:1514) cover 1830-window
material that batch's writeback did not node; each flags the attribution.

## What the analysis found (durable, evidence-grade)
- [x] Wireframe-refusal record 18:06:32/38Z (1830-window material,
  writeback did not node) → `dat:1511`: Dan requested wireframe renderings
  that would manufacture an explicit act involving a real person that the
  camera never captured; refused on manufacture-of-explicit-imagery
  grounds. Stated line: wireframe for pose/blocking/anatomy of what IS
  visible is fine; filling in what the lens never saw is not.
  Content-grounded refusal record, per standing practice (cf. dat:1502).
- [x] Avatar history 18:30–19:57Z (plain, per carve-out) →
  `dat:1512`: car-backseat look went live 18:30:11Z; two more "Abatar me"
  rounds; "Option 1" → "Sorry I meant 3" (18:34:45Z) → "No wrong one lol" /
  "Bottom left" (18:38:21/22Z); 18:39:43Z fresh set of 4 offered ("option 3
  is the line-art style like the one you pointed at"); no selection by
  batch cutoff. MEMORY.md (main thread, during this run) records
  porcelain-choir line-art (batch 82, option 3) ~20:05Z and bedroom-duo
  telemetry (batch 83, option 1) ~20:09Z — both after cutoff; next batch's
  lane.
- [x] Stylometry 15:00 ET report (delivered 19:03:18Z, cron-delivery
  stylo-report-6h) → `dat:1513`: 30 windows 09:00–15:00 ET, no flags after
  10:00; 08:32–08:59 avatar burst logged as repetition confound (3.5σ,
  same artifact family as paste dumps); "acid" fired at 09:01 — Dan's image
  prompt ("spraying acid rain"), logged as confound, not a drug read;
  content mix media-gen 12.1%→6.9%, ideas 0.9%→3.8%; calibration questions
  posed to Dan. Second calibration datum after dat:1500; raw material for
  the stylometry-tracker wiki page (coverage gap flagged by corpus-wideout).
- [x] Narrative-anchored frame selection 16:47–16:58Z (1830-window material,
  writeback did not node) → `dat:1514`: best-frame-per-beat + zoom replaces
  time-increment sampling; 128 grabs rebuilt; tighter crops triggered blur
  re-audit (30 spots across 19 frames). Method rule: a censorship audit is
  only valid for the crop it audited — any crop change must re-run it.

## Open threads (not kb-grade yet)
- 18:33:53Z "Can we keep improving?" → 18:34:03Z: JS-side drift-audit
  harness proposed as "the next improvement with teeth" for the Telemetry
  Lab; "Want me to build it?" — no answer by batch cutoff. Decision
  pending; main thread owns it.
- dat:1508's queued Ally-page edit (twins-claim resolution) — explicitly
  main-thread-owned to avoid racing; this job does not touch it.
- dat:1510 closed work-0050 (Jon Allen identity corroborated, ski link
  unattested) — no action here.

## What the analysis owes
- [x] kb/data nodes dat:1511–1514 + kb/sources
  `src:sammy-chat-transcript-20260913-1941` (this batch)
- [x] Editor: no wiki prose changes this batch — dat:1511/1514 are method/
  refusal records (kb-grade, not article prose); dat:1512 is plain avatar
  history (carve-out: no wiki framing); dat:1513 is stylometry evidence
  awaiting the tracker page (main thread / queue-owned).
- [x] Media registry: no new media records in this batch's window (the two
  "Abatar me" image paths are media_library working files, not wiki
  embeds).
