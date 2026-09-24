+++
id         = "dat:1926-harness-live-sources-repair-decisions-20260924"
layer      = 1
type       = "datum"
title      = "2026-09-24: harness live (617 nodes, 12,721 edges, 8,025 events) + sources-repair D1–D4 decisions"
claim      = "Phase 0 audit (corpus: 617 wiki pages, 1,736 kb nodes @ commit d7fb77c): Explore 80.1% (16,297 wikilink occurrences, 6,404 unique edges, 99.3% resolution; prose links ~66% meaningful / 30% structural / 4% incidental); Evidence 28.0% (1,621 kb-cite occurrences, 461 unique IDs, 95% resolvable, only 145/617 pages carry ≥1); Journey 57% fully coherent 3-hop paths (37% via generic hubs, 7% nonsense); sources: field heavily degraded (2,200 entries, 16.2% exact path resolution, 22.4% fuzzy — superseded raw/ layout); frontmatter connections: 62 relation types, ~47% singletons; master timeline 5+ weeks stale; site/graph.json stale. The harness shipped live at danfr4nk.github.io/wikibrain/harness/ — 617 nodes, 12,721 edges, 8,025 timeline events, six views (Read/Explore/Time/Evidence/Journey + index), all green. One CI hiccup: raw phone numbers in built JSONs tripped the census test — masked, redeployed, HEAD green. Sources-repair proposal: the 16.2% was overstated — the checker missed the src:/dat: node-ref convention; corrected baseline 38.3%, deterministic ceiling 49.8%, ~50.2% genuinely absent/ambiguous/unrecoverable (the corrected progression is recorded in the project docs, replacing the 16.2%). His decisions: D1 node-ref convention APPROVED, D2 deterministic remaps APPROVED, D3 (65 ambiguous) → Sammy as named reviewer — DONE: 26 confirmed target, 39 confirmed unresolved (one blank-line artifact, byte-identical archive.jsonl twins, the message_1.html class dead on ross-thompson's), D4 (321 truly gone) → preserve citation text + ⚠ 'Source reference unresolved — original target no longer exists in current corpus' marking, NO deletion. D1/D2 landed, coverage now 40.8%; D3+D4 combined pass after. Decision boundaries explicit in the ledger — approving D1/D2 does not silently execute D3/D4."
cites      = ["src:20260924-1140-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
importance = 5
tags       = ["harness", "sources-repair", "audit", "decisions"]
created    = "2026-09-24"

[when]
date   = "2026-09-24"
+++

<!-- prose for humans; the frontmatter is for machines -->
