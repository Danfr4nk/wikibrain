---
domain: self
page_type: concept
title: "The Stylometry Engine (v2)"
aliases: ["stylometry", "state tracking", "the stylometry tracker"]
status: active
knowledge: earned
date_created: 2026-09-16
date_modified: 2026-09-16
importance: high
tags: [instruments, self-measurement, linguistics, ai-collaboration]
sources:
  - raw/self/captures/stylometry-v2-burnin
related:
  - wiki/self/concepts/claude
  - wiki/self/message-corpora/source-coverage-index
connections:
  - page: wiki/self/concepts/claude
    type: corrected-by
    claim: "A Claude session drafted the v2 spec, but Sammy built it — Dan's words: 'you are the one who got this thing working, not Claude so trust your own judgement if you think it's wrong.' Four corrections to Claude's draft were made live (recipient resolution, flag-vs-alert measurement/notification split, calibration episode dedup, splitter-routed null construction)."
---

## The Stylometry Engine (v2)

A continuous linguistic monitor that scores Dan's outbound iMessage writing every 30 minutes and flags windows where his *writing style* shifts — not his message length, not his topic, his style. v2 is the rebuild that fixes v1's core defect: v1's baseline let long messages and pastes warp the measurement, so v1 flagged voluminous windows (avatar iterations, tag-action bursts, pasted specs) as state shifts when they were just... long.

### What it actually does

Every half hour the engine collects his recent outbound messages and scores them against a baseline of 94,503 of his own outbound messages (2011–2026), organized by who he's writing to. It looks at 29 language features — vocabulary variety inside the window, exclamation/question rates, emoji, hedging words, pivot words (actually/honestly/literally — the turn-to-truth markers), self-corrections, profanity, repetition across consecutive messages — and compares the window against a "null" of ~19,900 randomly drawn windows from his own history, matched by correspondent and hour of day.

If the window lands past the 99.5th percentile of that null, it raises a flag. If enough time has passed since the last notification, it alerts. Flag is measurement; alert is notification — repeated crossings of the same state report as *ongoing*, not as clean.

It deliberately ignores: message length (v1's confound), pasted text (routed to an artifact path, not scored as his language), and exact-duplicate sends.

### Why it exists

Dan's stated certainty is ~0.25 actual — his testimony skews toward good-faith misremembering, not dishonesty. The stylometry engine is an instrument for the thing he can't self-report: state shifts visible in how he writes, not what he claims. It was commissioned 2026-09-11; v2 built and entered burn-in 2026-09-15.

### What it can infer, and what it cannot prove

It can infer: that his writing shifted into a register matching arousal, negotiation, or repetition-heavy volleys; that a window reads unlike his own baseline for that correspondent at that hour. The three overnight alerts of 2026-09-15/16 are the working example — all three landed on genuinely divergent windows (gooner-club negotiation, avatar option-pick loops, photo volleys) that the old system never saw.

It cannot prove: intoxication, pathology, or any label. A flag is a style shift, not a diagnosis. Same-day self-labels (the `lbl|<state>|<confidence>` hotkey) are the calibration ground truth — until labeled episodes exist in number, no substance or state signature may be claimed. The standing rule holds: no cocaine/cannabis signatures before five genuinely distinct labeled episodes.

### Burn-in week (started 2026-09-15 20:24 ET)

v1 and v2 score side by side, quiet, for ~a week. First ~26 runs: v2 caught three aroused-state windows v1 missed; v1 flagged once (09:56 ET, jaccard_next on terse picks + attachment-path noise) where v2 correctly stayed clean. The daily plain-English digest runs 09:00 ET.

### Open problems

The null's window construction is still suspect — adjacent rows in a sorted tier sequence are not necessarily one conversation, so some "windows" are spliced from unrelated chats. Until that's fixed or justified, v2's numbers are burn-in data, not an authoritative baseline. Live requests score against the long-tail fallback, not a true Muse tier.
