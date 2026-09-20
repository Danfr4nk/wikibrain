+++
id         = "dat:1829-breast-telemetry-plausibility-gate-20260919"
layer      = 1
type       = "datum"
title      = "Breast-telemetry plausibility gate required after verdict-firm-on-total-miss"
claim      = "02:33-02:35Z: Dan caught the workbench writing 'verdict firm' over a total misfire (areola ellipse fit locked onto her curled hand; half the edge ticks sat on blinds): 'The uncertainty machinery did not catch a total miss. It needs a plausibility gate - reject areola candidates up at face height, or require b...' (truncated). 'Fix' (02:35:47Z) -> 'Fixed and live' (02:42:42Z). The fix (commit 8d61af8, live on danfr4nk.github.io): vetoSeedBlobs rejects elongated dark cores (>3:1 bbox aspect) and seeds inside SCRFD face boxes; ycrcbSkin excludes bright neutrals (V>215 && sat<0.20); all-candidates-vetoed returns honest null with veto count disclosed in the cup note. MEMORY.md carries the commit record."
cites      = ["src:20260920-0630-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Chat rows 2026-09-20, batch 20260920-0630 (raw/sammy/20260920-0630/)"
importance = 3
tags       = ["instruments", "breast-telemetry", "workbench"]
created    = "2026-09-20"

[when]
date   = "2026-09-20"
+++

<!-- prose for humans; the frontmatter is for machines -->
