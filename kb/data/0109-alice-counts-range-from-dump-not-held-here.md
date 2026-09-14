+++
id            = "dat:0109-alice-counts-range-from-dump-not-held-here"
layer         = 1
type          = "datum"
title         = "Alice page's mention counts and date range rest on the dox-scan full dump, which is not held in this repository — and the held corpus disagrees"
claim         = "The Alice page's headline numbers — **66 mentions** of Alice between **2023-10-28 and 2025-07-10**, Otto 31, Claire 257, and the Wednesday-share table (corpus baseline 217,573, 15.1% Wednesday) — are computed from `raw/self/dox-scan/all_imessages_complete_dump.txt` (the full 217,573-record dump), **not held in this repository**. In the corpus that *is* held here (`corpus/messages.csv`, 192,140 messages), word-boundary counts differ materially: **Alice 37** (2025: 19, 2026: 18), **Otto 28** (2025: 5, 2026: 23) — and Alice mentions run through **2026-08-13**, thirteen months past the page's stated end date. The Wednesday-alibi falsification is therefore unreplicated here: the method is sound but the numbers are dump-specific."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:operator-testimony-2026-09-09",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Corpus page read directly (corpus__3.txt line 46906, 135 lines); page frontmatter names its sources as raw/self/dox-scan/all_imessages_complete_dump.txt and raw/self/message-csv/imessage_2124702449_both_all_now.csv — neither is present in raw/ (facebook-threads and the dox-scan dump are gitignored/unfetched). Held-corpus counts via bin/corpus-query with word-boundary regex: \"\\b[Aa]lice\\b\" 37 matches (34 received, 35 from +12124702449 i.e. Annie; latest 2026-08-13 \"Alice woke me\"); \"\\b[Oo]tto\\b\" 28 matches. Note the naive substring search is polluted (\"Otto\" substring-matches \"bottom\": 130 hits), so word-boundary counting is the honest comparison. The page's 66/31/257 counts and the 217,573-record Wednesday table are assertions from the unheld dump — checked as far as this repository allows, not contradicted, but not replicated."
importance    = 4
tags          = ["provenance", "counts", "corpus-mismatch", "old-wiki", "annie-ulmer"]
created       = "2026-09-09"
+++

## What the check confirms

The page is transparent about its source (the dox-scan dump) and the dump is
genuinely a different artefact from this repo's corpus: 217,573 records vs
192,140. Count claims downstream of the dump cannot be adjudicated from here,
and this node records exactly that rather than treating the page's numbers
as repo-verified.

## What the held corpus says anyway

Two observations survive the corpus mismatch and are worth keeping:

1. **The range is stale against the held corpus.** Alice is a live, ongoing
   presence in Annie's messages through August 2026 (haircuts, ballet class,
   gymnastics, \"Dan I swear on Alice and Otto. My most favorite tiny
   humans\" 2026-07-28). Whatever the dox-scan dump's window, the claim that
   the record ends 2025-07-10 does not describe the messages held here.
2. **Otto is roughly right in magnitude** (28 vs 31) while **Alice is not**
   (37 vs 66) — which is the shape you expect when two different message
   pulls cover different threads: per-person counts diverge unevenly, not
   uniformly. That is a coverage fact about the two corpora, not an error
   finding against the page.

## What stays open

The Wednesday-alibi falsification itself. The method (day-of-week share vs
baseline) is checkable and the conclusion (Wednesday least likely for Alice,
well below baseline for Claire) may be exactly right — but it was computed
on records this repository does not hold. Re-running it on the held corpus
or pulling the dox-scan dump would close it.
