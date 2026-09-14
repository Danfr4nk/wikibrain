+++
id         = "evt:2026-08-14-extraction-correction"
layer      = 2
type       = "event"
title      = "23andMe page self-corrects its PDF extraction claim"
cites      = ["dat:1091-23andme-extraction-correction-2026-08-14", "src:old-wiki-export-2026-09-04"]
confidence = "high"
importance = 3
tags       = ["meta", "old-wiki", "correction", "genomics"]
created    = "2026-09-09"

[when]
date   = "2026-08-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

The `wiki/health/23andme-genomics.md` page carried a claim that the three
source PDFs it worked from (Ancestry Composition, Chromosome Painting,
Health Report — exported from 23andMe on 2025-03-31) were "image-based
without an extractable text layer" and that their percentage values were
not digitally recorded. On 2026-08-14 the page corrected itself: that was
wrong. All three PDFs contain a full text layer; the revision was
extracted with `pymupdf`, and every percentage, haplogroup and health
result on the page comes from that extraction
([`dat:1091`](../data/1091-23andme-extraction-correction-2026-08-14.md)).

## Why it matters beyond one page

This is the same failure shape as
[`evt:2026-09-08-corpus-supersedes-fragments`](2026-09-08-corpus-supersedes-fragments.md)
in miniature: an extraction constraint asserted in prose, never tested
against the file itself. The correction arrived from actually running the
extraction, not from re-reading the prose about it — the pattern the
ingest workers later called the stale-scan lesson (worker 29 re-derived
all its corpus nodes after discovering pre-compaction scans were stale).

It also predates, and prefigures, the rebuild's enforcement regime: a
2026-08-14 page correcting its own instrument-error, three weeks before
the six-layer graph made citation discipline machine-enforced.

## What the correction left open

The page did not claim completeness. It recorded four open gaps in the
same correction block: the chromosome painting's per-segment ancestry
assignments are visual only (no Scientific Details CSV was in the export);
two health predisposition results (Age-Related Macular Degeneration,
Hereditary Thrombophilia) appear in the summary without specific
outcomes; the Prostate Cancer (BRCA1/BRCA2) report is locked behind an
incomplete questionnaire; and `chromosome copy.pdf` is a byte-identical
duplicate of `chromosome.pdf` (both 204,233 bytes) needing deduplication.

The extraction itself cannot be re-checked in this repository: the
ancestry PDFs are not held in `raw/`, so the pymupdf claim is relayed
testimony, not re-measured
([`dat:1091`](../data/1091-23andme-extraction-correction-2026-08-14.md),
`attributed_to = "src:old-wiki-export-2026-09-04"`).

## Open questions

- A re-extraction from the original PDFs would confirm or revise the
  figures the page now publishes (21.4% Ashkenazi, haplogroups R0/R-Z93,
  95th-percentile Neanderthal — filed under `dat:0897`).
- Whether the byte-identical `chromosome copy.pdf` was ever deduplicated.
