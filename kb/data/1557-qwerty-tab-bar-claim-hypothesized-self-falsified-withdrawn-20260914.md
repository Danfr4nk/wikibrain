+++
id         = "dat:1557-qwerty-tab-bar-claim-hypothesized-self-falsified-withdrawn-20260914"
layer      = 1
type       = "datum"
title      = "QWERTY/tab-bar bug claim: hypothesized, tested on camera, falsified by his own recording, formally withdrawn (2026-09-14)"
claim      = "2026-09-14 19:32:51Z-19:38:02Z: Dan claimed the Goals screen's QWERTY keyboard trapped the tab bar ('the only way I can switch tabs is to open the chat history screen and then back out'). He then recorded a second video to test it and narrated the test live: 'Am I correct abiut it? Doing a better recording of it rifht...now.' The recording falsified the claim - normal keyboard dismissal works, it just takes ~6 flicks. He announced the result on the record: 'Test failed I think I was wrong. Hold for next message' (19:36:36Z), then 'Very weird. I was kinda wrong... Disregard my initial bug claim' (19:37:44Z). No hedging, no face-saving revision - the claim was buried by its own author. He then commissioned a frame-by-frame teardown: 'analyze the fuck out of that video and determine the testing logic and sequence that I took to diagnose the problem and what it says about me' (19:39:55Z). The substantive residue: the keyboard was not trapping the tab bar, but ~6 flicks to dismiss is real friction, and in his rapid tab-switching usage the expensive path reads as an impossible one."
cites      = ["src:sammy-chat-transcript-20260914-1940", "src:sammy-chat-transcript-20260915-0349"]
confidence = "high"
provenance = "verbatim user/assistant rows 2026-09-14T19:32:51Z-19:40:34Z; byte-exact in raw/sammy/20260914-1940/chats.json"
reliability = "primary"
extraction = "Per-row md5-verified SQL-side and file-side (96/96, 0 mismatches)."
importance = 4
tags       = ["epistemics", "self-correction", "ux", "2026"]
created    = "2026-09-14"
rechecked  = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Addendum: the controlled test (2026-09-14 19:46:55Z, this batch's window)

The episode got its control. Dan replicated the keyboard-dismissal test with a controlled comparison: no-text / typed-then-deleted states dismissed the keyboard in **two swipes**; an actual sent-message event took **six swipes** — roughly 3x friction on the real event path. He reported it unprompted ('Tested on my phone. No text or typed then deleted: dismisses keyboard in two swipes. When I sent a message: six swipes'). This completes the causal account the original claim lacked: the keyboard was not trapping the tab bar, but the sent-message state genuinely costs ~3x the dismissal effort of the empty state — which is why the expensive path read as an impossible one in rapid tab-switching usage. The self-prosecution pattern holds: he ran the control nobody asked for and reported the measurement that strengthened the residue while burying the original claim further.
[src:sammy-chat-transcript-20260915-0349](../sources/src:sammy-chat-transcript-20260915-0349.md)
