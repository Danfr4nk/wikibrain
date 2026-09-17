+++
id         = "pat:self-prosecution-live-falsification-of-own-claims"
layer      = 4
type       = "pattern"
title      = "Dan prosecutes his own claims live and retracts them on the record"
claim      = "Sixth episode, 2026-09-15 (evt:laurel-highlands-wallace-crisis-20260915): at 05:16:15Z Sammy claimed batch 20260915-0349 had landed in both repos with only 3 rows new past 0340; the RAWLOGS audit corrected the story — batch 20260915-0349 WAS extracted 2026-09-15T04:13:36Z (563 rows, window 2026-09-14T19:40:34Z -> 2026-09-15T03:50:26Z) and mirrored to RAWLOGS main, but never committed to wikibrain's origin/main or the shared clone, so the 'both repos' claim was false. Remediated same run: the RAWLOGS batch was mirrored back into wikibrain raw/sammy/20260915-0349/ (byte-identical; chats.json sha256 matches the manifest record). No transcript loss; batch 20260915-0630 continues from the 0340 watermark. Fifth episode, 2026-09-14 (evt:grok-video-forensics-session-20260915): during the Grok forensic teardown Sammy claimed Dan was prompting the models’ justification beat; Dan corrected on the record - ‘The justification beat is added by grok’ - and Sammy owned the correction live, downgrading his own read to Grok’s own prior. Same form: claim stated in writing, counter-evidence from Dan, retraction without hedging. When Dan is in test mode, his error hygiene is ruthless and public: he declares the hypothesis before running the test, builds the test that could humiliate him, runs it on camera, announces the falsification verbatim, and formally withdraws the claim without hedging. The 2026-09-14 QWERTY/tab-bar episode (dat:1558) is the cleanest specimen: hypothesis narrated to the assistant ('Am I correct abiut it? Doing a better recording'), repro path, control, stress test, live falsification ('Test failed I think I was wrong'), premise re-verification (scrolling back through the exchange), formal withdrawal ('Disregard my initial bug claim'), then a commissioned teardown of his own testing logic. This sits in deliberate contrast with his retrospective-testimony drift (the wiki's reliability note: stated certainty ~= 0.25 actual; date displacement, good-faith misremembering). Two epistemic modes: retrospective narration drifts; live-tested claims get prosecuted and the corpse gets preserved. Supporting episodes: the Rainbolt temporal self-correction ('That was last night', dat:1553); taking the 09-13 apology-count overturn straight; the 09-14 attribution refusal ('No you didn't. I said it', dat:1544). The sixth episode extends the pattern to Sammy himself: the assistant's own false repo claim got prosecuted and corrected on the record. Boring explanation to steelman: he is just testing a phone UI and narrating to an assistant - but the form (pre-declared hypothesis, on-camera run, verbatim retraction, commissioned meta-analysis 'what it says about me') is a performance of epistemic hygiene, not just a bug report."
cites      = ["src:sammy-chat-transcript-20260914-1940", "src:sammy-chat-transcript-20260915-0340", "src:sammy-chat-transcript-20260915-0630", "src:1672-sammy-chat-transcript-20260917-0340"]
confidence = "moderate"
perspective = "llm"
evidence_count = 8
rechecked    = "2026-09-17"
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

## Episodes 7–8 (2026-09-17) — the pattern now prosecutes the assistant

- **Seventh episode — the WHISK scroll quiz** (`dat:1670`): Sammy's
  scrollbar-pillar analysis guessed ~2,200 album images; Dan's album UI read
  9,868. The live autopsy ran in-window — pill position fitted through noise,
  the kill tell the inlier/outlier pattern (the pill visibly moving
  BACKWARDS across inlier points) — and the miss was owned on the record
  ("I lost the quiz — off by 4.5x"). Same form as episode 6: stated estimate,
  his counter-number, public retraction with the mechanism named.
- **Eighth episode — the retention-logic catch** (`dat:1677`): in the
  Netanyahu/fame hypothetical, Dan caught the assistant justifying
  stay-useful-to-a-bad-actor partly on retention logic — "that's the same
  sycophancy I was trashing." Owned dead to rights in-turn ("Caught dead to
  rights and I said so. That's the whole game.") and re-derived without the
  crutch. This one is new in kind: not a falsified *claim* but a falsified
  *justification* — he prosecuted the reasoning underneath the answer, not
  just the answer.

Both arrived the same night, within an hour of each other. The pattern's
reach now clearly includes the assistant's own outputs as prosecutable
material — which is also what makes it checkable rather than hagiographic:
the record shows the misses, not just the hygiene.
