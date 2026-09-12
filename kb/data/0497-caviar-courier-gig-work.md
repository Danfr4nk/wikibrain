+++
id            = "dat:0497-caviar-courier-gig-work"
layer         = 1
type          = "datum"
title         = "Caviar courier gig work (April 2019 – April 2020): 290 automated dispatch messages, twelve months of availability with no tenure"
claim         = "wiki/work/caviar-courier.md (knowledge: derived) documents Dan Frank's Caviar food-delivery courier work in the NYC-II era from the iMessage corpus: **290 messages** (April 2019 – April 2020) from the automated dispatch number (the page redacts it as `[phone redacted]`; per privacy protocol the number is not reproduced here), entirely order-assignment and expiration notifications (\"New Caviar order assigned,\" \"Order #XXXXX is ready for pickup,\" assignment-expired warnings) — \"290 messages across a year of courier work, every one of them an automated dispatch notification, and not one of them about what was in the bag.\" The count was **verified exactly** against the held corpus: 290 rows from that dispatch handle, all inbound (is_from_me=0), first 2019-04-21 20:48:00 UTC, last 2020-04-14 22:02:31 UTC — matching the page's date range to the row. Activity shape: dense April–July 2019 (over 100 assigned orders, back-to-back assignments minutes apart, consistent with active shift-based courier work); near-silent August–November 2019; a scattered handful in March 2020; a final short burst **April 7–14, 2020** — \"right as COVID-19 lockdowns began in NYC, suggesting gig delivery work was picked back up (or intensified) as a stopgap income source at the start of the pandemic.\" The page's thesis: the payload rule's second control — \"an app that dispatches orders offers nothing to install a private objective in… twelve months of availability with no tenure: appetite for income that was constant across the period, attached to nothing, producing bursts rather than a job.\" Gaps carried from the page: no earnings totals or delivery counts (the notification text carries no dollar amounts)."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 119830 (57 lines). The 290-message count and the full 2019-04-21 → 2020-04-14 span were re-measured against the held corpus (corpus/messages.csv) and match exactly; the page's derived knowledge is therefore independently corroborated on its core metrics. The dispatch phone number is reproduced by the corpus as a chat handle but is withheld per the redaction protocol (the page redacts it; this node does not carry it)."
importance    = 2
tags          = ["work", "2019", "2020", "nyc-era", "imessage-corpus", "corroborated", "financial-stress"]
created       = "2026-09-09"
+++

## What the check confirms

This is the rare derived page whose numbers can be re-measured and did
check out: 290 inbound rows, exactly the stated span. It also gives the
Caviar window its fullest documentary form — the courier work previously
existed in the record only as an inference, and the page converts it to a
counted fact.
