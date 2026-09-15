+++
id         = "dat:libby-claims-ledger"
layer      = 1
type       = "datum"
title      = "Annie's Libby-era disengagement formulation appears once in the corpus"
claim      = "The disengagement formulation — 'ignored,' 'not ask how my day,' 'take a toll' directed at the Libby era — has exactly one surviving written instance: the 2026-09-06 ~01:12 EDT outburst (message IDs 234220-234233). (The name 'Libby' itself appears throughout her 2024 messages, including 97 Libby-topic messages Feb–Aug 2024; the once-only finding is about the formulation, not the name.) She never raised the grievance in this form during Feb-Aug 2024, never in the 13 months of heavy texting after the era (Aug 2025 to Sep 5 2026), and shut the argument down within two minutes ('I'm Sorry' / 'Forget it', then 'I took Benadryl for my stuffy nose') — which reads as ending the fight, not a factual retraction. The only adjacent-but-distinct in-the-moment complaints are 'You never listen to me' (2017-11-13, a gas-money argument) and 'And you are just on your phone' (2018-02-02, 2:30 AM distraction complaint). The 2017 disengagement accusation ran Dan-to-Annie ('I feel FAIRLY sure that's why you're so distant', 2017-04-03), and the 2018 laundry complaint ran Dan-to-Annie ('Saying that we aren't going to work out because I don't keep up with your laundry', 2018-11-02) — the 2026 claim inverts both historical directions."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "sender-filtered sweep over 44,698 of her messages with ~30 regex patterns; 174 + 41 second-pass keyword matches reviewed in context; false positives documented. ~/workspace/libby-engagement/claims-ledger.md, keyword-matches.json"
importance = 5
created    = "2026-09-14"
tags       = ["libby-era", "grievance", "provenance", "2026"]
+++

## Method note

Keyword counts are export-scoped: the canonical CSVs omit the 2024 Annie
thread, but the drive-sweep gsheet fragment (40,338 rows) was included in the
sweep. In-window contemporaneous complaints found were logistics-scale ('You
never got me my sodiepop last night', 2024-05-30), not engagement-scale. Calls
are not in the corpus; Dan reports she raises the material verbally more often
than the single text instance.
