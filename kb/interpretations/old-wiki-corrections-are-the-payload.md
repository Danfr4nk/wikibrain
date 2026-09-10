+++
id          = "int:old-wiki-corrections-are-the-payload"
layer       = 3
type        = "interpretation"
title       = "The prior wiki's recorded errors are worth more than its conclusions"
perspective = "llm"
cites       = ["dat:0016-old-wiki-conflated-two-legal-matters",
               "dat:0017-old-wiki-correction-instinct-overfired",
               "dat:0012-old-wiki-recovered-byte-exact"]
confidence  = "moderate"
importance  = 4
created     = "2026-09-09"
updated     = "2026-09-09"
rechecked   = "2026-09-09"
tags        = ["old-wiki", "meta", "epistemics"]
alternatives = [
  "The legal pages are unusually self-critical because that domain has checkable documents; areas with no external record may show none of this discipline, in which case the corrections are a property of the evidence rather than of the system.",
  "Extraction has so far touched two of 497 pages, both from the smallest area. Two self-corrections in the densest-cited material may be the head of the distribution rather than a sample from it."
]

[when]
date = "2026-09-09"

[[edges]]
rel         = "about"
target      = "ent:wiki-brain"
strength    = "moderate"
asserted_by = "llm"
+++

## The reading

The operator's own assessment, recorded in
[`src:conceptual-spec-2026-content-layer`](../sources/conceptual-spec-2026-content-layer.md),
was that the prior wiki's value lies not in its conclusions but in the messy
evidence that lets a successor find where those conclusions were wrong.

The first two pages extracted support something slightly stronger and more
specific: **the prior system wrote down its own failures in a form that
survives**, and those records are the highest-yield material in the export.

Two, from four pages of a ten-page area:

- It carried a lawyer, a diversion programme and a magistrate's hearing attached
  to a snack-food theft for three weeks, in ordinary declarative prose, with
  downstream pages built on it ([`dat:0016`](../data/0016-old-wiki-conflated-two-legal-matters.md)).
- It distrusted an accurate first-person date on a plausibility argument that was
  itself false, and named the mechanism — a correction prior learned from a
  different set of captures, misapplied ([`dat:0017`](../data/0017-old-wiki-correction-instinct-overfired.md)).

Neither was caught internally. Both were closed by the operator. Both were
recorded in place with the wrong version left legible.

## Why this is an interpretation and not a datum

That those corrections exist is fact, and it is filed as such. That they are
*the most valuable content in the export* is a judgement about relative worth,
made by a reasoning system with an obvious interest in the answer — a successor
architecture is flattered by the finding that its predecessor's errors are
instructive. `perspective = "llm"` is doing real work here.

The alternatives above are not decoration. The legal domain has courts, dockets
and printed blotters to collide with; a page about someone's inner life has
nothing external to falsify it, and may therefore show no corrections at all
while being far less reliable. If that turns out to be the case, the correct
reading inverts: dense self-correction would mark **the areas with external
checks**, not the areas where the system was careful.

Two pages out of 497 cannot distinguish those. The extraction order in
`EXTRACT.md` — `mind/` and `self/` last, precisely because they are mostly
conclusions — is the test.

---

## CHECKED [2026-09-09] — not a competitor, and no claim here changes

[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md)
was written treating this node as the rival reading, on the grounds that the two
"make opposite predictions" about correction density across the 491 unread pages.
The census run to settle that ([`dat:0042`](../data/0042-marker-census-does-not-support-the-pattern.md))
makes it plain they never did: *corrections mark where external checks existed*
and *the system was rigorous where something external could check it* predict the
same density, in the same places, for reasons stated differently. A count falls on
both equally, and it did — `mind/` came in level with `health/`.

Nothing in the argument above is revised. It was never tested by that census, and
it is not supported by it either. What is retired is the claim, made on the
pattern rather than here, that these two readings could be told apart by counting.
Told apart they would have to be by reading what the marked passages actually
correct — whether a number or a meaning — which nobody has done.
