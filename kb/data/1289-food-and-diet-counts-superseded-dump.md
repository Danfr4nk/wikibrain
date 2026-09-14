+++
id            = "dat:1289-food-and-diet-counts-superseded-dump"
layer         = 1
type          = "datum"
title         = "Food-and-diet page's lexical counts were run on the superseded 217k-row dump; held-slice re-run roughly halves them"
claim         = "wiki/interests/food-and-diet.md tabulates lexical counts from a ~217,000-row message dump: `food` 968, `eat` 650, `pizza` 189, `hungry` 237, `restaurant` 101. Re-run against the held corpus (corpus/messages.csv, 192,140 rows, whole-word case-insensitive fixed patterns): `food` 469, `eat` 411, `pizza` 162, `hungry` 125, `restaurant` 28 — plus `mcdonalds` 20, `chipotle` 8, `wendy` 26, `taco bell` 15. The page's absolute counts cannot be copied into the repository; its qualitative finding (food out-mentions music while the curated 2,016-entry FAVS record holds zero food entries, and only 6 evaluative hits against food nouns) remains the page's own testimony from unheld sources (FAVS MASTERLIST.csv, the 29 MB dump). The page itself flags the counts as lexical-not-semantic and notes the dump ends around August 2025, so the 'no evaluation' claim is weakest for 2026. The composition-regime claims (absolute plating rules, the 2026-08-02 correction from the floor to the ceiling of the scale) come from a capture not held in this repository and are relayed as the page's testimony, not verified."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
measurement   = true
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 1 of wave6.json w28 assignment (25-page span) and raw/old-wiki-export-2026-09-04/whole.txt. Held counts by whole-word case-insensitive regex over the text column of corpus/messages.csv. All held timestamps UTC; page's dump dates in Eastern per wave brief."
importance    = 2
tags          = ["food", "interests", "old-wiki", "corpus", "measurement", "testimony"]
created       = "2026-09-10"
+++

## Why this page gets a node

The page's finding is real only at the testimony level: its numbers come from a
dump this repository does not hold, so carrying the absolute counts forward
would freeze another system's census as fact. The node records both the page's
numbers and the held-slice equivalents so the two cannot be silently confused.
