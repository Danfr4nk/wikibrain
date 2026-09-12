+++
id            = "dat:0076-instrument-layer-three-rules"
layer         = 1
type          = "datum"
title         = "The instrument layer's three rules, and the testimony ledger's figures drifted between snapshots"
claim         = "wiki/meta/instruments/index.md (created 2026-09-02) codifies the measurement layer's three rules: (1) evidence, not claim — an instrument page states no finding, presents records and the arithmetic, and a finding drawn from it reaches ordinary pages through normal operations, never the generated page; (2) generated, never hand-edited — a hand-edit fails the gate in bin/wiki-check; (3) each instrument states its own limits in an undroppable section (coverage, sample bias, what it structurally cannot see). Standing states as of that page: bin/intake — 4 units, 9 events; bin/wiki-testimony — 12 claims, 6 settled, veracity 57/100. Those testimony figures differ from dat:0044's reading of the same regenerated page (16 claims t001–t016, 10 scored, veracity 52/100 on 31.0 points of weight) — the ledger regenerates from testimony/events.jsonl, which neither pass holds, so the drift is expected regeneration over an accumulating log, not a contradiction to adjudicate. The page also records the 2026-08-30 operator decision to publish intake/ and testimony/ to a public repository knowingly, with the fixed reversal order in CLAUDE.md: make the repository private first, verify it, and only then decide whether anything else is wanted."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Read from wiki/meta/instruments/index.md (corpus__3.txt line ~17290). The 57/100 vs 52/100 comparison is against dat:0044-old-wiki-testimony-ledger.md in this repo, which transcribed the ledger page's own tables from whole.txt with the caveat that testimony/events.jsonl is not held. The CLAUDE.md moratorium and its mechanical enforcement are also covered by dat:0044; the 2026-08-30 publication decision is new to this page."
importance    = 3
tags          = ["meta", "old-wiki", "epistemics", "governance"]
created       = "2026-09-09"

[when]
start = "2026-09-02"
end   = "2026-09-04"
+++

## Why the drift note matters

A future session comparing the instruments index (57/100, 12 claims) with
the testimony-veracity page (52/100, 16 claims) will see a contradiction
unless this is on record: both numbers are true of the regeneration that
produced them. The ledger is a living instrument, not a fixed table, and
its headline number moves as claims are added and settled.

## What the three rules buy this rebuild

Rule 1 is the same cut this system enforces between L0/L1 evidence and L2+
interpretation; rule 3 is the same denominator discipline
[`dat:0063`](0063-intake-ledger-first-measured-night.md) records the intake
ledger observing (withheld rates, stated coverage). The instruments index
is the prior wiki's own statement of the architecture this rebuild
independently adopted — worth cross-referencing, not re-deriving.
