+++
id         = "dat:1505-telemetry-lab-methodology-corrections-20260913"
layer      = 1
type       = "datum"
title      = "Telemetry Lab methodology corrections, 2026-09-13 (16:43–17:12Z)"
claim      = "During the 2026-09-13 improvement pass on the Telemetry Lab (telemetry.html, the ~40-metric MediaPipe face vector instrument in the attraction-guide suite), the assistant reported and Dan accepted a set of methodology corrections: (1) the face transformation matrix was decomposed into explicit pitch/yaw/roll components instead of a single opaque transform; (2) the 'bootstrap' resampling step was renamed 'landmark-noise jitter' — the old name implied a statistical bootstrap that was not being performed; (3) the Wilson score interval display was corrected to show honest states for n=0 and n<4 rather than rendering misleading intervals; (4) the ethnicity selector was rebuilt from the actual bank groups present in the face library instead of a generic list; (5) landmark geometry moved to pixel space with roll-corrected canthal tilt; (6) the phase-1 adiposity 'heavy tail' — previously read as a real distributional finding — was traced to a detector artifact, with the reported SD collapsing 0.0364 → 0.0155 after the fix; (7) the actual remaining confound was relocated to phase-2 jaw-soft variants. Harness: 55/55 checks passed. Open: the JS drift audit is blocked pending harness infrastructure."
cites      = ["src:sammy-chat-transcript-20260913-1830"]
confidence = "high"
reliability = "primary"
extraction = "Assistant's contemporaneous in-chat report 2026-09-13T16:43–17:12Z, accepted by Dan in the same window; SD figures and 55/55 harness result are the assistant's stated measurements. The attraction-guide repo (Danfr4nk/attraction-guide) holds the code; this node is the evidence record of what changed and why."
importance = 3
tags       = ["telemetry-lab", "attraction-guide", "methodology", "facial-preference-mapping", "2026"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->

The single most load-bearing correction: the phase-1 adiposity heavy tail
was not a finding about Dan's preferences — it was the detector. Any wiki
prose or kb node that ever treated that tail as real preference signal is
superseded by this pass. The rename of "bootstrap" to landmark-noise jitter
matters the same way: the old name laundered an unjustified statistical
claim into the instrument's vocabulary.
