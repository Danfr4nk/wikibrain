+++
id         = "dat:0064-telemetry-v2-instrument"
layer      = 1
type       = "datum"
title      = "Telemetry v2 instrument: quality gates, iris-anchored mm, solvePnP 3D"
claim      = "v2 adds: quality vector with pass/warn/fail (instrument refuses bad inputs instead of numbering them; 18/18 bank faces pass), iris-anchored mm scale (11.7mm iris, IPD 60.2-64.1mm adult-plausible), contour areas (eye fissure, lip vermilion), true 3D pose via offline solvePnP (|yaw|<=1.3deg, |pitch|<=5.3deg, frontal as expected), per-side decomposition, mouth-corner drop, brow apex angle. v1/v2 parity on shared keys: max abs diff 0.0."
cites      = ["src:facial-telemetry-bank-v2-2026-09-10"]
confidence = "high"
importance = 3
tags       = ["facial-telemetry,instrument"]
created    = "2026-09-11"
+++

<!-- prose for humans; the frontmatter is for machines -->
