+++
id         = "evt:2015-combos-retail-theft"
layer      = 2
type       = "event"
title      = "Retail theft citation, Combos"
cites      = ["dat:0016-old-wiki-conflated-two-legal-matters",
              "dat:0030-combos-corroborated-first-person"]
confidence = "moderate"
importance = 2
created    = "2026-09-09"
updated    = "2026-09-09"
tags       = ["legal", "uniontown-era"]

[when]
approx = "2015, a few weeks after the possession arrest"
start  = "2015-02"
end    = "2015-12"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "moderate"
asserted_by = "external"
+++

> **UPGRADED 2026-09-09, low → moderate.** Written below on the prior wiki's
> statement that the corpus holds no contemporaneous account. A corpus search
> ([`dat:0030`](../data/0030-combos-corroborated-first-person.md)) found three
> outbound December 2015 messages including a first-person admission — *"Because
> I took combos"* — in a month holding 4,088 messages against a corpus median of
> 1,123, so the window is well covered.
>
> The same search corrected the page's strongest evidence: the trooper's line
> *"DID YOU STEAL MORE COMBOS"* is **outbound**, Dan recounting it afterwards
> rather than a captured utterance. The inference survives; the evidence is one
> step further from the event than the prior wiki presented it.
>
> The assessment below is left unedited, because what it got wrong is the
> instructive part: it reasoned carefully from a false premise about what the
> corpus contained, and no amount of care on the page could have caught that.

## Why it was `low` confidence and still worth a node

The prior wiki is explicit that the corpus holds **no contemporaneous account**
of this: no store, no date, no charge grading, no disposition. Under its own
Gaps heading it says "Everything specific."

What survives is second-order — a joke. A trooper handling paperwork on the
separate possession matter is quoted ribbing the subject, "DID YOU STEAL MORE
COMBOS," and the page reasons that "a trooper does not make that joke about
nothing." A partner is quoted taking it up as a running bit. A February 2016
message reads "My combos are paid off," which the page notes could refer to this
fine, the possession case's, or both.

That is a real inference and a weak one, and the prior wiki presents it as such.
It is recorded here at `low` because an event whose only evidence is other
people's jokes about it is exactly the kind of claim that should carry a visible
discount.

## The reason it exists at all

It is the wrong half of [`dat:0016`](../data/0016-old-wiki-conflated-two-legal-matters.md).
For three weeks the prior wiki attributed a criminal defence, a diversion
programme and a magistrate's hearing to this citation. Recording the theft as
its own thin, low-confidence event is what keeps that correction legible —
delete it and the error becomes unreconstructable.
