+++
id         = "evt:2015-02-possession-arrest"
layer      = 2
type       = "event"
title      = "Drug possession arrest, Uniontown"
cites      = ["dat:0013-old-wiki-blotter-charges", "dat:0014-old-wiki-age-26-dating",
              "dat:0015-old-wiki-ard-policy-bar"]
confidence = "moderate"
importance = 4
created    = "2026-09-09"
tags       = ["legal", "uniontown-era"]

[when]
approx = "on or shortly before 17 February 2015"
start  = "2015-02"
end    = "2016-02"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "external"

[[edges]]
rel         = "preceded"
target      = "evt:2015-combos-retail-theft"
strength    = "moderate"
asserted_by = "other"
note        = "Order and the 'a few weeks' interval come from the operator via the prior wiki, not from a document. Both matters are 2015; only the sequence is testimony."
+++

## What is claimed, and how firmly

Three charges — possession of a controlled substance, possession of a small
amount of marijuana, possession of drug paraphernalia — filed in Fayette County
between 17 and 19 February 2015 before Magisterial District Judge Michael
Metros, and resolved through ARD admission approximately a year later.

**Confidence is `moderate`, and the reason is the shape of the evidence rather
than any doubt about the account.** Every datum under this event is testimony
from a single unaudited source. The strongest of them,
[`dat:0013`](../data/0013-old-wiki-blotter-charges.md), quotes a printed court
blotter — but the clipping is not in the recovered export, so the chain runs
*this event → prior wiki → clipping → court* and only the first link is
verified. A quotation of a document is not the document.

## What would settle it

A Fayette County MDJS docket search. The prior wiki notes that the district is
known (MDJ-14-1-01, Michael M. Metros, 88 North Gallatin Avenue, Uniontown) but
the docket number is not, and states the distinction exactly: "MDJS dockets are
per-case, and knowing the court is not knowing the case."

One docket lookup would convert this event's entire evidence base from
single-source testimony to primary record, and would simultaneously settle
`con:2015-arrest-breath-test` and date the interval to the Combos matter. It is
the highest-value outstanding retrieval in this material.

## What is not claimed here

The narrative detail the prior wiki carries — the 3am errand, the impound and
inventory search, the refused consent, the dog, the arresting officers' remark
about unnatural politeness — is not extracted into data nodes. It is vivid,
internally consistent, and rests on a single retrospective capture given roughly
ten years after the fact. It stays readable in
`raw/old-wiki-export-2026-09-04/whole.txt` and is available for extraction if a
second source ever bears on it.
