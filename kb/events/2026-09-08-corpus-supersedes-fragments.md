+++
id         = "evt:2026-09-08-corpus-supersedes-fragments"
layer      = 2
type       = "event"
title      = "Complete corpus supersedes the fragment exports"
cites      = ["dat:0001-corpus-scale", "dat:0004-fragment-exports", "dat:0002-group-threads", "dat:1112-texting-deviance-audit-complaint-record-verified"]
confidence = "high"
importance = 5
created    = "2026-09-08"
rechecked  = "2026-09-09"
tags       = ["corpus", "shelf", "decision"]

[when]
date = "2026-09-08"

[[edges]]
rel         = "displaced"
target      = "dat:0004-fragment-exports"
strength    = "strong"
asserted_by = "external"
note        = "Not the `supersedes` field: this node does not replace dat:0004. The complete export overtook the fragment extracts as evidence, and the fragments stay on the record as what was believed and why it was wrong."

[[edges]]
rel         = "about"
target      = "ent:wiki-brain"
strength    = "strong"
asserted_by = "self"
+++

## What happened

The complete Messages export replaced every prior per-counterparty extract as
the sole admissible source of message evidence. The fragments were shelved:
demoted from evidence, retained as the record of what was believed and why.

Rules: `CORPUS_POLICY.md`. Inventory: `shelf/MANIFEST.md`.

## The ingest's corroboration

The September ingest is a second, independent confirmation of the
fragment problem — and it extended the rule from message exports to every
count in the graph:

- **One-sided counts.** People pages repeatedly counted one side of a
  two-way thread and presented it as the total (per the ingest ledger:
  clyde 256 not 125; davey 839 both-sides; dimitri 71 not 116;
  lindsay-carolla 85 not 41). The pattern recurred across waves, which is
  what made it a structural finding rather than a typo: the page's number
  was usually right as the *received* half, while the shape claim was
  wrong.
- **Export divergence.** The texting-deviance audit's headline
  measurements came from an unheld 183,787-row export — unreproducible,
  relayed as testimony
  ([`dat:1112`](../data/1112-texting-deviance-audit-complaint-record-verified.md)); the july-2026-recontact count gap
  (page 624 vs held 430) is the same shape. Fragments don't just
  undercount; different fragments undercount differently.
- **Timestamp convention.** The ~5h offsets between old-wiki timestamps
  and corpus timestamps are Eastern-vs-UTC, not displacement; only 24h
  offsets are genuine. Declaring a displacement without converting first
  is a fragment error with a timezone costume.
- **The same failure in miniature.**
  [`evt:2026-08-14-extraction-correction`](2026-08-14-extraction-correction.md)
  is this event at page scale: an extraction constraint asserted in prose,
  falsified by running the extraction.

The `imessage-corpus-2026` source remains the held corpus, but the ingest
also established its seams honestly: the Suz thread's zero-row windows
(2016-06, 2020-05), the Annie-thread disjoint seam at Oct 2025, the
Franki Faris 2016-05-09 contact against the page's "no contact after
2013." Supersession is not infallibility; it is the decision that the
complete export is the one to be *corrected*, and the fragments the ones
to be *read as history*.
