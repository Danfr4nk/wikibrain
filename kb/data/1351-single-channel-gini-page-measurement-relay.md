+++
id            = "dat:1351-single-channel-gini-page-measurement-relay"
layer         = 1
type          = "datum"
title         = "The Single Channel page's Gini 0.9601 and dynamic-tightening mechanism are filed as the page's own measurement"
claim         = "wiki/mind/synthesis/single-channel (2026-06-26, rechecked 2026-08-24) reports a recomputed Gini coefficient of 0.9601 over 496 distinct counterparty handles and a Gini-over-time dynamic: the channel tightens toward a single correspondent in crisis windows and widens in stable periods — the page names this 'dynamic tightening,' distinct from static concentration. It also records the held-corpus summary's 498 distinct counterparty handles as a nearby but different figure (the page's own [2026-08-24] re-check notes the held summary reports 498 while its measurement used 496, methodology unspecified). The Gini figure is the page's own computation over an earlier corpus slice; it is not reproduced here, and no validator measurement exemption is claimed for the number itself — this node relays it as page-attributed testimony with the discrepancy preserved. The mechanism claim (crisis-window tightening) is interpretive synthesis over the page's own measurement. No held source in this repo recomputes the Gini, and the dynamic-tightening series is not re-derived."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 38246 (601 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. The 496-vs-498 handle-count tension is the page's own [2026-08-24] re-check note, not an external audit. The page cites the earlier corpus slice it measured; the current corpus/messages.csv has not been re-measured for this node. The 'single-channel' mechanism is presented here as the page's synthesis, not a finding of this ingest."
importance    = 3
tags          = ["mind", "synthesis", "communication", "old-wiki", "measurement"]
created       = "2026-09-09"

[when]
start = "2015-11-01"
end   = "2026-08-24"
+++

## What is kept

- The Gini figure and its re-check status, with the page's own 496/498
  discrepancy noted as unresolved.
- The dynamic-tightening mechanism as the page's interpretation of its
  measurement.
- The correction trail: the page's [2026-08-24] re-check is what surfaced
  the handle-count tension.

## What is not done

No recomputation of the Gini over the current corpus/messages.csv. That
measurement belongs to whoever owns the communication-patterns layer;
this node only preserves the page's number and its caveat.
