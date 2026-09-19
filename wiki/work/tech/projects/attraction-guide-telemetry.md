---
domain: work
page_type: concept
title: "attraction-guide telemetry lab — ~40-metric MediaPipe face vector"
status: active
date_created: 2026-09-11
date_modified: 2026-09-17
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - raw/sammy/20260914-0630/chats.json
  - "dat:1613-one-photo-workbench-shipped-20260916"
  - "dat:1668-workbench-facial-overlay-export-20260916"
  - "dat:1600-age-estimation-tool-shipped-20260915"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide
tags: [ai-collaboration]
connections:
  - page: wiki/work/tech/projects/attraction-guide
    type: component-of
    claim: "telemetry.html is the measurement layer the A/B game's evidence model grounds every pick in."
---

# attraction-guide telemetry lab

The standalone measurement instrument behind the A/B game: `telemetry.html` computes a ~40-metric MediaPipe vector per face, so preference picks can be attributed to specific geometric differences rather than vibe.

## v2 capabilities

- Image-quality refusal gates (bad inputs are rejected, not measured).
- Iris-anchored millimeter scale (real units, not pixel ratios).
- Contour areas.
- Offline solvePnP 3D twin for pose normalization.

## Verification

- The JS port was cross-validated 27/27 against the reference.
- An iOS upload bug was fixed 2026-09-11.

## What the lab actually measures

The ~40-metric vector is a face rendered as numbers. The metric families,
recoverable from the lab's own overlay and correction history:

- **Scale, in real units.** The iris-anchored millimeter scale converts
  pixel geometry to millimeters — the lab measures in mm, not ratios.
  Landmark geometry moved to pixel space in the 2026-09-13 corrections,
  with roll-corrected canthal tilt, so the numbers are in a defined
  coordinate frame rather than detector-native units.
- **Classical proportions, computed.** Thirds with U/M/L percentages,
  fifths, the midline — the overlay draws them as guidelines on the
  actual photo, cropped to the face. These are the proportions the game
  scores picks against.
- **The eyes, precisely.** Iris, IPD (interpupillary distance), and
  canthal tilts — the 2026-09-14 hardening fixed the canthal roll
  correction, bringing tilt drift vs the 2026-09-11 baseline down to
  0.012°. The eyes are the most over-measured part of the face because
  the iris anchor makes them the scale reference for everything else.
- **Contours and areas.** Contour areas (v2) measure regions, not just
  distances — the face as surfaces, not just landmarks.
- **Pose, decomposed.** The face transformation matrix is decomposed
  into explicit pitch/yaw/roll components (2026-09-13), and the offline
  solvePnP 3D twin normalizes pose — the lab knows which way the head
  was turned and corrects for it, rather than letting pose masquerade as
  geometry. Pose-dominated instability was the known weak point of the
  same-face reliability series; the decomposition and the twin are the
  answer.

One rename stayed undecided through the hardening pass: `fWHR (proxy)` →
"cheek: midface height." The old name was a proxy label — facial
width-to-height ratio measured by proxy — and the proposed rename says
what the metric actually is. The lab's vocabulary, like its math, gets
audited.

## Real units: why the iris anchors the scale

The iris-anchored millimeter scale is the lab's most quietly important
v2 feature. Pixel ratios — the old unit — are not comparable across
photos: the same face at different distances, crops, or resolutions
produces different numbers for the same geometry. The iris fixes that.
Iris diameter is anatomically stable across adult faces, so it serves as
a built-in ruler visible in every frontal photo: measure the iris in
pixels, convert everything else to millimeters against it, and the
numbers become comparable across photos, sessions, and detectors. The
lab measures in mm, not ratios, which is what makes the bank statistics
meaningful — z-scores against the bank only work if every face in the
bank was measured in the same units.

The anchor is also why the eyes are the most over-measured part of the
face (iris, IPD, canthal tilts in the overlay): the scale reference gets
measured hardest because everything else hangs off it. And it is why the
2026-09-11 iOS upload bug mattered enough to fix same-day — a broken
upload path on his primary client (his phone) is a broken instrument,
not a minor bug. The lab's numbers are only as good as the photos that
reach it, and the photos reach it through his phone. The 2026-09-16
workbench night reinforced the point twice over: Dan's import-button bug
("The button does nothing") got fixed in two rounds plus a paste fallback
"in case iOS is feeling spicy," because on his phone the fallback *is*
the instrument.

## Refusal gates and warn-and-report

The lab refuses bad inputs rather than measuring them. The v2
image-quality refusal gates reject inputs that cannot be measured
honestly — and the 2026-09-14 pass set the quality policy to
**warn-and-report**: the lab tells Dan what is wrong with an input and
what it did about it, with the A/B checkbox explanation added inline so
the quality judgment is visible at the point of use. This is the same
posture as the face-library audit: the instrument declares its inputs
unfit rather than producing numbers on garbage. A measurement with
declared error bars, not black-box output.

The denominator guards are the same story at the code level: fabricated
`|| 1` values — silent fallbacks that made division-by-zero impossible by
making the denominator a lie — were replaced with real guards, 35/35
guard tests passing. The lab no longer divides by a fiction. Small fix,
large epistemics: every number the lab reports now comes from a
denominator that was actually measured or explicitly guarded.

## The lab and the game's evidence model

The lab does not make findings; it makes the numbers findings are made
from. The game's evidence model scores every pick on measured metric
deltas (winner − loser), z-scored against bank statistics, with evidence
accruing per metric *direction*, never per prompt label. Every term in
that sentence is the lab's output: the metric deltas are the lab's
vectors differenced, the bank statistics are computed over the lab's
measurements of the bank (the anchors as reference frame), and the
per-direction discipline exists because the lab's audit proved prompt
labels lie (the jaw-sharp inversion, the inert eye-spacing edits). The
lab is upstream of every preference claim the suite has ever made. When
the 2026-09-13 corrections found the adiposity heavy tail was a detector
artifact, the blast radius was not one metric — it was every z-score
computed against the corrupted bank statistics, which is to say every
admission decision and every evidence accrual that touched adiposity.
The lab's errors are the suite's errors. That is why the lab gets
audited hardest.

The phase-2 per-feature A/B rows (|z| ≥ 0.5) are the lab's numbers shown
directly to Dan mid-game: for each materially-different metric, the game
can show the measured difference as its own A/B row. The instrument does
not just ground the evidence model invisibly; it surfaces the grounding
where he can see it. The 2026-09-11 instrument direction — grade each
facial difference 1–10 on amplification/moderation rather than forcing an
A/B pick — would make the lab's numbers even more central: the grades
would be judgments *about* measured differences, not replacements for
them.

## Verification as a standing practice

The lab's verification numbers read like a ledger, and they are worth
listing together because they are the instrument's real spec sheet:

- **27/27** — the JS port cross-validated against the reference
  (2026-09-11). The browser instrument agrees with the reference
  implementation on every check.
- **55/55** — the harness after the 2026-09-13 methodology corrections.
  The corrections did not just change the math; they re-verified it.
- **35/35** — the denominator-guard tests after the fabricated `|| 1`
  values were replaced (2026-09-14). The lab no longer divides by a
  fiction, proven per guard.
- **34/34** — the headless harness for analysis v3 (2026-09-11). The
  analysis was verified before it touched his judgment.
- **0.012°** — tilt drift vs the 2026-09-11 baseline after the canthal
  roll fix. The same-face reliability series, closed with a number.

No single one of these is the story. The story is that the lab is never
shipped without its harness green — verification first, humans second —
and that every correction re-runs the verification rather than assuming
it still holds. The suite's epistemic posture in five numbers.

## The ethnicity selector and the bank groups

One 2026-09-13 correction deserves its own note because it ties the lab
to the face library's taxonomy: the ethnicity selector was rebuilt from
the actual bank groups present in the face library instead of a generic
list. The old selector offered categories the bank did not contain —
options Dan could pick that filtered to nothing, or worse, that implied
coverage the stimulus set did not have. The rebuilt selector offers only
what the bank actually holds, which is the same honesty as the
"correctable, not canon" preset caveat and the disabled male-bank
selector: the instrument never implies coverage it does not have. The
perceived group/subgroup tags on every face record (`faces.json`) are
the taxonomy the selector reads; the lab reads the bank, not a generic
list. Small UI fix, same discipline as everything else on this entry:
declare the boundary where the authority ends.

## The lab as auditor

The lab's most consequential measurement was not of a face but of the
face library: the v2 audit admitted only 17/50 stimulus pairs (lips 11,
nose 3, brow 3 proxy-weak; jaw zero; eyes zero) — see
[[wiki/work/tech/projects/attraction-guide-face-library]] for the full
audit record. The instrument policing its own stimulus set is the suite's
signature move, and the lab is the instrument that does the policing.

The audit then got audited. The 2026-09-13 corrections found the phase-1
adiposity "heavy tail" was a detector artifact (reported SD 0.0364 →
0.0155 after the fix) — a phantom finding about the bank that had been
read, however briefly, as real. Any wiki prose or kb node that treated
that tail as preference signal is superseded. The lab's own measurement
error was found by the lab's own improvement pass, documented in
`dat:1505-telemetry-lab-methodology-corrections-20260913`, and the
findings it touched were corrected on the record. The lab audits its
inputs; the corrections audit the lab. There is no bottom to the stack,
which is the point — the stack is the product.

## Status (2026-09-18)

Live inside the attraction-guide deployment and inside the One-Photo
Workbench. The lab is also what audited the face library (admission 17/50
pairs, jaw and eyes zero — see
[[wiki/work/tech/projects/attraction-guide-face-library]]), i.e., the
instrument polices its own stimulus set. The 2026-09-18 workbench pass
fixed the 9% upload-hang — the lab's measurement pipeline stalling
mid-upload — as part of the day's workbench maintenance.

## Hardening pass (2026-09-14)

The full improvement program he commissioned ("I want you to make this as
good as it can possibly be") completed 2026-09-14 ~04:00Z, commits
`f1d594d` and `9187076` live:

- Canthal roll correction fixed; tilt drift vs the 2026-09-11 baseline down to **0.012°**.
- Denominator guards replaced fabricated `|| 1` values; **35/35 guard tests pass**.
- Metric robustness classified: **25 robust / 6 moderate / 16 fragile / 1 unknown**.
- Quality policy set to **warn-and-report**; the A/B checkbox explanation added inline.
- One rename undecided: `fWHR (proxy)` → **"cheek: midface height"**.

This closes the loop on the same-face reliability series (pose-dominated
instability was the known weak point) — he commissions the measurement,
then commissions the audit of the measurement, and this pass was the audit's
conclusion.

## The same-face reliability series

The hardening pass only makes sense against the series it closed. The
lab's known weak point was pose-dominated instability: measure the same
face twice at slightly different head angles and the numbers moved more
than the face did. For an instrument whose whole job is attributing
preference picks to geometric differences, pose masquerading as geometry
is the fatal confound — every "difference" between two faces might just
be a difference in how the heads were turned.

The series attacked the problem in layers. The offline solvePnP 3D twin
gave the lab a pose-normalized frame. The 2026-09-13 corrections
decomposed the face transformation matrix into explicit pitch/yaw/roll —
no more opaque transform hiding pose inside geometry — and moved landmark
geometry to pixel space with roll-corrected canthal tilt. The 2026-09-14
pass fixed the canthal roll correction itself and measured the result:
tilt drift vs the 2026-09-11 baseline down to 0.012°. The metric
robustness classification (25 robust / 6 moderate / 16 fragile / 1
unknown) is the series' final honesty label: the lab now declares, per
metric, how much you can trust it. A fragile metric is not a broken
metric — it is a metric whose error bars are bigger, stated up front.
The series is the clearest single example of his commissioning pattern:
he ordered the measurement, then ordered the audit of the measurement,
and the audit's conclusion shipped as commits `f1d594d` and `9187076` at
~04:00Z on 2026-09-14.

## The workbench as the lab's second body

The lab grew a workbench. On 2026-09-16 Dan ordered "Build One-Photo Workbench" and it shipped the same night (~00:53–01:09 UTC): a detection pass, age-slider morphing, kinship face-compare (his own face-similarity engine ported to WebGPU via transformers.js with the same cosine math as the Python version), per-face report cards, and JSON export wired to the breast_telemetry schema. Two live bugs were fixed the same night — telemetry broken in the test environment with no GPU delegate (the CPU fallback tripped over the same missing graphics code; fixed so the entire page no longer dies if graphics don't initialize) and Dan's import-button bug ("The button does nothing"), fixed in two rounds plus a paste fallback "in case iOS is feeling spicy." v2 shipped 02:02. Source: `dat:1613-one-photo-workbench-shipped-20260916`.

**Annotated-picture overlay, restored by order.** Dan ordered the workbench's facial telemetry back to the lab's annotated-picture form: guidelines on the actual photo, cropped to the face, with exports carrying the guidelines. Shipped: the facial card shows the annotated face crop (mesh, metric segments, thirds with U/M/L%, midline, fifths, iris, IPD and canthal tilts); the report JSON carries the annotated PNG baked in as a data URL; the export card has an "annotated png" download button. A cache-buster was pushed after Dan reported the overlay still missing on his phone (stale cached JS); he was asked to run one on his phone and confirm the crop. Source: `dat:1668-workbench-facial-overlay-export-20260916`.

**Sibling instrument.** The 2026-09-15 instrument burst also produced a visual age-estimation tool (`danfr4nk.github.io/tools/age/`): in-browser ViT, nothing uploaded, plus CLI and research writeup — commissioned ~19:40 EDT, shipped the same evening, per his standing web-delivery rule. The open thread from that burst is chaining the tools into a workbench — by 2026-09-16 the workbench existed, and the chaining question is where it points next. Source: `dat:1600-age-estimation-tool-shipped-20260915`.

The workbench is best understood as the lab's second body. The lab
measures one face; the workbench is a whole photo desk built around the
lab's measurement — detection pass, age-slider morphing, kinship
face-compare, per-face report cards, JSON export. The kinship
face-compare is his own face-similarity engine ported to WebGPU via
transformers.js, running the same cosine math as the Python version: his
algorithm, his math, now in the browser. The annotated-picture
restoration (2026-09-16, by his order) brought the workbench's facial
telemetry back to the lab's visual form — guidelines on the actual photo,
cropped to the face, exports carrying the guidelines — which is to say
the workbench now *looks* like the lab because it *is* the lab, extended.
The report JSON carries the annotated PNG as a data URL; the export card
has an "annotated png" download button. The measurement and its visual
evidence travel together, inseparable.

The chaining thread — the open question from the 2026-09-15 burst about
chaining the tools into a workbench — is where the lab points next. The
lab, the workbench, the age tool, the scenario instruments: the
trajectory is toward one desk with many instruments rather than many
standalone pages, and the lab is the measurement core the desk is built
around. The 2026-09-18 upload-hang fix (the 9% stall, fixed in the day's
workbench maintenance) is the desk's plumbing being kept clear — unglamorous,
load-bearing, the kind of maintenance a real instrument gets.

## Complete log

- **2026-09-11:** telemetry lab v2 ships — image-quality refusal gates,
  iris-anchored mm scale, contour areas, offline solvePnP 3D twin; JS
  port cross-validated 27/27; iOS upload bug fixed same day. The lab
  audits the face library: 17/50 pairs admitted, jaw and eyes zero.
- **2026-09-13:** methodology corrections — pitch/yaw/roll
  decomposition, "bootstrap" renamed "landmark-noise jitter," honest
  Wilson states for n=0 and n<4, ethnicity selector rebuilt from actual
  bank groups, pixel space + roll-corrected canthal tilt, the adiposity
  heavy tail traced to a detector artifact (SD 0.0364 → 0.0155), confound
  relocated to phase-2 jaw-soft variants; harness 55/55
  (`dat:1505-telemetry-lab-methodology-corrections-20260913`).
- **2026-09-14:** the hardening pass ("make this as good as it can
  possibly be") — canthal roll fix, tilt drift 0.012°, denominator
  guards 35/35, robustness 25/6/16/1, warn-and-report quality policy;
  the same-face reliability series closed.
- **2026-09-15:** the sibling age-estimation tool ships; the suite moves
  to `Danfr4nk/tools` (`tools/attraction/`); the chaining thread opens
  (`dat:1600-age-estimation-tool-shipped-20260915`).
- **2026-09-16:** the One-Photo Workbench ships (detection pass,
  age-slider morphing, kinship face-compare on WebGPU, report cards, JSON
  export); two live bugs fixed same night; the annotated-picture overlay
  restored by his order with data-URL PNG in the report JSON and an
  annotated-png download button; cache-buster after his phone report
  (`dat:1613-one-photo-workbench-shipped-20260916`,
  `dat:1668-workbench-facial-overlay-export-20260916`).
- **2026-09-18:** workbench upload-hang (9% stall) fixed; this entry
  expanded to full-article status, bringing the hub's whole component
  family up to the article minimums.

## Coverage and limits

This entry covers the telemetry lab as the suite's measurement core: what
it measures, how it refuses bad inputs, how it was hardened, how it
audits the face library, and how it grew the workbench. The audit's
*findings* about the stimulus set live at
[[wiki/work/tech/projects/attraction-guide-face-library]]; the game that
consumes the lab's vectors is [[wiki/work/tech/projects/attraction-guide]];
the scenario line is [[wiki/work/tech/projects/attraction-guide-scenario]].
The lab measures synthetic and supplied faces; it does not identify
people, and the local face-recognition registry is never part of its
story. Fragile metrics (16 of the ~40, per the 2026-09-14 classification)
carry their fragility as a stated property — the lab's numbers come with
their error bars attached, and any downstream claim that forgets them is
overstating. Two items remain open from the correction history: the
`fWHR (proxy)` → "cheek: midface height" rename was never decided, and
the JS drift audit noted in the 2026-09-13 corrections is blocked pending
harness infrastructure. The lab's vocabulary and its drift-check are the
two unaudited corners of an otherwise fully audited instrument.

## Place in the larger system

The same "instrument that audits its own inputs" pattern as the scenario ratings v2 design (single-knob modifiers to kill the correlational attribution flaw) and the stylometry 30-minute scorer — measurement with declared error bars, not black-box output.
