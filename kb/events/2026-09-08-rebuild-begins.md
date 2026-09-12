+++
id         = "evt:2026-09-08-rebuild-begins"
layer      = 2
type       = "event"
title      = "Rebuild on the six-layer architecture begins"
cites      = ["dat:0006-drive-copy-lossy"]
confidence = "high"
importance = 4
created    = "2026-09-08"
tags       = ["meta", "architecture"]

[when]
date = "2026-09-08"

[[edges]]
rel         = "about"
target      = "ent:wiki-brain"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "influenced_by"
target      = "evt:2026-09-08-corpus-supersedes-fragments"
strength    = "moderate"
basis       = "inferred"
asserted_by = "llm"
note        = "The corpus work established the epistemic argument the architecture then generalised into a checked invariant. Written as `influenced` until the edge rework, which pointed it the opposite way from what this note says."
+++

## What happened

The wiki was rebuilt against `src:conceptual-spec-2026`, replacing a flat
markdown tree with a six-layer graph whose citation rule is machine-enforced by
`bin/wb-validate`.

The generalisation worth noting: the corpus work had already established, for
message evidence specifically, that partial data produces confident error. The
architecture turns that from a policy about one source into a property of the
whole graph.

## What came after, on this foundation

Everything in the 2026-09-09 meta record stands on this rebuild:

- [`evt:2026-09-09-edge-rework`](2026-09-09-edge-rework.md) repaired the one
  part the rebuild left unenforced — the edges — after `dat:0011` showed
  what the asymmetry produced in practice within two days.
- [`evt:2026-09-09-privacy-cut-as-epistemic-concern`](2026-09-09-privacy-cut-as-epistemic-concern.md)
  changed retrieval, not ingestion; the layer law survived intact.
- [`evt:2026-09-09-wikitest-rebuild`](2026-09-09-wikitest-rebuild.md)
  ported the whole apparatus into the cloud container.
- [`evt:2026-09-09-ingest-complete`](2026-09-09-ingest-complete.md) is the
  largest-scale test the citation regime has ever survived: ~1,345 datums
  against the invariant, each validated before commit, and the schema
  learned from the rejections.

The rebuild is the reason the ingest's contradictions are *usable*:
contradictions filed under a machine-enforced citation rule are repair
orders with addresses, not opinions. Without the six layers, the
correction-propagation failures the ingest mapped (June 1 attribution,
August graduation, Coles "never says yes") would be scattered notes
rather than a standing map of what is stale and where.
