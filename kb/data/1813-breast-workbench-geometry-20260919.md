+++
id         = "dat:1813-breast-workbench-geometry-20260919"
layer      = 1
type       = "datum"
title      = "Breast-workbench geometry upgrade 2026-09-19: ellipse+contour+fold wired into the mannequin"
claim      = "20:50:50Z Dan: 'Circle is much better but is there anything welse we can do to model more precise and thoroughly?'; 20:51:22Z 'Build the full package: ellipse + contour trace + fold curve.' 20:58:40Z all three live: ellipse fit hugs the pigment boundary (both areolae genuinely elliptical in-frame, tilt ~50 deg from camera axis); contour rebuilt as luminance-region flood after the first attempt traced hair/background; Annie's gives clean mound outline, Alexis's honestly partial (flat lighting, open at top); fold trace hits frame edge not a real fold (fold out of frame - honest). 21:14:21Z Dan: 'Yes, wire the mannequin to the new geometry'; 21:20:46Z wired+pushed+live (danfr4nk.github.io/tools/body/): areola dome goes elliptical (real semi-axes + angle, mirrored left), tilt stays caption-only, mound footprint follows contour, crease follows measured fold line. Two fixes: the 2D schematic had the bust hanging BELOW the fold line since v1 - inverted vs the 3D sculpt, now fixed; Annie's fixture runs the full pipeline: 93.9% contour coverage, no NaN, sane displacement; old JSONs sculpt byte-identical. Earlier same day: areola-circle overshoot bug fixed (edge-finder window 30-130px tuned on close-ups blew past the real edge on full-body shots; now scans from 12px, strongest sustained redness drop); nipple-detector seeding bug fixed (red-painted fingernails holding the phone anchored the areola circle - areola-first rewrite deployed); hardcoded 'confidence lines' ('fabric-boundary edges', 'angled close-up') replaced with frame-built measurements."
cites      = ["src:20260919-2340-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Chat rows 2026-09-19, batch 20260919-2340 (raw/sammy/20260919-2340/)"
importance = 3
tags       = ["breast-workbench", "mannequin", "telemetry"]
created    = "2026-09-19"

[when]
date   = "2026-09-19"
+++

<!-- prose for humans; the frontmatter is for machines -->
