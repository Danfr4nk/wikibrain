+++
id            = "dat:0676-john-anderson-thread-unheld"
layer         = 1
type          = "datum"
title         = "John Anderson dealer thread is absent from the held corpus"
claim         = "The john-anderson page describes a 2019 dealer contact (26 messages, May–August 2019, new-phone self-introduction by full name, 'i got a b on me' small buys, a recovered hoverboard-type 'board' from 'Shelby's' trunk, final new-number notice August 1, 2019). None of this is in the held corpus: content-seed searches ('i got a b on me', the Shelby/trunk board story) return zero hits, and the page's sole source — raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — is not held in this repository's raw/ tree. The only held mention of the name is a 2019-10-21 message from another contact asking Dan to 'hit up ur boy John Anderson for me' via Facebook — consistent with Anderson being a known contact, but verifying nothing about the dealer thread. The page's 'knowledge: derived' flag is apt; the derivation's source is unheld."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 60424 (41 lines). Held-corpus checks: case-insensitive substring searches for the page's distinctive quotes returned zero; a full-corpus search for 'john anderson' returned exactly one row (2019-10-21 00:45:57 UTC, from_me=0). The stated source CSV is absent from this repository's raw/ tree."
importance    = 2
tags          = ["john-anderson", "old-wiki", "corpus", "gap", "unverifiable"]
created       = "2026-09-09"

[when]
start = "2019-05-06"
end   = "2019-10-21"
+++

## Note

Small page, thinly sourced by its own account (single unheld CSV,
'knowledge: derived'). There is nothing to correct here — only to mark
the evidentiary basis honestly. If MASTER_MESSAGES_DB_DUMP.csv surfaces,
the 26-message count and the August 1 new-number notice are the first
things to re-run, plus the direction field the page distrusts (cf. the
one-way-count error class in
[`dat:0675`](0675-jim-vrabel-thread-count-direction-correction.md)).
