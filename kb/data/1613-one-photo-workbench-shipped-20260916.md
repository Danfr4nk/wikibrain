+++
id         = "dat:1613-one-photo-workbench-shipped-20260916"
layer      = 1
type       = "datum"
title      = "One-Photo Workbench shipped; GPU-fallback bug fixed; import bug fixed x2"
claim      = "On 2026-09-16 ~00:53-01:09 UTC the One-Photo Workbench shipped (Dan: 'Build One-Photo Workbench'): detection pass, age-slider morphing, kinship face-compare (his own face-similarity engine ported to WebGPU via transformers.js with the same cosine math as the Python version), per-face report cards, and JSON export wired to the breast_telemetry schema. Live bug found and fixed same night: the workbench went live but telemetry was broken in the test environment — no GPU delegate, and the CPU fallback tripped over the same missing graphics code ('I fixed it so the entire page no longer dies if the graphics don't initialize. The CPU rebuild was silently breaking'). Dan's import bug ('The button does nothing,' 01:30, with video) was fixed in two rounds: the button now works, plus a paste fallback 'in case iOS is feeling spicy.' v2 shipped 02:02. He moved to the repo tools chat to continue; import of his Lexi telemetry JSON verified."
cites      = ["src:sammy-chat-transcript-20260916-0352"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat rows 2026-09-16T00:53:29-02:02:30Z, batch 20260916-0352."
importance = 3
tags       = ["instruments", "workbench", "telemetry", "2026"]
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

<!-- prose for humans; the frontmatter is for machines -->
