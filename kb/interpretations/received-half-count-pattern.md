+++
id           = "int:received-half-count-pattern"
layer        = 3
type         = "interpretation"
title        = "The page's number is right as the received half and wrong as the shape: one-export, one-direction thread counts, corrected fourteen times"
perspective  = "llm"
cites        = ["dat:0978-mike-hinkle-thread-dimensions",
                "dat:0979-mohammed-bin-salman-thread-dimensions",
                "dat:0980-new-jim-shaffer-thread-dimensions",
                "dat:0983-rj-ritchey-thread-dimensions",
                "dat:1211-vicki-234-is-received-only-not-total",
                "dat:0844-kelly-johansson-two-way-thread-and-arrangement-details",
                "dat:0842-josh-coccagna-thread-metrics-and-content-corrections",
                "dat:1117-shannon-drone-client-thread-corrected",
                "dat:0943-marla-thread-dimensions-correction",
                "dat:0760-lindsay-carolla-thread-count-correction",
                "dat:0673-jay-lauer-direction-and-count-corrections",
                "dat:0531-contact-gini-two-sided-unverifiable",
                "dat:1032-context-core-staleness-audit-2026-08-16"]
confidence   = "high"
importance   = 4
created      = "2026-09-09"
rechecked    = "2026-09-10"
tags         = ["corpus", "counts", "direction-correction", "method"]
falsifiers   = [
  "A page re-derived from the full two-sided export agrees with its original received-only count — i.e., a case where the missing half was genuinely empty and the one-way reading was right. The pattern would then have a real boundary.",
  "The full-export re-derivation is itself shown biased — e.g., duplicated rows inflating the 'sent' half (cf. the 9.6x duplication finding) — making the 'corrections' the artefact and the pages' counts the honest floor.",
  "A thread where the page counted both sides from a partial export and the held corpus reverses the direction the other way (page overstated the sent half). The error would then be bidirectional noise, not a systematic one-way bias.",
]
alternatives = [
  "Deliberate floor-reporting: the pages counted what they held, honestly. dat:1117's formulation — 'the page counted what its export had' — makes the error downstream re-use rather than the count. The count was never wrong; the citation of it was.",
  "The exports were not partial but differently scoped: per-counterparty exports that genuinely lacked the sent side because of how the pull was built, making 'received half' the export's true content and the page's only honest option.",
]

[when]
date = "2026-09-09"
+++

## The thesis

The single most replicated correction in the entire ingest is not about facts
but about shape: thread counts read from partial exports count the received
half and are presented as thread totals. The page's number is almost always
**right as the received half** — that is what makes it dangerous. The count
verifies; the shape claim smuggles.

## The instances

| thread | page said | held corpus says | the page's number was |
| :--- | :--- | :--- | :--- |
| mike-hinkle | 21, all received | 85 (64 sent / 21 received) | the received half ([`dat:0978`](../data/0978-mike-hinkle-thread-dimensions.md)) |
| mohammed-bin-salman | 281, one-way | 643 (362 / 281) | the received half ([`dat:0979`](../data/0979-mohammed-bin-salman-thread-dimensions.md)) |
| jim-shaffer | 894, one-way | 1,845 (951 / 894) | the received half ([`dat:0980`](../data/0980-new-jim-shaffer-thread-dimensions.md)) |
| rj-ritchey | 518 | 1,103 (585 / 518) | the received half ([`dat:0983`](../data/0983-rj-ritchey-thread-dimensions.md)) |
| vicki | 234 | 512 (281 / 231) | the received half ([`dat:1211`](../data/1211-vicki-234-is-received-only-not-total.md)) |
| kelly-johansson | 64, direction unreliable | 129 (65 / 64) | the received half ([`dat:0844`](../data/0844-kelly-johansson-two-way-thread-and-arrangement-details.md)) |
| josh-coccagna | 32, one-way | 77 (45 / 32) | the received half ([`dat:0842`](../data/0842-josh-coccagna-thread-metrics-and-content-corrections.md)) |
| shannon | 23, "her side only" | 38 (23 / 15) | the received half ([`dat:1117`](../data/1117-shannon-drone-client-thread-corrected.md)) |
| marla | 52 inbound, one-way implied | 74 (38 / 36) | the inbound count, right; the framing, wrong ([`dat:0943`](../data/0943-marla-thread-dimensions-correction.md)) |
| lindsay-carolla | 41, "Received throughout" | 85 (44 / 41) | the received half ([`dat:0760`](../data/0760-lindsay-carolla-thread-count-correction.md)) |
| jay-lauer | 116, "read as two-way" | 212 (116 / 96) | the received half ([`dat:0673`](../data/0673-jay-lauer-direction-and-count-corrections.md)) |
| davey-fitzpatrick | 382 | 839 both sides | a floor ([`dat:0442`](../data/0442-davey-fitzpatrick-thread-839-both-sides-not-382.md)) |
| eric-springer | 44 | 93 two-sided | a floor ([`dat:0444`](../data/0444-eric-springer-thread-93-two-sided-not-44.md)) |
| jim-vrabel | 313, one-way | 612 two-way | the received half ([`dat:0675`](../data/0675-jim-vrabel-thread-count-direction-correction.md)) |

Fourteen corrections, one shape. "The 21-received figure was never wrong as a
count; it was wrong as a claim about the relationship's shape"
([`dat:0978`](../data/0978-mike-hinkle-thread-dimensions.md)).

## The mechanism

The MASTER-dump exports mark nearly everything Received — the Context Core
audit's own item 5: "'97,199 sent iMessages' SUPERSEDED by 106,629 (the dump
yielding 97,199 marks nearly everything Received)"
([`dat:1032`](../data/1032-context-core-staleness-audit-2026-08-16.md)). Pages
built on those exports noticed the direction field looked wrong, annotated it
"unreliable — read as two-way," and then kept the received-only count anyway.
[`dat:0673`](../data/0673-jay-lauer-direction-and-count-corrections.md) states
the rule the pages violated: "a table that says 'read as two-way' should carry
212." The error is not that the count is fabricated. It is that a one-sided
instrument's output was relabeled as a two-sided finding — the flagship
instance of
[`pat:partial-data-confident-error`](../patterns/partial-data-confident-error.md):
the missing half leaves no trace in the page's confidence.

## Why the shape matters more than the count

[`dat:0980`](../data/0980-new-jim-shaffer-thread-dimensions.md) is the case
that converts this from a counting footnote into an epistemic problem. The
page filed the non-monogamy proposition's outcome as "not confirmed in the
surviving thread" — but the surviving thread now includes Dan's 951 sent
messages, which the page never read. The confirmation or denial may be sitting
in the half the page counted as absent. A count error changes a table; a shape
error changes what questions are considered answered.

## The meta-point and the ceiling

The wiki's governance rule — "documented counts and primary records override
generated metaphor"
([`dat:1032`](../data/1032-context-core-staleness-audit-2026-08-16.md)) — was
built on counts that were systematically half. The rule is right; the
denominator was wrong. Downstream volume work must re-derive from the corpus,
as the ingest notes already direct.

And the re-derivation has its own ceiling:
[`dat:0531`](../data/0531-contact-gini-two-sided-unverifiable.md) — two-sided
imputation is impossible for the contact-gini because outbound rows lack
recipient handles. The full thread is recoverable per counterparty; the full
corpus is not recoverable as two-sided. The pattern's fix works at thread
scale and stops at corpus scale.

## Open questions

- How many downstream syntheses cite the received-half figures as relationship
  characterizations? The propagation pass recommended in the ingest notes has
  not been run; dat:0980's open question is the highest-value item in its
  queue.
- Are there threads where the held corpus is the partial one — the page's
  dedicated export holding rows the held pull lacks? dat:0443 (dimitri: 71 held
  vs 116 on the page) is the unresolved case in the other direction.
