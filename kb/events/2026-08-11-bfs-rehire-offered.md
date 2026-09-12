+++
id         = "evt:2026-08-11-bfs-rehire-offered"
layer      = 2
type       = "event"
title      = "BFS Foods rehire offered (2026-08-11)"
cites      = ["dat:0496-bfs-foods-job-and-drawer-dispute"]
confidence = "high"
importance = 3
tags       = ["work", "bfs-foods"]
created    = "2026-09-09"

[when]
date   = "2026-08-11"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "external"

[[edges]]
rel         = "resulted_from"
target      = "evt:2026-05-bfs-firing"
strength    = "strong"
basis       = "stated"
asserted_by = "other"
note        = "The termination this reverses; the connection is stated in Dan's own 2026-08-11 messages (the same no-hire list, the same lady)."
+++

## What happened

On the morning of 2026-08-11, Dan Frank told Annie he had gotten his BFS
Foods job back: the same person who had put him on a no-hire list told the
manager to have him put in another application like before, with an attempt
to get him on the schedule for next week. The four messages (ids 228788–
228791, 2026-08-11 15:57–16:11 UTC, i.e. 11:57–12:11 EDT) are verified
verbatim in the held corpus
([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)):

> *"Well I got my job at BFS back"*

> *"I guess the same lady who put me on a no-hire list there told the manager
> today to put in another application like I did before and they're going to
> try to get me on the schedule for next week"*

> *"That whole thing is one of the major reasons I have to wonder if I am
> going crazy or not because they acted like I stole money from the safe or
> something like…literally the only thing I did was go home 30 minutes before
> my shift was supposed to end after I called my manager and made sure it was
> okay"*

> *"they had a fucking sign hanging in the back of BFS and in the office at
> little caesars that said 'NO HIRE: Daniel Frank.'"*

## Dated sequence

- **2026-08-11, 15:57–16:11 UTC** — the four messages (held, from Dan).
- **Context:** Annie's inbound messages immediately before (15:04 UTC "It's
  time for you to go."; 15:09 UTC "I'm so tired of you stealing from me…") —
  the rehire landed inside the relationship's terminal window, five days
  before the week that ended it.

## Evidence

- **For:** held-corpus verbatim, exact timestamps
  ([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)). The page
  calls it "the only thing in the 2026 collapse that went the other way."
- The reversal was initiated by the same person who imposed the ban, with no
  stated reason for either; Dan treats it as further evidence the original
  action was arbitrary.

## Contradictions

None: the offer and the no-hire sign are both Dan's own contemporaneous
account, held-verified.

## Open questions

- Status unconfirmed — no held record of him reapplying or being scheduled;
  the offer's uptake is unknown.

## Cross-links

- [`evt:2026-05-bfs-firing`](2026-05-bfs-firing.md) — the termination this
  reverses (dated mid-May 2026 despite that node's id; see its note).
