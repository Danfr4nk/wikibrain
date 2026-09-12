---
domain: work
page_type: entity
title: "Attraction Guide (instrument suite)"
status: active
knowledge: earned
date_created: 2026-09-12
date_modified: 2026-09-12
sources:
  - "raw/sammy/20260912-1940/"
tags: [ai-collaboration, instruments, psychosexual, facial-preference]
connections:
  - page: wiki/mind/psychosexual/scenario-ratings-profile
    type: parallels
    claim: "Scenario Ratings measures what he wants; Frame Describe standardizes how he sees. Two halves of the same attraction-instrument stack."
---

# Attraction Guide (instrument suite)

The attraction guide is Dan's deployed instrument suite for mapping what
he finds attractive — live at <https://danfr4nk.github.io/attraction-guide/>
(repo `Danfr4nk/attraction-guide`; pushes go through the Git Data API, no
local git repo). A splash page indexing the whole suite went live
2026-09-12 (commit `c798ca6`): cards for the Diagnostic, Telemetry Lab,
Scenario Ratings, Scenario Telemetry, and Face Book; the game itself
moved to `/game.html`.

**The instruments:**

- **Diagnostic (game v2)** — the staged A/B portrait game: adaptive
  drill-down, metric-grounded evidence per pick, uncertainty-based axis
  queue, pair-validity auto-exclusion, confound flagging; phase-2 pairs
  show optional per-feature A/B rows per materially-different metric
  (|z| ≥ 0.5).
- **Telemetry Lab** (`telemetry.html`) — ~40-metric MediaPipe face
  vector; v2 added image-quality refusal gates, iris-anchored mm scale,
  contour areas, offline solvePnP 3D twin; the JS port cross-validated
  27/27 against the Python reference.
- **Scenario Ratings** (`scenario-rate.html`) — v2 is the causal
  single-knob design: every modifier changes exactly one metric vs its
  base (168 modifiers, deterministic rotation, each metric perturbed
  6–8x); readout is causal knob-effect deltas. Supersedes v1's
  correlational readout (see the scenario-ratings profile page).
- **Scenario Telemetry** (`scenario.html`) — named preset picker
  (foursome / her ex / she watches / 2019 baseline); phase 1 = preset
  bouts, phase 2 = metric isolation.
- **Face Book** (`face-book.html`) — the browsable catalog of the
  155-face library (32 phase-1, 111 phase-2 variants, 12 anchors).
- **Frame Describe** (`frame-describe.html`) — live 2026-09-12: an
  open-ended, exhaustive frame/body description tool, deliberately not
  precision-based. Provider-agnostic — bring your own vision API key
  (stored in localStorage), per-run custom instructions.

## The Frame Describe lexicon v0.1

The tool runs on Dan's own descriptive register, committed 2026-09-12
after the assistant trawled 99k of his outbound texts for body-descriptor
vocabulary and reported an honest thin result — the attested hits
("frame," "perfect body," "nice tits," "juicy ass") couldn't carry an
instrument, so the lexicon came from Dan's supplied terms instead:

- Subject noun: **"girl"**
- Lead line grammar: `[hair] [single defining trait] girl`
- **"titties"** — cup size always estimated, never hedged
- **"babyfat"** — soft stomach
- **"tats"** — never "tattoos"; ink coverage in degrees
  ("360° neck tats," "full sleeves")
- Output sections, in order: **lead / body inventory / ink inventory /
  face report / aura** — the aura being "the major visual and
  psychosexual theme in her aura"

This is the first committed record of his descriptive vocabulary for
women's bodies — the earlier attested body terms ("frame," "jelly,"
"mogged," "perfect," "delicious," "juicy," "nice") remain valid but were
never organized into an instrument grammar.

Evidence: `dat:1462-frame-describe-lexicon-20260912`
(source: `src:sammy-chat-transcript-20260912-1940`).
