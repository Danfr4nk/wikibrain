+++
id              = "pat:partial-data-confident-error"
layer           = 4
type            = "pattern"
title           = "Partial data produces confident error, not visible uncertainty"
cites           = ["int:fragments-silently-partial", "con:gitignore-is-not-protection",
                   "dat:0037-publication-gate-fails-safe",
                   "dat:0052-old-wiki-instrument-layer-three-rules",
                   "dat:0053-old-wiki-instruments-corrected-each-other"]
evidence_count  = 3
counterexamples = ["dat:0003-attribution-gap",
                   "dat:0037-publication-gate-fails-safe"]
falsifiers      = [
  "A case where incomplete evidence produced visibly hedged output rather than confident error — the gap showing up in the conclusion's stated confidence without anyone having to go and find it.",
  "SPENT, 2026-09-09, twice, and it landed: a case where the error WAS caught internally, by cross-reference or validation, rather than by someone outside the system supplying the missing piece. Every instance so far was closed by the operator. See the FALSIFIER SPENT block below — dat:0037 and the table-drift check in tests/test-census were both caught mechanically, with no operator involved.",
  "The pattern failing to appear in the 488 unextracted pages of the prior wiki, which are a large independent sample of the same failure mode's opportunity to occur.",
]
confidence      = "moderate"
importance      = 5
created         = "2026-09-08"
updated         = "2026-09-09"
rechecked       = "2026-09-09"
tags            = ["epistemics", "meta"]
+++

## The pattern

Incomplete evidence does not announce itself as incomplete. It yields
conclusions that carry the same confidence as well-founded ones, because the
missing material leaves no trace in the output. The error is not that the
answer is uncertain; it is that the uncertainty is invisible.

Instances so far:

1. **Per-counterparty message exports** (`int:fragments-silently-partial`) —
   inferences about what was absent, drawn from a source structurally incapable
   of showing presence.
2. **Privacy posture** (`con:gitignore-is-not-protection`) — a closed gitignore
   reads as "the data is protected" while a separate open channel goes
   unexamined. A partial view of the exposure surface, producing a confident and
   wrong conclusion about safety.
3. **The Drive staging copy** (`dat:0006-drive-copy-lossy`) — round-tripped
   markdown that is damaged but still plausible, so the corruption survives
   review.

## Counterexample

`dat:0003-attribution-gap` is the shape of the pattern *not* occurring: 3,086
messages that cannot be attributed are counted and declared rather than
inferred. The data is equally partial; the uncertainty is visible. That is the
difference the pattern turns on, and it is why the counterexample belongs here
rather than being tidied away.

## Confidence

Moderate. Three instances inside one project over one week is thin, and two of
them were identified by the same reasoner that named the pattern — which is
exactly the circularity the system is supposed to make visible rather than
launder.

---

## FALSIFIER SPENT [2026-09-09] — it landed, twice, and one of them predates this block by a day

The second falsifier read: *"A case where the error WAS caught internally, by
cross-reference or validation, rather than by someone outside the system
supplying the missing piece. Every instance so far was closed by the operator."*

Two cases now exist, and the first was on the record before this was noticed.

**[`dat:0037`](../data/0037-publication-gate-fails-safe.md), 2026-09-09.** An
adversarial build leaked a withheld node's id into `graph.json` through
`attributed_to`, a field `wb-build`'s exclusion logic did not cover. No operator
found it. `bin/wb-check-publish` exited 1 with the node named. That datum was
filed the day after this pattern was written and nothing scored it against this
falsifier.

**The table-drift check, same day.** `tests/test-census` was given an assertion
that the census tables published in
[`dat:0042`](../data/0042-marker-census-does-not-support-the-pattern.md) and
[`dat:0043`](../data/0043-correction-density-tracks-work-recency.md) still match
`bin/wb-census` output. It failed on first run: `dat:0043`'s table had been
written by hand before the tool grew the flag that produces it. Every figure was
right and no line matched. Caught by a check, not by a reader
([`dat:0052`](../data/0052-old-wiki-instrument-layer-three-rules.md)).

## What this does to the pattern

**The core claim is untouched.** Incomplete evidence still yields conclusions
carrying the confidence of well-founded ones. All three original instances
stand, and [`dat:0053`](../data/0053-old-wiki-instruments-corrected-each-other.md)
adds an independent naming of the same failure class from the prior wiki —
defects that *"silently produce a confident wrong answer rather than an error"* —
plus four instances of it in this repository's own tools.

**What is retired is the reach.** The falsifier asserted that these errors are
only ever closed from outside. That is now false, and the two counterexamples
say precisely when it fails: **where a gate exists that fails safe.** The
publication gate caught its leak because it re-derives the answer independently
rather than trusting the builder; the table check caught its drift because it
compares a published number against the tool that produced it. Neither is
clever. Both are cheap. Neither existed until somebody built it.

So the honest revision is not *"the pattern is weaker"* but *"the pattern
describes unguarded paths."* That is a smaller claim and a more useful one,
because it names the remedy instead of the disease. It also raises the obvious
next question, which is unanswered: **how many paths here are unguarded?** Four
tool defects were found by audit and one by a gate. Nobody has counted the
surfaces that have neither.

`confidence` stays `moderate`. One falsifier spent against, two unspent, and the
third — that the pattern fails to appear in the 480 unextracted pages — is still
the one that would settle it.
