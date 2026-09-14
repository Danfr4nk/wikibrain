+++
id         = "dat:1522-telemetry-lab-double-scaling-bug-20260913"
layer      = 1
type       = "datum"
title      = "Telemetry Lab drift audit caught live double-scaling bug"
claim      = "Dan commissioned a drift harness + audit at 21:47:40Z ('Yes — build the harness and run the drift audit'). It caught a live bug: the six _px metrics (face width, face height, IPD, nose width/length, mouth width) were double-scaled after the pixel-space refactor — the live lab had been reporting face widths around 1,000,000 pixels. Fixed, deployed as 4d85100, verified live, post-fix drift exactly 0.000. The harness (test/drift-harness/, rerunnable in one command) snapshots the 2026-09-11 lab code, freezes one detector run per bank face (478 landmarks + face matrix, 155/155), and runs old-vs-new math on identical inputs, detector excluded. Drift results: unexplained drift none — everything that moved is accounted for. Aspect correction: the old math was badly distorted on portrait images (width/height ratio max |z| 22.9, fWHR proxy 14.4, eye width-to-height 10.0) — not drift, the fix working. 3D pose: roll moves up to 4.39° vs the old proxy, frontality up to 16.6, 8 of 155 faces change quality grade under true pose; old proxy path stable (max 0.114°). Roll-corrected tilt: mean 1.16°, max 2.23° — roll decontamination only. Stable: yaw proxy, asymmetry_9, mean asymmetry — zero drift; V3 zero drift across the board. Full per-metric table in test/drift-harness/DRIFT-REPORT.md on the live site."
cites      = ["src:sammy-chat-transcript-20260913-2340"]
confidence = "high"
reliability = "primary"
extraction = "User row 21:47:40Z; assistant rows 21:47:46Z (harness description), 21:56:43Z (audit results). This is instrument history for the face-preference lab (155-face bank)."
importance = 2
tags       = ["telemetry-lab", "instrument", "drift-audit", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->
