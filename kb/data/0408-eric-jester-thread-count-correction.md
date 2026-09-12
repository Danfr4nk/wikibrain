+++
id            = "dat:0408-eric-jester-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Eric Jester thread is 237 messages, not 103: the page's figure is the inbound count only"
claim         = "The page `wiki/people/eric-jester.md` reports '| Messages | 103 |'. The held `corpus/messages.csv` thread for Eric Jester's handle is **237 total messages — 134 sent by Dan, 103 inbound from Eric** — running **2017-05-08 04:13:42 to 2025-08-16 02:11:27 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total; Dan's 134 outbound messages — including the $1500 Trinity St. Clair disclosure — are dropped. Same inbound-only labeling defect as the Danny, Del, Ellen, Emaly, and Felipe pages in this wave. Corpus page and old-wiki export are text-identical except handle redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/eric-jester.md, '| Messages | 103 |'); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt except handle redaction. Thread rows counted directly from held corpus/messages.csv by chat_identifier: 237 rows, sender split 134 Me / 103 Eric, first 2017-05-08 04:13:42 UTC, last 2025-08-16 02:11:27 UTC. 134+103=237."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2017-05-08"
end   = "2025-08-16"
+++

## Cross-references

- [`dat:0395`](0395-danny-matthews-thread-count-correction.md),
  [`dat:0398`](0398-del-thread-count-correction.md),
  [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md),
  [`dat:0405`](0405-emaly-minerd-thread-count-correction.md),
  [`dat:0410`](0410-felipe-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
- [`dat:0409`](0409-eric-jester-verified-beats.md) — the same page's
  verified beats.
