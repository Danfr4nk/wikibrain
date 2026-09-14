+++
id         = "dat:1254-supply-network-thread-counts"
layer      = 1
type       = "datum"
title      = "Supply-network thread counts do not reproduce on the held corpus"
claim      = "The supply-network page's thread counts are CONTRADICTED by the held corpus as stated: (1) Zaco — the page claims 58 inbound pill-ad messages (2020-03-21 through 2022-06-04) on the [phone redacted] thread; the held corpus contains exactly 1 row containing 'zaco' corpus-wide ('Yo it's zaco', inbound, 2018-03-12, a different thread). (2) Menore — the page claims 455 inbound / 458 outbound on the dealer thread; the held thread on [phone redacted] holds 4,809 inbound / 4,658 outbound in total (2018-12 through 2020-09), and the page's stated window (March 2020–June 2022) returns 63 inbound / 109 outbound on that thread — no window reproduces 455/458. Both figures appear to come from a different population (like the page's other stale counts: 98,056-of-Dan's-messages base, and the commissioned-self page's 106,629-outbound census). (3) The 2025 prescriber quotes — already handled: dat:0028 found one of four verifiable, with corpus holes on the two June dates; cross-reference, do not duplicate. What DOES verify: the 2015-11-29 Dan-sent line '...she doesn't have another drug source' (2015-11-29 19:54:56 UTC, exact match, single hit) and the 2019-05-31 'try to go get subs from my old doctor' (dat:0028)."
cites      = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence = "high"
extraction = "corpus/messages.csv scanned directly with Python, 2026-09-10: 'zaco' case-insensitive -> 1 row (2018-03-12 21:44:26 UTC, inbound, chat [phone redacted]); chat_identifier '+17249204125' -> 4,809 rows is_from_me=0, 4,658 is_from_me=1, span 2018-12 to 2020-09; same handle restricted to 2020-03-01..2022-07-01 -> 63 inbound, 109 outbound; 'she doesn't have another drug source' -> exactly 1 row, 2015-11-29 19:54:56 UTC, is_from_me=1. Timestamps UTC as stored. Counterparty phone numbers redacted per ingest rule."
importance = 4
tags       = ["supply-network", "corpus-verification", "contradiction", "negative-data"]
created    = "2026-09-10"

[when]
start = "2015-11-29"
end   = "2022-06-04"
+++

## Reading

The page's counts are not fabrications — they are almost certainly real counts from a real earlier extract (the same way the commissioned-self census was real on its own population). The held corpus is a different population: it contains the full 2018-12–2020-09 Menore thread at 9,467 messages, against which 455/458 cannot be a subset count of any contiguous window. The Zaco figure (58 inbound ads over 2020-03–2022-06) has no corresponding thread at all in the held corpus — the Zaco contact does not exist here beyond one 2018 greeting. Treat both as unreproducible-on-held-corpus, not as refuted-in-principle.
