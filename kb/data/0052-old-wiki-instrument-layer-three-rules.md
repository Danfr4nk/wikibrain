+++
id            = "dat:0052-old-wiki-instrument-layer-three-rules"
layer         = 1
type          = "datum"
title         = "The prior wiki separated measurement from argument and gave the measurement layer three rules"
claim         = "`wiki/meta/instruments/index.md` describes a distinct class of page: \"Every other page in this wiki *argues* … The pages listed here do not.\" It states three rules every instrument obeys. (1) Evidence, not claim — an instrument page states no finding; a finding drawn from one reaches an ordinary page through the normal operations. (2) Generated, never hand-edited — each page is regenerated from an append-only log or from the corpus, and a hand-edit fails a gate in `bin/wiki-check`, because \"a number somebody could quietly adjust is not a measurement.\" (3) It states its own limits in a section that cannot be dropped — \"An instrument that cannot state its own denominator will be believed as though it had one.\" Seven instruments are catalogued: two event-sourced ledgers (`bin/intake`, `bin/wiki-testimony`) and five measures computed on demand (`bin/mine-messages`, `bin/text-metrics`, `bin/mine-tweets`, `bin/psychometrics`, `bin/wiki-history`)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read 2026-09-09 from raw/old-wiki-export-2026-09-04/whole.txt. The tools themselves are not in the export, so what is established is the stated design, not that the gate in bin/wiki-check exists or works."
importance    = 5
tags          = ["old-wiki", "meta", "epistemics", "tooling"]
created       = "2026-09-09"

[when]
start = "2026-09-02"
end   = "2026-09-02"
+++

The most directly transferable thing read from the prior wiki so far, because
this repository was already keeping two of these rules by instinct and breaking
the third without noticing.

## Where this system already complied

**Rule 3, the denominator.** `bin/wb-corroborate` prints coverage on every
search and refuses to let a null pass as a negative finding; `bin/wb-census`
prints its marker definition on every run. Both were built for reasons recorded
in [`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md) and
[`dat:0042`](0042-marker-census-does-not-support-the-pattern.md), and both
arrive at the prior wiki's rule from the same direction: a number that cannot
say what it was computed over will be read as though it could.

**Rule 1, in a different shape.** The layer invariant does this structurally
rather than by convention. L1 measures, L3 and above argue, and a claim may cite
only strictly lower layers. What the prior wiki enforced by keeping instruments
in their own directory, this system enforces in the schema.

## Where it did not, and the check that found it

**Rule 2 was broken here.** [`dat:0042`](0042-marker-census-does-not-support-the-pattern.md)
and [`dat:0043`](0043-correction-density-tracks-work-recency.md) both publish
tables pasted from `bin/wb-census`. Nothing connected the paste to the tool. A
change to the tool, or a change to the export it reads, would leave two nodes
stating figures the repository could no longer produce — and stating them in the
`claim` field, where they are load-bearing for a spent falsifier.

`tests/test-census` now extracts the fenced table from each node and asserts
every row still appears in the tool's live output.

**It failed on the first run, on real drift.** `dat:0043`'s table was written by
hand from an ad-hoc script before `--recency` existed as a flag. Every figure in
it was correct and no line matched the tool's output, because the column widths
differed. That is a small instance of exactly the failure rule 2 exists to
prevent: the node and the instrument had already parted company within hours of
each other being written, and only a mechanical comparison could see it. The
table now carries the tool's output verbatim.

## One thing worth carrying that this system has no equivalent of

The prior wiki's instruments are **event-sourced**: an append-only JSONL log is
the source of truth, a projection is regenerated from it and is safe to delete,
and the wiki page is the public face. Nothing is edited in place; a correction
supersedes and the log keeps both.

This repository has the append-only *discipline*
([`dat:0018`](0018-old-wiki-intake-ledger-discipline.md)) applied to prose, and
[`dat:0048`](0048-corrected-claim-still-standing-in-its-own-page.md) records
what that costs when the retracted text stays in place. An event-sourced ledger
does not have that problem, because the page is derived and the log is the
record. It is not clear this repository's material wants that shape — most of
what is here is argument rather than measurement — but where a measurement
recurs, it should be a tool and a log, not a paragraph.

## A caution about the catalogue itself

The index reports `bin/wiki-testimony` at "12 claims, 6 settled, veracity
57/100" and is dated 2026-09-02. The ledger it points at
([`dat:0044`](0044-old-wiki-testimony-ledger.md)), dated 2026-09-04, reports 16
claims, 10 settled, veracity 52/100. Not a contradiction — a two-day-old
snapshot of a growing log — but the index carries point-in-time figures in
running text with no as-of marker on them, which is the same shape as
[`dat:0048`](0048-corrected-claim-still-standing-in-its-own-page.md) and would
mislead anybody reading the index alone.
