---
domain: work
page_type: concept
title: "attraction-guide face library — 155 faces, audited, two axes at zero"
status: active
date_created: 2026-09-11
date_modified: 2026-09-18
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1505-telemetry-lab-methodology-corrections-20260913"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide
  - wiki/work/tech/projects/attraction-guide-telemetry
  - wiki/work/tech/projects/attraction-guide-scenario
tags: [ai-collaboration, forensic-analysis]
connections:
  - page: wiki/work/tech/projects/attraction-guide
    type: component-of
    claim: "The face library is the stimulus set the A/B game runs on — the synthetic faces the diagnostic's bouts present."
  - page: wiki/work/tech/projects/attraction-guide-telemetry
    type: evidenced-by
    claim: "The v2 telemetry lab audited the library's own stimulus pairs and admitted only 17/50 — the instrument rejecting its own inputs is the quality gate, not Dan's taste."
  - page: wiki/work/tech/projects/attraction-guide-scenario
    type: parallels
    claim: "The library's audit is the facial side's version of the scenario line's scale audits: the instrument declaring its own inputs unfit rather than measuring on them."
---

# attraction-guide face library

The stimulus set the A/B game runs on — 155 synthetic faces, built out
8–10x at Dan's direction on 2026-09-11, and the most audited object in the
attraction-guide suite. Its most important property is not its size but
its audit: the telemetry lab admitted only 17 of 50 tested pairs, jaw and
eyes admitted zero, and the failures were documented rather than silently
dropped. The library is the suite's sensor array — the thing the diagnostic
looks through — and this entry is the complete record of what it contains,
what the audit found, and what remains open.

The hub entry [[wiki/work/tech/projects/attraction-guide]] carries the
suite-level story; the audit instrument is
[[wiki/work/tech/projects/attraction-guide-telemetry]].

## Scale and composition

155 faces on disk — 8.61x the original 18. The composition:

- **32 phase-1 faces** — the broad-axis set. Phase 1 of the game varies
  many axes at once (sex presentation, face shape, skin tone, age band,
  hair, eye color, overall vibe), and these faces are the pool it draws
  from for the first 2–3 rounds of broad identification.
- **111 phase-2 variants** — the micro-pair pool. Phase 2 changes exactly
  one micro-variable per pair (jaw sharpness, eye spacing, lip fullness,
  …), and these variants are the engineered pairs the adaptive drill-down
  runs on.
- **12 anchors** — the reference set. Anchors stabilize the bank: they are
  the faces pairs are built against and the bank statistics are computed
  from.

The **strict selectable count is 66 faces** (3.67x the original 18) — the
faces that pass the game's pair-validity bar and can actually appear in a
bout. The gap between 155 on disk and 66 selectable is the audit's doing:
more than half the library is disqualified from measurement, on the
record, by the instrument's own validity rules. That gap is not a failure
of the library. It is the library's quality gate working.

## The bank taxonomy

Every face record in `faces.json` carries perceived group/subgroup tags
(`group`, `subgroup`) and a `sex` tag; phase-2 variants inherit their
anchor's tags. The deployed game exposes this taxonomy in the setup
view's "who appears in this run" card: a two-level group picker (group →
subgroup checkboxes, all selected by default) plus a presenting-as
female/male selector. Choices persist in localStorage
(`attraction-guide-prefs-v1`), filter both phase-1 sampling and the
phase-2 pair pools, and are stamped into the run state and summary. The
UI framing is neutral — "works best on faces you'd actually evaluate" —
and everything is selected by default, so the picker is a filter Dan can
narrow, never a default that narrows for him.

Two details of the taxonomy matter epistemically. First, the tags are
*perceived* group/subgroup — they record what the face reads as, not a
ground truth about a synthetic person. The entry keeps that hedge because
the instrument's claims are about Dan's responses to perceived faces, and
the tags are part of the stimulus description, not part of a finding.
Second, eye-color-neutral mode exists as a run option: when Dan pins eye
color, it is fixed (default brown) across every generation and never used
as the deciding variable, with alternate eye colors only on explicit
request. The taxonomy is a control surface, not a claim.

The male side of the presenting-as selector is disabled until a male bank
exists. The library is currently a feminine-presenting stimulus set, and
the entry states that as a coverage fact rather than letting anyone infer
the game's findings generalize. When a male bank is built, this entry
gets a new section.

## How the audit works

The audit is not a vibe check; it is the telemetry lab applied to the
library's own pairs as if they were game bouts. The procedure: take a
phase-2 pair (two faces differing, by construction, on one micro-variable),
run both through the ~40-metric MediaPipe vector, and compute the measured
metric deltas. Then two questions. First, did the *target* metric move —
is the measured delta on the intended axis large enough (|z| ≥ 1.5 against
bank statistics) to count as a real difference rather than noise? Second,
did anything else move *harder* — is there a confound, a non-target metric
whose delta dominates the target's? If the target fails the bar, or a
confound dominates, the pair is excluded. The same rule fires live in the
game as pair-validity auto-exclusion; the audit is that rule run
proactively over the whole bank instead of reactively per bout.

The bar's severity is the point. A 17/50 admission rate looks like a
failing grade until you remember what the pairs are for: they are the
ground truth of "these two faces differ on exactly one thing." A pair that
fails the audit is a pair that would have laundered a confound into a
finding — every pick on it would have been scored as evidence about the
target axis while actually measuring the confound. The audit's job is to
make sure the game's evidence model never sees such a pair. The 33
rejected pairs are not wasted work; they are 33 findings that were
prevented.

## The bank-statistics problem: the audit audits the bank

The audit depends on bank statistics — z-scores are computed against the
bank — which means the bank's own measurement errors corrupt the audit.
The 2026-09-13 corrections (`dat:1505-telemetry-lab-methodology-corrections-20260913`)
caught exactly this: the phase-1 adiposity "heavy tail," previously read
as a real distributional finding, was traced to a detector artifact, with
the reported SD collapsing 0.0364 → 0.0155 after the fix. A phantom tail
in the bank statistics means phantom z-scores for every pair scored
against them — the audit's ruler was bent, and every admission decision
made with the bent ruler is suspect.

The correction did not just fix the detector; it invalidated any earlier
reading of that tail as preference signal. The entry states this plainly
because it is the audit-of-the-audit in its purest form: the instrument
that polices the stimulus set had its own measurement error, the error
was found, and the findings it touched were superseded on the record. The
2026-09-14 hardening pass then classified metric robustness outright — 25
robust, 6 moderate, 16 fragile, 1 unknown — which is the bank's honesty
label going forward: pairs admitted on fragile metrics carry the
fragility with them, the way brow pairs carry the proxy-weak hedge. The
audit is only as good as the bank statistics, and the bank statistics now
carry their own error bars.

## The v2 telemetry audit (2026-09-11)

The audit is the library's defining event. The telemetry lab — the same
instrument whose ~40-metric MediaPipe vector grounds every game pick —
was turned on the library's own stimulus pairs, and admitted only **17 of
50**:

- **Lips: 11 admitted.** The strongest axis. Lip-fullness edits moved lip
  metrics cleanly enough to pass the validity bar.
- **Nose: 3 admitted.** Weak but real.
- **Brow: 3 admitted, proxy-weak.** The edits moved *something* the
  instrument could measure, but through proxy metrics rather than the
  target — admitted with the proxy weakness on the record.
- **Jaw: zero admitted.** Jaw edits were confounded — asymmetry and mouth
  position moved more than the gonial angle did. The instrument could not
  attribute any measured difference to the jaw edit itself.
- **Eyes: zero admitted.** Eye-spacing edits never moved spacing; tilt and
  size moved instead. The generator could not do the thing it was asked to
  do.

The validity bar the pairs failed is the game's own: target z < 1.5, or a
confound dominating the target, excludes the pair. The audit applied the
instrument's rules to the instrument's inputs, and two-thirds of the
inputs failed. The discipline — kill the pair, keep the corpse — is the
Wiki Brain's append-only rule applied to stimuli: the failures are
documented here, with their causes, rather than silently dropped from the
bank. A stimulus set whose audit is public is a stimulus set whose
findings can be trusted exactly as far as the audit allows, and no
further.

## The jaw-sharp inversion: a generator-semantics bug

The audit's most instructive failure is the jaw-sharp inversion, which
reproduced **across builders**: the generator reads "sharper" as *wider*
(larger gonial angle). Ask for a sharper jaw and you get a wider one. This
is not a Dan preference and not a measurement error — it is a bug in the
generator's semantics, in the mapping from the English word "sharper" to
the geometric operation the generator performs. The entry records it as
such because the alternative — reading the inversion as a finding about
what Dan likes — is exactly the mistake the audit exists to prevent.
Every facial-preference claim the game ever makes about jaw sharpness
draws on a stimulus set where the jaw axis was confounded at generation
time, and the inversion means even the *direction* of the axis was wrong.

The 2026-09-13 methodology corrections (`dat:1505-telemetry-lab-methodology-corrections-20260913`)
relocated the remaining confound to the phase-2 jaw-soft variants — the
audit's finding was refined, not overturned: the jaw axis stayed
unmeasurable, and the confound got a more precise address. That is the
audit-of-the-audit working as designed. The jaw problem is now specified
to the variant level, which is what the wave-2 regeneration prompts need
to be audit-informed rather than merely hopeful.

## The eyes problem

Eyes failed differently from jaw, and the difference matters. Jaw edits
were confounded — the target moved, but so did other things, harder. Eye
edits were *inert on target*: eye-spacing edits never moved spacing at
all. What moved instead was tilt and size. The generator, asked to change
the distance between the eyes, changed their angle and their size — a
different operation on a different axis, silently substituted for the
requested one. Where the jaw inversion was a wrong-direction mapping, the
eyes failure was a no-op with side effects.

This has a direct consequence for the game's evidence model. The game's
phase-2 design scores picks on measured metric deltas (winner − loser),
z-scored against bank statistics, with evidence accruing per metric
*direction*, never per prompt label — precisely so that a mislabeled
generation cannot launder itself into a finding. The eyes audit is the
case the rule was written for: had the game scored "eye-spacing" picks by
prompt label, every such pick would have been evidence about tilt and
size wearing an eye-spacing costume. The audit caught the costume. The
evidence model's per-metric-direction rule is what makes the catch stick.

## The phase design: why the bank has two halves

The bank's composition — 32 phase-1 faces against 111 phase-2 variants —
is not an accident of generation; it mirrors the game's staged design
from the skill's procedure. Phase 1 is broad identification: 4 portraits
per round varying systematically across broad axes (sex presentation, face
shape, skin tone, age band, hair, eye color, overall vibe), 2–3 rounds,
Dan picks 1 (or ranks), and the next set holds the winners' axes while
varying the unresolved ones. The 32 phase-1 faces are the pool for those
rounds — enough variety to span the broad axes, small enough that the
first 2–3 selections actually identify the space.

Phase 2 is fine-tuning: 2 portraits per round differing on exactly one
micro-variable, everything else held constant. The 111 phase-2 variants
are the engineered pairs for that drill-down — and the reason there are
3.5x as many phase-2 faces as phase-1 is that phase 2 is where the game
spends its time. The adaptive axis queue (highest uncertainty first,
retire at 3 consistent wins or 6 inconclusive trials) chews through pairs;
the bank needs depth on every axis because the game keeps asking until an
axis resolves or exhausts. The audit's 17/50 admission rate bites hardest
here: the phase-2 pool is both the largest part of the bank and the part
the audit rejected most aggressively, because single-variable pairs are
exactly where generation confounds hide. A broad phase-1 face can be a
little off and still serve its round; a phase-2 pair that moves the wrong
metric is worse than useless — it is evidence about the wrong thing.

The 12 anchors sit outside the phase structure. They are the bank's fixed
points: the z-scoring reference, the tag-inheritance source, the faces
pairs are built against. In a bank where most pairs get disqualified, the
anchors are what keep the measurement frame stable — the one part of the
stimulus set that does not move.

## Wave-2: the open regeneration

Wave-2 jaw/eyes regeneration with audit-informed prompts was offered on
2026-09-11 and is **still awaiting Dan's call** — the suite's most
important open question, now a week old. The offer is specific: regenerate
the jaw and eyes pairs using prompts informed by the audit (knowing that
"sharper" maps to wider, knowing that spacing edits go inert, knowing the
confound now lives in the jaw-soft variants), then re-audit. "Audit-informed"
is doing real work in that sentence — the prompts would not be guesses but
corrections addressed to named failure modes: invert the jaw-sharp
direction, specify spacing in units the generator actually moves, avoid the
jaw-soft variant construction that confounded the first attempt. The
regeneration is designed to be falsifiable in the same way the first
build was: the re-audit admits or rejects, and the numbers go on the
record either way. Until that
happens, every facial-preference claim about jaw or eyes from the game is
drawn on a stimulus set the instrument itself rejected — the entry's
standing caveat, kept visible rather than resolved by wishful thinking.

This entry does not resolve the wave-2 question because the corpus cannot
resolve it: it is Dan's call, and the record shows he has not made it. The
engine's next-frontier tracking carries it as an open question, not a
finding. If the regeneration happens, this entry gets a new audit section
with the new admission numbers; the old zeros stay on the record, dated,
superseded but not erased — the same append-only discipline the audit
itself follows.

## The library in the game engine

The library is not a passive image folder; it is wired into the game's
validity machinery. Pair-validity auto-exclusion drops pairs whose audit
bar fails (target z < 1.5 or a confound dominates) — the 155→66 gap is
this rule firing. The axis queue is uncertainty-based (highest-uncertainty
open axis first; initial sweep, then fewest target-consistent trials),
and an axis retires at 3 consistent target-direction wins or 6
inconclusive trials. Confound flagging fires when a non-target metric
moved harder than the target — the jaw audit's "asymmetry and mouth
position moved more than the gonial angle" is the canonical example of
what the flag catches live. Phase-2 pairs show optional per-feature A/B
rows for each materially-different metric (|z| ≥ 0.5).

The anchors do quiet structural work in all of this. The 12 anchors are
the faces the bank statistics are computed from — the z-scoring reference
the whole evidence model stands on. Phase-2 variants inherit their
anchor's group/subgroup/sex tags, which keeps the taxonomy consistent
across the pair pool: a variant never drifts into a different perceived
group from its anchor, so the game's group filtering and the run-state
stamping stay coherent. When the game samples phase-1 faces or draws
phase-2 pairs, it draws from a bank whose reference frame (the anchors)
and whose taxonomy (the inherited tags) are fixed — the only things that
vary are the micro-variables under test. That fixity is what makes the
measured deltas attributable: hold everything constant, move one thing,
measure what moved. The audit exists because generation kept failing to
hold everything constant, and the engine's rules exist because the audit
kept catching it.

The library, the audit, and the engine are one system: the bank supplies
pairs, the audit disqualifies them, the engine routes around the
disqualifications. A stimulus set this policed is slow — 66 selectable
out of 155 — and that slowness is the price of the evidence model's
honesty.

## What the library doesn't cover

Stated as facts, not apologies:

- **No male bank.** The presenting-as male selector is disabled until one
  exists. All current findings are about feminine-presenting faces.
- **No real likenesses.** The skill's operating rules forbid generating a
  real person's likeness, so the bank is synthetic end to end. The
  library measures preference; it cannot measure resemblance, and it does
  not try.
- **Two axes at zero.** Jaw and eyes have no valid pairs. The library's
  coverage map has two holes, both documented, both awaiting wave-2.
- **Brow is proxy-weak.** Three pairs admitted through proxy metrics. Any
  brow finding carries the proxy hedge until the axis is re-engineered.
- **The 155→66 gap.** More than half the bank is disqualified from
  measurement. The gap is the quality gate working, but it is also a
  smaller effective stimulus set than the headline number suggests.

## Complete log

- **2026-09-10:** the diagnostic is commissioned; Round 0 begins from his
  reference photo. The original bank: 18 faces.
- **2026-09-11:** the build-out — 155 faces on disk (32 phase-1, 111
  phase-2 variants, 12 anchors), 8.61x the original 18, at his direction.
  The v2 telemetry audit: 17/50 pairs admitted (lips 11, nose 3, brow 3
  proxy-weak; jaw 0; eyes 0). The jaw-sharp inversion reproduced across
  builders. Wave-2 jaw/eyes regeneration with audit-informed prompts
  offered; awaiting his call. Strict selectable count: 66 (3.67x).
- **2026-09-13:** the methodology corrections relocate the remaining
  confound to the phase-2 jaw-soft variants and rename the fake
  "bootstrap" — the audit's findings refined, not overturned
  (`dat:1505-telemetry-lab-methodology-corrections-20260913`).
- **2026-09-18:** wave-2 still open. This entry expanded to full-article
  status; the zeros stand.

## Coverage and limits

This entry covers the stimulus set: its composition, its taxonomy, its
audit, and its open regeneration question. The audit *instrument* is
[[wiki/work/tech/projects/attraction-guide-telemetry]]; the *game* that
runs on the library is [[wiki/work/tech/projects/attraction-guide]]. Face
records' group/subgroup/sex tags are perceived tags on synthetic faces —
stimulus descriptions, not findings about real people. The local
face-recognition registry is never part of this library's story and is not
described here. Preference findings from game runs are not on this entry;
instruments here, findings where they are analyzed. The 2026-09-15
Lovense-session material is excluded by standing order.
