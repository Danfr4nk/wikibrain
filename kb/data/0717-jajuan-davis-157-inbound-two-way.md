+++
id            = "dat:0717-jajuan-davis-157-inbound-two-way"
layer         = 1
type          = "datum"
title         = "The Jajuan Davis thread is 328 rows, not 157 — the page's count is the inbound-only artifact of the MASTER dump's 'everything Received' convention"
claim         = "The jajuan-davis page (corpus line 20920) gives '157 messages' and a Direction row reading 'one-way' (Jajuan → Dan), sourced to `raw/MASTER.md` where 'all entries marked Received.' The held export for the same handle (chat id matching the Jajuan Davis contact) contains 328 rows: 157 inbound + 171 outbound, spanning 2018-11-29 19:42:01 UTC through 2019-02-19 03:02:44 UTC. The page's 157 is exactly the inbound count — the MASTER dump's direction-marking convention silently dropped the outbound half, and the page inherited the artifact. The relationship was two-way throughout (Dan's outbound rows interleave from the first week), which revises the page's 'one-way' characterization while leaving its 'purely transactional' characterization intact: the two-way rows are still money logistics, not conversation."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: chat-id filter on the Jajuan Davis handle — 328 rows; inbound (is_from_me=0) 157, outbound (is_from_me=1) 171. UTC span 2018-11-29 19:42:01 to 2019-02-19 03:02:44; in Eastern (EST, UTC-5) the last row is 2019-02-18 22:02:44 — so the page's 'Nov 29, 2018 – Feb 18, 2019' range is correct in local time and only the total and direction are wrong. Same inbound-count artifact as dat:0719 (Jess: page said 36, thread is 74). The error class is now confirmed twice: the MASTER-dump 'everything Received' convention."
importance    = 4
tags          = ["jajuan-davis", "message-corpus", "count-correction", "old-wiki", "measurement", "timezone"]
created       = "2026-09-09"

[when]
start = "2018-11-29"
end   = "2019-02-18"
+++

## The error class, named

Two pages in this wave (Jajuan, Jess) inherited the same defect from the
same source convention: the dox-scan/MASTER dump marked every row
'Received,' so any count taken from it is an inbound-only count and any
direction inference from it reads 'one-way.' The held export preserves
direction. Future ingests from MASTER-dump-derived pages should re-count
direction from the corpus before filing — this node and dat:0719 are the
evidence that the convention, not the relationships, was one-way.

## What stands

The page's date range (local), the debt amounts, and the closing exchange
all verify — the amounts and close are carried in
[`dat:0718`](0718-jajuan-davis-debt-amounts-and-close-verified.md). Only
the total and the direction row change.
