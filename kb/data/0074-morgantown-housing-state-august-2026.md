+++
id            = "dat:0074-morgantown-housing-state-august-2026"
layer         = 1
type          = "datum"
title         = "The 463 Morgantown housing state as of August 2026: lien deadline elapsed unrecorded, Suz's \"It's time for you to go\" verified in the corpus"
claim         = "As of August 2026 the 463 Morgantown St arrangement stands: Dan and Suz moved in early 2026 with no signed lease and no confirmed power of attorney; owner Alexander Jackson is the counterparty to every unwritten arrangement; contractor Arnu's mechanics lien was estimated to mature ~2026-07-27 and that date has elapsed with no source recording what happened (filed, settled, or never real — the estimate was always derived, no filing or contract on disk); contractor John Carney is ~10–20% complete and unreachable since March 2026; Suz filed Chapter 13 in October 2024 (case 24-22285-GLT, ~$157,000 scheduled, IRS priority claims 2018–2021) on stated income of $11,000–$14,000 a year, and 337 Saratoga — the only unencumbered asset — was liquidated in June 2026 (buyers Jennifer J. and Scott P. Delverm, $465k, closing 2026-06-23, seven-day vacate) to satisfy that filing. Corpus-verified datapoints: 2026-07-24 Dan tells Annie \"I swear to god I moved the entire house by myself. It took an extra week - the people were so f[ucking mad]\" (address unnamed, identification with the 337 vacate inferential); 2026-08-11 15:04:23 UTC inbound from Suz (+17243228715): \"It's time for you to go.\" — the newest housing datapoint, from the person who controls it."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:wikitest-rebuild-session-2026-09-09"
confidence    = "moderate"
extraction    = "The risk table, timeline, Chapter 13 case number and sale figures were read from wiki/legal/463-morgantown.md (corpus__3.txt line ~16770) and cross-checked against whole.txt (lines 10602, 10638, 39565, 10594, 61949, 61959 — case 24-22285-GLT, $157k, buyers Delverm, $465k, closing 23 June 2026 all consistent). The 2026-07-24 move line (row 224531) and the 2026-08-11 \"It's time for you to go.\" line (row 228786, inbound +17243228715) were verified verbatim in corpus/messages.csv 2026-09-09. The Arnu lien estimate, John Carney status, no-lease/no-POA claims and the Alexander Jackson counterparty claim rest on the wiki's synthesis of context-core and the Suz thread and were not independently verified here."
importance    = 4
tags          = ["legal", "housing", "corpus", "verification", "open-risk"]
created       = "2026-09-09"

[when]
start = "2026-02-10"
end   = "2026-08-11"
+++

## What is verified and what is not

**Verified in the authoritative corpus:** the July 24 move message, the
August 11 \"It's time for you to go\" (inbound from Suz's number
+17243228715), and — via the Coles exchange in
[`dat:0073`](0073-coles-address-threat-exchange-2026-08-17.md) — that Dan
is living at the address on August 17 and claims cameras on the property.

**Corpus-consistent but wiki-sourced:** the Chapter 13 case number, the
scheduled liabilities, the income figures, the sale price and buyers, the
closing date and the seven-day vacate. All appear identically across the
463 page and the suzanne-frank page (whole.txt 39565, 61949); the
bankruptcy filing itself has not been pulled from PACER in this pass.

**Open and actionable:** the Arnu lien. The estimated 2026-07-27 deadline
elapsed on 2026-08-02 with nothing recorded. A Fayette County
prothonotary or recorder search against the 463 parcel would settle it in
one query — the page says so and it is true.

## Gaps the page names

Whether the August 11 line was acted on and whether Dan is still housed at
463; the exact move-in date; whether a lease or POA has since been signed;
any direct communications with Alexander Jackson; the content of the \"John
carney thing\" document; whether the July 2026 move was into 463 or
somewhere else.
