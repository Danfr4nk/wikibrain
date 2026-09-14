+++
id         = "pat:self-prosecution-live-falsification-of-own-claims"
layer      = 4
type       = "pattern"
title      = "Dan prosecutes his own claims live and retracts them on the record"
claim      = "When Dan is in test mode, his error hygiene is ruthless and public: he declares the hypothesis before running the test, builds the test that could humiliate him, runs it on camera, announces the falsification verbatim, and formally withdraws the claim without hedging. The 2026-09-14 QWERTY/tab-bar episode (dat:1557) is the cleanest specimen: hypothesis narrated to the assistant ('Am I correct abiut it? Doing a better recording'), repro path, control, stress test, live falsification ('Test failed I think I was wrong'), premise re-verification (scrolling back through the exchange), formal withdrawal ('Disregard my initial bug claim'), then a commissioned teardown of his own testing logic. This sits in deliberate contrast with his retrospective-testimony drift (the wiki's reliability note: stated certainty ~= 0.25 actual; date displacement, good-faith misremembering). Two epistemic modes: retrospective narration drifts; live-tested claims get prosecuted and the corpse gets preserved. Supporting episodes: the Rainbolt temporal self-correction ('That was last night', dat:1553); taking the 09-13 apology-count overturn straight; the 09-14 attribution refusal ('No you didn't. I said it', dat:1544). Boring explanation to steelman: he is just testing a phone UI and narrating to an assistant - but the form (pre-declared hypothesis, on-camera run, verbatim retraction, commissioned meta-analysis 'what it says about me') is a performance of epistemic hygiene, not just a bug report."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "moderate"
perspective = "llm"
evidence_count = 4
importance = 4
tags       = ["epistemics", "self-correction", "personality"]
created    = "2026-09-14"
falsifiers = [
  "A live-tested claim of his survives counter-evidence in-session: he defends the original claim, revises it face-savingly, or moves the goalposts instead of withdrawing. One clean case breaks the 'prosecutes' half.",
  "The QWERTY episode turns out to be audience-shaped: the same test run without an assistant watching produces no pre-declared hypothesis, no verbatim retraction. Then the hygiene is social performance, not epistemic discipline.",
  "His retrospective testimony proves as reliable as his live testing on a checkable matter (dates, counts) - then there are not two modes, just one noisy narrator.",
]
alternatives = [
  "Selection effect: the archive only preserves tests he chose to narrate; silent un-retracted errors leave no trace. The pattern may describe his narration of testing, not his testing.",
  "The retraction is cheap because the claim was cheap: low-stakes UI claims are easy to bury; the test of the pattern is a high-stakes claim (about a person, about himself) retracted the same way on the record.",
]
counterexamples = [
  "dat:0117-annie-dui-2025-10-26-stop-details",
  "dat:0090-block-retraction-2026-09-11",
]

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Counterexample notes

- `dat:0117`: his long-standing account that the Oct 2025 stop was his was
  corrected only by the docket naming Annie — an external record, not a live
  self-test.
- `dat:0090`: the claimed Aug-26 block was retracted only after confrontation
  with the texting record (severance horizon test, VOID).
- Both bound the pattern: live-test mode only, not a general habit of
  retracting.

## Why this matters

The wiki's standing reliability note says his stated certainty runs hot
(~0.25 actual) and his retrospective testimony drifts by date displacement.
This pattern is the other half of that ledger: put him in front of a live
system with a falsifiable claim and he becomes the most reliable narrator
in the room. Any synthesis that uses his testimony should weight it by
mode - retrospective narration discounted, live-tested claims taken near
face value.
