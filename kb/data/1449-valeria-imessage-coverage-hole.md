+++
id         = "dat:1449-valeria-imessage-coverage-hole"
layer      = 1
type       = "datum"
title      = "Valeria iMessage claims sit inside a ~20-month corpus hole: messages.csv has zero rows May 2021–Dec 2022"
claim      = "Dan's 'tons of messages' with Valeria are unverifiable against the held iMessage corpus, not disproven: a direct count of the local messages.csv (192,140 rows, 2011-03-19 → 2026-09-07) shows ZERO rows for every month May 2021 through December 2022 (April 2021 has 3 rows; March 2021 has 1). The entire Valeria affair window (Aug 2021 → ~mid-2022) falls inside the hole. The Sep-8 chat.db export's zero-2022 coverage and the absence of older iMessage exports in either repo were reported in-chat but not locally re-verified this run. The old article's later-dated iMessage claims (Sep 2023, Nov 2024, Jul 2025) fall in months that ARE covered (2023-09: 102 rows, 2024-11: 367 rows, 2025-07: 107 rows) and are still absent — those are uncorroborated, not missing-data. Status split: affair-era texts = missing-data; later claims = uncorroborated."
cites      = ["src:sammy-chat-transcript-20260912-1140"]
attributed_to = "src:sammy-chat-transcript-20260912-1140"
confidence = "high"
extraction = "2026-09-12T07:49:10Z–07:52:56Z Dan testimony ('Wait hold up did you not see the iMessages' / 'Tons of messages' / 'So many'). In-chat forensic report 07:49:30Z–07:51:00Z. Hole re-derived 2026-09-12 by month-bucketing date_sent over all 192,140 rows of ~/workspace/wikitest/corpus/messages.csv (the file raw/imessage mirrors): 2021-05..2022-12 all 0; boundaries 2021-03: 1, 2021-04: 3, 2023-01: 6, 2023-02: 0. Zero senders containing 'valeria' (case-insensitive) anywhere in the file."
importance = 4
tags       = ["valeria-iglesias", "source-coverage", "message-corpus", "missing-data", "2021", "2022"]
created    = "2026-09-12"
+++

## Reading

This is the honest version of the 0740 batch's long-tail reclassification
(`dat:1445-valeria-rewrite-evidence`): the claims were sorted into
"unverified against 216,101 held rows" without saying WHY the rows were
missing. The why is structural — a twenty-month hole in the instrument,
not an empty inbox. `pat:partial-data-confident-error` instance 4: the old
article's iMessage claims were confident assertions drawn from a source
incapable of showing the affair window at all.

The split matters for the article: nothing about Valeria's 2021–22
iMessages can be asserted OR denied from this corpus. The later-dated
claims (Sep 2023 / Nov 2024 / Jul 2025) are the weaker ones — they sit in
covered months and still produce no rows.
