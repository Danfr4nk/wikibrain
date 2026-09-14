+++
id            = "dat:0395-danny-matthews-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Danny Matthews thread is 818 messages, not 349: the page's figure is the inbound count only"
claim         = "The page `wiki/people/danny-matthews.md` reports '| Messages | 349 |'. The held `corpus/messages.csv` thread for Danny Matthews's handle is **818 total messages — 469 sent by Dan, 349 inbound from Danny** — running **2018-02-16 23:23:17 to 2024-12-26 19:43:20 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total; Dan's own half of the conversation (more than half the thread) is dropped. This is the same inbound-only labeling defect found on the Del, Ellen, Emaly, Eric Jester, and Felipe pages in this wave. Corpus page and old-wiki export are text-identical on the page's other content."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/danny-matthews.md, '| Messages | 349 |'); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt except handle redaction. Thread rows counted directly from held corpus/messages.csv by chat_identifier: 818 rows, sender split 469 Me / 349 Danny, first 2018-02-16 23:23:17 UTC, last 2024-12-26 19:43:20 UTC. 469+349=818."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2018-02-16"
end   = "2024-12-26"
+++

## Why it matters

Every quantitative claim built on these thread counts — message shares,
frequency analyses, 'how much they talked' — is wrong by the same margin on
six pages in this wave. The 349 is a real number (Danny's inbound messages)
with a wrong label. Prefer '818 messages (469 Dan, 349 Danny)' and treat any
analysis that used 349 as the total as needing recomputation.

## Cross-references

- [`dat:0398`](0398-del-thread-count-correction.md),
  [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md),
  [`dat:0405`](0405-emaly-minerd-thread-count-correction.md),
  [`dat:0408`](0408-eric-jester-thread-count-correction.md),
  [`dat:0410`](0410-felipe-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
