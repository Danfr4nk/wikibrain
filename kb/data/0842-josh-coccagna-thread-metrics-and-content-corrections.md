+++
id            = "dat:0842-josh-coccagna-thread-metrics-and-content-corrections"
layer         = 1
type          = "datum"
title         = "Josh Coccagna: held thread is 77 messages and two-way (45 Dan / 32 Josh), not 32 one-way; five content signatures verify"
claim         = "The held iMessage thread with Josh Coccagna holds **77 messages, 45 from Dan and 32 from the counterparty**, spanning **2017-04-11 21:50:30 UTC to 2019-02-01 13:27:20 UTC** — correcting the page's '32 messages, one-way, first contact 2017-04-12' (the April-11 date is 17:50 EDT on the 11th; the page appears to have read an Eastern-dated source and counted only outbound rows). Five content signatures verify verbatim: the golf-swing tip at **2017-04-12 23:51:13 UTC** (\\\"Don't let your weight get that far to your right side. Think about keeping it on the inside sole of your foot.\\\"); the Mountain Course / new clubhouse opening in June 2017; the **2018-05-21** note that Laurel Valley hosted a Ryder Cup; the November 2017 intern reference-check for Ian Krause; and the **2019-02-01** DMT exchange — $80 per cart, mailed three last summer, sent Jerad one, will remember Dan at the next re-up. The DMT exchange alone falsifies the page's 'one-way' characterization: it is a two-sided purchase arrangement."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Corpus page read directly (corpus__3.txt line 61144, 41 lines). Python scan of corpus/messages.csv located the matching thread (chat handle Josh's number): 77 rows, direction counts 45/32, sorted date range 2017-04-11 21:50:30 -> 2019-02-01 13:27:20 UTC. Swing-tip text matched character-for-character at 2017-04-12 23:51:13 UTC. Laurel Valley/Ryder Cup at 2018-05-21. DMT thread on 2019-02-01 (\\'$80/cart\\', 'mailed 3 last summer', 'sent jerad one')."
importance    = 3
tags          = ["josh-coccagna", "imessage", "thread-metrics", "correction", "corroboration"]
created       = "2026-09-09"

[when]
start = "2017-04-11"
end   = "2019-02-01"
+++

## Why the count error happened

The page's '32 messages' is exactly the held corpus's counterparty-side
count (32). The likely chain: a source that reported outbound-only rows was
read as the whole thread, and 'one-way' was asserted from the same
partial read. The retained record actually shows a genuine two-way
professional channel — swing advice, course intel, a reference check, and a
drug deal.

## What remains untested

The page's source claim ('imessage export 2017, phone chat id') and the
assertion that this is Josh Coccagna of Nemacolin Golf Instruction are
old-wiki testimony; the held corpus holds the phone handle but not the
identity. Not contested, just not independently established here.
