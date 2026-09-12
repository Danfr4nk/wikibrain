+++
id            = "dat:0063-intake-ledger-first-measured-night"
layer         = 1
type          = "datum"
title         = "The intake ledger's first measured night: 0.75 g cocaine unit over 9h 31m, three 0.05 g cannabis units, and a deliberately withheld rate figure"
claim         = "On the night of 2026-08-30/31 the intake ledger recorded its first end-to-end unit: cocaine unit intake_unit_01M1AJ47K2HKZ8TZZ75CPNGFJ7, 0.75 g received 17:04 Aug 30 and closed 02:35 Aug 31, disposition consumed, reconciled balanced — 9h 31m, six intake events (four flagged measured, two estimated), 0.75 g total quantified, median dose 0.1 g, largest dose the final 0.25 g at 02:35, five of six events between 20:05 and 00:01. The same window holds three single-serving cannabis units of 0.05 g at 22:06, 00:37 and 02:36 — the last opened 24 seconds after the cocaine unit closed. The ledger's own page withholds bin/intake's \"Rate of consumption 1.89 g / day\" for the cocaine unit as an arithmetic restatement of the unit's lifespan, not a daily figure, and the cocaine page repeats the warning. The two pages agree on every figure checked; the underlying intake/events.jsonl and raw/health/intake/ archives are not in the repo's raw/ tree."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read from wiki/health/cocaine.md's measured-night section (corpus__3.txt line ~6800) and the generated wiki/health/intake-ledger.md (line ~7424): unit table, every-event table, corrections table, and the what-it-cannot-tell-you block. Cross-checked event-by-event between the two pages — 4 measured / 2 estimated split, the 20:05 double entry, the 02:35 0.25 g closer, and the 24-second cannabis-after-cocaine sequencing all match. The 1.89 g/day figure appears only on the cocaine page (as the figure not to cite) and is consistent with the ledger page's stated rule against publishing extrapolated rates. Underlying log not held (dat:0018)."
importance    = 4
tags          = ["health", "old-wiki", "measurement", "intake", "cocaine", "epistemics"]
created       = "2026-09-09"

[when]
start = "2026-08-30"
end   = "2026-08-31"
+++

## Two pages, one record, no drift

`wiki/health/intake-ledger` is a generated page (`bin/intake page` from
`intake/events.jsonl`, hand-editing forbidden); `wiki/health/cocaine`'s
measured-night section is prose drawn from the same log. The event-by-event
tables agree exactly — including the odd detail that the first two doses
both land at 20:05, one flagged estimated and one measured. The provenance
block on the cocaine page adds what the generated page could not: the
units were logged through the portal on a phone, the export was filed
2026-08-31, and the per-unit archives under `raw/health/intake/` were
backfilled rather than written at close.

## The three epistemic brakes, preserved here because the figures invite their violation

1. **n = 1.** One unit on one night establishes nothing about a daily,
   weekly, or typical rate. The 0.75 g lands inside the recalled 0.5–1 g/day
   band ([`dat:0062`](0062-cocaine-dosage-arc-finance-driven.md)) — non-contradiction,
   not confirmation.
2. **The 1.89 g/day figure must not be cited as a daily rate.** It is 0.75 g
   extrapolated across 24 hours from a unit that existed for 9h 31m. Both
   pages state this; this node records it so the next session does not
   re-derive the error.
3. **The measured flags overstate precision.** Four events carry exactly 0.1 g,
   the portal's `ONE LINE` preset — defined in `intake/substances.json` as
   estimated, low confidence — but reached the log flagged `measured`.
   Coverage counts events-with-numbers, not where the numbers came from.

## Gaps the pages leave open

An unlogged night is indistinguishable from a night with nothing in it; the
ledger's silence before 2026-08-30 is the absence of an instrument, not the
absence of use. The cannabis row's "daily" claim now has one dated night of
support. The Suboxone and nicotine rows still have no ledger entries at all.
