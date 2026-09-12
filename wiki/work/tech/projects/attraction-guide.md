---
domain: work
page_type: concept
title: "attraction-guide — staged A/B facial-attraction diagnostic"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide-telemetry
  - wiki/work/tech/projects/attraction-guide-scenario
  - wiki/work/tech/projects/attraction-guide-face-library
tags: [ai-collaboration, psychosexual]
connections:
  - page: wiki/work/tech/projects/attraction-guide-telemetry
    type: component-of
    claim: "The telemetry lab supplies the ~40-metric MediaPipe vector that grounds every preference pick in measured facial geometry."
  - page: wiki/work/tech/projects/attraction-guide-face-library
    type: component-of
    claim: "The 155-face stimulus library (3.67x strictly selectable) is the stimulus set the game runs on."
---

# attraction-guide

A rerunnable staged A/B portrait game that maps what Dan finds attractive in a face — commissioned by Dan (diagnostic skill `facial_preference_mapping`), built by AI direction, live at https://danfr4nk.github.io/attraction-guide/ (repo `Danfr4nk/attraction-guide`).

## Purpose

Turn an opaque preference ("what he finds attractive") into measured, falsifiable data: adaptive A/B bouts between generated faces, every pick grounded in telemetry, headless verification of the analysis.

## Architecture

- **Repo pattern:** no local git repo — pushes go through `test/push-via-api.py` via the Git Data API (same API-only pattern as hook2piano's `push.py`).
- **Game v2 (current engine):** adaptive drill-down, metric-grounded evidence per pick, uncertainty-based axis queue, pair-validity auto-exclusion, confound flagging. Phase-2 pairs show optional per-feature A/B rows per materially-different metric (|z|≥0.5).
- **Analysis v3:** unified evidence model — direct picks override holistic reads, count cross-axis, confounded reads dropped. Wilson 95% CIs on all preference rates, marginal-preferences profile table, configurality index. Headless harness 34/34 green.
- **Instrument direction (2026-09-11):** Dan wants each facial difference graded 1–10 on how much it amplifies or moderates the preference choice, rather than forcing an A/B pick.

## Component entries

- [[wiki/work/tech/projects/attraction-guide-telemetry]] — telemetry.html, the ~40-metric MediaPipe lab
- [[wiki/work/tech/projects/attraction-guide-scenario]] — scenario.html (v6) and scenario-rate.html (v2)
- [[wiki/work/tech/projects/attraction-guide-face-library]] — the 155-face stimulus set and its audit results

## Status (2026-09-11)

Live. Game v2 + analysis v3 verified headless 34/34. Wave-2 jaw/eyes face regeneration offered, awaiting Dan's call.

## Place in the larger system

The same instrument-builder impulse as the stylometry tracker: a continuous/self-measurement apparatus aimed at Dan's own interior, built by the models, calibrated by Dan's own labels. It sits at the intersection of the psychosexual wiki cluster and the tech builder wave.
