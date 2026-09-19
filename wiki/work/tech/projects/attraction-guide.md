---
domain: work
page_type: concept
title: "attraction-guide — staged A/B facial-attraction diagnostic"
status: active
date_created: 2026-09-11
date_modified: 2026-09-18
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1567-scenario-alt-instrument-shipped-20260915"
  - "dat:1613-one-photo-workbench-shipped-20260916"
  - "dat:1668-workbench-facial-overlay-export-20260916"
  - "dat:1600-age-estimation-tool-shipped-20260915"
  - "memory/2026-09-18.md (scenario-lab rebuild, held for review)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide-telemetry
  - wiki/work/tech/projects/attraction-guide-scenario
  - wiki/work/tech/projects/attraction-guide-face-library
  - wiki/work/tech/attraction-guide
  - wiki/mind/psychosexual/scenario-ratings-profile
  - wiki/mind/concepts/erotic-architecture
tags: [ai-collaboration, forensic-analysis]
connections:
  - page: wiki/work/tech/projects/attraction-guide-telemetry
    type: component-of
    claim: "The telemetry lab supplies the ~40-metric MediaPipe vector that grounds every preference pick in measured facial geometry."
  - page: wiki/work/tech/projects/attraction-guide-face-library
    type: component-of
    claim: "The 155-face stimulus library (3.67x strictly selectable) is the stimulus set the game runs on."
  - page: wiki/work/tech/projects/attraction-guide-scenario
    type: component-of
    claim: "The scenario instruments measure situational preference — v2 causal ratings, the alt 936-item wouldn't-do survey, and the rebuilt scenario-lab — separate from the facial-metric engine."
  - page: wiki/work/tech/attraction-guide
    type: parallels
    claim: "The 2026-09-12 suite entry records the splash page and deployment layout; this entry is the project hub with the full build log and totality analysis."
  - page: wiki/mind/psychosexual/scenario-ratings-profile
    type: informs
    claim: "The scenario instruments feed the scenario-ratings profile — the instrument entries cover how measurement works, the profile covers what it found."
---

# attraction-guide

The attraction-guide is Dan's deployed instrument suite for turning an opaque
preference — what he finds attractive — into measured, falsifiable data. It is
a rerunnable staged A/B portrait game built by AI direction at his commission
(diagnostic skill `facial_preference_mapping`), live at
https://danfr4nk.github.io/attraction-guide/ (originally repo
`Danfr4nk/attraction-guide`; the suite migrated with the whole tool set to
`Danfr4nk/tools`, `tools/attraction/`, in the 2026-09-15 tools consolidation —
see `dat:1569-tools-repo-migration-20260915`, `dat:1580-tools-repo-consolidation-20260915`).

The project matters to the wiki on two levels. Narrowly, it is the most
complete measurement apparatus Dan has ever pointed at himself: adaptive A/B
bouts between generated faces, every pick grounded in a ~40-metric MediaPipe
telemetry vector, analysis verified headless before it ever touched his
judgment. Broadly, it is the exemplar of his instrument-builder pattern —
commission the measurement, then commission the audit of the measurement, then
commission the audit of the audit — the same appetite that produced the
stylometry 30-minute scorer and the telemetry lab's own self-policing of its
stimulus set.

This entry is the project hub: the complete build log, the architecture, the
instrument family, and the totality analysis. The component instruments have
their own entries — [[wiki/work/tech/projects/attraction-guide-telemetry]],
[[wiki/work/tech/projects/attraction-guide-scenario]],
[[wiki/work/tech/projects/attraction-guide-face-library]] — and the
results-side profile of the scenario work lives at
[[wiki/mind/psychosexual/scenario-ratings-profile]].

## What the suite contains

Five public surfaces, mapped by the 2026-09-12 splash page (see
[[wiki/work/tech/attraction-guide]] for the deployment layout):

- **The Diagnostic** (`game.html`) — the staged A/B portrait game itself:
  game v2 engine, analysis v3, the 155-face stimulus library. The flagship.
- **Telemetry Lab** (`telemetry.html`) — the ~40-metric MediaPipe face vector
  lab; also the instrument that audited the face library.
- **Scenario Ratings** (`scenario-rate.html`) — the causal single-knob
  fantasy-rating instrument; later joined by the alt instrument
  (`scenario-rate-alt.html`) and the rebuilt scenario-lab.
- **Scenario Telemetry** (`scenario.html`) — named-preset situational bouts
  (foursome / her ex / she watches / 2019 baseline).
- **Face Book** — the library browser.

The push pattern for the whole suite is API-only: no local git repo; pushes
go through `test/push-via-api.py` via the Git Data API (the same API-only
pattern as hook2piano's `push.py`). That detail matters because it explains
the suite's cadence — same-day ship, multiple iterations per night, cache-bust
deploys — without any local checkout ceremony.

## The engines: game v2 + analysis v3

**Game v2** is adaptive drill-down. Each pick accrues metric-grounded
evidence, scored on measured metric deltas (winner − loser), z-scored
against bank statistics — evidence accrues per metric *direction*, never per
prompt label. The axis queue is uncertainty-based: the next pair targets the
highest-uncertainty open axis (initial sweep first, then fewest
target-consistent trials). An axis retires at 3 consistent target-direction
wins or 6 inconclusive trials. Pair-validity auto-exclusion drops pairs
whose audit bar fails (target z < 1.5 or a confound dominates); confound
flagging fires when a non-target metric moved harder than the target one.
Phase-2 pairs show optional per-feature A/B rows for each materially-different
metric (|z| ≥ 0.5).

**Analysis v3** is the unified evidence model. Its load-bearing rules: direct
picks override holistic reads, reads count cross-axis, confounded reads are
dropped. Every preference rate carries a Wilson 95% confidence interval; the
output includes a marginal-preferences profile table and a configurality
index (how much the preference is about the face as a configuration rather
than a sum of features). The headless harness ran 34/34 green before v3 ever
touched Dan's judgment — verification first, humans second, which is the
suite's whole epistemic posture.

The web-app pregame also carries a "who appears in this run" card: a
two-level group picker (group → subgroup checkboxes, all selected by default)
plus a presenting-as female/male selector (male disabled until a male bank
exists). Perceived group/subgroup tags live on every face record
(`group`, `subgroup`, `sex`; phase-2 variants inherit their anchor's);
choices persist in localStorage and are stamped into the run state and
summary. The UI framing is neutral — "works best on faces you'd actually
evaluate" — and eye-color-neutral mode is available: when Dan pins eye color,
it is fixed (default brown) across every generation and never used as the
deciding variable.

## Complete build log (2026-09-10 → 2026-09-18)

### 2026-09-10 — the commission

Dan commissions the rerunnable diagnostic game, saved as the skill
`facial_preference_mapping`. The design: strategically constructed A/B image
sets — broad facial-characteristic identification in the first 2–3
selections, then open-ended fine-tuning cycles of 1-of-2 picks with
regeneration after each selection — meant to be rerun several times. Round 0
begins with Dan supplying a reference photo for facial-characteristic
extraction. That same day, the web-app question lands — "could this become a
web app in my new public repository" — and a static v1 is built and pushed to
`Danfr4nk/attraction-guide` at commit `51a57be6258a297c88976487a4712daba90d7772`.

### 2026-09-11 — the instrument burst

The densest single day in the suite's history. The telemetry lab ships v2
(image-quality refusal gates, iris-anchored mm scale, contour areas, offline
solvePnP 3D twin; JS port cross-validated 27/27; an iOS upload bug fixed the
same day). Game v2 and analysis v3 ship (headless 34/34). Scenario telemetry
v6 and scenario ratings v2 ship. The face library is built out 8–10x at his
direction to 155 faces and audited by the telemetry lab: 17/50 pairs
admitted, jaw and eyes zero. And Dan issues the standing instrument direction
that still governs the roadmap: **grade each facial difference 1–10 on how
much it amplifies or moderates the preference choice, rather than forcing an
A/B pick** (recorded in MEMORY.md with the refinement "with preferred
direction — no forced binary picks"). This is the one open migration in the
suite: from binary picks to graded amplifier/moderator judgments.

### 2026-09-12 — the splash

A splash page indexing the whole suite goes live (see the suite entry
[[wiki/work/tech/attraction-guide]]); the game itself moves to `/game.html`.
Cards for the Diagnostic, Telemetry Lab, Scenario Ratings, Scenario
Telemetry, and Face Book. This is the suite's public face — the index that
makes five instruments feel like one product.

### 2026-09-13 — methodology corrections

During the improvement pass, a set of methodology corrections is reported
and accepted same-window (`dat:1505-telemetry-lab-methodology-corrections-20260913`):
the face transformation matrix decomposed into explicit pitch/yaw/roll
components instead of one opaque transform; the "bootstrap" resampling step
renamed "landmark-noise jitter" (the old name implied a statistical
bootstrap that was never performed); the Wilson interval display corrected
to honest states for n=0 and n<4; the ethnicity selector rebuilt from the
actual bank groups present in the face library; landmark geometry moved to
pixel space with roll-corrected canthal tilt; the phase-1 adiposity "heavy
tail" traced to a detector artifact (reported SD collapsing 0.0364 → 0.0155
after the fix — any earlier reading of that tail as preference signal is
superseded); the remaining confound relocated to phase-2 jaw-soft variants.
Harness 55/55. This is the audit-of-the-audit in miniature: not new
measurement, but the instrument's vocabulary and math being made honest.

### 2026-09-14 — the hardening pass

He commissions the full improvement program ("I want you to make this as
good as it can possibly be"), and it completes ~04:00Z (commits `f1d594d`,
`9187076`): canthal roll correction fixed, tilt drift vs the 2026-09-11
baseline down to 0.012°; denominator guards replace fabricated `|| 1`
values, 35/35 guard tests pass; metric robustness classified — 25 robust, 6
moderate, 16 fragile, 1 unknown; quality policy set to warn-and-report; the
A/B checkbox explanation added inline. One rename stays undecided: `fWHR
(proxy)` → "cheek: midface height." The same-face reliability series — whose
known weak point was pose-dominated instability — is closed by this pass.

### 2026-09-15 — the alt instrument and the tools migration

Dan commissions and Sammy ships the alternate scenario-ratings instrument to
his spec (`dat:1567-scenario-alt-instrument-shipped-20260915`): rate each
base 1–10, then 12 authored variations per base at LOVE(+2)/LIKE(+1)/MEH(0)/
NO WAY(−1, bucketed separately, excluded from the mean) — 78 bases × 12 =
936 items, themes WHO/ACT/WHERE/SEEN/FLUID/TONE/AFTER, variations panel
opening after the base is rated, line-veto plus private notes per line,
export to `scenario-ratings-alt.json`. The wouldn't-do bucket is the
instrument's sharpest edge — Sammy's thesis in the node: v3 answers "why,"
the alt answers "what," and a NO WAY is worth ten 7s. Same day, the suite
moves with the whole tool set to `Danfr4nk/tools` (`tools/attraction/`), and
the sibling age-estimation tool ships (`dat:1600-age-estimation-tool-shipped-20260915`).

### 2026-09-16 — the workbench

Dan orders "Build One-Photo Workbench" and it ships the same night
(`dat:1613-one-photo-workbench-shipped-20260916`): detection pass, age-slider
morphing, kinship face-compare (his own face-similarity engine ported to
WebGPU via transformers.js, same cosine math as the Python version),
per-face report cards, JSON export. Two live bugs fixed the same night —
the no-GPU-delegate test-environment failure and his import-button bug
("The button does nothing"), fixed in two rounds plus a paste fallback "in
case iOS is feeling spicy." v2 shipped 02:02. Then, by his order, the
workbench's facial telemetry is restored to the lab's annotated-picture
form — guidelines on the actual photo, cropped to the face, exports carrying
the guidelines (`dat:1668-workbench-facial-overlay-export-20260916`): the
facial card shows the annotated crop (mesh, metric segments, thirds with
U/M/L%, midline, fifths, iris, IPD and canthal tilts); the report JSON
carries the annotated PNG as a data URL; an "annotated png" download button
sits on the export card. A cache-buster follows his phone report that the
overlay was missing (stale cached JS). The workbench is the lab grown
outward — from measuring one face to a whole photo desk around it — and the
open thread from the 9/15 burst (chaining the tools) is where it points
next.

### 2026-09-18 — the scenario-lab rebuild

The scenario-lab is rebuilt as a real instrument: a 96-category taxonomy
grounded in an actual major generalist tube site's categories page (Dan's
explicit order at ~19:21 EDT: "You need to look at the typical generalist
tube site and work off their categories list" — no invented taxonomy),
pairwise forced-choice driving Bradley-Terry scoring across 50 trials, which
kills the rating-scale ceiling effect that plagued every earlier
scenario-rating instrument. The build is held at
`~/workspace/scenario-lab-review/scenario-lab.html` for his review — an
explicit no-push to the wiki/tools repos until he signs off. This is the
suite's newest instrument and the current live edge of the scenario line.

## Totality analysis

Against the whole corpus, the suite is one instance of a pattern that
recurs across Dan's builder wave: **he builds instruments that audit their
own inputs, then audits the instruments.** The face-library audit (the
telemetry lab rejecting 17/50 of its own stimulus pairs, jaw and eyes at
zero) is the same move as the 2026-09-13 methodology corrections (the heavy
tail that turned out to be the detector) and the scenario v2 design (the
single-knob modifiers that killed the correlational attribution flaw). The
discipline is always the same: kill the pair, keep the corpse. Nothing is
silently dropped; the failure is documented and becomes the next instrument's
spec. That is also the Wiki Brain's own append-only rule applied to stimuli,
and it is why the suite reads as part of the wiki's epistemic architecture
even though it is "just" a tool.

The suite also sits at the intersection of two corpus currents. One is the
psychosexual cluster — the scenario instruments feed
[[wiki/mind/psychosexual/scenario-ratings-profile]], the erotic-architecture
synthesis draws on the same material, and the whole project exists because
Dan treats his own interior as a system worth measuring rather than a mood
worth narrating. The other is the self-measurement apparatus line: the
stylometry tracker, the 30-minute burn-in scorer, the MusicTrainer
scorecards. The diagnostic is the stylometry tracker's sibling pointed at a
different sensor. What the stylometry tracker does for prose, the
attraction-guide does for preference: continuous, calibrated, self-measured.

A third current is newer: the tools-consolidation wave of 2026-09-15–16
moved the suite into `Danfr4nk/tools` and grew the lab into the One-Photo
Workbench, which is the same chaining instinct that produced the age tool.
The trajectory is toward one desk with many instruments — telemetry,
workbench, age estimation, scenario lab — rather than many standalone pages.
The open chaining thread ("where it points next") is the roadmap sentence
for the whole `tools/` directory.

## The skill and the suite

The suite is the web deployment; the skill `facial_preference_mapping` is
the chat-side procedure that commissions and interprets it. They are two
halves of one diagnostic, and the skill's operating rules explain design
choices in the suite that would otherwise look arbitrary. The skill's "faces
only: neutral headshots, no sexualization, no nudity, adults only, never
generate a real person's likeness" rule is why the face library is synthetic
generated faces and why the suite's stimulus story never touches real-photo
registries. The skill's "evidence accrues per metric direction, never per
prompt label" is the game v2 evidence model's first sentence. The skill's
short dense turns and "no lecture" rule are the same register the suite's UI
uses — the instrument treats Dan as a collaborator who wants the inference,
not the exposition.

The skill also carries the rerun contract: each run gets a fresh log, and
cross-run synthesis is optional on request. That is why the suite stamps
run state and preferences into localStorage namespaces
(`attraction-guide-prefs-v1`, `scen_rate_alt`, and the lab's own resume
state) rather than keeping one long-lived profile. The design assumption is
that preference is worth re-measuring, not that one measurement settles it.
The runs are the unit of knowledge; the profile is a summary of runs, never
the thing itself. This is the same temporal discipline as the wiki's own
dated entries — a 2026-09-11 run and a 2026-10-20 run are two dated facts,
not one fact overwritten.

## Four generations of one problem

The scenario line of the suite is really four attempts at the same problem:
how do you get an honest preference signal out of a man who rates everything
8–10?

**Generation 1** was correlational and ceiling-crushed: scenario ratings v1
rated 121 of 122 items, mean 8.36, 64% of ratings at 9–10. When two-thirds
of your scale is one number, the scale is not measuring — it is a mood
indicator. The correlational attribution was the deeper flaw: v1 could say
a scenario rated high, not which knob made it high.

**Generation 2** fixed attribution causally: scenario-rate.html v2's 168
single-knob modifiers, 28 bases / 196 items, each metric perturbed 6–8x
under deterministic rotation, reading out causal knob-effect deltas. But a
causal instrument on a 1–10 scale still has a ceiling — the readout is
honest, the ruler is short.

**Generation 3** (the alt, 2026-09-15) kept the scale but added the
wouldn't-do bucket: NO WAY(−1) is bucketed separately and excluded from the
mean, so a veto is never averaged away. The thesis recorded in the kb node
(`dat:1567-scenario-alt-instrument-shipped-20260915`) is that the three
instruments divide the question: v3 answers "why," the alt answers "what,"
and a NO WAY is worth ten 7s — the hardest boundary is the most diagnostic
signal in the whole line.

**Generation 4** (the scenario-lab rebuild, 2026-09-18) kills the scale
entirely: pairwise forced-choice driving Bradley-Terry scores across 50
trials. There is no 9 to peg to. The forced choice is the honest admission
that rating scales were the problem all along, and the 96-category taxonomy
grounded in a real tube site's categories page is the admission that the
vocabulary also had to come from outside the builder's head. Each generation
kept the previous one's lesson and attacked the remaining failure. That is
the suite's development method in one paragraph: the ceiling was never
argued with, it was designed around, four times.

## What the suite deliberately does not do

The suite's absences are design decisions, and they are worth naming
because each one is a boundary the builder refused to cross:

- **It does not record his results.** Every entry in this family covers
  instruments, not findings. Preference results from game runs live in run
  logs and the results-side profile; the wiki treats a run as a dated event
  and the instrument as the durable object. An instrument that archived
  Dan's picks into a public wiki article would collapse the measurement and
  the publication into one act — the suite keeps them separate on purpose.
- **It does not generate real people.** The skill's operating rules forbid
  real-person likenesses, so the face library is synthetic end to end, and
  the suite's stimulus story never touches the local face-recognition
  registry. The library measures preference; the registry identifies
  people. They are kept in different rooms.
- **It does not run a male bank yet.** The presenting-as selector's male
  side is disabled until a male stimulus bank exists. The suite is honest
  about its coverage hole rather than generalizing from the bank it has.
- **It does not infer preference from curation.** The standing
  psychosexual-extraction rule — sharing media states no preference — is
  load-bearing for the whole project. The instruments measure what Dan
  *does* inside a forced choice or a graded judgment; nothing outside the
  instrument is read as signal. That is why the suite can be trusted: it
  refuses the cheapest data.

## Status and open questions (2026-09-18)

**Live and stable:** game v2 + analysis v3, telemetry lab v2 (hardened),
scenario telemetry v6, scenario ratings v2, scenario-rate-alt, workbench v2
with annotated-picture overlay, age tool.

**Wave-2 jaw/eyes regeneration** (offered 2026-09-11, audit-informed prompts):
still awaiting Dan's call. The library's two zero-admission axes remain its
weakest ground — every facial-preference claim about jaw or eyes from the
game is drawn on a stimulus set the instrument itself rejected. This is the
suite's most important open question, recorded as open rather than resolved.

**1–10 grading migration** (his 2026-09-11 direction): grade each facial
difference 1–10 on amplification/moderation of preference, with preferred
direction, rather than forcing an A/B pick. Not yet implemented in the game;
the scenario-lab rebuild's forced-choice design runs parallel to it rather
than fulfilling it.

**scenario-lab review:** the rebuilt instrument is held for his review
before any push. When he signs off, it becomes the scenario line's third
generation and the ceiling-effect problem is closed by design.

## Coverage and limits

This entry covers the suite as a project — its engines, its build log, its
place in the corpus. It does not duplicate the component entries'
technical depth (telemetry lab internals, the full face-library audit, the
scenario instrument family) or the results-side profile at
[[wiki/mind/psychosexual/scenario-ratings-profile]]. Preference *results*
from any runs of the game are not on this entry; the wiki records
instruments here and findings where they are analyzed. The 2026-09-15
Lovense-session material is excluded from this entry by standing order and
appears nowhere in the suite's documentation. Face-recognition registry
material (the local face-tag registry) is never part of this suite's
stimulus story — the library is synthetic generated faces — and is not
described here.
