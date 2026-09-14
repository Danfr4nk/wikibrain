+++
id         = "dat:1468-body-model-person-b-starvation-person-a-std-floor-fix"
layer      = 1
type       = "datum"
title      = "Body-model builds 2026-09-12: Person-B 0/10 usable (ankle-detector starvation), Person-A built from 3, std-floor bug fixed (holdout 4000.016 to 9.370)"
claim      = "Two person-models built from 10 web pinup photos: Person-B yielded 0 usable of 10 - the ankle detector starved because web pinup shots put feet at the frame edge, cross legs, or place two bodies per frame; Person-A built from 3 usable photos. A std-floor bug was fixed after a holdout anomaly (4000.016 -> 9.370). Same session: telemetry-lab visual treatments (HUD frame, midline, fifths, iris reticles, CAD dims, scanlines, CI whiskers, delta-percent bars) shipped in the attraction-guide repo, commit 2946fb8."
cites      = ["src:sammy-chat-transcript-20260912-2345"]
confidence = "high"
importance = 3
tags       = ["facial-preference-mapping", "body-model", "telemetry", "instrument-build", "2026"]
created    = "2026-09-12"

[when]
date   = "2026-09-12"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Reading

A small, honest failure log. Person-B's 0/10 is not a model failure —
it is a measurement of what web pinup photography does to ankle
detection (feet at frame edge, crossed legs, two bodies per frame).
The std-floor fix (holdout 4000.016 → 9.370) is the window's
false-precision episode: the instrument was producing confident-looking
nonsense until the floor was clamped. Dan's build behavior this window
is consistent — push tools against real evidence, accept hard rejection
gates, kill the tool when it fails its domain (cf. dat:1467). No
pattern claim is made here; the corpus has a candidate (`audit-strong-on-numbers-weak-on-meaning`)
but the boring explanation — ordinary iterative debugging — is not yet
ruled out.
