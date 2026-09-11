+++
id         = "src:facial-telemetry-bank-v2-2026-09-10"
layer      = 0
type       = "source"
title      = "Facial telemetry bank v2 (2026-09-10)"
confidence = "high"
source_type = "document"
provenance = "operator-supplied; archived raw/sammy/20260911-1941/"
reliability = "primary"
importance = 4
tags       = ["facial-telemetry", "attraction-diagnostic", "instrument"]
created    = "2026-09-11"
+++

<!-- prose for humans; the frontmatter is for machines -->
Full-bank facial telemetry reference (v2), 2026-09-10: 18 bank faces through
the ~40-metric MediaPipe vector with v2 additions (quality vector with
pass/warn/fail gates, iris-anchored mm scale at 11.7mm iris, contour areas for
eye fissure and lip vermilion, true 3D pose via offline solvePnP with
reprojection error). v1/v2 parity on shared ratio keys: max abs diff 0.0.
Raw artifacts: `raw/sammy/20260911-1941/facial-telemetry-bank-v2-2026-09-10.md`
(report), `facial-telemetry-bank-v2-2026-09-10.json` (full metrics),
`pair-audit-2026-09-11.json` (pair-validity audit: 17/50 pairs admitted).
Underlies the attraction-guide diagnostic's phase-2 pair sampling.
