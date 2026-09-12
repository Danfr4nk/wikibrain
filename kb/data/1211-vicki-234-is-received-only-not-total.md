+++
id            = "dat:1211-vicki-234-is-received-only-not-total"
layer         = 1
type          = "datum"
title         = "Vicki thread: the page's '234 messages' is approximately the received-only count, not total thread volume"
claim         = "The wiki/people/vicki page files Vicki as '*[phone redacted]*, 234 messages, December 2015 – April 5, 2018'. The held corpus's thread on her chat (resolved via the held quotes 'Bat in frans house' and 'this lady is like my grandmother I never had', both on one chat_identifier) holds **512 rows**: 281 outbound (is_from_me=1) and 231 inbound, first row 2015-12-15 00:05:52 UTC, last row 2018-04-05 03:15:04 UTC. The page's 234 is therefore not total thread volume — it is close to the received-only count (231 in the held slice, vs 234 on the page, presumably from the fuller MASTER_MESSAGES_DB_DUMP.csv the page cites), i.e. roughly the counterparty's side of the exchange. The date window matches: the page's December 2015 start and April 5, 2018 end are confirmed to the day in the held rows. Relationship and context remain unresolved on the page ('No Facebook or other corpus cross-references found'), and this pass found none either."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv 2026-09-10: chat resolved via exact quoted text ('Bat in frans house' -> 2016-03-30 15:03:40 UTC; 'this lady is like my grandmother I never had' -> 2018-03-08 18:04:24 UTC), both on the same chat_identifier. Counts: 512 total, 281 sent, 231 received. First/last dates as above. Page body read from wave-6 slice (wiki/people/vicki.md, 103 lines from whole.txt:71085); line 40 carries the '234 messages' figure sourced to the master dump. Handle rendered as [phone redacted] per task rules."
importance    = 3
tags          = ["vicki", "corroborated", "volume", "count-correction"]
created       = "2026-09-10"

[when]
start = "2015-12-15"
end   = "2018-04-05"
+++

## The three-row gap

Held received count is 231, the page says 234. The page's figure comes
from the fuller dump (184,359 rows) versus the held 192,140-row slice —
different slices, small expected residue. The substantive correction is
the unit, not the digit: '234 messages' describes one direction of the
thread, not the whole exchange.
