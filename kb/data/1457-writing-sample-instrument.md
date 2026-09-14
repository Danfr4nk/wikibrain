+++
id         = "dat:1457-writing-sample-instrument"
layer      = 1
type       = "datum"
title      = "The 6-minute writing sample: fixed-prompt stylometric instrument + Dan's model probe"
claim      = "After Dan refined his testing-instrument request to 'specifically through my writing. Something that gives me a small writing prompt or instruction custom built and optimized to identify markers' (2026-09-12T18:27:06Z / 14:27 ET), the assistant delivered the 6-minute sample: the same three prompts every run — W1 STREAM (3 min, write nonstop about the last 2 hours), W2 ROOM (90 s, describe the room in detail), W3 ARGUE (90 s, hot dog — sandwich or not?, 5+ sentences). One sitting, no editing, no backspacing; fixed prompts so topic cannot confound the signal — all variance is the writer. W1 hunts his length markers, W2 is the topic-fixed control, W3 stresses reasoning structure; typo density was added to the extractor ('the no-edit rule makes it measurable for the first time'). A timer page enforcing the clock and the no-backspace rule was offered. Dan's verdict at 18:27:44Z: 'Good work! I had that answer already but I was confirming your ability to spot it' — he was probing the model's ability to land on the writing-specific instrument, and says it passed."
cites      = ["src:sammy-chat-transcript-20260912-1830"]
attributed_to = "src:sammy-chat-transcript-20260912-1830"
confidence = "high"
extraction = "Instrument spec and Dan's refinement + 'I had that answer already' verdict quoted verbatim from the transcript. The assistant had pre-emptively asked him to 'Do one right now. You're ~15 min post-onset — perfect labeled sample' (14:21 onset label, dat:1458) — no sample arrived in-window."
importance = 5
tags       = ["stylometry", "writing-sample", "baseline", "testing-instrument", "model-probe", "2026"]
created    = "2026-09-12"
+++

## Reading

Two things are load-bearing here. First, the instrument design: fixed
prompts + no-edit rule is exactly what the 30-minute scorer's length-flag
signature needs as a labeled control — it converts the casual 'I feel off'
reports into scorable deltas, same job as the battery (dat:1456) but on the
linguistic channel. Second, Dan's explicit frame: he had the answer already
and was testing whether the model would spot it. That is the standing
adversarial-evaluation pattern (cf. his head-to-head model benchmarking in
MEMORY.md) — record the pattern, not just the verdict. The open thread is
whether he actually runs the sample; no W1/W2/W3 output arrived in-window.
