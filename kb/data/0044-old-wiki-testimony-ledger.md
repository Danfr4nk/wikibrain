+++
id            = "dat:0044-old-wiki-testimony-ledger"
layer         = 1
type          = "datum"
title         = "The prior wiki kept a scored ledger of the subject's own first-person claims"
claim         = "`wiki/meta/testimony-veracity.md` is a generated page holding every first-person assertion the prior wiki recorded, what settled it, and arithmetic over the settled ones. Sixteen claims are listed (t001–t016); ten are scored. Veracity 52/100 on 31.0 points of weight. Calibration Brier 0.335, skill −0.34 against a coin flip. The confidence bands invert: claims stated `certain` held up 0.25 of the time against 0.95 asserted (n=4), `confident` 0.69 against 0.80 (n=4), `hedged` 0.75 against 0.60 (n=2). Outcomes: 4 confirmed, 2 partial, 1 self-contradicted, 3 refuted, 6 unfalsifiable — and `unfalsifiable` is defined to score zero, never negative. The page states three limits on itself: a standing directive excludes at least one cleanly adjudicated confirmation about a living person; adjudicated claims are not a random sample, since a claim gets checked when someone had a reason to doubt it; and nothing in it measures honesty, every outcome being consistent with good-faith misremembering."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read 2026-09-09 from raw/old-wiki-export-2026-09-04/whole.txt. Figures transcribed from the page's own tables. The page is machine-generated from testimony/events.jsonl, which this system does not hold, so the arithmetic is unaudited — what is high-confidence is that the page says this, not that the numbers are right."
importance    = 5
tags          = ["old-wiki", "meta", "epistemics", "testimony"]
created       = "2026-09-09"

[when]
start = "2026-09-02"
end   = "2026-09-04"
+++

The prior wiki built the instrument this repository's testimony discipline
assumes and does not have. Three things in it are worth taking whole.

## The confidence bands run backwards

| band | he states | it is worth | n |
| :--- | ---: | ---: | ---: |
| certain | 0.95 | 0.25 | 4 |
| confident | 0.80 | 0.69 | 4 |
| hedged | 0.60 | 0.75 | 2 |

At n=10 this is a suggestion, not a measurement, and the page says so twice.
Taken as a suggestion it is still the most useful thing on the page: the word
`certain` in front of a claim is, in this ledger, evidence *against* it.

This repository stamps a `confidence` on every node, self-assessed, unchecked,
and by the same author who wrote the claim. Seven claims extracted here have so
far been checked against independent sources and seven changed on contact. There
is no ledger tracking that, and nothing in the architecture would notice if this
system's `high` were worth 0.25 too.

## `unfalsifiable` scores zero, never negative

Six of sixteen. The page distinguishes *checked and the corpus cannot settle it*
from *checked and found wanting*, and refuses to let the first count against the
speaker. That is exactly the `never_observed` / `known_not_to_occur` distinction
this system enforces at L1, arrived at independently and applied to a person
rather than to a corpus.

t011 is the model case. Four claimed unconscious axioms were tested lexically
against 106,629 outbound messages, with 110,944 inbound from 503 handles as a
within-medium control. On every explicit urgency construction but one he writes
*less* than his controls. The page's own reading: this does not falsify the
axiom, because SMS is a near-zero-introspection medium for everyone in it — it
establishes that the message corpus cannot corroborate it. A weaker system would
have banked that as a refutation.

## It states what it cannot see, and the first limit is the sharp one

A standing directive in the prior wiki's `CLAUDE.md` stops new writing about one
living person, enforced mechanically by the tool rather than left to a session to
remember. At least one clean confirmation is excluded by it. The page's own
words: *"The exclusion is correct and it is still a bias: this score is drawn
from what the directive permits, not from everything the corpus knows."*

That is a system reporting the distortion introduced by its own safety rule,
against its own headline number, without being asked. It is also a direct answer
to the architectural cut governing this rebuild — a filter kept for publication
does not have to be silent about what it removes.
