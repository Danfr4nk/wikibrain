+++
id         = "syn:suboxone-16-years"
layer      = 5
type       = "synthesis"
title      = "Sixteen unbroken years of Suboxone maintenance: the longest-running intervention in the record"
cites      = ["evt:2010-02-17-suboxone-start", "dat:0055-facebook-corroborates-the-2010-maintenance-start",
              "dat:0020-old-wiki-suboxone-hedonic-tension",
              "dat:0046-facebook-corroborates-two-ledger-adjudications", "ent:alexis-armel",
              "pat:reasoning-sound-provenance-unreliable"]
confidence = "moderate"
importance = 5
created    = "2026-09-09"
updated    = "2026-09-09"
rechecked  = "2026-09-10"
tags       = ["health", "suboxone", "chemical-architecture"]

falsifiers = [
  "A prescriber record, pharmacy record, or gap in the supply chain that breaks the unbroken run — one documented lapse anywhere in 2010-2026 retires the 'zero relapses' half of the claim while leaving the duration intact.",
  "The day-zero date turning out to be a ledger artefact rather than a real start: if the Gemini-_58 origin is shown to have computed the date from the tweet rather than from the email logs, the start moves from 'computed' to 'inferred' and the 2026-09-09 event node loses its anchor.",
  "A clinical source resolving dat:0020's hedonic tension against the 'engineered architecture' framing — if the maintenance dose is shown to meaningfully blunt the anxiety regulation the system is built for, the intervention's own purpose statement needs revision.",
]

open_questions = [
  "What the regimen actually consists of now: dose, prescriber, pharmacy — none of it is in the held corpus. The 2013 Facebook message says 2mg/day then; nothing says what 'still doing subs' looks like in 2026.",
  "How the unbroken run interacts with everything else the record holds about daily substance use — the ledger and the corpus measure the opiate half; the rest is not this node's claim and not its evidence.",
  "Whether the absence of any recovery-program participation is load-bearing (the architecture working as designed) or survivorship (a run that happened to hold). No comparison group exists in the record.",
]
+++

## The argument

On 17 February 2010, at the tail end of the Full Sail window, Dan began
the Suboxone maintenance regimen he has been on every day since — sixteen
unbroken years with zero stated relapses to full opiate use and no
recovery-program participation anywhere in the record. It is the
longest-running deliberate intervention in the biography, and he frames it
as **engineered chemical architecture, not recovery**
([`evt:2010-02-17-suboxone-start`](../events/2010-02-17-suboxone-start.md)).

That framing matters because it is the opposite of how every other system
in his life is narrated. The relationships are stories. The jobs are
episodes. The maintenance is infrastructure — maintained daily, unnamed in
the corpus for long stretches, treated as background rather than as
achievement. The record's most durable fact is the one it talks about
least.

## The evidence it synthesizes

**The start.** The date terminates the opiate arc that began with
Roxicet/Oxy in 2007 and relapsed hard at Thanksgiving 2009 — the final
pre-stabilization episode, via Alexis's return
([`ent:alexis-armel`](../entities/alexis-armel.md)). Stabilization arrived
seven weeks after that episode, and the day after day-zero he boarded the
train to New York: 2010-02-18, Rick meeting him in Pittsburgh, Amtrak to
Penn Station, lease at 424 Bedford Ave, Williamsburg, by June
([`evt:2010-02-17-suboxone-start`](../events/2010-02-17-suboxone-start.md)).

**The provenance problem, kept visible.** The day-zero date is not
remembered; it is computed. Its origin is `raw/self/dox-scan/Gemini-_58.txt`:
a model, reading email logs, told Dan the date — and the prior wiki's
testimony ledger scores t014 CONFIRMED on the dated alignment with a
same-day tweet reading *"this is the most stressful day/decision of my
life."* The ledger states its own limit plainly: the subject never names
the decision, so it is a dated alignment on an independent artefact rather
than a clinical record. This is
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
running at full size: the reasoning that assembles the date is careful,
and the date's origin is a model's reading of logs nobody else has
re-opened ([`evt:2010-02-17-suboxone-start`](../events/2010-02-17-suboxone-start.md)).

**The independent bracket.** A Facebook exchange of 2013-07-10 has him
writing outbound: *"i've been on maintainence for 3.5 years"*, *"i was on
the strips when i had a doctor in nyc"* (past tense), *"and i'm down to
2mg/day"*, *"yes still doing subs"*. Counting back 3.5 years from July
2013 gives roughly January 2010 — a bracket, not a pinpoint, consistent
with 2010-02-17 and equally consistent with December 2009 or March 2010,
from a channel the ledger never held
([`dat:0055`](../data/0055-facebook-corroborates-the-2010-maintenance-start.md),
[`dat:0046`](../data/0046-facebook-corroborates-two-ledger-adjudications.md)).

**The tension the system got right.** The prior wiki carried an unresolved
contradiction between two of its own health pages: an AI-collaborative
session had raised the mechanism that chronic opioid receptor occupancy,
even at a stabilizing maintenance dose, blunts hedonic range and baseline
access to motivation and reward-anticipation — so the maintenance dose
that stabilizes opiate dependency may cap the capacity to regulate a
separate anxiety system. The wiki recorded the disagreement on both pages
rather than resolving it. No clinical literature, no prescriber, no
measurement; the claim should not be promoted without a real source
([`dat:0020`](../data/0020-old-wiki-suboxone-hedonic-tension.md)). This is
the counterexample inside
[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md):
an inference handled correctly with no number available.

## What it explains that the parts don't

No single node below this one carries the implication of the whole:
**the "engineered architecture" framing is not a metaphor about the
regimen — it is the regimen's design philosophy, and it is the only
self-intervention in the biography that has never failed.** The 2020–2024
relationship hole, the two NYC exits, the BFS firing, the August 2026
rupture — every other long system in the record broke or was broken. The
maintenance did not. Whatever else is true about the sixteen years, the
one engineering project that ran uninterrupted is the chemical one, and
it was built on the only day of his life he describes in the corpus as a
*decision* rather than an event: *"this is the most stressful
day/decision of my life."*

It also reframes the provenance problem. A date computed by a model from
logs is a weak anchor for a sixteen-year claim — and yet the claim has
two independent supports that do not share the weakness: the 2013
Facebook bracket (different channel, different decade, casual rather than
performed) and the sheer negative evidence of the held corpus, which
contains no relapse episode to full opiate use across 192,140 messages.
The strongest evidence for the run is not the start date. It is the
absence of any end date.

## Where it breaks and what it can't settle

**The clinical half is thin.** Everything about the regimen's content —
dose, prescriber, pharmacy, formulation — comes from testimony or from a
model's reading of logs. The 2013 message says 2mg/day; nothing held says
what 2026 looks like. The hedonic-tension mechanism is an LLM's
pharmacological reasoning relayed by a wiki, not a clinical source. The
tone here stays clinical and non-moralizing because the record gives no
standing to be otherwise: what exists is a start date, a bracket, and
sixteen years of no contrary evidence.

**The framing is the subject's, and it does real work.** "Engineered
chemical architecture, not recovery" is a claim about what the regimen
*is* — a system he built rather than a program he follows. It is also a
claim that conveniently exempts the regimen from recovery's evaluative
frame (no program, no sponsor, no milestones to miss). Both can be true.
The node records the framing without endorsing the exemption.

**The day-zero tweet is the load-bearing artefact and it is one tweet.**
If the tweet's referent was not the Suboxone decision — and the ledger's
own t014 notes the subject never names it — the start date loses its only
same-day anchor and the Facebook bracket becomes the primary evidence,
with ~±6 weeks of slop. The sixteen years survive; the February 17
precision does not.
