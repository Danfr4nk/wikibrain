+++
id         = "evt:2026-06-01-annie-closure"
layer      = 2
type       = "event"
title      = "The June 1 group-chat closure of the Annie decade"
cites      = ["dat:1343-june1-closure-signoff-is-dans", "dat:0125-end-fight-stale-attribution", "dat:0449-group-chat-closure-revised-arithmetic", "dat:0358-july-2026-recontact-held-corpus-verification", "dat:1342-fallout-verdict-revisions-filed"]
confidence = "high"
importance = 5
tags       = ["annie-ulmer", "closure", "june-2026"]
created    = "2026-09-09"

[when]
date   = "2026-06-01"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "followed"
target      = "evt:2026-05-jerel-coles-entanglement"
strength    = "strong"
asserted_by = "self"
note        = "The May 31 announcement put Coles in the June 1 group chat; pure sequence, no causal claim."

## What happened

The June 1, 2026 group-chat closure ended the eleven-year Dan/Annie
relationship — for fifty-two days. In the held corpus the closure is an
**unbroken Dan outbound run**, rows 223934–223939, 2026-06-01
04:21:47–04:27:49 UTC (00:21:47–00:27:49 EDT), closing with *"Goodbye
forever. This was not how it should have ended but. sic semper lupanis."*
Every row in the window is sender "Me" (Dan); Annie's number says nothing
after 04:11:29 UTC ("Understood")
[`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md). The earlier
closure-night exchange (rows 223817–223933) was a **three-party group
chat** including Dan, the Annie handle, and Coles's handle
[`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md).

The load-bearing attribution correction: the "sic semper lupanis" exit
line is **Dan's, not Annie's**. The main annie-ulmer.md page corrected
this on 2026-08-13; the held corpus confirms it row by row — and the
end-fight.md event page still carries the stale version, a propagation
failure
[`dat:0125`](../data/0125-end-fight-stale-attribution.md). The verified
Dan-attributed lines include *"I saved you from fucking DYING when you
were shooting coke and you would sell me out to virtue signal your
loyalty to someone else?"* (04:25:59) and the "unring this bell" message
(04:22:46) — all verbatim
[`dat:0125`](../data/0125-end-fight-stale-attribution.md).

The night's volume: **666 messages May 31–June 1** in the held corpus —
601 Dan / 65 Annie
[`dat:0125`](../data/0125-end-fight-stale-attribution.md). Annie's only
recorded contribution to the closure afterwards is the **June 5 apology**
[`dat:1342`](../data/1342-fallout-verdict-revisions-filed.md).

Then the closure failed: **June 1 → July 23 = fifty-two days**, "by a
wide margin the most durable severance in a relationship with 127
declared exits and 110 re-engagements inside 48 hours" — and contact
resumed July 23 (opener: *"I should not have responded to that email"*,
18:54 UTC), verified in the held corpus
[`dat:0449`](../data/0449-group-chat-closure-revised-arithmetic.md),
[`dat:0358`](../data/0358-july-2026-recontact-held-corpus-verification.md).
The group-chat-closure page's own REVISED [2026-07-26]: *"Everything
described on this page about what happened that night stands; what does
not stand is treating it as an ending"*
[`dat:0449`](../data/0449-group-chat-closure-revised-arithmetic.md).

## Dated sequence

- **2026-05-31 → 2026-06-01:** 666 held messages (601 Dan / 65 Annie)
  [`dat:0125`](../data/0125-end-fight-stale-attribution.md).
- **2026-06-01 00:08:19 EDT:** *"too bad so sad you just couldn't give me
  any decency and now there's a poison pill baked in"* — Dan, verbatim.
- **2026-06-01 00:22:46 EDT:** the "unring this bell" message — Dan,
  verbatim.
- **2026-06-01 00:27:49 EDT:** the "sic semper lupanis" sign-off — **Dan**,
  not Annie (corrected attribution; page corrected 2026-08-13)
  [`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md).
- **2026-06-05:** Annie's apology — her only closure contribution
  [`dat:1342`](../data/1342-fallout-verdict-revisions-filed.md).
- **2026-06-15 17:14–17:15 UTC:** Coles's defection pivot — *"You can have
  her back ? … She's a compulsive liar with a drug addiction"*, corpus-
  attested (June 15–16 epilogue)
  [`dat:0125`](../data/0125-end-fight-stale-attribution.md).
- **2026-07-23 18:54 UTC:** recontact opens — the 52-day severance ends
  [`dat:0358`](../data/0358-july-2026-recontact-held-corpus-verification.md).

## Evidence for

- The sign-off attribution is confirmed **row by row** in the held corpus
  — a contemporaneous platform timestamp outranking retrospective
  testimony
  [`dat:1343`](../data/1343-june1-closure-signoff-is-dans.md).
- The 52-day arithmetic checks out by hand; the July 23 recontact endpoint
  is independently corroborated
  [`dat:0449`](../data/0449-group-chat-closure-revised-arithmetic.md).

## Evidence against / limits

- The 127-exit / 110-re-engagement framing on the closure page is the
  **stale pre-resolution pair** — the 2026-08-23 resolution moved the
  figures to 129 episodes with 100% resumption; neither may be quoted
  without the other
  [`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md)
  (see `evt:2026-08-23-attachment-model-resolved`).
- The 4,657-message Dec 2025 row on the closure page was itself once wrong
  by half (2,248 → 4,657) — read current figures as the page's best
  reading, not settled counts
  [`dat:0449`](../data/0449-group-chat-closure-revised-arithmetic.md).

## Contradictions the ingest found

- **The stale-attribution propagation failure:** the main Annie page
  corrected the exit line's authorship 2026-08-13; end-fight.md and other
  event pages quoting the closure may still carry the stale version
  [`dat:0125`](../data/0125-end-fight-stale-attribution.md). Any downstream
  reading of the closure's agency that treats the line as Annie's is
  reasoning from a superseded attribution.
- The July 23–26 recontact window counts 624 (page) vs. 430 (held corpus)
  — an open count discrepancy, not a refutation; the page's source CSVs
  are unheld
  [`dat:0358`](../data/0358-july-2026-recontact-held-corpus-verification.md).

## Open questions

- A propagation pass over all event pages quoting the June 1 closure to
  correct the exit-line attribution.
- The June 5 apology's content and provenance — filed only as "Annie's
  only closure contribution."

## Cross-links

- `ent:annie-ulmer`; `ent:jerel-coles` — the third party in the group chat.
- `evt:2026-05-jerel-coles-entanglement` — the May 31 announcement;
  `evt:2026-08-16-annie-terminal-end` — the terminal rupture;
  `evt:2026-08-23-attachment-model-resolved` — the exit-episode recount.
