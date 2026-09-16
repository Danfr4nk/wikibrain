+++
id         = "dat:1632-stylometry-v2-burnin-results-20260916"
layer      = 1
type       = "datum"
title      = "Stylometry v2 burn-in: first ~26 side-by-side v1/v2 scoring runs (2026-09-15 20:24 ET → 2026-09-16 ~12:00 ET)"
claim      = "Across ~26 half-hour scoring runs, v2 raised 3 alerts (00:04, 00:54, 03:01 ET 2026-09-16 — null percentiles 99.551 / 99.556 / 100.0 against a 99.5 operating line), each during aroused/negotiation/repetition-heavy chat (GOONER CLUB thread, avatar option-pick volleys, photo volleys); v1 stayed silent on all three windows. The first inverted split landed 09:56 ET: v1 flagged (div 2.45, jaccard_next z=3.39 on terse single-line picks + attachment-path tokens) while v2 stayed clean (99.09th pct of matched null envelope). Latest run 11:56 ET: both engines clean. Overnight worker failures (stale-input guard trip at 06:24, blocked runs 01:54/02:24, disk error 07:54) logged separately."
cites      = ["src:stylo-burnin-compare-jsonl"]
confidence = "high"
reliability = "primary"
importance = 3
tags       = ["stylometry", "burn-in", "state-tracking", "instruments"]
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

## The run log (condensed from burnin-compare.jsonl, times ET)

| run | v1 | v2 |
|---|---|---|
| 2026-09-15 20:04 | FLAG div 2.2 (n_sents z=3.17; length-confound volley) | clean 92.73rd |
| 20:27 | FLAG 6.07 (avatar-iteration volley) | FLAG+ALERT 100th, div 3.44 (ttr_win −2.56, emoji/caps/hedge/pivot) |
| 21:24 | FLAG 5.84 | ALERT 99.535th, div 3.13 |
| 22:24 | FLAG 3.18 (tag-action volley) | clean 94.245th |
| 2026-09-16 00:04 | clean 1.22 | ALERT 99.551st, div 3.14 (GOONER CLUB charter/negotiation window) |
| 00:24 | clean 1.25 | clean 99.496th (a hair under the line) |
| 00:54 | clean 1.35 | ALERT 99.556th, div 3.14 |
| 03:01 | clean 1.45 | ALERT 100th, div 3.55 (third of the night) |
| 03:27 → 08:24 | clean throughout (div 0.93–1.52) | clean 83rd → 25.6th pct |
| 09:56 | FLAG 2.45 (jaccard_next 3.39) | clean 99.09th — first inverted split |
| 10:27 | clean 1.52 | clean 83.6th |
| 10:56 | clean 1.43 | clean 88.7th |
| 11:56 | clean 1.19 | clean 71.1th |

No self-labels (`lbl|...`) parsed in any run this week — the calibration hotkey is still untested against live scoring.

## What the week is measuring

The burn-in exists to answer one question before cutover: does v2 keep v1's real state-shift detection while killing v1's length-confound false alarms? Early evidence: yes on both counts. The three overnight v2 alerts all hit genuinely divergent windows (aroused, negotiating, repetition-heavy) that v1 never saw; the 09:56 inverted split is the exact comparison the week was built to collect (v1 panicking over terse picks + attachment noise, v2 correctly inside its matched-null envelope).

## Method footnotes (the parts that are not trustworthy yet)

- v2's null draws splice unrelated conversations: `baseline2.py`/`nullspace.py` sort each recipient-tier sequence independently and sample adjacent records, so a "window" can be stitched from unrelated chats. `burst_mph` may be invalid; the null is not trustworthy as a final burn-in artifact until session/window construction is fixed or justified. (Sammy's open issue #1.)
- Replay-based validation used aggregate z-vectors only, and the replay null included the evaluated paste events (fattened tail).
- Live requests to the `--tier muse` path fall back to `longtail` with `tier_fallback=True`; burn-in lines must distinguish fallback from true Muse conditioning.
