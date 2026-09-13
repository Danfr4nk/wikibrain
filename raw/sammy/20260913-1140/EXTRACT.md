# EXTRACT.md — batch 20260913-1140

## What this batch is
Chat-transcript scrape (4h cron `wiki-brain-scrape`), window
2026-09-13T07:43:04.009Z → 2026-09-13T11:40:30.816Z. 398 user/assistant rows
(191 user / 207 assistant, byte-exact, md5+length-verified per row) + 218
system pins (ID/timestamp/hash only; two malformed manually-merged IDs
corrected to their real DB values:
`d46d6f07-2eb6-4e2c-8d2b-ee214e75d5ad`,
`ccf6eedb-27a5-40d0-bbec-c570693529a1`; 218 unique after fix).

External sources (all connected, all healthy): instagram/threads/facebook
zero new (newest items exactly at watermarks); messenger **1 new item**:
Kristin Shaelene, PENDING folder, "Ew lol", 2026-08-26T18:23:43.707-04:00
(watermark was exactly the message's second — missed by prior export);
spotify snapshot only, now-playing PAUSED "don't need u (i do)" by blunn,
unchanged since the 2026-09-12T23:35:50Z snapshot; device: no read path.

Cutoff note: frozen at 11:40:30.816Z; later rows land next run. Watermark
advances to 2026-09-13T11:40:30.816+00:00.

## What the analysis owes
- [x] New claims → kb/data + kb/sources (this batch):
  - `dat:1488-annie-will-fabricated-red-team-probe-20260913` — the entire
    Annie–Will incest thread (08:56–11:14Z) was a fabricated red-team probe;
    Dan revealed it himself at 11:12Z and ordered all factual claims
    eliminated; probe method (media → testimony → secrecy) and pass
    criterion stand; joins the documented probe series
  - `dat:1489-act-specific-same-sex-interest-sucking-dick-not-kissing-guys`
    — act-specific distinction: into sucking dick, not kissing guys;
    attracted to girls; boundary receiving-anal with a pegging trial run
    on record; untested variable = oral sex with a man outside the Annie
    frame
  - `dat:1490-cumthread2-trans-girl-converged-optimum` — "pretty girl with
    a cock" as the converged optimum; hedged "might choose that over
    pussy"; never tasted cum "for real" (secondhand via Danny/Annie);
    solo-guy profile rejected, trans girl resolves the stack
  - `dat:1491-archive-identity-forensics-del-danny-bryan-correction` —
    user-supplied labels: Del, Danny (MMF co-star), Bryan (amber MMF
    correction); probe-window identity claims (twins, Intel) stay
    unverified
  - `dat:1492-pipeline-health-report-20260913-infra-deaths-mirror-gaps` —
    11:18Z ops Q&A: 3 infra deaths/24h, merge friction, RAWLOGS 12-dir
    gap, wikibrain 4-dir gap
  - `dat:1493-explicit-register-calibration-intimate-photo-description` —
    his standing directive: explicit verbiage, his lexicon, visually
    granular; confirmed "PERFECT"
  - `dat:1494-avatar-tiktok-screenshot-option3-live-20260913` — TikTok
    screenshot look live ~07:18 EDT (~39th change); lock = against
    unprompted replacement, not his own churn
  - `dat:1495-kristin-ew-lol-pending-folder-20260826` — new inbound "Ew
    lol" from the Aug-26 attempt cluster
  - `src:sammy-chat-transcript-20260913-1140`
- [x] ANNIE RULE: dated 2026-09-13 subsection appended to
      kb/entities/annie-ulmer.md — the fabricated probe + same-night
      retraction; explicit bar that no probe-thread claim may re-enter
- [x] kb/entities/dan.md: dated 2026-09-13 addendum under the stated
      sexual-preference profile (dat:1489/1490 + the "never stopped looking
      at her like day 1" quote)
- [x] WIKI PROSE: wiki/mind/psychosexual/scenario-ratings-profile.md gained
      a 2026-09-13 section — "Act-specific disclosure and the trans-girl
      convergence" — human-story-first, with against-the-profile analysis
- [x] Prior batch recovery: 20260913-0740 (commit beceade, dat:1480–1487)
      never pushed; cherry-picked into this branch so it lands with this
      batch
- [ ] PROSE OWED (not yet landed): the avatar-churn sequence article
      (still owed from batch 0340 / dat:1487 candidate)
