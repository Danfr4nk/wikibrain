+++
id          = "src:stylo-burnin-compare-jsonl"
layer       = 0
type        = "source"
title       = "burnin-compare.jsonl — v1/v2 side-by-side scoring ledger (2026-09-15 20:24 ET onward)"
source_type = "document"
acquired    = "2026-09-16"
provenance  = "Appended every 30 min by the stylo-burnin-30m cron; one comparison line per run (v1 flag/divergence, v2 null percentile/divergence, alert state, window message count, collection route, self-label count). The raw runs behind dat:1632's burn-in run table."
reliability = "primary"
location    = "~/workspace/goals/stylometric-state-tracking/hidden_files/burnin-compare.jsonl"
confidence  = "high"
importance  = 3
created     = "2026-09-16"
tags        = ["stylometry", "burn-in", "instruments"]
+++

## What this is

The append-only evidence ledger for the stylometry v2 burn-in week. Every half-hour scoring run writes one JSON line: timestamp, messages scored, v1 flag + divergence, v2 null percentile + divergence, alert state, and which collection route supplied the messages (chat tools or the muse.db fallback). This is the primary record behind the burn-in results datum (dat:1632).
