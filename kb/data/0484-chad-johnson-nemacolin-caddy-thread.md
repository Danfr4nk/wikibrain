+++
id            = "dat:0484-chad-johnson-nemacolin-caddy-thread"
layer         = 1
type          = "datum"
title         = "Chad Johnson: Nemacolin fellow caddy, college student — 42-message thread 2017-05-29 to 2018-06-03, shift coordination via Brad"
claim         = "wiki/people/chad-johnson.md identifies Chad Johnson as a fellow caddy at Nemacolin Woodlands and a college student (references 8am classes, \"out of school in a few weeks\") who overlapped with Dan through the 2017–2018 seasons: 42 messages, 2017-05-29 to 2018-06-03, handle [phone redacted], sourced to raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv. Thread texture: early messages (May–June 2017) are mid-round check-ins; shift coordination relayed via caddy manager Brad Hubeaut — \"Did brad text you yet?\", \"Chad Johnson F2 both rounds\"; a spring-2018 recurring bit asking whether Brad had sent report times and golf-ambition jokes (\"I'm going pro soon!\"); an April 2018 ask whether Chad could live with Dan in town for a month before a summer camp job (outcome undocumented); a November 2017 night out \"hazy enough for Chad to ask what time he'd left and whether he'd 'done anything stupid.'\" Direction is marked \"Received\" throughout and unreliable — read as one-way (Chad to Dan)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 53132 (45 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 46799-46844 verbatim (the corpus snapshot redacts the handle as [phone redacted] where the old-wiki export carries it unredacted — same pattern as dat:0251/0252; the number is not reproduced here). The handle was transiently matched to the held corpus (messages.csv): the same handle appears 94 times there with date range 2017-05-29 20:30:03 (UTC) to 2018-08-24 — the 2017-05-29 start matches the page exactly, and the \"I'm going pro soon!\" quote is verbatim in the held corpus (2018-04-28 23:02:39 UTC, \"You know I always want to play! I'm going pro soon!\", group SMS). The page's 42-message count and 2018-06-03 end date come from MASTER_MESSAGES_DB_DUMP.csv, a different export not held here — the held corpus's 94 rows include group-chat traffic and extend to Aug 2018, which is an export-scope difference, not a contradiction."
importance    = 2
tags          = ["people", "career", "nemacolin", "old-wiki", "testimony", "corroborated"]
created       = "2026-09-09"
+++

## What the check confirms

The corpus copy and the old-wiki export agree verbatim, and the held corpus
independently anchors two things the page claims: the handle's first contact
date (2017-05-29, exact match) and the \"going pro\" joke in Chad's own
words. The Brad-relayed shift coordination (\"Did brad text you yet?\",
\"Chad Johnson F2 both rounds\") is consistent with
[`dat:0252`](0252-brad-hubeaut-caddy-manager.md), which independently
documents Brad Hubeaut as the Nemacolin caddy manager running report-time
dispatch through the same 2017–2018 seasons.

## What it does not confirm

The 42-message count, the 2018-06-03 end date, the April 2018 live-with-Dan
ask, and the November 2017 night-out exchange all come from the
MASTER_MESSAGES_DB_DUMP.csv thread the prior wiki read and this repository
does not hold. The one-way (Chad→Dan) direction read is the page's own
interpretation of an unreliable direction field, carried as attributed.
