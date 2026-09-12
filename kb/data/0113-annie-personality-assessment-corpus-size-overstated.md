+++
id            = "dat:0113-annie-personality-assessment-corpus-size-overstated"
layer         = 1
type          = "datum"
title         = "Annie personality assessment's '126,683-message corpus' is overstated ~29% against the held corpus"
claim         = "The personality-assessment page states its determination is *\"based on behavioral evidence from her 126,683-message corpus.\"* In the corpus held by this repository, Annie's messages total **97,891** across her three identified handles — +17244346811 (2015–2019): 62,814; +12124702449 (2023–2026): 31,433; annieulmr@aol.com (2016/2018): 3,644 — which matches the operator's own corrected count of **97,768 unique messages** (MEMORY.md) within 0.2%. The 126,683 figure is not replicable from any held source and runs ~29% hot — the same overstatement pattern this repository has already documented for corpus counts (cf. the Tom Maison 2.9x mislabeling; the Annie 97,768-vs-126k+ correction in MEMORY.md)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Corpus page read directly (corpus__3.txt line 49221, 407 lines); the 126,683 figure is in the page's connections claim (\"The forensic assessment of Annie's MBTI and Enneagram types is based on behavioral evidence from her 126,683-message corpus\"). Held-corpus counts via bin/corpus-query --who/--stats on corpus/messages.csv (192,140 messages): +17244346811 = 62,814 (31,635 sent by me, 31,179 received); +12124702449 = 31,433 (17,936/13,497); annieulmr@aol.com = 3,644 (0/3,644). Total 97,891. The 97,768-unique figure is the operator's own curated correction already in MEMORY.md; the 123-message gap is consistent with unique-vs-total dedup. No held source yields 126,683; the page's sources (dox-scan dump + per-thread CSV) are not in raw/."
importance    = 4
tags          = ["counts", "annie-ulmer", "corpus-mismatch", "old-wiki", "overstatement-pattern"]
created       = "2026-09-09"
+++

## What the check confirms

The operator's own corrected count (97,768 unique) is validated against the
held corpus to within 0.2% — the correction in MEMORY.md was right, and the
held corpus is the instrument that proves it. The three-handle decomposition
also incidentally maps Annie's number history: a 724-era number for
2015–2019, an AOL-email channel in 2016/2018, and the 212 number from 2023.

## What it corrects

The page's 126,683 is wrong by ~29,000 messages. This does not touch the
typology determination (ESFP 7w8), which does not depend on the exact N — but
the repository's rule is that documented counts override generated metaphor,
and a ~29% inflation of the evidence base is exactly the class of silent
falsehood the veracity ledger exists to catch. The determination's real
evidence base is ~98k messages, still the largest single-handle corpus in
the repository.
