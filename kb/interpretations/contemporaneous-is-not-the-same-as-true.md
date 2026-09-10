+++
id           = "int:contemporaneous-is-not-the-same-as-true"
layer        = 3
type         = "interpretation"
title        = "A contemporaneous record is better dated than a memory, not more honest than one"
perspective  = "llm"
cites        = ["dat:0044-old-wiki-testimony-ledger",
                "dat:0045-facebook-graduation-claim-september-2009",
                "dat:0046-facebook-corroborates-two-ledger-adjudications",
                "dat:0031-dui-belongs-to-the-other-speaker"]
confidence   = "moderate"
importance   = 4
created      = "2026-09-09"
updated      = "2026-09-09"
tags         = ["epistemics", "testimony", "old-wiki", "method"]
falsifiers   = [
  "A systematic comparison of contemporaneous first-person claims against documents (transcripts, deeds, dockets) finds them right at a rate indistinguishable from 100%. That would make the asymmetry the ledger assumes a real one and this reading an artefact of one case.",
  "The 2009-09-26 graduation message turns out to be accurate — a Full Sail transcript dated in September — with the December coursework separately explained. The example collapses and the argument loses its only instance.",
  "The prior wiki is found to grade its contemporaneous sources elsewhere, on some page not yet read, with a scoring scheme comparable to the testimony ledger's. Then the asymmetry is in this extraction rather than in that system.",
]
alternatives = [
  "The asymmetry may be deliberate and correct at the ledger's scale. Contemporaneous claims are wrong less often than sixteen-year-old memories, so grading the memory against the record is the right default even if the record is imperfect — the ledger would then be making a defensible simplification rather than an error.",
  "The ledger may in fact hedge on this in `testimony/events.jsonl`, which this system does not hold. The generated page shows outcomes and what settled them, not the adjudicator's reservations, so an absence on the page is weak evidence about the tool.",
]

[when]
date = "2026-09-09"
+++

## The asymmetry

[`dat:0044`](../data/0044-old-wiki-testimony-ledger.md) describes a scoring
system of real quality: it separates veracity from calibration, refuses to let
`unfalsifiable` count against the speaker, and publishes the ways it is biased.
Every adjudication in it runs the same direction — **a first-person claim made in
2026 is graded against a record made at the time**, and the record wins.

The record is not graded. It arrives as the arbiter.

## What breaks the symmetry

[`dat:0045`](../data/0045-facebook-graduation-claim-september-2009.md) is a
contemporaneous first-person claim that at least one other contemporaneous record
contradicts. On 26 September 2009 he told two people he had graduated that day.
The tweet archive has him in classes that December. Both are dated, both are his,
neither is a memory.

The 2009 message is also *shaped*: a reconnection with someone he had not spoken
to in years, the graduation announced alongside a move to Los Angeles to work in
a studio, and five months later he was moving to New York instead
([`dat:0046`](../data/0046-facebook-corroborates-two-ledger-adjudications.md)).
The ledger tracks exactly this axis — it has a `slant` column separating errors
that would have flattered from errors that would have condemned — and applies it
only to the testimony under grading, never to the evidence doing the grading.

## Why it is not a small point

The ledger's headline finding is the inverted confidence band: `certain` claims
holding up a quarter of the time. That number is computed by scoring memory
against record. If contemporaneous records are themselves wrong at some rate —
and social messages made to impress are a strong candidate for where — then part
of what the ledger measures as *he misremembers* is *the record and the memory
disagree, and one of them is the record.* At n=10 a single such case moves the
number visibly.

This is a reservation about the instrument, not about its result. The result may
well survive: [`dat:0046`](../data/0046-facebook-corroborates-two-ledger-adjudications.md)
is an adjudication that held up against a channel the ledger did not have, and
[`dat:0031`](../data/0031-dui-belongs-to-the-other-speaker.md) shows the failure
mode running the other way too — there, a record was correct and the wiki
attached it to the wrong speaker.

## What this system should do about it

Nothing structural yet. The rule that falls out is small and can be applied by
hand: **when a contemporaneous claim is used to grade a later one, ask what the
contemporaneous claim was for.** A class schedule, a docket entry and a delivery
receipt were made for something other than the reader's benefit. A message
telling an old friend that things are going great was made for a reader, and the
reader was not an archive.

---

## CHECKED [2026-09-09] — the argument holds and gets a better target

Written against the testimony ledger, before its underlying pages had been read.
[`dat:0045`](../data/0045-facebook-graduation-claim-september-2009.md) now
carries a correction: the prior wiki holds the graduation disagreement open, on
two pages, in dated blocks, and names the artefact that would settle it.

That improves this reading rather than damaging it, because the two places state
**opposite postures on the same question** and neither references the other.

On `wiki/timeline/periods/full-sail-2008-2010`:

> The August date comes from … first-person testimony recorded years later. The
> tweets are first-person and same-day. **The disagreement is held rather than
> resolved.**

The page names the asymmetry this node is about — record versus memory — and then
explicitly declines to let it decide. `wiki/self/twitter/2009` goes further:
*"Neither is corrected on the strength of the other."*

The ledger, generated from the same corpus, scores the same class of question
`refuted` — the record wins, and a number comes out of it. Both are the prior
wiki. The pages hold; the ledger scores. Nothing reconciles them, and the
headline calibration figure is computed under the posture the pages refuse.

So the reservation sharpens. It is not that the prior system was naive about
whether records can be wrong — the contradiction blocks are proof it was not. It
is that **the instrument that produces the number does not inherit the caution
the prose applies**, and the number is what travels: into
[`dat:0044`](../data/0044-old-wiki-testimony-ledger.md), into any summary, into
this repository until it was checked.

The third alternative recorded above — that the hedges may live in
`testimony/events.jsonl` — is now the load-bearing one, and it stays unresolved
because that file is not in the export.
