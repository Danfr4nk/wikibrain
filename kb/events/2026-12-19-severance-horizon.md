+++
id         = "evt:2026-12-19-severance-horizon"
layer      = 2
type       = "event"
title      = "The 120-day severance horizon: a dated falsifier for the August 2026 severance"
cites      = ["dat:1209-unbroken-bond-falsifier-and-recheck-machinery", "dat:0250-annie-ulmer-2026-08-26-update-page", "dat:0622-attachment-model-129-episodes-resolution-withdraws-110-127", "dat:1384-dormancy-not-exit-rule"]
confidence = "moderate"
importance = 4
tags       = ["annie-ulmer", "severance", "test-design", "falsifier"]
created    = "2026-09-09"
rechecked  = "2026-09-10"

[when]
date   = "2026-12-19"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "followed"
target      = "evt:2026-08-16-annie-terminal-end"
strength    = "strong"
asserted_by = "self"
note        = "The horizon is measured from the terminal-end window. This event is the test; it is not the outcome."

## What happened

This is a **test's design, not its outcome.** Dan is measuring the August
2026 Annie severance against a **120-day horizon: December 19, 2026**
(~120 days from the terminal-end window of Aug 16–19). The horizon is the
dated falsifier the wiki's own machinery demands: P4 of the-rescue-
premise states it on the-unbroken-bond page — a severance holding past
**2026-12-19** with no external agent involved is the condition under
which "the bond is unbroken" would have to be **narrowed** rather than
restated
[`dat:1209`](../data/1209-unbroken-bond-falsifier-and-recheck-machinery.md).

The baseline the test is measured against is now quantified: **129
severance declarations, 128 of 128 resumed, median gap thirty-six seconds,
all-time maximum 46 hours** — the 2026-08-23 resolution that withdrew the
weaker 110-of-127 figure
[`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).
The previous record was the 52-day June 2026 silence (June 1 → July 23),
already an outlier against that ceiling, and it failed anyway
(`evt:2026-06-01-annie-closure`). The dormancy-not-exit rule this breaks:
nothing leaves the graph; declared endings produce pauses, never
terminations — Menore's channel reopened after 2,044 days of total
silence, answered in one minute
[`dat:1384`](../data/1384-dormancy-not-exit-rule.md).

The first reading was taken **2026-08-26**: the operator-observed addendum
records Dan keeping Annie blocked with **no reported workaround,
alternate channel, or "one last message" exception** — and the finding is
not merely that she is blocked but that **the block is still being
honored**, against the historical pattern (separation → contact, terminal
statement → conversation, boundary → negotiation). The page supplies Ally
as the control — boundary with Annie, no pursuit; contact with Ally,
consistency and politeness — weakening the "emotional system gone dark"
reading. It explicitly caps the claim: a dated observation, not permanent
resolution; boundary-behavior, not feelinglessness — *"he is currently
behaving as though the boundary matters more than the urge to violate
it"*
[`dat:0250`](../data/0250-annie-ulmer-2026-08-26-update-page.md).

## The design, stated as a test

- **Start:** the terminal-end window, 2026-08-16–19
  (`evt:2026-08-16-annie-terminal-end`).
- **End:** **2026-12-19** — 120 days later.
- **Falsifies:** "the bond is unbroken" in its current stated form, if the
  severance holds past Dec 19 with no external agent involved — the
  thesis must then be narrowed, per P4 of the-rescue-premise
  [`dat:1209`](../data/1209-unbroken-bond-falsifier-and-recheck-machinery.md).
- **Sustains:** nothing is proven by holding alone; the observation is
  boundary-behavior, not feelinglessness
  [`dat:0250`](../data/0250-annie-ulmer-2026-08-26-update-page.md).
- **Threats to validity:** Milo is co-held and has been the channel of
  every prior recontact (July 4 fireworks email ended the 52-day
  severance) — Dan pre-emptively closed that channel 2026-08-19 14:53:25,
  but the closure's durability is itself part of what the test measures.
  At least six inbound messages from Annie's handle were typed by Coles —
  handle attribution during Coles-present episodes must be checked before
  any "contact" is scored.

## Evidence for the design

- The falsifier is the wiki's own, dated and public: the December 19,
  2026 check is the thing a future pass can actually run
  [`dat:1209`](../data/1209-unbroken-bond-falsifier-and-recheck-machinery.md).
- The base rate is the strongest the architecture has ever had (129/128,
  100%, 36s median) — which is what makes a 120-day hold meaningful
  rather than merely long
  [`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).

## Evidence against / limits

- This node **asserts nothing about the outcome.** As of this writing
  (2026-09-09), the test is in progress; the block is reported held as of
  2026-08-26, and no held record in this repository independently confirms
  its state past that date
  [`dat:0250`](../data/0250-annie-ulmer-2026-08-26-update-page.md).
- The 120-day number is the wiki's chosen horizon; its derivation (roughly
  Aug 21 + 120 = Dec 19) is arithmetic, not theory.

## Open questions

- The outcome itself — to be written after 2026-12-19 by a re-check pass,
  not here.
- Whether the Milo channel stayed closed, and whether any recontact ran
  through a workaround the Aug 26 observation could not see.

## Cross-links

- `ent:annie-ulmer`.
- `evt:2026-08-16-annie-terminal-end` — the rupture the test starts from;
  `evt:2026-08-23-attachment-model-resolved` — the base rate it is measured
  against; `evt:2025-11-kristin-ends` — the record's one clean severance,
  the comparison case.
