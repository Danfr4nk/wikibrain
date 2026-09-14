+++
id = "dat:1432-myactivity-volume-timeline"
layer = 1
type = "datum"
title = "MyActivity volume timeline 2006-2025: 108,821 unique actions; 2023-2024 logging collapse"
claim = "Four MyActivity exports deduped to 108,821 unique actions spanning 2006-09-10 to 2025-07-27 (52,646 searches, 38,372 visits, 16,302 watches). Peak years: 2011 (10,942), 2019 (10,169), 2012 (9,860), 2013 (9,586). Volume collapses across ALL action types simultaneously in 2023 (2,673) and 2024 (661) - a logging/account change, not a behavior change - so post-2022 MyActivity is not a reliable behavior record."
cites = ["src:myactivity-2026-09-12"]
confidence = "high"
tags = ["myactivity", "google", "search-history", "coverage", "methodology"]
importance = 3
created = "2026-09-12"

[[edges]]
rel = "about"
target = "ent:dan"
strength = "strong"
asserted_by = "llm"
+++

**Evidence class:** platform log (machine-generated timestamps).

Parsed from 4 HTML exports (118,255 raw records, 9,434 cross-file duplicates removed; dedup key = timestamp + action + text + url). Timestamps converted from America/New_York to UTC.

Yearly action counts:

| Year | Actions |
|------|---------|
| 2006 | 458 |
| 2007 | 3,805 |
| 2008 | 2,130 |
| 2009 | 5,481 |
| 2010 | 2,137 |
| 2011 | 10,942 |
| 2012 | 9,860 |
| 2013 | 9,586 |
| 2014 | 5,094 |
| 2015 | 3,843 |
| 2016 | 3,740 |
| 2017 | 4,679 |
| 2018 | 8,074 |
| 2019 | 10,169 |
| 2020 | 8,638 |
| 2021 | 7,114 |
| 2022 | 7,818 |
| 2023 | 2,673 |
| 2024 | 661 |
| 2025 | 1,919 (through Jul 27) |

Peak months: 2011-05 (1,784), 2013-03 (1,559), 2013-01 (1,467), 2022-04 (1,417). Lowest: 2024-08 (2), 2024-03 (4), 2024-06 (4).

The 2023-2024 drop hits searches, visits, AND passive watches simultaneously (2024: 73 searches, 2 visits, 570 watches). A behavior change cannot suppress passive watch-logging; this is Web & App Activity being paused, a signed-out browser, or an account switch. Treat 2023+ as coverage decay, not as Dan searching less.

> **COVERAGE NOTE [2026-09-12]:** the 16,302 watch events inside this timeline's 108,821 actions are single-YouTube-account ("Dan Frank" channel) data per dat:1441 — the operator confirmed 2026-09-12 he watched "exactly as much YouTube every day since 2013" on a second account whose history is not held in any export. Treat watch counts as lower bounds, not a census. The 2023–24 collapse reading (logging/account change, not behavior change) is unaffected.
