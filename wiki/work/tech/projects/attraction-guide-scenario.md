---
domain: work
page_type: concept
title: "attraction-guide scenario instruments — preset telemetry (v6) and causal scenario ratings (v2)"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide
tags: [ai-collaboration, psychosexual]
connections:
  - page: wiki/work/tech/projects/attraction-guide
    type: component-of
    claim: "scenario.html and scenario-rate.html are the scenario-perturbation instruments of the attraction-guide deployment."
---

# attraction-guide scenario instruments

Two instruments inside the attraction-guide deployment that measure *situational* preference, separate from the main A/B game's facial-metric engine.

## Scenario telemetry v6 (`scenario.html`)

- Named preset picker: foursome / her ex / she watches / 2019 baseline. (The preset vectors are the builder's reading of Dan's one-liners — correctable, not canon.)
- Phase 1 = preset bouts; phase 2 = metric isolation.

## Scenario ratings v2 (`scenario-rate.html`)

The causal redesign of the fantasy-rating instrument:

- Every modifier changes **exactly one metric** versus its base — 168 single-knob modifiers, deterministic rotation, each metric perturbed 6–8x.
- Readout is causal knob-effect deltas, not correlations.
- 28 bases / 196 items.
- v1's correlational attribution flaw fixed (v1: 121 rated of 122, mean 8.36, 64% at 9–10 — heavy ceiling; documented at `~/workspace/your_files/SCENARIO_PROFILE.md` + `SCENARIO_REPORT.md`).

The rating *results* (the profile itself) are analyzed in Q1's entry work, not here — this page covers the instrument.

## Status (2026-09-11)

Both live in the deployment. Instrument direction per Dan (2026-09-11): grade each difference 1–10 on amplification/moderation of preference rather than forcing an A/B pick.
