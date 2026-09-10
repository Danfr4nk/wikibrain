+++
id         = "dat:0029-edge-vocabulary-covers-37-percent"
layer      = 1
type       = "datum"
title      = "The reworked edge vocabulary covers 37% of the relations the corpus actually uses"
claim      = "The recovered export's 497 pages carry 2,664 parsed typed connections in their frontmatter. Mapping them against schema/edges.json — the six-family vocabulary built 2026-09-09 — 975 (37%) have an equivalent and 1,689 (63%) do not. The largest unmapped types are `evidences` (434, 16.3%), `evidenced-by` (433, 16.3%), `co-occurs` (317, 11.9%), `contains` (277, 10.4%) and `instantiates` (144, 5.4%)."
cites      = ["src:old-wiki-export-2026-09-04", "src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
measurement = true
extraction = "A measurement of the export as an artifact, not a report of anything it asserts — hence `measurement = true` rather than `attributed_to`. Counted 2026-09-09 by parsing the connections: block of every page's YAML frontmatter and tallying `type:` values, then testing each against the union of schema/edges.json families under a hand-written mapping (causes→caused, caused-by→resulted_from, precedes→preceded, follows→followed, contradicts→contradicted, parallels/mirrors→resembled, component-of/instance-of→belonged_to). Reproducible against raw/old-wiki-export-2026-09-04/whole.txt."
importance = 5
tags       = ["edges", "architecture", "old-wiki", "error"]
created    = "2026-09-09"

[when]
date = "2026-09-09"
+++

The edge rework was designed against `ROADMAP.md`'s *description* of the old
system. The old system's actual edge graph was three commits away on disk and
was not consulted.

Measured against it, the new vocabulary does not fit. Nearly two thirds of real
relations have nowhere to go.

## The two that matter most

**`evidences` / `evidenced-by` — 867 edges, 32.6% of the graph.** These were
removed deliberately, on the argument that `A evidences B` is `B cites A`
written backwards with only one spelling layer-enforced. That argument is
correct *between kb nodes*, where `cites` exists and is directional.

It does not survive contact with this data. The old wiki's pages are not
layered, so `evidenced-by` there carries no altitude claim — it means "material
on that page supports this." Importing 433 of those as `cites` would assert a
layer ordering the source never made, and roughly a third of them would violate
the invariant on arrival. So the relation cannot be dropped *and* cannot be
mapped to `cites`.

**`co-occurs` — 317 edges, 11.9%.** Symmetric temporal adjacency with no causal
or structural claim: these two things were in the record at the same time. The
temporal family has `preceded`, `followed` and `occurred_during`, all of which
assert an ordering this does not. There is no way to say "same window, no claim
about which came first," which is the honest description of a great deal of
biographical material.

## What this is evidence of

A design validated against a document rather than against the data it would
have to carry. `ROADMAP.md` §2 lists "a flat vocabulary of 17 types" as the
problem and proposes six families as the fix; the fix was checked against that
sentence and not against the 2,664 edges sitting in the export.

The cost is bounded — no edges have been imported yet, so nothing is corrupted
and the vocabulary is still cheap to change. That is luck rather than method:
had the import run first, 1,689 relations would have been flattened into the
nearest available type or silently dropped, and the loss would have been
invisible afterwards.
