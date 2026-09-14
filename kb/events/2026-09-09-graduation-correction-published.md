+++
id         = "evt:2026-09-09-graduation-correction-published"
layer      = 2
type       = "event"
title      = "The operator corrects the published wiki's graduation framing"
cites      = ["dat:0058-graduation-september-2009-then-audit-and-certification"]
confidence = "high"
importance = 4
tags       = ["meta", "testimony", "correction", "publication"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

On 2026-09-09 the operator read the live, published wiki-brain — rebuilt
the same day into `wikitest` — found the framing under which he was
"still enrolled in December" and the September and December evidence were
"in tension," and corrected it to this session directly: he graduated Full
Sail in **September 2009**, then audited one class, kept doing labs, and
finished his Pro Tools operator certification afterwards. The correction
was published to the live site the same day, and the correction loop
closed — this is filed as
[`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md),
`attributed_to = "src:operator-testimony-2026-09-09"`.

## Timeline

| when | what |
| :--- | :--- |
| 2026 | prior wiki prints "graduated August 2009" (stated `certain`) |
| 2026-09-03 | contradiction block on the Full Sail page: September vs December evidence unresolved |
| 2026-09-09 | operator corrects the published site's framing; the September/audit/certification account is recorded |
| 2026-09-09 | correction published to the live site; loop closed |

## Why this is a meta event

This is the first correction in the repository that arrived from a
*reader*, not from a re-read. Until this day, every correction in the
ingest was found by a machine re-reading its own sources. This one
arrived because the wiki was **published and browsable**, and its subject
read it and found a claim about his own life that was wrong. That is the
loop the whole system was built to serve, and it had not closed once
before today.

It also vindicates the publication-first order of work: had the rebuild
stayed local and unpublished, the correction would never have been
offered, and the "September vs December in tension" framing would still be
the record.

## Evidence for and against

**For the account.** Four dated artefacts had no reading that took all
four: the 2009-08-31 tweet ("i start my last month of college tomorrow"),
the two 2009-09-26 Facebook messages ("I acually just graduated today"),
the November–December tweets (lab, practical, "in class", AWS final), and
the old wiki's August claim. The audit/labs/certification account is the
one state of the world in which all four are true at once — testimony that
*explains residue* is a different instrument from testimony that merely
asserts a fact.

**The ledger stands.** The old wiki's testimony-veracity ledger scores
t013 ("graduated August 2009", stated `certain`) as REFUTED — and the
verdict survives: September is not August. What does not survive is its
stated reason. It refuted August on the grounds that he was in school
until December; the correct grounds are that he finished in September,
one month later than he remembered rather than four months earlier than
the record appeared to show. Right answer, wrong route.

**Limits.** No transcript, diploma, or certification record is held here;
it is filed as testimony, not fact. A Full Sail transcript would move it
from `attributed_to` to first-party, and the certification itself is
separately checkable — Avid publishes operator certifications.

## Open questions

- Whether the snapshot's stale Full Sail page (still printing August 2009)
  gets patched in the wiki source, given the snapshot freezes it.
- Whether the Avid certification can be independently dated.
