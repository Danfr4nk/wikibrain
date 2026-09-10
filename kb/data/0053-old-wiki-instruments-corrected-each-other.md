+++
id            = "dat:0053-old-wiki-instruments-corrected-each-other"
layer         = 1
type          = "datum"
title         = "Five instruments the prior wiki built to measure one relationship, each correcting the one before it"
claim         = "`wiki/meta/journeys/the-instrumented-channel.md` traces five instruments built against the subject's highest-volume relationship and states that each turned out to measure something wider than the channel it was built for. Three of its reports bear directly on method. (1) `mind/synthesis/read-receipt-forensics` documents three defects in chat.db metadata extraction that each \"silently produce a confident wrong answer rather than an error\", the headline one being that `date_read` is directional and asymmetric, so reading it the wrong way yields the opposite conclusion from the right one. (2) `mind/synthesis/message-circadian-latency`, built fresh from the raw export rather than summarised from prior pages, found the wiki's own long-standing reading running backwards: the highest-volume contact answered faster than the subject in every year measured, 2015 through 2026, at a merged-handle median mutual latency of nine minutes across 31,612 replies — so the \"responsiveness gap\" the wiki had been describing was never response speed but message length. (3) `mind/synthesis/block-unblock-loop` made a dated prediction that a June 2026 severance would hold; it failed 52 days later, and the page keeps the failure rather than deleting it."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read 2026-09-09 from raw/old-wiki-export-2026-09-04/whole.txt. The three cited pages have NOT themselves been read — this records what the journey page reports about them, which is one remove further than the other extractions in this repository and is why the confidence attaches to the report rather than to the findings."
importance    = 4
tags          = ["old-wiki", "meta", "epistemics", "tooling"]
created       = "2026-09-09"

[when]
start = "2026-08-26"
end   = "2026-08-26"
+++

## The failure class, named by someone who had met it

*"Silently produce a confident wrong answer rather than an error."*

That is the same class of defect this repository has now found four times in its
own tools, every one of them failing in the direction of manufacturing support:

| | what it did |
| :--- | :--- |
| [`dat:0036`](0036-corroboration-tool-manufactured-support.md) | substring matching found `heard`, `hardstyle` and `card` for a search on `ard` — 25 hits that were not hits |
| `bin/wb-query` | bidirectional prefix matching scored a node containing only `car` at 37% of a genuine match for `cardiac` |
| `bin/wb-corroborate` | called a month with 35 messages COVERED against a corpus median of 1,123 |
| [`dat:0037`](0037-publication-gate-fails-safe.md) | `wb-build` emitted a withheld node's id through `attributed_to`, a field its exclusion logic did not cover |

None raised an error. Each returned a plausible answer. The prior wiki's
`date_read` case is the sharpest version — a column that yields the *opposite*
conclusion when read the wrong way, which is worse than noise because the wrong
answer is as coherent as the right one.

## The correction that reversed a standing reading

The latency recut is the most instructive item on the page, and the mechanism is
worth stating exactly: it was built **fresh from the raw export rather than
summarised from prior pages**, and that alone reversed a conclusion the wiki had
been carrying for some time. Nine minutes, 31,612 replies, every year 2015–2026.

The claim did not merely weaken. The variable was wrong. What was being called
a responsiveness gap was a length asymmetry, which is a different fact about a
different thing, and no amount of care applied to the original framing would
have found it.

This is the strongest available argument for the rule already in
`EXTRACT.md` — go to the source, do not reason from the summary — and it is the
same error this repository committed twice today and caught twice
([`dat:0045`](0045-facebook-graduation-claim-september-2009.md),
[`dat:0050`](0050-corpus-traces-of-the-type-are-downstream-of-it.md)), both times
by reading the page instead of the digest's line about it.

## A prediction that failed, kept

`block-unblock-loop` predicted a June 2026 severance would hold. It did not; the
page says so. The journey ends there deliberately — *"an instrument that gets
corrected in public is doing exactly what this wiki's core loop is for."*

That is the same posture this repository takes with
[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md),
which failed both of its own tests today and is kept.

## What this datum is not

It is a report of a report. The five instrument pages have not been read here,
and the journey page itself says it "adds no finding of its own." The nine-minute
median, the 31,612 replies and the three chat.db defects are the prior wiki's
numbers as relayed by its own index, and the corpus this system holds could in
principle check the latency figure and has not.
