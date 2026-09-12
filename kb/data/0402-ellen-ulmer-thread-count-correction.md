+++
id            = "dat:0402-ellen-ulmer-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Ellen Ulmer thread is 100 messages, not 63: the page's figure is the inbound count only"
claim         = "The page `wiki/people/ellen-ulmer.md` reports '| Messages | 63 |'. The held `corpus/messages.csv` thread for Ellen Ulmer's handle is **100 total messages — 37 sent by Dan, 63 inbound from Ellen** — running **2017-04-11 23:09:29 to 2026-07-26 11:06:12 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total; Dan's 37 messages — including the crucial July 2026 disclosure message — are dropped from the count. Same inbound-only labeling defect as the Danny, Del, Emaly, Eric Jester, and Felipe pages in this wave. Corpus page and old-wiki export are text-identical except handle redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/ellen-ulmer.md, '| Messages | 63 |'); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt except handle redaction. Thread rows counted directly from held corpus/messages.csv by chat_identifier: 100 rows, sender split 37 Me / 63 Ellen, first 2017-04-11 23:09:29 UTC, last 2026-07-26 11:06:12 UTC. 37+63=100."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2017-04-11"
end   = "2026-07-26"
+++

## Cross-references

- [`dat:0395`](0395-danny-matthews-thread-count-correction.md),
  [`dat:0398`](0398-del-thread-count-correction.md),
  [`dat:0405`](0405-emaly-minerd-thread-count-correction.md),
  [`dat:0408`](0408-eric-jester-thread-count-correction.md),
  [`dat:0410`](0410-felipe-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
- [`dat:0403`](0403-ellen-ulmer-july-2026-disclosure-settled.md) — the July
  2026 message the page's count excludes.
- [`dat:0064`](0064-jay-lauer-overdose-ellen-thread-origin.md) — the thread's
  origin, already covered.
