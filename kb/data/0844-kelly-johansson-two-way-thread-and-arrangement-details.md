+++
id            = "dat:0844-kelly-johansson-two-way-thread-and-arrangement-details"
layer         = 1
type          = "datum"
title         = "Kelly Johansson: held thread is 129 messages and two-way, not 64 one-way; arrangement quotes verify"
claim         = "The held thread with Kelly Johansson holds **129 messages, 65 from Dan and 64 from the counterparty** — against the page's '64 messages, direction unreliable'. The substantive exchange runs **2019-09-27 12:03:44 UTC to 2019-10-23 16:39:26 UTC**; three additional rows dated 2020-09-23 are garbled/attachment-like noise ('Gimma.xhsncs ;)'), which likely explains a source that capped the range at October 2019. Six content signatures verify verbatim: \\\"1200 is that ok?\\\" at 2019-09-27 22:45:22; \\\"She should take deposits. She id beautiful and that way she isn't out anything\\\" at 2019-09-28 00:40:42; Dan's \\\"got 28 blue chew cialis in the mail yesterday\\\" at 2019-10-06 10:58:34; the full session-script message at 2019-10-06 15:25:13 (includes \\\"when i arrive, we can chat a bit, order dinner...\\\"); \\\"been with over 100 providers\\\" at 2019-10-07 15:38:22; and the $kellyjohansson handle at 2019-10-23 16:39:26. A full residential address appears in the held thread at 2019-09-28 01:01:03 — reproduced in neither this node nor (per the page) the prior wiki's page; noted here as observed-and-redacted."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Corpus page read directly (corpus__3.txt line 61417, 57 lines). Python scan of corpus/messages.csv located the matching thread: 129 rows, direction 65 Dan / 64 counterparty; range 2019-09-27 12:03:44 -> 2020-09-23 14:36:00 UTC, with the last three rows substantive-free. Quoted strings matched verbatim (case/punctuation as held). The page's 'direction unreliable' caveat is resolved by the corpus: direction is reliable, and the exchange is two-way."
importance    = 3
tags          = ["kelly-johansson", "imessage", "thread-metrics", "correction", "corroboration"]
created       = "2026-09-09"

[when]
start = "2019-09-27"
end   = "2019-10-23"
+++

## What this node refuses to repeat

The held thread contains a real residential address, a payment handle, and
an explicit session script. The address is not quoted anywhere in this
repository's nodes (this one included). Amounts that are load-bearing to
the documented exchange ($1200 discussed, $80 elsewhere) are quoted; the
rest of the script's explicit detail is summarized, not transcribed.

## What remains at testimony level

The 'dominatrix in New York', the 'probably over 100 providers' profile
reading, and the October 2019 session's actual outcome (the page hedges
'the thread has no confirmation the session happened') are ungrounded in
the held corpus — present in the page as reported detail, filed here as
uncorroborated.
