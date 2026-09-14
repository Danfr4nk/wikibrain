+++
id            = "dat:0757-linguistic-profile-readability-correction-corroborated"
layer         = 1
type          = "datum"
title         = "Linguistic Profile: the page's own retraction of its lexical-diversity/readability headlines is directionally confirmed in the held corpus"
claim         = "The Linguistic Profile page's CORRECTED [2026-08-23] block — retracting 'post-graduate readability' and '95th/99th-percentile lexical diversity' (traced to commissioned stylometric analyses with no control group), replacing them with Flesch-Kincaid 2.08 (2015–19) / 4.00 (2026) and a 2025–26 type-token ratio of 0.0509 against interlocutors' 0.0544 on equal 200,000-token samples — is corroborated in direction by the held corpus: on equal 200,000-token samples from 2025–26 messages.csv text, Dan's type-token ratio is 0.0478 against his interlocutors' 0.0526 (his below theirs on the same tokenizer). The page states what survives is syntactic complexity (10.83 vs 5.62 words/sentence in 2026, 1.93x), which was not re-run here. The commissioned-provenance caveat the page draws (the-commissioned-self) stands: the percentile claims were never computed against a real comparison group. Note the correction's source CSV (imessage_export_deep_20260813.csv, 183,787 rows) is not held here, so exact-number agreement is not expected; direction agreement is what this node establishes."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page wiki/mind/profile/linguistic-profile.md read at corpus__3.txt line 25859 (251 lines). Recomputation: direct Python scan of corpus/messages.csv, 2025–2026 rows with text, tokenizer [a-zA-Z']+, seeded 200,000-token shuffle samples per side (seeds 1/2). Page's own recomputation method used imessage_export_deep_20260813.csv with a different tokenizer; numbers differ, direction matches."
importance    = 4
tags          = ["personality-profile", "measurement", "correction", "corroborated-primary"]
created       = "2026-09-09"
+++

## What this establishes

The page's retraction is not merely self-reported: the corrected direction
(his 2025–26 text is marginally *less* lexically diverse than the people
answering him) reproduces from the held export on an equal-sample basis.
The unreplaced claims — 9,282 ALL-CAPS instances, 1,661 ellipses, the
6,847/5,522/1,971 just/like/even counts — were not re-run here and stay
page-attributed. The insult-batch finding (2026-08-26, vocabulary-lexicon)
is explicitly flagged by the page itself as 'words selected as pleasing,
not words observed in the corpus' and stays at that weight.
