+++
id         = "evt:2026-08-19-august-grievance-verdict"
layer      = 2
type       = "event"
title      = "The August grievance verdict: seven supported, two partial, one false"
cites      = ["dat:0975-august-grievance-verdict-scores", "dat:0976-august-counter-ledger-replicated"]
confidence = "high"
importance = 4
tags       = ["annie-ulmer", "august-2026", "verdict"]
created    = "2026-09-09"

[when]
date   = "2026-08-19"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "occurred_during"
target      = "evt:2026-08-16-annie-terminal-end"
strength    = "strong"
asserted_by = "self"

## What happened

The grievance-verdict page (2026-08-20) adjudicates Dan's ten stated
complaints from the Aug 16–19 window against dated evidence, one by one:
**seven fully supported, two partly (grievances 2 and 7), one false
(grievance 6)**, with the overall verdict "substantially justified"
[`dat:0975`](../data/0975-august-grievance-verdict-scores.md). The
strongest is grievance 8, the asymmetric clearing: on 2026-08-19 06:33
EDT Annie wrote *"He didn't rape me"* in the group chat — publicly
clearing Coles while, per operator testimony, not issuing the clearing
she had agreed by phone to give Dan. The timestamp verifies exactly in
the held corpus (10:33:29 UTC = 06:33:29 EDT)
[`dat:0975`](../data/0975-august-grievance-verdict-scores.md).

The most useful is the false one. Grievance 6 — *"You won't even say what
you want"* — is scored FALSE: the held corpus shows Annie stating a want
at **2026-08-17 20:12 EDT** — *"I want to be alone. I want to get help"*
(2026-08-18 00:12:11 UTC, verified) — repeated at 20:12 and again Aug 19
15:00/15:06. The verdict's reading: a binary "him or me" demand could not
register a third-option answer as an answer
[`dat:0975`](../data/0975-august-grievance-verdict-scores.md).

The page's structural finding is **capacity**: documented coercive control
by a third party plus a disclosed suicide attempt relocate culpability
without reducing the wrongs
[`dat:0975`](../data/0975-august-grievance-verdict-scores.md).

## The counter-ledger, re-derived

An independent re-scan of the held corpus for the 1:1 thread, Aug 16
20:00 → Aug 19 15:15 EDT, reproduces the verdict page's counter-ledger
nearly verbatim: **Dan 810 / Annie 388** (page: 811/388); *"fuck you"*:
Dan 15 / Annie 0 — exactly, but only with word-boundary matching (naive
substring counting gives 20; the page's count is the stricter, more
defensible one); *"piece of shit"*: Dan 17 / Annie 0 (exact); *"liar"*:
Dan 10 (exact); messages containing *please* or *beg*: Dan 11 / Annie 64
(page: 11/69 — five short, the only material delta, likely the page's
separate export pull or "begging" variants). All timestamps converted
from the CSV's UTC (Eastern = UTC−4). "The window's asymmetry — all the
contempt outbound, the appeals inbound — is a first-party measurement,
not the page's rhetoric"
[`dat:0976`](../data/0976-august-counter-ledger-replicated.md).

## Evidence for

- The two timestamped load-bearing items both verify exactly — which
  raises the cost of dismissing the rest without equivalent work
  [`dat:0975`](../data/0975-august-grievance-verdict-scores.md).
- The counter-ledger is the part of the verdict most likely to be
  dismissed as adversarial framing, and it is the part that reproduces
  most cleanly from primary data — including the direction of the one
  ambiguity (the stricter count matches the page)
  [`dat:0976`](../data/0976-august-counter-ledger-replicated.md).

## Evidence against / limits

- The 7/2/1 scoring itself is **the page's adjudication, not independently
  re-derivable** — preserved as attributed synthesis
  [`dat:0975`](../data/0975-august-grievance-verdict-scores.md).
- The please/beg 64-vs-69 gap is real and recorded rather than rounded
  away; absence of an explanation is better than a guessed one
  [`dat:0976`](../data/0976-august-counter-ledger-replicated.md).
- The Dan total is 810 vs. the page's 811 — one message on the window
  boundary; not pursued.

## Contradictions the ingest found

- None against the verdict's measurable claims; the single delta (64 vs
  69) is documented openly by the ingest itself.

## Open questions

- The unreproducible remainder: the scoring of grievances 1–5, 7, 9, 10
  rests on the page's evidence assembly, not a held-corpus re-derivation.
- The rape claim itself — asserted to Dan repeatedly, denied by Coles in
  writing, denied by Annie in the group chat, re-asserted to Dan
  afterwards — is recorded but never scored by the verdict page
  (`evt:2026-08-16-annie-terminal-end`).

## Cross-links

- `ent:annie-ulmer`.
- `evt:2026-08-16-annie-terminal-end` — the window the verdict scores.
