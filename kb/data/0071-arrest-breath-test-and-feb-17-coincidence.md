+++
id            = "dat:0071-arrest-breath-test-and-feb-17-coincidence"
layer         = 1
type          = "datum"
title         = "Two unresolved arrest puzzles: the breath-test contradiction and the February 17 triple date"
claim         = "Two contradictions are recorded unresolved on wiki/legal/2015-possession-arrest. (1) Breath testing: the page's earlier form stated Dan consented to a breath search during the stop — a decision he later credited with saving his license, citing a March 2026 message (\"I would have lost mine if I hadn't consented to the breath search when I got arrested\") — while the 2026-08-02 capture states the opposite directly: \"I was never asked to complete field sobriety tests or take a roadside PBT.\" Both are Dan's own testimony, ten years apart; the page's most economical reading is that the 2026 message refers to a chemical test at the barracks rather than roadside testing, which would make both true, but no source states that. Neither the March 2026 message nor the capture's underlying text was located in this repo's raw/ tree or in corpus/messages.csv in this pass. (2) The February 17 coincidence: the date appears three times — the blotter window opens on 2015-02-17, the ARD hearing is dated 2016-02-17, and wiki/self/index gives 2010-02-17 as the Suboxone day-zero. No source read so far explains it; it could be genuine docket-scheduling anniversary or an artifact propagated through earlier passes, and the page flags it as worth a look before any of the three is relied on."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "From the two CONTRADICTION blocks on wiki/legal/2015-possession-arrest.md (corpus__3.txt line ~16600). A fixed-string search of corpus/messages.csv for \"breath search when I got arrested\" and \"consented to the breath search\" returned no match; the March 2026 message is therefore the wiki's transcription, unverified here. The Feb-17 triple is carried as the page records it, with no adjudication attempted."
importance    = 3
tags          = ["legal", "old-wiki", "contradiction", "testimony", "unverified"]
created       = "2026-09-09"
+++

## Why both are filed rather than one

The breath-test contradiction is two testimonies from the same person ten
years apart disagreeing about a roadside procedure — the kind of
disagreement the corpus's own veracity work (stated certainty ≈ 0.25
actual) predicts, and the barracks-chemical-test reconciliation is
explicitly marked as inference. The February-17 triple is a different
species: three dates that may share a cause (docket scheduling) or may
share a propagator (an earlier pass copying a date). Either way it touches
[`dat:0069`](0069-possession-arrest-night-and-blotter.md)'s blotter date
and the Suboxone day-zero that [`dat:0055`](0055-facebook-corroborates-the-2010-maintenance-start.md)
brackets — two load-bearing dates — which is why the page's warning
(\"worth a look before any of the three is relied on\") is preserved here
rather than paraphrased away.
