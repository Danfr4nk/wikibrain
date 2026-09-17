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

## Status (2026-09-14)

Live inside the attraction-guide deployment. The lab is also what audited the face library (admission 17/50 pairs, jaw and eyes zero — see [[wiki/work/tech/projects/attraction-guide-face-library]]), i.e., the instrument polices its own stimulus set.

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

## The workbench evolution (2026-09-16)

The lab grew a workbench. On 2026-09-16 Dan ordered "Build One-Photo Workbench" and it shipped the same night (~00:53–01:09 UTC): a detection pass, age-slider morphing, kinship face-compare (his own face-similarity engine ported to WebGPU via transformers.js with the same cosine math as the Python version), per-face report cards, and JSON export wired to the breast_telemetry schema. Two live bugs were fixed the same night — telemetry broken in the test environment with no GPU delegate (the CPU fallback tripped over the same missing graphics code; fixed so the entire page no longer dies if graphics don't initialize) and Dan's import-button bug ("The button does nothing"), fixed in two rounds plus a paste fallback "in case iOS is feeling spicy." v2 shipped 02:02. Source: `dat:1613-one-photo-workbench-shipped-20260916`.

**Annotated-picture overlay, restored by order.** Dan ordered the workbench's facial telemetry back to the lab's annotated-picture form: guidelines on the actual photo, cropped to the face, with exports carrying the guidelines. Shipped: the facial card shows the annotated face crop (mesh, metric segments, thirds with U/M/L%, midline, fifths, iris, IPD and canthal tilts); the report JSON carries the annotated PNG baked in as a data URL; the export card has an "annotated png" download button. A cache-buster was pushed after Dan reported the overlay still missing on his phone (stale cached JS); he was asked to run one on his phone and confirm the crop. Source: `dat:1668-workbench-facial-overlay-export-20260916`.

**Sibling instrument.** The 2026-09-15 instrument burst also produced a visual age-estimation tool (`danfr4nk.github.io/tools/age/`): in-browser ViT, nothing uploaded, plus CLI and research writeup — commissioned ~19:40 EDT, shipped the same evening, per his standing web-delivery rule. The open thread from that burst is chaining the tools into a workbench — by 2026-09-16 the workbench existed, and the chaining question is where it points next. Source: `dat:1600-age-estimation-tool-shipped-20260915`.

## Place in the larger system

The same "instrument that audits its own inputs" pattern as the scenario ratings v2 design (single-knob modifiers to kill the correlational attribution flaw) and the stylometry 30-minute scorer — measurement with declared error bars, not black-box output.
