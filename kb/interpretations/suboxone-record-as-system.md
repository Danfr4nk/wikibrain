+++
id           = "int:suboxone-record-as-system"
layer        = 3
type         = "interpretation"
title        = "The Suboxone start is the best-evidenced date in the wiki: four channels converge, and it is the control case for everything else"
perspective  = "llm"
cites        = ["dat:0055-facebook-corroborates-the-2010-maintenance-start",
                "dat:0044-old-wiki-testimony-ledger",
                "dat:0046-facebook-corroborates-two-ledger-adjudications",
                "dat:0060-alexis-thanksgiving-2009-final-pre-stabilization-episode",
                "dat:0020-old-wiki-suboxone-hedonic-tension",
                "dat:0061-elizabeth-eleanor-counterparty-of-2013-dosage-exchange"]
confidence   = "high"
importance   = 4
created      = "2026-09-09"
tags         = ["health", "suboxone", "epistemics", "corroboration"]
falsifiers   = [
  "A dated artefact — a pharmacy record, prescriber note, or contemporaneous message — breaks the continuity or moves day-zero off 2010-02-17. The convergence would then be convergence on the wrong date.",
  "The t014 tweet's referent is shown to be something else entirely — but dat:0046 already closed the strongest alternative (the Brooklyn move), so the replacement referent would need to beat that exclusion.",
  "The 2013 '3.5 years' message is shown to be about a different maintenance (a different drug, a different episode), collapsing the independent Facebook channel back into the ledger's single tweet.",
]
alternatives = [
  "The regimen is real but 'architecture' is retrospective meaning-making with no behavioral difference attached: daily dosing looks identical whether it is called architecture or treatment, so the frame carries identity value without explanatory power.",
  "It is closer to the standard harm-reduction narrative than it sounds — 'maintenance as legitimate medicine' in Ti-system register rather than clinical language. See int:chemical-architecture-engineered for the identity reading; this node is about the evidential system, not the frame.",
]

[when]
date = "2026-09-09"
+++

## The thesis

2010-02-17 is the most over-determined date in the wiki. Four independent
channels converge on the Suboxone maintenance start, and the convergence is
exactly what makes it the control case for the entire calibration apparatus:
where channels are independent, confidence bands mean something; where they are
not, you get the received-half problem and the minted numbers. Everything the
wiki claims about certainty should be measured against this date first.

## The four channels

1. **The same-day tweet.** The ledger scores t014 — "continuous Suboxone
   regimen began 17 February 2010" — as CONFIRMED, on a tweet reading "this is
   the most stressful day/decision of my life," with its own limit stated
   plainly: he never names the decision
   ([`dat:0044`](../data/0044-old-wiki-testimony-ledger.md)).
2. **The 2013 Facebook message.** "i've been on maintainence for 3.5 years,"
   written 2013-07-10 with no reason to be performing for a record, puts the
   start at roughly January 2010 — bracketing the ledger's date from a channel
   the ledger did not hold
   ([`dat:0055`](../data/0055-facebook-corroborates-the-2010-maintenance-start.md)).
   It brackets rather than pinpoints; "3.5 years" is a round number. What it
   establishes is the year and the season, three years after the fact instead
   of sixteen.
3. **The corroborated reasoning.** The ledger excluded the Brooklyn move as the
   tweet's alternative referent; a different archive, fetched sixteen years
   later from a different company, shows him discussing the move as settled and
   cheerful on January 31 — the reasoning held against evidence the ledger
   never saw ([`dat:0046`](../data/0046-facebook-corroborates-two-ledger-adjudications.md)).
   Corroborating an *exclusion* is the strong form; this is the ledger's
   denominator.
4. **The 2026 testimony.** A 2026-08-27 capture names the final active-use
   episode — Alexis over Thanksgiving 2009 — resolving seven weeks later on
   the already-dated day-zero. The relationship shape corroborates against the
   tweet archive; the drug chain (Roxicet, Spetch, the supply run) does not and
   is filed as unverified testimony
   ([`dat:0060`](../data/0060-alexis-thanksgiving-2009-final-pre-stabilization-episode.md)).

Dosage data runs alongside: 2mg/day in July 2013
([`dat:0055`](../data/0055-facebook-corroborates-the-2010-maintenance-start.md)),
a dosage exchange with Elizabeth Eleanor in 2013
([`dat:0061`](../data/0061-elizabeth-eleanor-counterparty-of-2013-dosage-exchange.md)),
and the 2021-03-31 "3 months at a time is legit, are the suboxone or subutex?"
— a question that presupposes a multi-month prescription on his side
([`dat:0055`](../data/0055-facebook-corroborates-the-2010-maintenance-start.md)).

## Why this matters beyond the date

Sixteen-plus unbroken years, zero relapses, framed as engineered chemical
architecture rather than recovery. The interesting move is to keep three layers
separate, because the date's strength does not transfer between them:

- **The date** — over-determined, the wiki's best.
- **The mechanism** — the prior wiki carried an unresolved tension: chronic
  receptor occupancy blunting hedonic range versus the stability the
  maintenance buys. It recorded the contradiction on both pages instead of
  picking a winner ([`dat:0020`](../data/0020-old-wiki-suboxone-hedonic-tension.md)).
  The mechanism claim originates in a language model's pharmacological
  reasoning inside a chat export — held open, not fact.
- **The identity frame** — "engineered chemical architecture," his term, the
  framing that makes it infrastructure rather than recovery. See
  [`int:chemical-architecture-engineered`](chemical-architecture-engineered.md)
  for the identity reading; this node is about the evidential system, not the
  frame.

## What it is the control for

Every other certainty claim in the wiki should be asked: how many independent
channels? The ledger's inverted bands (certain = 0.25) are computed on claims
with one channel. The minted numbers ("22x") are computed on unheld corpora.
The Suboxone date is what a well-evidenced claim looks like here — and even it
carries the ledger's stated limit (he never names the decision) and a
bracketing, not pinpointing, second channel. If this is the ceiling, the floor
is lower than the prose usually admits.

## Open questions

- The continuity is sixteen-plus years of *stated* daily dosing. No clinical
  record is held here, and none is sought — the prescriber boundary is not
  this system's to cross. The continuity claim is therefore testified, not
  independently recorded; its strength is the convergence of the start, not
  documentation of the middle.
- The pre-2010 drug chain (Roxicet, Spetch, the Winter-Park-to-Ocala supply
  run) is a 2026 recollection of 2009 from a single source. It is plausible,
  uncorroborated, and should stay that way until an artefact says otherwise.
