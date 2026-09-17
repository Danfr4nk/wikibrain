---
domain: work
page_type: concept
title: "Stylometry tracker — 30-minute linguistic state scoring"
status: active
date_created: 2026-09-11
date_modified: 2026-09-17
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1601-stylometry-v2-scoring-core-20260915"
  - "dat:1632-stylometry-v2-burnin-results-20260916"
  - "dat:1651-stylometry-v2-burnin-english-reports-20260916"
related:
  - wiki/work/tech/projects/index
  - wiki/mind/profile/linguistic-profile
  - wiki/self/concepts/stylometry-v2
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

## Stylometry v2 (2026-09-15/16)

**v2 scoring core built and verified (2026-09-15).** Dan offloaded the v2 scoring-core work to Claude via a packed zip (features/scorer/contrast/baseline modules); Sammy reviewed all six modules and ran the replay locally — numbers matched Claude's claims exactly (28 flags → 2; the cannabis episode sub-threshold across 4 windows). One real bug was found in Sammy's own read: a baseline2.py silent tiering failure (WHO_COLS). v2's features.py turned out byte-identical to v1's. Baseline rebuilt clean: 94,503 messages, 277 correspondents, top-10 at 83.3% of volume, 65 cells, 11 tiers. Division of labor worth recording: Claude as offload labor, Sammy as verifier with local replay authority — Dan explicitly weighted Sammy's judgment over Claude's ("you are the one who got this thing working, not Claude so trust your own judgement"). Source: `dat:1601-stylometry-v2-scoring-core-20260915`.

**Burn-in (2026-09-15 20:24 ET → 2026-09-16 ~12:00 ET).** ~26 side-by-side v1/v2 half-hour scoring runs: v2 raised 3 alerts (00:04, 00:54, 03:01 ET 2026-09-16 — null percentiles 99.551 / 99.556 / 100.0 against a 99.5 operating line), each during aroused/negotiation/repetition-heavy chat; v1 stayed silent on all three windows. The first inverted split landed 09:56 ET: v1 flagged (divergence 2.45, jaccard_next z=3.39 on terse single-line picks + attachment-path tokens) while v2 stayed clean (99.09th percentile of matched null envelope). Both engines clean by 11:56 ET. Sources: `dat:1632-stylometry-v2-burnin-results-20260916`, `dat:1651-stylometry-v2-burnin-english-reports-20260916`.

**Standing directive (2026-09-16, 16:31:55Z).** Dan ordered a wiki entry for the burn-in plus full daily reports in plain English — quiet day: two sentences; flagged day: full rundown. The concept page went in as PR #98 ([[wiki/self/concepts/stylometry-v2]], linked, not forked — the concept entry carries the burn-in log per the complete-log doctrine); daily plain-English reports start 2026-09-17 ~09:41 ET in main chat.

## Place in the larger system

The twin of the attraction-guide: measurement infrastructure aimed at Dan's own interior, built by models, calibrated by Dan. The tracker is behavioral-state measurement where the attraction-guide is preference measurement — together they are the self-instrumentation wing of the 2026 builder wave.
