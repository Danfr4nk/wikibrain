+++
id            = "dat:0157-bekah-fullem-thread-2020"
layer         = 1
type          = "datum"
title         = "Bekah Fullem — 2020 iMessage thread: flirtation, cat-Gideon crisis ($40–50 sent), March 29 rape disclosure, COVID-position correction"
claim         = "Rebekah \"Bekah\" Fullem's contact with Dan is a single iMessage thread: a full two-sided export counts **153 messages, Feb 9 – Mar 29, 2020** (two isolated clusters). The held iMessage corpus carries **132 rows** for the handle, 2020-02-10 – 2020-03-30 — a ~21-message, 1-day offset from the page's export, noted not resolved. Verified verbatim in the held corpus: the mutual flirtation (*\"you have the privilege of being someone ive silently crushed on for...ever\"*, 2020-02-12 02:56, outbound); the cat Gideon crisis (*\"He's going to get put down\"*, 2020-02-11 04:18, inbound; later *\"I had to push Gideons appointment or else they were going to euthanize him\"*, 2020-02-14 02:22, inbound); Bekah's disclosure (*\"I was raped dude. I haven't slept with anyone since then.\"*, 2020-03-29 23:36, inbound); and the page's **correction to its earlier read** — it is Dan, not Bekah, who insists the pandemic is worse than reported (*\"nyc is still 3 weeks away from peak infection rates\"*, 2020-03-30 00:11, outbound), with Bekah pushing back. No prior or later contact with Bekah appears in the corpus."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 52060 (123 lines). The old-wiki export carries the same page (whole.txt line 45729ff, date_modified 2026-08-26) — both built from the dedicated two-sided export (153 messages). All quoted lines above were read directly from corpus/messages.csv by csv parsing (message rows found by text match; timestamps are date_sent). The page's source CSV is named for the handle; the corpus page redacts it to '[phone redacted]' and this node follows that convention — no third-party number is recorded here. The 153-vs-132 count and 1-day range offsets reflect two different exports (dedicated two-sided vs. the held iMessage corpus) and are recorded as an open measurement difference, not a contradiction."
importance    = 4
tags          = ["people", "imessage-corpus", "corroborated", "correction", "2020"]
created       = "2026-09-09"

[when]
start = "2020-02"
end   = "2020-03"
+++

## What the check confirms

The page's recontextualization claim holds: the held corpus shows both
directions (61 outbound, 71 inbound) and the key passages are verbatim —
the flirtation, the crisis, the disclosure, and the reversed COVID read.
The earlier one-sided extract the page describes is not what is held here;
what is held here agrees with the corrected two-sided reading. The
153-vs-132 difference is the one thing not adjudicated: the dedicated
export the page cites (`imessage_export_…_both_all_now.csv`) is not in this
repository.

## The separate, heavier claim

The March 29 exchange also carries Dan's disclosure about Annie's history —
filed separately as [`dat:0158`](0158-annie-assault-45-year-claim-dans-account.md)
because its evidential status is entirely different: Dan's words, verified;
the underlying fact, uncorroborated.
