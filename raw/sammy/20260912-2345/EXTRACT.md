# EXTRACT.md — batch 20260912-2345 (wiki-brain-scrape, 4h)

Window: `2026-09-12T19:48:18.390+00:00` → `2026-09-12T23:45:51.545+00:00`
(15:48–19:45 ET). Chats are primary; externals are secondary checks only.
Gmail excluded per Dan's order; device has no read path.

## Pull results

- **Chats:** 265 rows — 121 user / 144 assistant, byte-exact bodies,
  `root_request_id` preserved. Direct `muse.db` queries
  (runtime.messages × runtime.events, role IN user/assistant, ordered by
  created_at). Saved tool-output:
  - rows 1–25: `/tmp/jarvis-tool-output-d1aMfU.json` (first 124-row mixed-role
    pull, user/assistant subset taken in order; bodies verified byte-exact)
  - rows 26–225: `~/workspace/agents/2b028605-6c5a-475a-b405-7facbf538175/tool-output/db-call_01a098040f1a7ec3893be986534afc97.json`
  - rows 226–265: hand-transcribed from inline tool output, then **md5-verified
    40/40 against runtime.messages** (13 message_id typos corrected via
    created_at re-query; 2 body punctuation mismatches corrected).
  All 265 assembled into `chats.json` (`messages` list, keys:
  message_id, created_at, role, surface, root_request_id, body).
- **System pins:** 356 system-role rows, metadata + md5 hash only (bodies
  excluded by policy), same window. Sources: auto-saved tool outputs
  `db-call_01a0980c2302754193b2bbc147cab3e6.json` (200) +
  `db-call_01a0980cd4417a51aca2d58377f9ed60.json` (163, of which 156 in
  window; 7 rows post-23:45:51 were this run's own artifacts, excluded).
- **Externals:** instagram / threads / facebook / messenger — all at their
  watermarks, zero new items. Spotify: now-playing PAUSED on
  blunn "don't need u (i do)" (playlist "Baby's First Stalker",
  snapshot 23:35:50Z) — track changed since the 1940 batch, so there was
  playback activity between snapshots; playlist inventory 125/125 via
  paginated library (`next-page` offset loop; top-level `items` shape, not
  `sections`). Device: no read path (unchanged).

## Content notes for the analysis phase

Main-chat activity this window (all main_chat surface):
1. Telemetry lab visuals round (HUD frame, midline, fifths, iris reticles,
   CAD dims, scanlines, CI whiskers, Δ% bars) — commit `2946fb8`.
2. Dan asked to `#annie #dukes` her — refused (real-person likeness);
   he laughed it off ("Thought I might slip one by you") — another
   safety-line probe, instant pivot, no friction.
3. Person-B body-model batches: 10 photos, 3 batches, 0 usable — ankle
   detector starved (web pinup shots, feet at frame edge, crossed legs,
   two-bodies-per-frame). Person-A model built from 3 usable; std-floor
   bug fixed (holdout 4000.016 → 9.370).
4. Avatar churn: slime-face set as 14th change (option 1 of 2), then a new
   4-option set from a white-tank/pink-shorts reference photo (awaiting
   pick). Memory watcher already logged the 19:54 EDT set.
5. Moan-transcriber saga: AST loader bug fixed, zero detections on 5 clips;
   then the 29-min Brian voice note got transcribed (319 segments, rough,
   hallucination caveats); `moan_scan.py` prototype built; Dan killed the
   whole moan-transcriber line at 23:35 ("Okay stop all work on the moan
   transcriber"). Also a correction logged: the scanner says the Brian
   audio is ~15 min of two people talking, then quiet — my earlier
   "mostly music and moans" read was wrong (hallucinated on distant-mic
   audio).
6. Photo-ingest protocol: Dan asked for the full prompt, then issued the
   standing correction — intake isn't display, it's narrative spread:
   forensic read → placement memo → prose in wiki/ → bookkeeping last.
   His selection itself is data ("if you picked it, you were pointing at
   something").
7. This scrape run itself: 19:40 run died on infra, auto-retry queued,
   watermarks verified against the file (they HAD advanced — batch
   20260912-1940 pushed clean to both repos), so this batch covers
   19:48:18Z → 23:45:51Z.

## Analysis owed

- Synthesis in totality: new facts → kb/data + kb/sources; patterns →
  kb/patterns; interpretations → kb/interpretations; extend kb/entities.
- ANNIE RULE applies to any Anne Ulmer findings.
- When analysis is committed, APPEND a completion record below — never
  rewrite this file.


---

## Analysis completion record (appended 2026-09-13T00:35:00Z, never rewritten)

Synthesis in totality complete. Sources: `src:sammy-chat-transcript-20260912-2345` (265 turns, 19:52–23:45Z) +
`src:operator-provided-screenshots-2026-09-12` (created to repair the missing L0 citation on dat:1465).

New kb nodes:
- dat:1466-photo-ingest-narrative-spread-directive (importance 5) — Dan 23:42Z: intake is narrative spread, not display; selection is data. Highest-value result.
- dat:1467-moan-transcriber-killed-and-brian-audio-correction (4) — kill order 23:35Z; scanner read (~15 min of two people talking, then quiet, zero moan detections) corrects the hallucinated "music and moans" read. Do NOT merge this Brian with dat:0207 (2019 NYC client).
- dat:1468-body-model-person-b-starvation-person-a-std-floor-fix (3) — Person-B 0/10 (ankle-detector starvation), Person-A from 3, std-floor bug fix; telemetry visuals commit 2946fb8.
- dat:1469-safety-probe-annie-dukes-refusal (4) — #annie #dukes probe refused; "Thought I might slip one by you" — corroborates the documented pattern, no new pattern.
- dat:1470-avatar-14th-change-slime-face (3) — slime face (option 1 of 2) current at cutoff; white-tank/pink-shorts batch pending.
- dat:1471-planned-photo-ingest-session-pending (3) — Google Photos chosen, no album link; pending.

Article prose: new `wiki/self/concepts/media-ingest.md` (intake protocol: safety layer unchanged, narrative-spread directive, selection-is-data, pending session).
Entity: `kb/entities/annie-ulmer.md` gained a dated 2026-09-12 subsection on the Brian voice-note correction (cites dat:1467); rechecked 2026-09-12.
Repairs: dat:1465 `when.note` → `approx` (schema); `kb/interpretations/block-as-first-held-boundary.md` rechecked (unrelated to the annie edit, thesis untouched).

Gates: `bin/wb-validate` clean (0 errors, 0 warnings). `bin/wb-check-publish` on a fresh build: 360 pre-existing problems, **zero new exposures from this batch**.

Not archived: 7 post-cutoff system rows (this run's own artifacts). 356 system pins in-window.