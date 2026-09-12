+++
id         = "evt:2010-02-17-suboxone-start"
layer      = 2
type       = "event"
title      = "Suboxone day-zero: opioid maintenance begins, 17 February 2010"
cites      = ["dat:0055-facebook-corroborates-the-2010-maintenance-start", "dat:0046-facebook-corroborates-two-ledger-adjudications"]
confidence = "high"
importance = 5
tags       = ["health", "suboxone", "opiates", "nyc-era"]
created    = "2026-09-10"

[when]
date   = "2010-02-17"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "self"
+++

## What happened

On 17 February 2010, at the tail end of the Full Sail window, Dan began
the Suboxone maintenance regimen he has been on every day since — sixteen
unbroken years with zero stated relapses to full opiate use and no
recovery-program participation anywhere in the record. He frames it as
engineered chemical architecture, not recovery.

The date also terminates the opiate arc that began with Roxicet/Oxy in
2007 and relapsed hard at Thanksgiving 2009: stabilization arrived seven
weeks after the Thanksgiving episode, and the day after day-zero he
boarded the train to New York.

## Dated sequence

| when | what | source |
| :--- | :--- | :--- |
| 2007 | first opiate (Roxicet → Oxy), age 18–19; five months to addiction | corpus__3.txt wiki/health/chemical-architecture |
| 2009-11-26 | Thanksgiving relapse — the final pre-stabilization episode, via Alexis's return | [dat:0244-alexis-armel-dating-and-commitment-speed] |
| 2010-01-31 | *"i'll be back around the 22nd, and moving to NYC the first week in March"* — the move is settled and unremarkable, so it cannot be the subject of the stressful-day tweet | [dat:0046] |
| **2010-02-17** | **day-zero**; same-day tweet: *"this is the most stressful day/decision of my life"* — the ledger scores t014 CONFIRMED on the dated alignment | [dat:0055], prior wiki testimony ledger |
| 2010-02-18 | Rick meets Dan in Pittsburgh; they board an Amtrak to Penn Station; months of apartment-hunting follow (Rick's $2,000/month "while you intern" offer); lease at 424 Bedford Ave, Williamsburg, by June | wiki/people/rick-frank, Gemini-58 |
| 2010-02-28 | the move to NYC | canonical record |
| 2013-07-10 | *"i've been on maintainence for 3.5 years"* — brackets the start to roughly January 2010 from a channel the ledger never held | [dat:0055] |

## The provenance problem, kept visible

**The day-zero date is not remembered; it is computed.** Its origin is
`raw/self/dox-scan/Gemini-_58.txt`: a model, reading email logs, told Dan
that *"on Thursday, February 18, you and your dad boarded an Amtrak
train... bound for Penn Station"*, and Dan replied:

> *"NO no - if the train left on feb 18 that means that the first day i
> began my successful suboxone streak was feb 17, 2010."*

So the anchor is a model's reconstruction, and the date is the day before
it. The wiki flagged the anchor as misread in a 2026-09-03 contradiction
block. What did not move on 2026-09-03 is the conclusion: the
independently bracketed 2013 Facebook message (3.5 years → ~Jan 2010) and
the Feb 17 tweet alignment both survive without the train.

**The tweet names nothing.** The subject never names the decision; the
ledger is explicit that this is a dated alignment on an independent
artefact, not a clinical record. "Most stressful day/decision" could in
principle attach to something else; what anchors it is the exclusion of
every other candidate (the move was settled, celebrated, and discussed as
good news three weeks earlier) plus the seven-week gap since the final
opiate episode.

## What the later record adds

- **The dual supply topology ran from the start.** In 2013 he writes
  *"i was on the strips when i had a doctor in nyc"* (prescriber, past
  tense) to the same counterparty he solicits as a backup supply; the
  prescription and the informal channel overlap for at least eight years,
  2013–2021. [dat:0055]
- **One dosage figure on record:** 2mg/day, self-reported in 2013.
  [dat:0055]
- The prescriber exists as a real arrangement: recorded exchanges are
  only about moving the script between pharmacies; by June 2025 the
  prescription is the default route with the dealer network as failover;
  the May 2026 supply failure produced 72+ hours of withdrawal mid-shift.
  (agent-D domain summary)

## Contradictions and open items

- The **February 17 triple**: this date, the 2015 possession-arrest
  blotter window opening 2015-02-17, and the 2016-02-17 ARD hearing. No
  source explains it; genuine docket-scheduling anniversary or an
  artefact propagated through earlier passes — flagged as worth a look
  before any of the three dates is relied on.
  [dat:0071-arrest-breath-test-and-feb-17-coincidence]
- No clinical record of the induction exists anywhere on disk. If a
  pharmacy or clinic record ever surfaces with a different induction
  date, the tweet alignment collapses into coincidence and the
  "stressful decision" needs a new referent.

## Cross-links

- [ent:dan](../entities/dan.md) — the maintainer of the stack.
- [dat:0055-facebook-corroborates-the-2010-maintenance-start](../data/0055-facebook-corroborates-the-2010-maintenance-start.md)
  — the 3.5-year bracket and the dual supply topologies.
- evt:2009-09-full-sail-graduation — the degree is done; five months
  later, the opiates are done.
- evt:2015-02-possession-arrest — five years later to the week, the
  arrest lands on the day-zero anniversary; the breath-test contradiction
  sits on that page.
