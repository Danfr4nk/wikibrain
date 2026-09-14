---
domain: work
page_type: concept
title: "attraction-guide telemetry lab — ~40-metric MediaPipe face vector"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
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

## Status (2026-09-11)

Live inside the attraction-guide deployment. The lab is also what audited the face library (admission 17/50 pairs, jaw and eyes zero — see [[wiki/work/tech/projects/attraction-guide-face-library]]), i.e., the instrument polices its own stimulus set.

## Place in the larger system

The same "instrument that audits its own inputs" pattern as the scenario ratings v2 design (single-knob modifiers to kill the correlational attribution flaw) and the stylometry 30-minute scorer — measurement with declared error bars, not black-box output.
