+++
id              = "pat:audit-strong-on-numbers-weak-on-meaning"
layer           = 4
type            = "pattern"
title           = "The prior system audited measurement rigorously and inference loosely"
cites           = ["dat:0018-old-wiki-intake-ledger-discipline",
                   "dat:0019-old-wiki-absence-of-instrument",
                   "dat:0022-old-wiki-recheck-propagation",
                   "dat:0023-old-wiki-measured-flag-overstated",
                   "dat:0021-old-wiki-endorsed-inference-from-refusal",
                   "dat:0016-old-wiki-conflated-two-legal-matters",
                   "dat:0017-old-wiki-correction-instinct-overfired",
                   "int:inference-from-refusal-is-unsound",
                   "dat:0042-marker-census-does-not-support-the-pattern",
                   "dat:0043-correction-density-tracks-work-recency"]
evidence_count  = 7
counterexamples = ["dat:0020-old-wiki-suboxone-hedonic-tension",
                   "dat:0042-marker-census-does-not-support-the-pattern",
                   "dat:0043-correction-density-tracks-work-recency"]
falsifiers      = [
  "SPENT, 2026-09-09, and it landed against the pattern: mind/ (78 pages) and self/ (59) show REVISED/CORRECTED/CONTRADICTION blocks at a rate comparable to legal/ and health/. Those areas are mostly conclusions with nothing external to check them against, so under this pattern they should carry markedly fewer. See dat:0042 and the FALSIFIER SPENT block below — mind/ is indistinguishable from health/, self/ is not.",
  "A page in an externally-checkable domain endorses an inference as confidently as hyperreflexivity did the refusal reading, with no number or document behind it. One clean case shows the axis is not what this pattern says it is.",
  "SPENT, 2026-09-09, and its consequence holds while its mechanism does not: the prior wiki is found to have run a self-audit pass over the whole corpus on a schedule, rather than page by page as material arrived. That would make correction density a function of when a page was last touched rather than of what could check it. See dat:0043 — 91% of the marks sit on the 50% of pages worked in the final three weeks, but the work is bursty session work, not a schedule.",
]
confidence      = "low"
importance      = 4
created         = "2026-09-09"
updated         = "2026-09-09"
rechecked       = "2026-09-09"
tags            = ["old-wiki", "epistemics", "meta"]

[when]
start = "2026-07"
end   = "2026-09"
+++

## The shape

Across six extracted pages, the prior system's self-scrutiny is sharply
asymmetric — and the axis is not domain or date but **whether the claim had
something external to collide with.**

Where a number or a document could check it, the discipline is better than most:

- corrections append rather than overwrite, so the fact a correction was needed
  survives ([`dat:0018`](../data/0018-old-wiki-intake-ledger-discipline.md))
- a misleading rate figure is deleted rather than footnoted (same)
- silence is typed as absence-of-instrument, in place, beside the numbers
  ([`dat:0019`](../data/0019-old-wiki-absence-of-instrument.md))
- dependent pages are re-checked when a cited page moves, with null results
  logged ([`dat:0022`](../data/0022-old-wiki-recheck-propagation.md))
- and, most tellingly, it audited its own measurement flags and found them
  overstated — against its own interest, on the one dataset it had been missing
  ([`dat:0023`](../data/0023-old-wiki-measured-flag-overstated.md))

Where the claim was about meaning, the same system:

- read a "no comment" as its most incriminating available content, and called
  that reading *correct* ([`dat:0021`](../data/0021-old-wiki-endorsed-inference-from-refusal.md))
- carried a lawyer, a diversion programme and a magistrate's hearing attached to
  a snack theft for three weeks ([`dat:0016`](../data/0016-old-wiki-conflated-two-legal-matters.md))
- distrusted an accurate first-person date on a plausibility argument that was
  itself false ([`dat:0017`](../data/0017-old-wiki-correction-instinct-overfired.md))

## Why `confidence = "low"`

Seven instances from **six of 497 pages** — 1.2% of the corpus, drawn from the
two smallest areas, both chosen for extraction precisely because they were
tractable.

That is not a sample. It is the pages that were easiest to check, which is very
likely the same property that made the system check itself on them.

## The counterexample, and it is a real one

[`dat:0020`](../data/0020-old-wiki-suboxone-hedonic-tension.md) is an inference
handled correctly: two of its own pages disagreed about whether a maintenance
dose caps the capacity to regulate a separate system, and it recorded the
disagreement on both rather than resolving it. No number was available; it
declined anyway.

One clean counterexample against seven instances does not break the pattern. It
does establish that the failure is not mechanical — the discipline was
*available* for inference and was applied inconsistently, which is a different
and worse finding than not having it.

## What would falsify this

Three specific observations are in the `falsifiers` field above, and the first
is the load-bearing one. The extraction order is the test, and it was set before
this pattern existed.

`mind/` (78 pages) and `self/` (59) are last precisely because they are mostly
conclusions with nothing external to check them against. This pattern predicts
they will show **markedly fewer self-corrections and markedly more endorsed
inference** than `legal/` and `health/` did.

If they instead show the same density of `REVISED` and `CORRECTED` blocks, the
pattern is wrong and the better reading is the alternative already recorded in
[`int:old-wiki-corrections-are-the-payload`](../interpretations/old-wiki-corrections-are-the-payload.md):
that self-correction marks **where external checks existed**, not where the
system was careful. Those two readings make opposite predictions about the same
491 pages, which is the useful thing about having both written down before
reading them.

---

## FALSIFIER SPENT [2026-09-09]

*The original argument stands above, unedited. This is what happened when the
test it named was actually run.*

The first falsifier is spent and it landed against this pattern.
[`dat:0042`](../data/0042-marker-census-does-not-support-the-pattern.md) counted
dated error-marker blocks across all 497 pages. Normalised by page length,
`mind/` corrects at 0.39 marks per 10 kB and `health/` at 0.37 — health's four
marks against 4.06 expected under mind's rate, p = 0.58. On the fraction of pages
carrying any mark at all the two are identical at 50%.

`mind/` is the least externally checkable area in the corpus. Under this pattern
it should have been near the bottom. It is level with one of the two areas the
pattern was built on.

**What survives.** The seven instances are still what they are. The prior wiki
*did* audit its own measurement flags against its own interest, and it *did*
read a "no comment" as its most incriminating content and call that correct.
Those observations are not disturbed by a count.

**What does not.** The claim that they generalise — that the corpus-wide axis is
external checkability — has now been tested once, on the test this node itself
nominated, and it did not come through. `self/` at 0.21 is the half that went the
predicted way; `mind/` at 78 pages is the half that did not, and it is four times
the larger.

**One thing the failure teaches that is not a rescue.** Marker density was a
weaker proxy than I credited when I wrote the falsifier. A page that corrects
often may still reason loosely everywhere it did not correct, and the census
cannot see that — the marks are where the system *noticed*, and this pattern is
about where it failed to. Noting that does not save the pattern: I published the
proxy as the test, and a falsifier you reinterpret after seeing the result is not
a falsifier. It goes on the record as a defect in the test design, to be fixed by
a better one rather than credited backwards.

**The competing reading is not competing.** The body above says
[`int:old-wiki-corrections-are-the-payload`](../interpretations/old-wiki-corrections-are-the-payload.md)
"predicts the opposite". Re-read against the census, it does not. That node holds
that corrections mark where external checks existed — which is the same
prediction about density this pattern makes, differently worded. Two readings
that make the same prediction cannot be discriminated by measuring it, and I set
up the test believing they could. The census falls equally on both.

`confidence` stays `low`, which is where it was set on purpose and is now
carrying weight it was not carrying before. It is not raised to reflect the
failure because there is no lower grade in this vocabulary; the honest reading is
that this node is now a **recorded near-miss with one spent falsifier**, kept
because the instances are real and because a pattern that failed its own test is
more useful on the record than deleted.

**The two unspent falsifiers still stand**, and the third is now the interesting
one: if the prior wiki ran self-audit passes on a schedule rather than page by
page, correction density is a function of when a page was last touched, which
would explain `mind/` and `health/` landing together without either reading being
right. `wiki/meta/recent-activity.md` is a 101-entry changelog of corrections and
is the place to settle that. It is unread.

## SECOND FALSIFIER SPENT [2026-09-09] — same day, and it goes further

The third falsifier named the right consequence for the wrong reason, and
spending it costs this node more than the first one did.
[`dat:0043`](../data/0043-correction-density-tracks-work-recency.md) reads the
prior wiki's own changelog. Half the corpus was not opened in its final three
weeks and carries 9% of the marks. Correction density is largely a function of
work recency — not of a schedule, as the falsifier supposed, but of which pages
happened to be worked.

Once the untouched half is removed, the areas this node was built on stop looking
special at all:

- `mind/` 0.97 marks per page against `health/` 0.67 — the inference-heavy area
  now sits *above* one of the two the pattern was built on, not level with it
- `people/` leads the corpus outright at 1.67
- `legal/` at 1.25 is four pages and five marks

The prediction was that the areas with nothing external to check them would
correct markedly less. The two most-corrected areas by this measure are `people/`
and `mind/`.

Two of three falsifiers are now spent and both landed against this node. Only the
second remains — a page in an externally-checkable domain endorsing an inference
as confidently as hyperreflexivity did, with nothing behind it — and it is a
much weaker test than either of the spent ones, since it asks for a single
instance rather than a distribution.

The instances still stand and the generalisation does not. This node stays on the
record as what it now is: **a reading of six pages that failed both of the tests
it set itself**, kept because the six pages are real, because the failure is
informative about the corpus, and because deleting a pattern that lost is how a
system ends up remembering only its wins.
