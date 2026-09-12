+++
id            = "dat:0725-covid-era-curfew-quote-old-wiki-only"
layer         = 1
type          = "datum"
title         = "The Seth '8pm curfew / living in beirut' quote is absent from the held message corpus — old-wiki only; the 121-visits GPS figure does verify"
claim         = "The covid-era page quotes Seth Ledonne on the June 2020 Uniontown atmosphere: an '8pm curfew' and 'it's been like living in beirut.' A full scan of the held message corpus for 'curfew' and 'beirut' returns no matching row — the line is absent from messages.csv and survives only in the old wiki export (whole.txt 60540, 60584–60585, 107876, dated June 7, 2020, on the Seth/COVID-era pages). Separately, the page's location-history figure verifies: the corpus's own location-history page prints the 2020 row as 121 visits ('Sharp drop (pandemic)'), and the page's prose claim of '121 visits for 2020' matches it exactly. The GPS figure is therefore corroborated by the corpus's internal location page; the Seth quote is not corroborated by any held primary source."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: case-insensitive 'curfew' and 'beirut' — zero hits across all rows. Old-wiki export whole.txt: 60540 ('8pm curfew'), 60584–60585 ('it's been like living in beirut'), 107876 (June 7, 2020 Seth page context). Location-history page in corpus__3.txt: 2020 row '121 visits — Sharp drop (pandemic)' — matches the covid page's '121 visits for 2020' verbatim. Note the page also prints 'Low 2020-21 (85+257)' elsewhere, which is arithmetically inconsistent with 121 for 2020 alone; the inconsistency is the page's, flagged but not resolved here — no raw GPS export is held to adjudicate."
importance    = 3
tags          = ["covid-era", "seth-ledonne", "location-history", "old-wiki"]
created       = "2026-09-09"

[when]
date = "2020-06-07"
+++

## Two tiers, one node

This node deliberately pairs a failure and a success to show the page's
sourcing split: the Seth quote is third-hand color (someone's 2020
telling, kept by the old wiki, absent from the corpus), while the 121
visits is a number the corpus's own location page independently prints.
The page does not distinguish the tiers; the ingest does. The '85+257'
inconsistency is left open — it needs the raw GPS export, which is not
held.
