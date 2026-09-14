+++
id            = "dat:0673-jay-lauer-direction-and-count-corrections"
layer         = 1
type          = "datum"
title         = "Jay Lauer page: the 11:07 message runs Annie-to-Dan, and the thread is 212 messages, not 116"
claim         = "Two corrections to the jay-lauer page (and to [`dat:0064`](0064-jay-lauer-overdose-april-2017.md), which repeats the first): (1) **Direction.** The page's April-11 table lists 11:07 → Annie: *\"I'm literally in disbelief over jay.. i dont know what to even think.\"* The held corpus has it at **2017-04-11 15:07:01 UTC** (11:07 EDT) with **from_me=0** in the Annie thread — it is Annie telling Dan, not Dan telling Annie. The conversational flow confirms it: it sits between Dan's work texts ('On 9', 'Love this adderall') and Annie's replies ('Now get home', 'Someone was banging on the door'). 'Dan spent April 11 telling four different people' is therefore wrong; the outbound death-notices that day are three (Lindsay 14:44, Rick 18:07, Ellen 19:09), plus Annie telling him at 11:07. (2) **Count.** The metric table says 116 messages with the note 'Direction field: Marked \"Received\" throughout; unreliable — read as two-way.' The held corpus distinguishes directions cleanly: **212 messages** — 116 received from the Jay handle, 96 sent by Dan — spanning 2016-12-24 01:17:47 UTC (2016-12-23 20:17 EST, so the page's 12-23 start is right in local time) to 2017-02-11 17:48:28 UTC, ending on the unanswered 'Yo.' The 116 is the received half only; a table that says 'read as two-way' should carry 212."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread located in corpus/messages.csv via 'Betherin controls all the money' (212 rows; handle withheld per redaction convention). Direction of the 11:07 message read from the CSV is_from_me field (0) and verified against surrounding thread context in the Annie 1:1 (62,788 messages). Lindsay message verified at 2017-04-11 18:44:17 UTC from_me=1 ('Did u hear about jay?'). All timestamps are the CSV's UTC date_sent; EDT conversions verified for April (UTC-4)."
importance    = 4
tags          = ["jay-lauer", "old-wiki", "corpus", "correction", "direction-error"]
created       = "2026-09-09"

[when]
start = "2016-12-23"
end   = "2017-04-11"
+++

## What survives

The dating conclusion (April 10 or 11, 2017) is unaffected — it never
depended on the 11:07 direction. The Ellen condolence at 19:09
(**2017-04-11 23:09 UTC**, from_me=1, first message of the Ellen thread),
Ellen's reply that night (*'I appreciate the offer and will keep it in
mind as things progress — especially with B. E.'*, 2017-04-12 01:16 UTC
from her handle), Dan's 20:48 message (**2017-04-12 00:48 UTC**,
from_me=1), and the next-evening *'all this stuff about jay just reminds
me how important it is to protect us'* (**2017-04-12 23:47 UTC**,
from_me=1) all verify exactly with correct directions. The thread's
texture quotes ('Betherin controls all the money', the unanswered 'Yo')
are in the held corpus verbatim.

## The mechanism of the error

The page's source table presumably marked the 11:07 row by thread
membership (the Annie conversation) rather than by sender, and the
'four people at four levels of candour' framing made Dan-the-teller the
natural misreading. dat:0064 inherited it without re-checking the
direction field. The 116-count error is the same class: the page noticed
the direction field looked wrong ('unreliable') and then kept the
received-only count anyway instead of counting both sides.
