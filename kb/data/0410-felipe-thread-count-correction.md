+++
id            = "dat:0410-felipe-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Felipe thread is 142 messages, not 77: the page's figure is the inbound count only"
claim         = "The page `wiki/people/felipe.md` reports '77 messages at [phone redacted], August 2023 – August 2024'. The held `corpus/messages.csv` thread for Felipe's handle is **142 total messages — 65 sent by Dan, 77 inbound from Felipe** — running **2023-08-11 19:37:02 to 2024-08-22 02:37:12 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total. The date range survives: the last message converts to August 21, 2024 EDT, matching the page's end date. Same inbound-only labeling defect as the Danny, Del, Ellen, Emaly, and Eric Jester pages in this wave. Corpus page and old-wiki export are text-identical except handle redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread rows counted directly from held corpus/messages.csv by chat_identifier: 142 rows, sender split 65 Me / 77 Felipe, first 2023-08-11 19:37:02 UTC, last 2024-08-22 02:37:12 UTC (= 2024-08-21 22:37 EDT). 65+77=142."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2023-08-11"
end   = "2024-08-22"
+++

## Cross-references

- [`dat:0395`](0395-danny-matthews-thread-count-correction.md),
  [`dat:0398`](0398-del-thread-count-correction.md),
  [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md),
  [`dat:0405`](0405-emaly-minerd-thread-count-correction.md),
  [`dat:0408`](0408-eric-jester-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
- [`dat:0411`](0411-felipe-unheld-stories.md) — the page's claims that do not
  corroborate from held messages.
