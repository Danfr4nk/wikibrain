+++
id            = "dat:0350-skills-database-infra-meta"
layer         = 1
type          = "datum"
title         = "Skills-database page is infrastructure metadata about the wiki's writing tools, not about Dan — no datums to ingest"
claim         = "The Skills Database page ('Every other page in this wiki is about Dan Frank. This one is about the machines that write them.') records **56 declared capabilities across 2 models** (`claude-code`: 53, `hermes`: 15; 12 shared; 70 events; last push 2026-08-30), generated from `skills/registry/events.jsonl`. It is about the wiki-brain's tooling surface, not about the operator, and carries no datums about him. Filed for completeness; no cross-check against the operator's corpus was applicable."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 19144 (240 lines): the 'What it holds' table ('Capabilities on the record | 56 |', 'Models on the record | 2 |', 'Last push | 2026-08-30 |') and the models table listing claude-code/Anthropic and hermes/Nous Research. All figures are counts of declared tooling capabilities; none describes the operator."
importance    = 1
tags          = ["meta", "skills-database", "infrastructure", "old-wiki"]
created       = "2026-09-09"
+++

## Why a node at all

So the page is accounted for without inventing operator-facing findings.
The one durable signal: the registry's last push (2026-08-30) predates the
operator's 2026-09-09 corrections, consistent with the digest-staleness
pattern in [`dat:0348`](0348-open-questions-rollup-stale-on-full-sail.md) and
[`dat:0349`](0349-recent-activity-rollup-2026-09-04.md).
