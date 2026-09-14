+++
id         = "dat:1456-baseline-testing-battery"
layer      = 1
type       = "datum"
title      = "Baseline testing battery commissioned: 4-minute on-device instrument"
claim      = "At Dan's request ('Is there some kind of testing instrument you can give me that will help us establish baseline, etc', 2026-09-12T18:22:58Z / 14:22 ET), the assistant built a ~4-minute on-device battery: vitals check-in, reaction time, digit span, Stroop, finger tap, typing burst. Runs stay on the device; the sober-morning baseline builds from runs taken cold first thing in the morning, and comparisons kick in after three runs. Instruction given: run it cold first thing tomorrow morning for the sober baseline, then again around events; paste the results block into chat each time and the assistant logs it against the stylometry labels — 'that's what turns \"I feel off\" into a measurable delta.'"
cites      = ["src:sammy-chat-transcript-20260912-1830"]
attributed_to = "src:sammy-chat-transcript-20260912-1830"
confidence = "high"
extraction = "Dan's request and the assistant's 'The battery's done' summary plus the run-it-cold protocol quoted from the transcript. The subagent build completed 18:25:52Z (subagent-progress row in the system manifest)."
importance = 4
tags       = ["stylometry", "baseline", "testing-instrument", "health", "2026"]
created    = "2026-09-12"
+++

## Reading

The battery exists to separate state-effects from baseline for the
stylometric scoring — sober-morning runs are the control, event runs are
the treatment. It pairs with the writing-specific instrument (dat:1457):
the battery measures psychomotor/cognitive markers, the 6-minute sample
measures linguistic markers. Both feed the same label log.
