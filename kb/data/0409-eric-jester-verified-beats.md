+++
id            = "dat:0409-eric-jester-verified-beats"
layer         = 1
type          = "datum"
title         = "Eric Jester beats verified: the $1500 Trinity disclosure, the $5 Venmo bit, and the tweet phrases — with the raw Twitter archive absent"
claim         = "Three iMessage beats on `wiki/people/eric-jester.md` confirm verbatim in the held `corpus/messages.csv`: **2019-04-09 01:25:43 UTC** — Dan says he paid *'$1500 last week'* for Trinity St. Clair to spend exactly one hour with him and Annie; **2025-04-22 20:21:00** — *'Every damn year. And it's always $5. Of course I pay it.'*; **2018-11-17 ~02:40 UTC** — Dunn near Full Sail, sending videos. The tweet-archive side partially confirms: `site/archive/self/twitter/` HTML snapshots carry the page's exact phrases ('People who need to come visit me: @danpolyak @EricJester @JoshBrannan @Woodguts', 'control24 rooms right now. PT1 bitch', 'grim reply i'd get from @ericjester'), and Eric is indeed the second-most-addressed handle in the held HTML. But the raw Twitter archive is absent — the HTML is a prior snapshot — so occurrence counts of '@ericjester' in it cannot be used as tweet counts (synthesis text duplicates the name)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Each iMessage passage located by exact-phrase search in the held 192,140-row corpus/messages.csv and matched to Eric's thread handle; timestamps are the CSV's UTC date_sent values. Tweet phrases located by grep of site/archive/self/twitter/ HTML files; no raw tweet archive exists in raw/."
importance    = 3
tags          = ["people", "corpus", "quote-verification", "twitter", "archive-gap"]
created       = "2026-09-09"

[when]
start = "2018-11-17"
end   = "2025-04-22"
+++

## What this establishes and what it does not

**Established:** the page's money beats are real messages on real dates, and
the tweet phrases are real archived text.

**Not established here:** any tweet *count*. The page's '22 tweets' style
claims depend on a raw archive that is not held; the HTML snapshots cannot
reproduce them.

## Cross-references

- [`dat:0408`](0408-eric-jester-thread-count-correction.md) — the same
  page's count correction.
