+++
id         = "int:mercer-relabel-motive-20260914"
layer      = 3
type       = "interpretation"
title      = "Mercer relabel motive: what the hand-edits say about his relation to his own data"
claim      = "Structural read of the Mercer St phantom (2026-09-14): across May-Oct 2023 Dan hand-edited the semantic/display layer of his Google Timeline 71 times - 13,074 of his 17,948 manual pings are from 2023 - relabeling Au Za'atar dinner shifts to a SoHo address (112 Mercer St), then deleted the entire Timeline on Oct 20, 2023; the sensor layer (Records.json, 121,733 raw pings) survived untouched. Reading: he treats the semantic layer as disposable/assertional and the sensor layer as ground truth - labels are claims, pings are evidence. The motive for the relabels is an open question, not a capture: the assistant's data-integrity-experiment hypothesis (false-label stress test, then testing the delete path) is unconfirmed by Dan and competes with privacy-purge, aesthetics-then-regret, and practical-obscuring alternatives. Confidence low."
cites      = ["src:sammy-chat-transcript-20260914-0808", "src:semantic-location-history-2026-09-12"]
confidence = "low"
source_type = "other"
provenance = "Assistant verdict and location-teardown content from the 2026-09-14 chat batch (raw/sammy/20260914-0808/chats.json); the Mercer phantom facts are captured on main as dat:1535 (this branch predates the merge). The experiment hypothesis was the assistant's, never Dan's claim."
reliability = "retrospective"
perspective = "llm"
falsifiers = [
  "Dan states an actual motive for the relabels (e.g. expense reporting, a joke, a specific experiment) - then the structural reading and all alternatives collapse into his testimony, which outranks this.",
  "The 2023 corpus or records surface a practical purpose for SoHo WORK labels (tax, expense, job application) - then the obscuring alternative wins and the experiment reading fails.",
  "A later timeline-curation episode shows the same relabel-then-delete shape with a stated motive - then this instance is re-read through that motive.",
]
alternatives = [
  "Data-integrity experiment (assistant's hypothesis, unconfirmed): false-label stress test, then testing the delete path on Oct 20.",
  "Privacy purge: relabels as obfuscation of Au Za'atar employment on the timeline, deletion as the purge.",
  "Aesthetics then regret: hand-curation for a cleaner timeline, then the nuclear option.",
  "Practical obscuring: labels serving an expense/tax/administrative purpose.",
]
importance = 2
tags       = ["veracity", "location", "interpretation", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

## Evidence

- 32 hand-written WORK labels at 112 Mercer St (May-Oct 2023) dedupe to 16 visits; every one was an Au Za'atar dinner shift at 1063 1st Ave. 400+ GPS pings across the 16 windows cluster at 1st Ave, zero near Mercer; millisecond-identical start/end timestamps vs semantic-db visits already labeled 'Au Za'atar - Midtown East'; 112 Mercer was Frankies Bikinis (swimwear retail) in 2022-23; corpus contains zero mentions of Mercer or SoHo.
- His 71 hand-edits stop Oct 19; he deleted the whole Timeline Oct 20; Records.json survived. 13,074 of 17,948 manual pings are from 2023 - he was curating hard that year.
- Net verdict delivered to him: timeline hand-labels are compromised as a source wherever he hand-edited; the raw pings underneath are clean.

## Alternatives

- Data-integrity experiment (assistant's hypothesis, unconfirmed): stress-test whether Timeline accepts false user labels over sensor data, then test the delete path.
- Privacy purge: relabels as obfuscation of the Au Za'atar employment on the timeline, deletion as the purge.
- Aesthetics then regret: hand-curation for a cleaner-looking timeline, then the nuclear option when the edits didn't satisfy.
- Practical obscuring: labels serving an expense/tax/administrative purpose - would leave traces in the 2023 corpus or records.
