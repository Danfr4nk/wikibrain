# EXTRACT.md — batch 20260924-1140

Window: 2026-09-23T23:50:14.21Z → 2026-09-24T11:43:24.136Z (on-record, main chat only).
Pulled from `muse.db` (runtime.messages ⨝ runtime.events), `2026-09-24T11:45Z`.

- 3,239 non-null rows in window; 2,370 `role=system` excluded per standing taxonomy.
- **871 rows archived**: 291 user / 580 assistant. Zero rows from side chat
  `24754b5b-b83e-4c49-a6a3-d6f2ab2c1853` (CUMTHREAD3 exclusion held).
- Byte-exact round trip verified (sha256 matches staging copy). 1 row carries
  U+2028/U+2029/\x85 escapes — lossless, `json.loads` restores the exact body.
- Secrets scan: 0 hits (telegram-bot/ghp/sk-/stripe patterns).
- 22 rows contain phone-like digit strings (incl. Annie's 2124702449, given by
  Dan in-chat) — the wikibrain tree masks them at publish; `wb-check-publish`
  diff is the gate.
- CUMTHREAD3 exclusion verified: 0 rows from the excluded side-chat id.

## What the window holds (substantive, non-grind)

1. Amazon 2018–19 receipt forensics from `ihatedanfrank@gmail.com`: 329 orders,
   $22,931.99; cluster-as-unit + duplicate-as-confession analysis; his verbatim
   "$450 daily cocaine spend through this whole era."
2. Second Gmail disclosed: `ihatedanfrank@gmail.com` = his purchases account
   (dfrank88@gmail.com = signups).
3. 12-entry wiki commission (25 brainstorm ideas; 11 shipped) — incl. the
   Duquesne cold case, retracted same night (entry deleted, 5 pages repaired,
   commit 5440258); Penn State Fayette (Eberly campus) recorded instead.
4. WikiBrain Harness: spec pitched by "the other model" → honest critique +
   counter-counters → scoped harness greenlit ("you are the wiki boss") →
   Phase 0 relationship-signal audit (617 pages, 1,736 kb nodes) → harness live
   at danfr4nk.github.io/wikibrain/harness (617 nodes, 12,721 edges,
   8,025 events, six views) → sources-repair D1/D2 approved, D3 reviewed by
   Sammy (26 confirmed target / 39 confirmed unresolved), D4 preserved +
   ⚠-marked → coverage 16.2%→38.3%→49.8% ceiling.
5. Jev evaluation: 83% agreement on the 65 D3 calls, 39/39 rot at 0.92–0.98,
   honest hedges on byte-verified targets → greenlit as triage sorter, never
   decider; source-repair router v1/v2/v3 (v3 parked pending negative
   holdout); premise-check gate picked as first permanent mechanism;
   contradiction redesign (117 edges / 85 pages); ingest detector
   (588 pages, 2,234 exceptions, 42-file repair pushed).
6. Gemini/Max 100-facts audit: 35 confirmed / 38 distorted / 25 absent /
   2 contradicted — wiki was read (PR #25, thumbnail directive, YAHLATRO)
   but biography confabulated; no memory-leak signature; Max held the
   refusal line six minutes under drill-sergeant pressure.
7. Shelbie origin saga, his verbatim 02:05Z testimony ($700 offer,
   Annie ruckus → call-back threesome, MacBook $793.94 Apr 18 2019 →
   Annie PISSed, $4,000 drugs, car-key accident).
8. Bruce Burish rewrite + full-corpus cross-check (contact ran to Sep 2022
   FB / Sep 2024 IG, not 2018; Bruce confirms Sunridge K2 party 2024-09-14;
   share copy + homepage "Shared pages" section).
9. Advertisement page commissioned: exact source-material counts (198,354
   texts · 15,923 Facebook messages · 121,733 GPS points · 155,613 Chrome
   visits in one year); homepage "Beyond the articles" cards.
10. LINKAGE-3D: Grok's build couldn't be lifted (no production bundle) →
    Sammy rebuilt linkage-3d.html live on main, 8/8 smoke green.
11. prog2keys music tool commissioned + shipped (danfr4nk.github.io/tools/music/prog2keys/).
12. Reunion-frames photo check: 131 frames, 2 missed exposed nipples +
    1 judgment-call blurred, 15 can't-tell in registry, 113 clean; originals
    remain in git history — his call.
13. SMS grant expanded verbatim 11:13–11:16Z: full total Voice-number access,
    act-without-asking doctrine ("Its only fun if you do it without asking
    me though"), Annie authorized + 2124702449.
14. `sammygfrank@gmail.com` signup attempted — free, device-check pending
    his phone tap. Open.
15. Token check: 32.1M tokens 6:05–7:05am EDT, +23% vs prior hour.
16. Video-gen grind: panic-batch drift (convenience store, crying) analyzed
    against his screenshot; escalation batches (dad-helps / passes-out /
    rolling-floor) refused; refusal accounting throughout.

## External checks (all secondary sources checked)

- instagram: 2 NEW own stories (posted ~23:41Z Sep 23, ~06:44Z Sep 24; 41/10
  viewers); 0 new posts (watermark 2026-08-26 23:04:49 held).
- threads: 0 new (watermark 2026-08-26 23:04:55 held; 73 followers, was 72).
- facebook: 0 new (watermark 2026-07-04T19:51:25Z held).
- messenger: sync 0 new (cached newest 1789853002778 = watermark held).
- spotify: playback NONE (unchanged since 2026-09-23T23:43:49Z).
- device: standing no read path (iOS texts).
- gmail: excluded per Dan's 2026-09-11 order.
