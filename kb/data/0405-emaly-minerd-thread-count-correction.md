+++
id            = "dat:0405-emaly-minerd-thread-count-correction"
layer         = 1
type          = "datum"
title         = "Emaly Minerd thread is 807 messages, not 613: the page's figure is the inbound count only"
claim         = "The page `wiki/people/emaly-minerd.md` repeatedly reports a 613-message thread. The held `corpus/messages.csv` thread for Emaly Minerd's handle is **807 total messages — 194 sent by Dan, 613 inbound from Emaly** — running **2018-09-02 18:28:03 to 2019-08-02 13:22:12 UTC**. The page's figure is exactly the inbound count, relabeled as the thread total; Dan's 194 messages (the interview setup, the drug-addict confrontation, the 'get fucked') are dropped. Same inbound-only labeling defect as the Danny, Del, Ellen, Eric Jester, and Felipe pages in this wave. Corpus page and old-wiki export are text-identical."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread rows counted directly from held corpus/messages.csv by chat_identifier: 807 rows, sender split 194 Me / 613 Emaly, first 2018-09-02 18:28:03 UTC, last 2019-08-02 13:22:12 UTC. 194+613=807."
importance    = 4
tags          = ["people", "corpus", "count-correction", "method-defect"]
created       = "2026-09-09"

[when]
start = "2018-09-02"
end   = "2019-08-02"
+++

## Cross-references

- [`dat:0395`](0395-danny-matthews-thread-count-correction.md),
  [`dat:0398`](0398-del-thread-count-correction.md),
  [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md),
  [`dat:0408`](0408-eric-jester-thread-count-correction.md),
  [`dat:0410`](0410-felipe-thread-count-correction.md) — the same
  inbound-only defect on five more pages, same wave.
- [`dat:0124`](0124-annie-alexis-reunion-emaly-3000-quote.md),
  [`dat:0248`](0248-alexis-arrangement-emaly-account.md) — the $3000
  plaything quote, already covered; not duplicated here.
- [`dat:0406`](0406-emaly-minerd-quotes-verified.md) — the same page's quote
  verification.
