---
domain: work
page_type: report
title: "MusicTrainer + AUTOPSY: the taste instruments"
aliases: ["musictrainer", "track-autopsy", "taste prediction project"]
status: active
importance: high
knowledge: mixed
date_created: 2026-09-14
date_modified: 2026-09-20
tags: [music-production, ai-collaboration]
related:
  - wiki/work/tech/index
  - wiki/work/tech/projects/index
  - wiki/interests/music/overview
  - wiki/mind/concepts/lyric-qualifier
  - wiki/meta/complete-log-doctrine
  - wiki/meta/instruments/index
---

# MusicTrainer + AUTOPSY: the taste instruments

On 2026-09-14 Dan commissioned two linked instruments for the weekly taste
experiment: **MusicTrainer**, a scoring app for his Discover Weekly and
Release Radar, and **AUTOPSY**, a per-track dissection game for *why* a
track lands. The pair is the first time his digging practice — previously
documented only as taxonomy — has been instrumented as data collection.

This entry is also the retrofit exemplar of the complete-log doctrine:
the week-1 scorecard below is the doctrine's first retrofit onto an
existing entry, alongside the scenario-ratings v1 export table
(dat:1656). The log is the measurement; the prose above it is the reading.

## The 90% project

Dan's stated goal: **predict his Discover Weekly keeps at 90% accuracy**.
The shipped app operationalizes that headline as a three-part target:
**≥90% per-track accuracy over ≥240 cumulative decisions, plus ≥85% recall
on keeps** (dat:1707). The recall floor matters because accuracy alone is
gameable on a low base keep rate — the 90% project has to predict the
keeps, not just the drops. The scoreboard tracks per-track accuracy,
precision, and recall against the locked predictions, plus a cumulative
panel counting decisions toward the 240 floor.

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
yearly → MASTERLIST → "DAN FRANK ALL TIME TOP 100 VIP CRATE." Dan asked
whether his 8 baseline predictions were locked; the week-lock model is
per-track status (scored vs pending), not a global lock — 12 of 30 scored
by 20:36, 18 remaining. 'Lose' condition per his ladder: anything that does
not make the current playlist lost the triage.

## Commissioning timeline (2026-09-14, transcript-grounded)

The pair was commissioned and shipped inside one evening, and the
transcript preserves the exact sequence:

- **17:47 EDT** — Dan commissions the taste-training instrument with the
  90%-prediction goal (evt:musictrainer-commissioned-20260914).
- **17:54** — eight baseline keep-predictions locked and timestamped.
- **17:59** — the assistant says 10 tracks; Dan corrects to 30 in-chat.
- **18:18–18:21** — Sammy builds and reports live the static web app
  (repo Danfr4nk/MusicTrainer, GitHub Pages): DW + Release Radar scorecard;
  per-track 1–10 slider, skip/like buttons, ADDED? yes/no; click-to-load
  Spotify embeds; prediction paste + timestamped lock; week JSON
  export/import; keys j/k/1/2/3/p; localStorage key `musictrainer.v1`.
- **18:54** — Dan commissions the secondary game to learn WHAT drives his
  liking per track; name suggestions ran through AUTOPSY as options.
- **18:56** — Sammy reports AUTOPSY live (repo Danfr4nk/track-autopsy,
  GitHub Pages): per-track triage + 1–10 score, WHAT DID IT?
  check-all-that-apply across 16 drivers, KILL ONE load-bearing-element
  pick; Drivers view ranking by lift over base keep rate + load-bearing
  frequency; imports MusicTrainer week exports with status/score preserved
  (`musictrainer.v1` → `autopsy.v1`); localStorage key `autopsy.v1`
  (evt:autopsy-driver-game-commissioned-20260914).

The whole arc — from commission to two live instruments — took about 70
minutes. That speed is not the story; the story is what happened after,
when Dan used them the same night and inverted their purpose
(see "The active-learning inversion").

## The lyric qualifier is load-bearing here

The prediction target is not "does this song have good lyrics." Per the
mandatory first frame ([[wiki/mind/concepts/lyric-qualifier]]):
Dan hears sung lyrics as **timbre**, not language — he does not process
words as semantic content even with a lyric sheet in front of him. That
finding is first-person and direct (stated 2026-07-14, corroborated by his
own words to a hostile third party a year earlier), and it revises how
every other music page reads. Here it is enforced at the grid level: one
of the 16 AUTOPSY drivers is literally "vocal as texture — voice, not
words," and the app's method notes state it flatly: *vocals are texture,
never words.*

So the instruments' scoring dimensions are honest by design: a 1–10 slider
for *liking*, skip/like triage, and in AUTOPSY a WHAT DID IT? grid where
"vocal-as-texture" names exactly the mechanism the lyric-as-timbre finding
documents. The instrument measures what he actually hears. An instrument
that asked him to rate "lyrical depth" would be measuring a fiction — this
is what the mandatory first frame is for, and it is why the lyric qualifier
sits at the top of his music-analysis pipeline rather than as a footnote.
The cross-link runs both ways: the lyrics-as-timbre entry now records that
these instruments operationalize the qualifier as a scoring dimension.

## MusicTrainer: the design

Static site, no backend, deploys to GitHub Pages. All data lives in the
browser's localStorage (`musictrainer.v1`), with JSON export/import for
backup — the latency principle's retention instinct applied to instrument
data: nothing scored is ever stranded in a tab. The loop:

1. **New week** — paste the week's track list (Spotify URLs, URIs, or
   `uri | title | artists` lines) and the model's predictions (JSON or
   `uri, keep, 0.39` lines).
2. **Lock predictions** — timestamped, then uneditable. This preserves the
   blind test: predictions are frozen before the first listen.
3. **Score** — per track: `skip` (do nothing) / `like` (liked only) /
   `keep` (liked + into the current playlist). Click the track to load its
   Spotify embed player, or listen in his own Spotify. Keyboard: `j`/`k`
   move, `1`/`2`/`3` score, `p` loads the player.
4. **Scoreboard** — per-track accuracy, precision, and recall against the
   locked predictions, plus the cumulative panel toward the 240-decision
   target.

The seed ships week 1 (Discover Weekly, Sep 14 2026) with all 30 tracks
and the locked predictions, so the baseline test is ready to score out of
the box. The manual-score slider was a same-night fix (see week-1
iteration fixes): score is user-entered, not derived — Dan wanted the
number to be his, not the app's.

## AUTOPSY: the driver grid

Where MusicTrainer records *whether*, AUTOPSY records *what did it*:
triage + 1–10 score per track, a check-all-that-apply across 16 drivers,
and a KILL ONE pick — the load-bearing element, the thing the track cannot
survive losing. The Drivers view ranks attributes by **lift over the base
keep rate** plus load-bearing frequency. This is a decompositional move:
his taste forensics (2026-09-11) already measured energy floors, three BPM
rooms, voice-as-texture, dark valence — AUTOPSY turns those post-hoc
descriptions into per-track attributable causes. Imports MusicTrainer week
exports with status/score preserved (`musictrainer.v1` → `autopsy.v1`).

The 16 drivers, exactly as shipped (dat:1708):

1. **the drop** — payoff / climax
2. **sound design** — synths / textures / ear candy
3. **bass weight** — low-end pressure
4. **drums / groove** — rhythm / swing
5. **arrangement** — structure / pacing
6. **tension & release** — builds / breaks
7. **mix / polish** — loudness / clarity
8. **energy / tempo** — pace / drive
9. **melody / hook** — the earworm
10. **vocal as texture** — voice, not words
11. **chords / harmony** — progression / mood
12. **atmosphere** — space / vibe
13. **novelty / surprise** — never heard that
14. **nostalgia** — familiar / era
15. **set utility** — would play it out
16. **replay urge** — run it back now

The grid is a hypothesis list waiting for counterfactual tracks: once
driver-lift is measured, the next instrument writes itself — playlists
constructed to isolate one driver (same drop, different vocal treatment;
same BPM room, different bass weight), the triage ladder as an
experimental protocol. The minimum is 2 checks per driver before lift is
shown, and the UI says it outright: "The sample is small — treat early
leaders as suspects, not verdicts." A driver that pulls at high lift on
three tracks is a lead, not a finding.

## The method notes are substance, not garnish

AUTOPSY's README carries a method section that reads like a research
instrument's design doc, and it is worth quoting because it anchors the
grid in validated practice rather than vibes:

- **CATA beats Likert for rapid profiling.** Check-all-that-apply — tap
  what grabbed you, skip the rest — is validated in sensory science
  (untrained raters ≈ trained panels, RV > 0.89). A 16-driver grid scored
  in seconds per track is only honest if the method supports speed; it
  does.
- **Anchored on the MUSIC model.** The attribute list is built on the
  MUSIC model's three validated dimensions (arousal / valence / depth;
  Greenberg et al. 2016) with producer-specific items bolted on: drop
  payoff, bass weight, sound-design novelty, set utility. The bolt-ons are
  the interesting part — they are where the instrument stops being a
  generic music-psychology tool and becomes *his* tool.
- **The machine/human split.** ReccoBeats auto-fills the measurable
  (tempo room, energy, valence, danceability, vocal-texture density). The
  human taps are reserved for what machines can't hear: drop *quality*,
  bass *weight* vs loudness, arrangement cleverness, mix utility. This is
  the anti-fake-precision move — the instrument refuses to ask a human to
  eyeball what an API measures better, and refuses to let the API answer
  what only a producer's ear can.
- **KILL ONE is an ablation/MaxDiff hybrid.** No published music-specific
  version exists. Asking what kills a track is more diagnostic than asking
  what saves it — the load-bearing element is found by removal, not by
  praise. The frequency of KILL ONE picks is the second ranking in the
  Drivers view, and it is the one that names what his keeps are *built*
  on.

Against the corpus, this method stack is doing the same thing the wiki's
instrument layer does: separate what can be measured from what must be
judged, and keep the arithmetic honest about which is which.

## Week-1 scoring-flow fixes (2026-09-14/15)

Dan's week-1 pass on the 30 Discover Weekly tracks surfaced friction in the
scorecard, and the fixes shipped the same night — the transcript
timestamps are the record (evt:musictrainer-iteration-fixes-20260915):

- **The score slider request (20:30 EDT).** Dan wanted a manual score
  slider (1–10) per track rather than deriving the score — implemented in
  the next push. Score was previously button/slider-locked; now
  user-entered. The number is his measurement, not the app's inference.
- **ADDED? yes/no (20:31 EDT).** Per his ladder taxonomy, the determining
  factor is keep = liked + into current playlist; the ADDED? column records
  whether the track actually cleared that bar. This is the instrument's
  ground-truth target for the 90% prediction game — and per the iteration
  event, Dan named it the load-bearing UI element over the score itself.
- **Lock semantics (20:38 EDT).** Dan asked whether his 8 baseline
  predictions were locked; the week-lock model is per-track status
  (scored vs pending), not a global lock — 12 of 30 scored by 20:36, 18
  remaining. 'Lose' condition per his ladder: anything that does not make
  the current playlist lost the triage.
- **Embed-ID fix (20:34Z = 16:34 EDT).** The Spotify embeds rendered as
  blank boxes; Sammy had pasted the full URL instead of the 22-character
  track ID. Fix confirmed "10/10."
- **Lock banner + blank-page bug (20:36Z request; crash 22:30:46Z =
  18:30:46 EDT; fixed by 22:48:23Z).** Dan requested the predictions lock
  as a banner on the scoring page itself — visibility at decision time, not
  just the predictions page. The banner's deploy crashed the whole page:
  it called a date helper that didn't exist, so "Now it's a blank page"
  at 22:30:46Z. Sammy shipped the fix in-thread ("I verified every screen
  renders this time before pushing"), and Dan confirmed in-window at
  22:48:23Z: "Now we're working. Great work."

The blank-page correction is on the record because the record was wrong:
the 2026-09-15 0340 writeback described the crash as "20:46–20:48 EDT"
with the re-render-on-click mechanism as cause and the state as
unresolved. The transcript says 22:30:46Z, a nonexistent date helper,
resolved at 22:48:23Z. The wiki carries the transcript-verbatim version
— contemporaneous platform-timestamped records outrank the writeback's
retrospective account (src:sammy-chat-transcript-20260915-0340,
src:sammy-chat-transcript-20260915-0349). A parallel failure note: the
Wiki Brain gate deploy hit the same class of blank-screen failure the
same night (evt:gate-password-deploy-white-screen-20260915).

## The active-learning inversion

The most important thing that happened on 2026-09-14 was not a bugfix. At
22:53–23:34Z, Dan recognized that the system could be inverted: instead of
measuring his taste, it could **generate playlists specifically to
discriminate among hypotheses** — "probe the weirdest stuff" to find the
keep|like boundary. Sammy proposed AUTOPSY's KILL ONE ablation as the
research instrument that learns from his play data. Dan said: "Exactly."

His diagnostic, 21:47Z: **"the like button is the weakest point in the
ladder"** — the keep|like boundary is where the model must concentrate.
That sentence is the research program in one line. The skip side is cheap
(33% test, binary), the keep side is defined (ADDED? = into the current
playlist), and between them sits the like — the zone where a track is
enjoyed but not kept, where the driver's signal is faintest and the
model's uncertainty is highest. A prediction system that treats like as a
first-class target instead of a midpoint will concentrate its probes
there.

The iteration pattern is the finding, not the bugfixes: he treats the
instrument as a living probe, breaks it by using it, names the
load-bearing UI element (ADDED? over the score), and then inverts the
instrument — from measuring his taste to manufacturing the stimuli that
would teach the model his taste. **The question became the instrument
within one evening.** The two futures named in the original design still
hold — probe playlists constructed to isolate one driver, and the 90%
ceiling locating its residual in what the grid doesn't capture (context,
sequence, the room) — but they are no longer hypothetical futures. Dan
proposed the probe-playlist future himself, in-chat, the night the
instruments shipped.

## The 2025 re-entry connection

The instruments land exactly on the 2025 re-entry: the dance-world return
after the Annie decade, with the 2025 MASTER CRATE as ammunition (60% 2025
releases, Oct 31–Dec 22 burst, zero overlap with the 5,321-track history).
The 90% project is the re-entry made falsifiable — a bet that his ear, now
that it's back in the scene, is predictable *to itself*. The September 14
Discover Weekly read-back ("the 33% gauntlet awaits") showed the
instrumentation answering a live question in his ladder's vocabulary the
same night it shipped.

The totality connection runs through the 2026-09-11 taste forensics: the
post-hoc profile measured an energy floor (~0.70, median 0.836), three BPM
rooms (125–145 house / 165+ dnb / sub-100 halftime), voice-as-texture, dark
valence (median 0.322), mid-fame popularity (median 43), no artist
loyalties. AUTOPSY is that profile turned into per-track attributable
causes: the drivers that post-hoc analysis found in aggregate — energy,
bass weight, vocal-as-texture — are now checkable per track, and the
Drivers view's lift ranking will either confirm the forensics or find them
wanting. If driver-lift contradicts the forensics (say, nostalgia
out-pulling energy), the contradiction is data — the profile was computed
over the MASTER CRATE's 2025 season, while AUTOPSY measures his ear
week by week. Either way the instrument adjudicates the claim instead of
repeating it.

## Consolidation into Danfr4nk/tools (2026-09-15)

On 2026-09-15 the tool repos were consolidated into Danfr4nk/tools:
`musictrainer/` (from Danfr4nk/MusicTrainer) and `track-autopsy/` moved in
with 571/571 files verified on the remote and all four new GitHub Pages
URLs returning 200 (dat:1580). The old repos remain as redirect stubs
pending Dan's deletion go-ahead. The consolidation is the same motion as
the wiki's own: the instruments are no longer scattered repos but entries
in one catalogue, and this page is the prose face of that catalogue entry.

## The instrument question

Where do these sit relative to the wiki's instrument layer
([[wiki/meta/instruments/index]])? The index's four rules draw a bright
line: instrument pages state no finding, are generated never hand-edited,
state their own limits in an undroppable section, and carry the complete
log. This entry is a *report about* the instruments, not an instrument
page — it is hand-written, and it argues. What it borrows from the
instrument discipline is rule 4: the complete log lives on the entry,
translated for a human reader. That is why the week logs below are here
and not linked to a repo — a measurement you cannot see in full is not a
measurement, it is a press release. If the scorecards ever become
machine-generated projections from an append-only ledger, this page's log
section is the format they regenerate into.

The sibling instrument family is the scenario-ratings suite
(dat:1567): v3 answers *why*, the alt answers *what* — and MusicTrainer
answers *whether* while AUTOPSY answers *what did it*. The whether/what
split recurs because it is the shape of the question: a binary outcome
plus an attribution grid. The instruments rhyme across domains.

## Limits — what the instruments cannot see

Every instrument states its own limits, in a section that cannot be
dropped:

- **Context, sequence, the room.** The grid captures per-track drivers.
  It does not capture what played before, what room it was in, who he was
  with, or what the week was like. If baseline predictions stall below
  90%, the failure is data, not a verdict on his ear — it locates the
  residual in what the grid doesn't capture. KILL ONE forces a single-cause
  claim per track; the misses are where taste actually lives.
- **Sample size.** The Drivers view enforces a minimum of 2 checks and
  labels early leaders "suspects, not verdicts." Thirty tracks a week is
  thin; lift estimates stabilize slowly. The 240-decision floor exists for
  this reason.
- **localStorage fragility.** No backend; the record is the browser. JSON
  export/import is the backup discipline, and it is manual. A cleared
  browser is a lost ledger unless the export habit holds.
- **The model's predictions are the assistant's, not his.** The blind
  test measures the *model's* ability to predict his keeps. The 90% target
  is a bet on the model, adjudicated by his scoring — not a claim about
  his ear's consistency.
- **The like-button weak point.** His own diagnostic: the keep|like
  boundary is where the ladder is thinnest, and the current grid has no
  driver for "enjoyed but not kept." Until the probes concentrate there,
  the instrument's uncertainty is concentrated there too.

## Week logs (complete)

Per the complete-log doctrine, every week's full scorecard lives here — every
track with its locked prediction and p_keep, then the 1–10 score, skip/like
verdict, and the determining **ADDED?** call (liked + into the current
playlist) as scoring lands. Nothing summarized away: the weekly table is the
measurement, and a week's readout is only as honest as the rows underneath it.
Machine-readable seed: dat:1706. Target spec: dat:1707.

### Week 1 — Discover Weekly, Sep 14 2026 (scored 2026-09-20: acc 0.633, precision 0, recall 0)

Seed locked 17:52 EDT 2026-09-14 (predictionsLocked=true, lockedAt
2026-09-14T17:52:00-04:00). All 30 tracks preloaded with the model's
predictions; every row starts unscored. The 8 locked KEEP predictions:
Damaio, Double Dutch, Break Up Song, Six Shooter, Combat Mode, One Drink,
Diamonds, REMEDY. REMEDY (p=0.39) is the model's highest-confidence keep;
Rain (p=0.038) its highest-confidence drop. Scoring reminder armed for
2026-09-20.

| # | Track | Artists | Locked prediction | p_keep | Score | Verdict | Like | ADDED? |
|---|-------|---------|-------------------|--------|-------|---------|------|--------|
| 1 | Bad Habit | Jai Wolf, SAYAK DAS | drop | 0.219 | — | **KEEP** | yes | **YES** |
| 2 | Heart & Stay | Biicla | drop | 0.219 | — | drop | no | no |
| 3 | Damaio | En:vy | **KEEP** | 0.284 | — | drop | no | no |
| 4 | Anomie | Ainonow | drop | 0.219 | — | drop | no | no |
| 5 | Addiction | Capochino, KeyLo | drop | 0.219 | — | drop | no | no |
| 6 | Energy | Flava D, Stush | drop | 0.219 | — | **KEEP** | yes | **YES** |
| 7 | Double Dutch | Keys N Krates | **KEEP** | 0.313 | — | drop | no | no |
| 8 | atmosphere | JAMØ | drop | 0.219 | — | drop | yes | no |
| 9 | Break Up Song | Flozone | **KEEP** | 0.260 | — | drop | yes | no |
| 10 | desire <3 | two girls one laptop, Kurei, Auracle | drop | 0.219 | — | drop | no | no |
| 11 | Untouchable | Cymek | drop | 0.219 | — | **KEEP** | yes | **YES** |
| 12 | Dreaming | Hostage Situation | drop | 0.219 | — | drop | yes | no |
| 13 | Backseat | dêtre | drop | 0.219 | — | drop | no | no |
| 14 | Pull Me Up | Frosty | drop | 0.219 | — | drop | no | no |
| 15 | High - Bassnectar Remix | Rusko, Bassnectar | drop | 0.198 | — | drop | no | no |
| 16 | OPAL | LYSTRO | drop | 0.219 | — | drop | yes | no |
| 17 | Call It Love - AMNES Remix | AMNES | drop | 0.219 | — | drop | no | no |
| 18 | Six Shooter | SNBRN | **KEEP** | 0.304 | — | drop | no | no |
| 19 | Combat Mode | Mushroom Cloud, MontyCler | **KEEP** | 0.260 | — | drop | no | no |
| 20 | Janice STFU - Dubstep | bern | drop | 0.219 | — | drop | yes | no |
| 21 | One Drink | DLMT | **KEEP** | 0.280 | — | drop | no | no |
| 22 | Diamonds | Malaa | **KEEP** | 0.281 | — | drop | no | no |
| 23 | LIL HOMIE | DRGN | drop | 0.219 | — | drop | no | no |
| 24 | The Box | MEDIKAL | drop | 0.090 | — | drop | no | no |
| 25 | Flow | Nitepunk | drop | 0.093 | — | drop | no | no |
| 26 | Rain | Papa Khan | drop | 0.038 | — | drop | no | no |
| 27 | REMEDY | spüke | **KEEP** | 0.390 | — | drop | no | no |
| 28 | Next Order | Dog Blood | drop | 0.219 | — | drop | no | no |
| 29 | Not so bad | Hidden Face | drop | 0.219 | — | drop | no | no |
| 30 | Whispers | Oshi | drop | 0.219 | — | drop | no | no |

Baseline: 8 predicted keeps of 30 (26.7% base keep rate) — the denominator
every driver-lift calculation runs against. Final: **19/30 correct (acc
0.633), precision 0, recall 0** (dat:1832). All 8 locked KEEP predictions
were wrong; the 3 actual keeps (Bad Habit, Energy, Untouchable) were all
missed — the model carried no audio features on them (blind-fallback group).
Five liked-but-not-added (atmosphere, Break Up Song, Dreaming, OPAL,
Janice STFU - Dubstep). Verdict column = the keep/drop outcome; Like =
whether Dan liked the track in Spotify; ADDED? = liked AND into the current
playlist. Keep-label caveat: labels assume the current crate is FUNDAMENTAL
FLAW — unconfirmed by Dan. Score column: per-track 1–10 scores were not
recorded in the week-1 export; — marks the gap, not a zero.

#### Week-1 readout (2026-09-20)

The miss pattern is the finding, not the score. The model's 8 KEEP
predictions clustered on the audio-feature-rich tracks — En:vy, Keys N
Krates, SNBRN, Flozone, Malaa, DLMT, spüke — and missed all 8, while the 3
tracks Dan actually kept were exactly the ones the model carried no audio
features on. That inverts the model's whole premise: the blind-fallback
group was the signal group. Whatever carries a keep for him is not in the
feature set the model reads — tempo/energy/popularity features predicted
keeps on the 124–140 BPM, 0.6–0.9-energy cluster, and he dropped every one
of them.

The liked-but-not-added five (atmosphere, Break Up Song, Dreaming, OPAL,
Janice STFU - Dubstep) sit exactly on the keep|like boundary the entry
already flags as the ladder's thinnest rung — "enjoyed but not kept" is the
week-1 result's densest residue, and the grid still has no driver for it.
For the 90% project the path is not tuning the current features: the
baseline needs a different signal (his per-track driver picks, skip-to-33%
behavior, crate-context) or the recall floor stays at zero. One caveat the
entry keeps open: the keep labels assume the current crate is FUNDAMENTAL
FLAW, which Dan never confirmed — a wrong crate attribution would re-draw
the baseline, not the miss pattern.

This is the measurement the Limits section was written for: baseline
stalls below 90%, so the failure is data, not a verdict on his ear. The
residual is located in what the grid doesn't capture.

## Sources

Evidence: `evt:musictrainer-commissioned-20260914`,
`evt:autopsy-driver-game-commissioned-20260914`,
`evt:musictrainer-iteration-fixes-20260915`,
`dat:1706` (week-1 seed), `dat:1707` (target spec), `dat:1832` (week-1 scorecard result), `dat:1708` (driver
grid + method), `dat:1580` (tools consolidation), `dat:1656`
(complete-log doctrine retrofit)
(sources: `src:sammy-chat-transcript-20260914-1940`,
`src:sammy-chat-transcript-20260915-0340`,
`src:sammy-chat-transcript-20260915-0349`, `src:20260920-1830-sammy-chat-transcript`; held artifacts
`~/workspace/musictrainer/`, `~/workspace/autopsy/`).
Live: https://danfr4nk.github.io/MusicTrainer/,
https://danfr4nk.github.io/track-autopsy/ (redirect stubs post-2026-09-15
consolidation; canonical now under Danfr4nk/tools).
Local code: ~/workspace/musictrainer/, ~/workspace/autopsy/.

Small thumbnails only, per the placement rule. No images embedded for this
entry — the apps are live at the URLs above.
