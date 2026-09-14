+++
id            = "dat:0352-christian-hanson-thread-two-sided-corrections"
layer         = 1
type          = "datum"
title         = "Christian Hanson: held corpus has the full two-sided thread (136 messages), and the page misquotes 'on the water'"
claim         = "Christian Hanson — retired NHL forward (Toronto Maple Leafs), son of Dave 'Hanson Brothers' Hanson of *Slap Shot* — is identified correctly by the page; the identity is corroborated by public records (AP/Sportsnet 2009-09-12: first NHL goal 'by the son of one of the notorious Hanson brothers'; Bleacher Report: 'Hanson is the son of Dave Hanson, one of the famed \"Hanson Brothers\"'; Wikipedia: his career 'included time with the Toronto Maple Leafs'). Against the held iMessage corpus the page needs three corrections. (1) The thread is **two-sided and 136 messages**, not one-way and 66: 66 inbound from Christian, 70 outbound from Dan, 2017-07-11 to 2018-06-09 — the page's '66 messages' and its 'Direction: Unreliable in this export (marked \"Received\" throughout) — read as one-way' describe only the fragmentary MASTER_MESSAGES_DB_DUMP export; the held corpus supersedes it with both directions. (2) The Christmas message does **not** say he bought property 'on the water': verbatim, 2017-12-18 — *\"Merry Christmas, you 82 shooter! All is great, hoping for the same with you. I finally bought a place on property so next summer will be a blast!\"* — 'on property' (Nemacolin's grounds); no message in the thread mentions water. (3) The referenced 'Vince' is **Vince Trocheck**: Dan's 2017-07-11 message reads *\"hey dude! hope all is good. i caddied for vince trocheck today, he was super fun and said you guys were boys\"*. Also verified verbatim: the INTV crypto line (2017-12-18, *\"I have a buddy who has been researching like crazy and actually dove in at the open today on INTV and is riding high at the moment.\"*) and the final message (2018-06-09, *\"Beauty. I actually got a membership this year so we're good to go any time you want!\"*)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 53239 (52 lines). Old-wiki corroboration at raw/old-wiki-export-2026-09-04/whole.txt lines 46922-46934 (the same page) and 7212 (golf page: 'NHL forward Christian Hanson, a Nemacolin regular Dan both caddied for and played rounds with through 2017–18'). Held-corpus counts from corpus/messages.csv: 136 unique rows keyed on the thread handle ([phone redacted] per corpus convention), 70 with sender 'Me' and 66 with the Christian handle, min 2017-07-11 20:44:51 UTC, max 2018-06-09 14:00:32 UTC (same local dates; no displacement). Verbatim messages read from corpus/messages.csv and bin/corpus-query. Identity checked against public records via web search (Sportsnet/AP; Bleacher Report; Wikipedia Christian Hanson/David Hanson pages) — web corroboration only, no src id invented. PRIVACY NOTE: the old-wiki export carries the thread's phone handle unredacted (whole.txt lines 46934, 106374) where the corpus page redacts it; it is not reproduced here. bin/corpus-query prints the unredacted handle in its transcript headers — a redaction-convention gap worth fixing in the tool."
importance    = 3
tags          = ["people", "christian-hanson", "nemacolin", "correction", "corroboration", "privacy"]
created       = "2026-09-09"

[when]
start = "2017-07-11"
end   = "2018-06-09"
+++

## What the check confirms

The person is correctly identified, the relationship (golf regular Dan
caddied for and played with through 2017–18) matches the corpus record,
the date range matches to the day, and three quoted/paraphrased details
check out verbatim. The first message of the thread anchors the
relationship's start: Dan had caddied for Trocheck, who said he and
Christian were 'boys'.

## What it corrects

The page was built from a one-sided fragment export and its metadata
guesses fossilized that limitation: '66 messages' and 'read as one-way'.
The held corpus has Dan's 70 outbound messages that the fragment export
lacked, doubling the thread. The 'on the water' paraphrase is the small
classic — a one-word drift ('property' → 'water') that changes the
meaning from 'bought into Nemacolin' to 'bought a lake house'. Filed as a
page-level correction to apply on the next wiki pass.
