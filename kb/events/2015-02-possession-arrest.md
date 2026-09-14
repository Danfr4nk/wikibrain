+++
id         = "evt:2015-02-possession-arrest"
layer      = 2
type       = "event"
title      = "Drug possession arrest, Uniontown"
cites      = ["dat:0013-old-wiki-blotter-charges", "dat:0014-old-wiki-age-26-dating",
              "dat:0015-old-wiki-ard-policy-bar", "dat:0016-old-wiki-conflated-two-legal-matters",
              "dat:0069-possession-arrest-night-and-blotter",
              "dat:0071-arrest-breath-test-and-feb-17-coincidence"]
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

[[edges]]
rel         = "followed"
target      = "evt:2016-02-ard-granted"
strength    = "strong"
asserted_by = "other"
note        = "The 2016-02-17 hearing before Judge Wagner approved ARD for exactly these charges; see evt:2016-02-ard-granted."
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

## Ingest extension (2026-09-10): what the node network now carries

The original draft of this event deliberately withheld narrative detail and
stopped at the charges. The ingest since has put three more kinds of
material on record about the same night, and they are gathered here rather
than re-extracted — this file is the event; the datums below are the
evidence.

### The night, as told

On or shortly before February 17, 2015, at roughly 3am in downtown
Uniontown, Pennsylvania State Police pulled Dan over as he returned from
delivering lemons to his mother Suz at a pool hall (KJ's / Anytime
Billiards on Route 51). He was driving Fran's disused car — expired
registration, bald tires — with Suz's elderly blind Jack Russell Lucy in
the back. The car was declared undriveable and impounded; the inventory
search produced the three charges the blotter confirms: cocaine residue
in an empty bag (Dan's telling: a bag corner saved for a 10% bump),
roughly one hitter's worth of marijuana, and the one-hitter itself.
Dan's 2026 capture states no sobriety testing was performed at the stop;
the troopers later told Suz the tell was Dan's unnatural politeness.
([dat:0069-possession-arrest-night-and-blotter](../data/0069-possession-arrest-night-and-blotter.md))

The exact three-charge match between a contemporaneous third-party
blotter and Dan's account given ten years later with no access to the
clipping is the corpus's strongest single legal corroboration: a
dated document, an arithmetic date (age 26 on the blotter fixes February
2015), and a testimony that matches it charge for charge. The chain runs
*event → prior wiki → clipping → court*; only the first link is verified
here, but the agreement across the decade is the load-bearing part.

### The 2026-08-03 correction: two matters, split

From 2026-07-13 to 2026-08-03 the prior wiki carried one page — *"2015
Arrest (Retail Theft / 'The Combos Incident')"* — that attributed this
event's lawyer, ARD application, Judge Wagner hearing, barracks trips,
and surrounding family conflict to a snack-food theft. On the operator's
correction it split into two real matters, weeks apart, with all the
machinery belonging here. **Both are real; only this one was an arrest.**
The theft has its own event: [evt:2015-combos-retail-theft](2015-combos-retail-theft.md).
([dat:0016-old-wiki-conflated-two-legal-matters](../data/0016-old-wiki-conflated-two-legal-matters.md))

### The breath-test contradiction (unresolved)

Two of Dan's own testimonies disagree about the roadside. The page's
earlier form had him consenting to a breath search — a decision he later
credited with saving his license, citing a March 2026 message (*"I would
have lost mine if I hadn't consented to the breath search when I got
arrested"*). The 2026-08-02 capture states the opposite directly: *"I was
never asked to complete field sobriety tests or take a roadside PBT."*
Both are Dan, ten years apart. The page's most economical reconciliation
is that the 2026 line refers to a chemical test at the barracks rather
than roadside testing — but no source states that, so it stays marked
inference. The March 2026 message was not located in the held corpus and
is the wiki's transcription.
([dat:0071-arrest-breath-test-and-feb-17-coincidence](../data/0071-arrest-breath-test-and-feb-17-coincidence.md))

### The February 17 triple (unresolved)

The date appears three times: the blotter window opens on **2015-02-17**,
the ARD hearing is dated **2016-02-17**, and the Suboxone day-zero is
**2010-02-17**. No source read so far explains it — genuine
docket-scheduling anniversary or an artefact propagated through earlier
passes. Two of the three are load-bearing dates
([evt:2010-02-17-suboxone-start](2010-02-17-suboxone-start.md),
[evt:2016-02-ard-granted](2016-02-ard-granted.md)); the page's warning —
worth a look before any of the three is relied on — is preserved here.
([dat:0071-arrest-breath-test-and-feb-17-coincidence](../data/0071-arrest-breath-test-and-feb-17-coincidence.md))

### Where it lands

The hearing before Judge Wagner on February 17, 2016 approved ARD against
a Fayette County DA policy that barred it for cocaine charges — private
counsel Jack Connor ("Jack had to do some wheeling and dealing"), several
thousand dollars, record kept clean. That hearing is its own event:
[evt:2016-02-ard-granted](2016-02-ard-granted.md).

### Still open

The exact arrest date within the days before February 17, 2015, the
arresting barracks, the docket number, and whether the expungement was
completed. Whether the fines referenced in January and February 2016
belong to this case, the Combos matter, or both running concurrently is
not determinable from the message record — the *"My combos are paid
off"* phrasing suggests at least some of that money was the theft fine.
