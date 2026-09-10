+++
id          = "dat:0038-validator-hole-is-the-exemption-i-made"
layer       = 1
type        = "datum"
title       = "The only validator check that fails toward clean is an exemption added this session"
claim       = "Four bypass attempts were run against bin/wb-validate: a non-integer layer intended to skip the invariant check, a citation cycle, an edge pointing at a nonexistent node, and a datum using `measurement = true` to cite a testimony source without attributing it. Three were caught with errors naming the specific fault. The fourth passed clean — `measurement = true` exempts a datum from the attribution requirement, and no check verifies that such a datum measures its source rather than relaying its assertions."
cites       = ["src:wikitest-rebuild-session-2026-09-09"]
confidence  = "high"
measurement = true
extraction  = "Run 2026-09-09 as the fifth and last step of the audit dat:0036 recommended. Each probe was a synthetic knowledge base differing from a clean base by one node; verdicts read from wb-validate --json."
importance  = 4
tags        = ["tooling", "epistemics", "meta"]
created     = "2026-09-09"

[when]
date = "2026-09-09"
+++

The audit ends where it should: the last hole is one I made, four hours ago, to
get one of my own nodes to validate.

`measurement = true` was added because
[`dat:0029`](0029-edge-vocabulary-covers-37-percent.md) counted strings in a
testimony source and the attribution rule rejected it — correctly, by its own
terms, since a count is not a relayed assertion. The exemption is sound in
principle and **unverifiable by construction**: no check can distinguish a count
from a restated claim, because the difference is in what the words mean.

So it is a declared exemption that the validator takes on trust, which is
precisely the shape of thing this system exists not to have.

## What was tightened, and what was not

Not verifiable: whether a `measurement` datum measures.

Verifiable, and now enforced: that it **states its method**. A measurement
without an account of how it was obtained is not a measurement, it is a number.
`measurement = true` without a non-empty `extraction` is now an error, with a
regression test. All seven existing measurement nodes already carried one.

That does not close the hole. It narrows what can pass through it silently: an
author claiming the exemption must now write down what they did, which is the
point at which a relayed assertion becomes uncomfortable to describe.

## The audit's shape, complete

Five surfaces, and the pattern held everywhere the direction was not chosen
deliberately:

| Surface | Result |
| :--- | :--- |
| `wb-corroborate` coverage | graded against zero, not the median — **toward "covered"** |
| `wb-corroborate` matching | substring on 3-letter terms — **toward "corroborated"** |
| `wb-query` scoring | bidirectional prefix — **toward "relevant"** |
| `wb-build` / `wb-check-publish` | build leaked an id; **gate refused** — direction chosen explicitly |
| `wb-validate` | three probes caught; one exemption passes **by design** |

Four defects, all in tools written this session, all found by testing rather
than by reading. The one surface that failed safe is the one whose author wrote
down which way it should fail.
