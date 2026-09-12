+++
id            = "dat:0121-bub-thread-corroborated"
layer         = 1
type          = "datum"
title         = "Bub page: thread and texture anchors confirmed; '86 messages' is the received side of a 252-message thread"
claim         = "The Bub page's texture claims check out against the held corpus: *\"You're the dj after all\"* (2017-04-22 04:23:06, the April 2017 party-DJ coordination) and *\"I used a program called transmac which mounts it as an installation disc copy\"* (2018-01-04 02:39:00, the Mac Pro OS-install tech-support thread) are both verbatim. The thread runs from 2017-04-22, matching the page's date-range start exactly. Count nuance, same pattern as the Bill and Bryan pages: the thread totals **252 messages (166 sent by Dan, 86 received)** — the page's '86 messages' is the received side, and the page itself flags direction as unreliable in its export ('marked Received throughout — read as two-way'). So the 'low-intensity but long-running' characterization understates the actual volume by ~3x: this is a genuinely reciprocal thread (Dan sent nearly twice what he received), which the page's 'evenly reciprocal' prose gets right even as its count shows only half the conversation. Handle withheld per the third-party-identifier policy."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page read directly (corpus__3.txt line 52976, ~49 lines). bin/corpus-query on corpus/messages.csv: \"you're the dj after all\" → 1 hit 2017-04-22 04:23:06; 'TransMac' → 1 hit 2018-01-04 02:39:00; --who stats → 252 matches, 166 sent / 86 received. The page's 2020-10-07 end date and the gaming-register claims were not separately checked."
importance    = 3
tags          = ["bub", "corroborated-partial", "counts", "imessage", "old-wiki"]
created       = "2026-09-09"
+++

## The recurring count pattern

This is now the third stub page in this batch (Bill: 21 of 38; Bryan: 3
claimed, 2 held; Bub: 86 of 252) whose headline message count reflects
only the received side of its export. All three pages carry a
direction-reliability caveat — but the caveat does not fix the count a
reader takes away. For stub contacts the practical effect is systematic
understatement of Dan's own participation: on the Bub thread Dan is the
*more* active party (166 vs 86), which inverts the 'low-intensity'
impression the count alone gives. Any downstream use of stub-page counts
for contact-volume analysis (e.g. contact-gini) should re-derive from
the held corpus rather than quoting page counts.
