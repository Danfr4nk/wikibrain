+++
id            = "dat:0398-del-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Del thread is 158 messages, not 65: the page's figure is the inbound count only"
claim         = "The page `wiki/people/del.md` reports '| Messages | 65 |'. The held `corpus/messages.csv` thread for Del's handle is **158 total messages — 93 sent by Dan, 65 inbound from Del** — running **2019-03-17 16:48:26 to 2019-08-16 21:46:33 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total; Dan's 93 outbound messages (the majority) are dropped. Same inbound-only labeling defect as the Danny, Ellen, Emaly, Eric Jester, and Felipe pages in this wave. Corpus page and old-wiki export are text-identical except handle redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/del.md, '| Messages | 65 |'); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt except handle redaction. Thread rows counted directly from held corpus/messages.csv by chat_identifier: 158 rows, sender split 93 Me / 65 Del, first 2019-03-17 16:48:26 UTC, last 2019-08-16 21:46:33 UTC. 93+65=158."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2019-03-17"
end   = "2019-08-16"
+++

## Cross-references

- [`dat:0395`](0395-danny-matthews-thread-count-correction.md),
  [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md),
  [`dat:0405`](0405-emaly-minerd-thread-count-correction.md),
  [`dat:0408`](0408-eric-jester-thread-count-correction.md),
  [`dat:0410`](0410-felipe-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
- [`dat:0399`](0399-del-verified-quotes.md) — the same page's quote
  verification.
