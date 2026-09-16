---
domain: work
page_type: report
title: "MusicTrainer + AUTOPSY: the taste instruments"
aliases: ["musictrainer", "track-autopsy", "taste prediction project"]
status: active
importance: high
knowledge: mixed
date_created: 2026-09-14
date_modified: 2026-09-14
tags: [music-production, ai-collaboration]
related:
  - wiki/work/tech/index
  - wiki/work/tech/projects/index
  - wiki/interests/music/overview
  - wiki/interests/music/concepts/lyrics-as-timbre
---

# MusicTrainer + AUTOPSY: the taste instruments

On 2026-09-14 Dan commissioned two linked instruments for the weekly taste
experiment: **MusicTrainer**, a scoring app for his Discover Weekly and
Release Radar, and **AUTOPSY**, a per-track dissection game for *why* a
track lands. The pair is the first time his digging practice — previously
documented only as taxonomy — has been instrumented as data collection.

## The 90% project

Dan's stated goal: **predict his Discover Weekly keeps at 90% accuracy**.
Eight baseline keep-predictions were locked and timestamped at 17:54 EDT
("prediction paste + timestamped lock" is a first-class feature — the app
does not let you revise your predictions after the fact). Week 1 shipped
with all 30 DW tracks preloaded. At 17:59 the assistant said 10 tracks; Dan
corrected it to 30 in-chat ("You're right — 30"), and the instrument
carries 30. The standing rule applies: his live state wins over backend
state, corrections owned in the turn.

**Keep is defined, not assumed:** keep = liked **and** into the current
playlist. The ADDED? yes/no toggle is the determining factor, and the
ladder runs underneath: Release Radar → the 33% skip test ("Play > skip to
33% in > do nothing OR like OR like + into the current playlist" — his own
2026-09-12 taxonomy) → Liked → current crate (FUNDAMENTAL FLAW) → running
yearly → MASTERLIST → "DAN FRANK ALL TIME TOP 100 VIP CRATE."

## The lyric qualifier is load-bearing here

The prediction target is not "does this song have good lyrics." Per the
mandatory first frame ([[wiki/interests/music/concepts/lyrics-as-timbre]]):
Dan hears sung lyrics as **timbre**, not language — he does not process
words as semantic content even with a lyric sheet in front of him. So the
instrument's scoring dimensions are honest by design: a 1–10 slider for
*liking*, skip/like triage, and in AUTOPSY a WHAT DID IT? grid of 16
drivers — drop, sound design, bass weight, vocal-as-texture, set utility —
where "vocal-as-texture" names exactly the mechanism the lyric-as-timbre
finding documents. The instrument measures what he actually hears.

## AUTOPSY: the driver grid

Where MusicTrainer records *whether*, AUTOPSY records *what did it*:
triage + 1–10 score per track, a check-all-that-apply across 16 drivers,
and a KILL ONE pick — the load-bearing element, the thing the track cannot
survive losing. The Drivers view ranks attributes by **lift over the base
keep rate** plus load-bearing frequency. This is a decompositional move:
his taste forensics (2026-09-11) already measured energy floors, three BPM
rooms, voice-as-texture, dark valence — AUTOPSY turns those post-hoc
descriptions into per-track attributable causes. Imports MusicTrainer week
exports with status/score preserved (musictrainer.v1 → autopsy.v1).

## The 2025 re-entry connection

The instruments land exactly on the 2025 re-entry: the dance-world return
after the Annie decade, with the 2025 MASTER CRATE as ammunition (60% 2025
releases, Oct 31–Dec 22 burst, zero overlap with the 5,321-track history).
The 90% project is the re-entry made falsifiable — a bet that his ear, now
that it's back in the scene, is predictable *to itself*. The September 14
Discover Weekly read-back ("the 33% gauntlet awaits") showed the
instrumentation answering a live question in his ladder's vocabulary the
same night it shipped.

## Week-1 scoring-flow fixes (2026-09-14, 0340 scrape window)

Dan's week-1 pass on the 30 Discover Weekly tracks surfaced friction in the
scorecard:

- **The score slider request (20:30 EDT).** Dan wanted a manual score slider
  (1–10) per track rather than deriving the score — implemented in the next
  push. Score was previously button/slider-locked; now user-entered.
- **ADDED? yes/no (20:31 EDT).** Per his ladder taxonomy, the determining
  factor is keep = liked + into current playlist; the ADDED? column records
  whether the track actually cleared that bar. This is the instrument's
  ground-truth target for the 90% prediction game.
- **Lock semantics (20:38 EDT).** Dan asked whether his 8 baseline
  predictions were locked; the week-lock model is per-track status
  (scored vs pending), not a global lock — 12 of 30 scored by 20:36, 18
  remaining. 'Lose' condition per his ladder: anything that does not make
  the current playlist lost the triage.
- **Blank-page bug (22:30–22:48Z = 18:30–18:48 EDT; corrected 2026-09-15 —
  the 0340 writeback's "20:46–20:48 EDT" timing was wrong).** Dan reported
  "Now it's a blank page" at 22:30:46Z after the lock-banner deploy; the
  banner had called a date helper that didn't exist, crashing the whole
  page render — not the re-render-on-click mechanism the 0340 writeback
  named. Sammy shipped the fix in-thread ("I verified every screen renders
  this time before pushing"), and Dan confirmed in-window at 22:48:23Z:
  "Now we're working. Great work."
  (Parallel failure note: the Wiki Brain gate deploy hit the same class of
  blank-screen failure the same night —
  `evt:gate-password-deploy-white-screen-20260915`.)

Evidence: `src:sammy-chat-transcript-20260915-0340`,
`src:sammy-chat-transcript-20260915-0349` (transcript-verbatim correction).
Live: https://danfr4nk.github.io/MusicTrainer/.

## Active-learning implications

Two futures are already visible in the design:

1. **Probe playlists.** Once driver-lift is measured, the next instrument
   writes itself: playlists constructed to isolate one driver — same
   drop, different vocal treatment; same BPM room, different bass weight —
   the triage ladder as an experimental protocol. The 16-driver grid is a
   hypothesis list waiting for counterfactual tracks.
2. **The 90% ceiling.** If baseline predictions stall below 90%, the
   failure is data, not a verdict on his ear — it would locate the
   residual in what the grid doesn't capture (context, sequence, the
   room). The instrument is built to find its own blind spots: KILL ONE
   forces a single-cause claim per track, and the misses will be where
   taste actually lives.

Evidence: `evt:musictrainer-commissioned-20260914`,
`evt:autopsy-driver-game-commissioned-20260914`
(sources: `src:sammy-chat-transcript-20260914-1940`). Live:
https://danfr4nk.github.io/MusicTrainer/,
https://danfr4nk.github.io/track-autopsy/. Local code:
~/workspace/musictrainer/, ~/workspace/autopsy/.

## Week logs (complete)

Per the complete-log doctrine, every week's full scorecard lives here — every
track with its 1–10 score, skip/like verdict, and the determining
**ADDED?** call (liked + into the current playlist). Nothing summarized away:
the weekly table is the measurement, and a week's readout is only as honest
as the rows underneath it.

### Week 1 — pending

Week 1 is preloaded (all 30 Discover Weekly tracks + 8 locked baseline
predictions) and the scoring reminder is armed for 2026-09-20. The full
scorecard lands here when the week closes.

## Sources

Small thumbnails only, per the placement rule. No images embedded for this
entry — the apps are live at the URLs above.
