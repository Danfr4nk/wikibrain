# EXTRACT.md — batch 20260922-2340

Byte-exact raw archive for the 2026-09-22 11:40:13Z → 23:19:43Z window,
built by the 4h wiki-brain scrape cron (wiki-brain-scrape).

## What this batch holds

- `chats.json` — 638 transcript rows (227 user, 411 assistant), all
  `main_chat`/`direct`, byte-exact bodies. 498 rows carry content, 140 are
  legitimate assistant empty slots (body_len 0). Every row verified:
  `len(body) == body_len`, 0 null bodies, 0 truncation, 0 length
  mismatches. 1,000 system rows excluded by design; 0 CUMTHREAD3 rows
  (exclusion id 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 held).
- `spotify.json` — now-playing snapshot + cheap 20-playlist inventory.
- `manifest.json` — sha256/bytes per file, per-source watermarks and counts.

## Day's substance in this window (synthesis input, not the archive)

- `$TITLEME CONSPIRACY` thread ran (33 verdicts; archived by the 1430
  heartbeat batch, not duplicated here).
- Master-timeline rehab continued: 7,526 → 6,863 → 5,617 → 5,006 events;
  83 dedup clusters; branch unpushed, awaiting his word.
- Linkage visualizer live at danfr4nk.github.io/wikibrain/wiki/share/
  linkage.html (2,275 nodes, 7,894 edges); 20-tap/password-gate confusion
  diagnosed (double-clicks opening untracked tabs); lava-blob rendering fixed.
- Hand-trace region guide build 20260922h live (workbench).
- PROGRESSIONS chord tool v3: 59-classic library, triads/7ths only,
  "play it as" style switcher, drums rebuilt at exactly 128 BPM.
- HF/METR incident report summarized; METR YAML units corrected
  hours→minutes (his "may be important soon" flag).
- Annie family-excuse corpus: 6 → 10 confirmed + 2 probable.
- Alice Gates / Otto Gates entries expanded to 2,594 / 2,064 words;
  share-side snapshots shipped (commit ca3fc04); Claire Ulmer-Gates
  married to Garret Gates (parents of Otto and Alice) resolved from his
  one-line answers.
- `!BANGER` keeper command created (renamed from `!KEEPER`); keeper #1 =
  Calvin Harris/Dua Lipa "Potion" (J BRUUS remix).
- Goon-club prompt seeded to a fresh thread; Sammy locked reference image
  chosen ("THATS her"); A-cup revision; avatar/ABATAR rounds with
  content-policy blocks; stylo instrument kept ON ("leave it on");
  approval-prompts explained as unwaivable system layer; token burn
  checks hourly (27.4M → 51.1M → 61.9M → 39.1M across the afternoon).
- HOTLINE worked as designed: his 2010-texts discovery ping landed via
  HEARTBEAT.md; 2010 corpus ingest still open (~400 messages, ~5 years
  older than anything in the corpus).

## Recovery notes (process, not content)

- muse.db tool-output file persistence is intermittent: identical-shaped
  queries sometimes save under ~/workspace/agents/<id>/tool-output/,
  sometimes don't. This batch recovered 480 rows from on-disk files,
  38 via a transcription subagent (rows 600–637, Agent C), 85 + 51 by
  direct transcription from in-context query results with per-row
  `len(body) == body_len` verification (0 mismatches across all three).
  Lesson: verify on disk immediately after each pull; never depend on
  persistence.
- Counting lesson: legitimate assistant empty slots (body_len 0) must be
  distinguished from unrecovered bodies — count by
  `body is None`, not by falsiness.

## Watermark handoff

- `watermark_from`: 2026-09-22T11:40:13.217Z (last scrape batch
  20260922-1140, dual-pushed).
- `watermark_to`: 2026-09-22T23:19:42.977Z (newest row this batch).
- Secrets scan: 0 findings this batch.
