+++
id           = "int:confidence-calibration-ledger"
layer        = 3
type         = "interpretation"
title        = "The ledger hedges and the method pages mint numbers: 'certain' is worth 0.25 while '22x' travels uncorrected"
perspective  = "llm"
cites        = ["dat:0044-old-wiki-testimony-ledger",
                "dat:0580-calibrated-confidence-22x-claim-not-reproducible",
                "dat:0047-old-wiki-rederived-its-headline-capability-claim",
                "dat:0664-calibrated-confidence-n1-calibration-case",
                "dat:0890-big-five-corpus-audit-and-self-typing",
                "dat:0591-dec-2025-spike-annie-thread-held-replicated"]
confidence   = "moderate"
importance   = 5
created      = "2026-09-09"
tags         = ["epistemics", "calibration", "old-wiki", "statistics"]
falsifiers   = [
  "A re-run of the exact '22x / every year 2015-2025' statistic on the full chat.db, with the detector stated, reproduces both hard numbers. The dat:0580 challenge would then be an export-mismatch artefact and this reading's central example collapses.",
  "A longitudinal calibration set is assembled with more than n=1 resolvable graded credence, and the graded numbers turn out to mean something. The 'scorecard is empty' claim would then be a sample-size artefact rather than a property of the habit.",
  "The forensic-method page's two hard numbers are shown to have been computed on the richer merged corpus the held pull lacks, with the method documented — making them stale-export artefacts rather than uncheckable mintings.",
]
alternatives = [
  "The headline numbers were computed on a fuller corpus this repository does not hold, with an unreplicated detector — an export mismatch and a method gap, not fabrication. dat:0580 already names this as the honest reading.",
  "The ledger and the method pages are different instruments with different honesty standards — a governance failure rather than dishonesty. The ledger is a scoring tool that knows its limits; the method pages are advocacy tools that do not.",
]

[when]
date = "2026-09-09"
+++

## The thesis

The calibration apparatus is two instruments sharing one brand. The testimony
ledger ([`dat:0044`](../data/0044-old-wiki-testimony-ledger.md)) hedges to the
point of self-sabotage: stated `certain` holds up 0.25 of the time (n=4),
`confident` 0.69 (n=4), `hedged` 0.75 (n=2); veracity 52/100; Brier 0.335,
skill −0.34 against a coin flip — and the page says twice that at n=10 this is
a suggestion, not a measurement. The forensic-method pages mint headline
numbers: graded numeric confidence in casual SMS at "**22x** the rate of the
503 people texting him, **every year from 2015 to 2025**." The ledger would
never publish a number like that. The method page did — and the number does not
reproduce on the held corpus.

## The non-reproduction

[`dat:0580`](../data/0580-calibrated-confidence-22x-claim-not-reproducible.md)
ran the check three ways. 2022 is entirely absent from the held corpus — zero
rows from any sender — so "every year 2015–2025" is false on held data. Under a
strict definition the operator has 4 instances against 0 for his contacts:
directionally consistent ("he does it, they don't") but a ratio of 4:0, not
22x, on a thin base. Under a broad definition the ratio is 1.09x. And of the
four strict instances, two are Gemini-era score quotations ("9 out of 10", "8
out of 10 chance") — the claim that the habit predates the AI-collaboration era
by eight years rests on the remaining two.

## The remarkable part: the page corrected itself, and the number kept traveling

The same page that minted the headline carries a dated `CORRECTED [2026-08-23]`
block that re-derives all four of its figures under a stricter filter and
reports that **none of them reproduces** and that the "zero" is false: 43→60
outbound credences, 2→4 inbound, 15→24 graded outbound, 0→1 graded inbound —
"the thesis holds and the arithmetic does not"
([`dat:0047`](../data/0047-old-wiki-rederived-its-headline-capability-claim.md)).
The infinite ratio became ~22x from 24:1; "not once in a decade from 503
people" became once. That is the prior system's best moment — it cost itself
its own best number. And
[`dat:0580`](../data/0580-calibrated-confidence-22x-claim-not-reproducible.md)
found the uncorrected "22x / every year" headline still standing on a
forensic-method page afterward. The correction existed at the source and the
number outran it. This is a special case of
[`int:corrections-dont-propagate`](corrections-dont-propagate.md): even
self-correction does not propagate when the number is the thing that travels.

## What the calibration story actually contains

Strip the headline numbers and three things survive. First, the disposition is
real: an independent held-corpus scan reproduces the categorical finding at 13
outbound / 0 inbound for the narrow self-confidence construction
([`dat:0890`](../data/0890-big-five-corpus-audit-and-self-typing.md)) — he uses
the probability scale where everyone else uses a word. Second, the scorecard is
empty: of 24 strict graded credences only one is resolvable, a 75% Nemacolin
forecast from 2018-08-08 that resolved false — "n = 1 is not a calibration
test, and the habit aims almost entirely at propositions that can never be
scored"
([`dat:0664`](../data/0664-calibrated-confidence-n1-calibration-case.md)). The
scale is real; the scorecard is empty. Third, the denominator exists:
[`dat:0591`](../data/0591-dec-2025-spike-annie-thread-held-replicated.md) is the
strongest verification of its wave — ratios that *do* replicate when the method
is stated. Replication is possible. The headline numbers just weren't built
that way.

## The reservation about this repository

[`dat:0044`](../data/0044-old-wiki-testimony-ledger.md) ends its calibration
discussion with the sharp one: this repository stamps a self-assessed
`confidence` on every node, by the same author who wrote the claim. Seven
extracted claims were checked against independent sources and seven changed on
contact. There is no ledger tracking that, and nothing in the architecture
would notice if this system's `high` were worth 0.25 too. Every node in this
file carries such a stamp. The ledger is the instrument this repository assumes
and does not have.

## Open questions

- What was the forensic-method page's actual detector? The strict re-run is "in
  principle reproducible here and has NOT been reproduced" — the gap between
  dat:0047's honest withdrawal and a real re-derivation is still open.
- Should this repository build the ledger the old wiki had — tracking its own
  confidence stamps against later corrections? dat:0044's arithmetic is
  unaudited (its events.jsonl is not held), so the template exists but the
  contents do not transfer.
