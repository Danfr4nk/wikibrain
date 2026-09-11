+++
id         = "src:scenario-ratings-v1-2026-09-11"
layer      = 0
type       = "source"
title      = "Scenario ratings v1 export (2026-09-11)"
confidence = "high"
source_type = "document"
provenance = "operator-supplied; archived raw/sammy/20260911-1941/"
reliability = "primary"
importance = 4
tags       = ["scenario-ratings", "sexuality", "stated-preference"]
created    = "2026-09-11"
+++

<!-- prose for humans; the frontmatter is for machines -->
First full run of the scenario-ratings diagnostic (v1): 24 base situations x
4-5 modifier variants = 122 items, 1-10 gut ratings plus hard veto, completed
2026-09-11 by Dan in one sitting. Raw artifacts:
`raw/sammy/20260911-1941/scenario-profile-2026-09-11.md` (dense profile) and
`raw/sammy/20260911-1941/scenario-report-2026-09-11.md` (readable report, his
requested format). Stated preference on imagined scenarios, n=1 — it predicts
what he rates, not what he would do. Superseded instrument-wise by v2's causal
single-knob design (168 modifiers, each changing exactly one metric), which
fixes v1's correlational attribution flaw; v1's numbers stand as the
correlational baseline.

Item-level primary record archived 2026-09-11:
`raw/sammy/20260911-1944/scenario-ratings-v1.json` — 122 items with full
24-metric vectors, 1-10 ratings and veto flags, export ts
2026-09-11T07:31:42Z. Independently recomputed from this file:
`dat:0065-scenario-ratings-v1-export-verifies-profile`.
