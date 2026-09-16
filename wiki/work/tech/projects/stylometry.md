---
domain: work
page_type: concept
title: "Stylometry tracker — 30-minute linguistic state scoring"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
related:
  - wiki/work/tech/projects/index
  - wiki/mind/profile/linguistic-profile
tags: [ai-collaboration, self-measurement]
connections:
  - page: wiki/mind/profile/linguistic-profile
    type: instantiates
    claim: "The tracker operationalizes the linguistic profile as a live instrument: a 29-feature extractor scored every 30 minutes against the 94,503-message outbound baseline."
---

# Stylometry tracker

Continuous linguistic state monitoring Dan commissioned 2026-09-11: a 29-feature extractor scores his outbound writing every 30 minutes against a baseline of 94,503 outbound iMessages (2011–2026), with one daily digest at 09:00 ET in the pinned REPO: STYLOMETRY side chat.

## Architecture

- **Code:** `~/workspace/stylometry/` — `features.py` (29-feature extractor), `baseline.py` (+ `baseline_windows.py`), `baseline.json`, `contrast.py`, `lexicon.json`, `labels.jsonl`.
- **Baseline:** 94,503 outbound iMessages, 2011–2026.
- **Cadence:** quiet scoring every 30 minutes; one daily digest at 09:00 ET. The digest moved out of the video-gen side chat into its own pinned REPO: STYLOMETRY chat 2026-09-11.
- **Calibration rule:** Dan's own state labels are ground truth, not inference fodder. The first label is his own: the 00:47–05:35 ET music chat = cannabis-high (same-night self-label).
- **Tracking:** tracked item `goal_c8a900e3c0da`.

## Status (2026-09-11)

Running. Scoring is quiet; only the daily digest surfaces.

## Place in the larger system

The twin of the attraction-guide: measurement infrastructure aimed at Dan's own interior, built by models, calibrated by Dan. The tracker is behavioral-state measurement where the attraction-guide is preference measurement — together they are the self-instrumentation wing of the 2026 builder wave.
