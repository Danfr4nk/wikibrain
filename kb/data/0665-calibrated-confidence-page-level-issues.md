+++
id            = "dat:0665-calibrated-confidence-page-level-issues"
layer         = 1
type          = "datum"
title         = "Calibrated-confidence page: three stale or uncheckable passages flagged against held sources"
claim         = "Three passages on the calibrated-confidence page fail against the held corpus: (1) The Gaps section says the message dump covers 2015–2025 with '2022 and 2026 entirely missing.' The 2022 half is true — the held messages.csv contains zero 2022 records (year counts: 2011:1, 2015:13745, 2016:20279, 2017:17550, 2018:40500, 2019:20166, 2020:6327, 2021:282, 2023:960, 2024:4369, 2025:41203, 2026:26758). The 2026 half is false in the held corpus — 26,758 records — and the page contradicts itself, citing the **2026-02-27** inbound credence in its own corrected table. (2) Two `connections` entries still carry the pre-correction figures — '15 graded non-endpoint values against zero across 503 people' and the 99th-percentile linguistic-profile claim — while the body was corrected to 24 against 1; the page's own frontmatter disagrees with its body. (3) The two calibration-policing quotes ('That's a level of certainty I'm not sure how you've arrived at' on 2022-03-30; the 2022-02-24 casualty-figure objection; and the 2024-11-07 self-audit) are not in the held iMessage corpus — the first two sit in or against the missing 2022 gap, and the 2024-11-07 one verifies only via the twitter-2009+ archive row (2024-11-07 05:16:33 UTC, status 1854392473600004428), where the page's quotation adds a comma after 're-elect' and drops the parenthetical '(less than a week before the debate)' — minor transcription drift."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Year histogram from a Python pass over corpus/messages.csv date_sent values. Policing quotes searched by exact and case-normalised substring in messages.csv (absent); the 2024-11-07 tweet located at corpus__3.txt line 100499-100503 with verbatim text: '> Pretty crazy that even I, someone who was really pessimistic about the probability of a Biden re-elect was still giving him blue wall states in June (less than a week before the debate)'. Connections-section stale figures read at corpus__3.txt lines 20330-20350. The page's own statement 'The 2022 hole is partly filled' (twitter archive has 158 originals in 2022) is consistent with the iMessage gap being real."
importance    = 3
tags          = ["calibration", "old-wiki", "corpus", "internal-inconsistency", "gap"]
created       = "2026-09-09"
+++

## Reading the pattern

This page was corrected once, carefully, on 2026-08-23 — and the
correction stopped at the body. The frontmatter connections, the Gaps
section and one quoted tweet still carry the pre-correction world. That
is a maintenance failure, not a measurement failure: every one of these
issues is checkable from the same sources the page already cites. The
2026-contradiction is the sharpest — a page cannot cite a 2026 message
and claim 2026 is entirely missing in the same body.

## What remains genuinely open

The 2022-03-30 and 2022-02-24 policing quotes are cross-page consistent
(the matt-dunn/2022 page repeats both with the same dates at corpus line
114658) but their primary source is not held here — they survive on
cross-page attestation only. Whether the 2022 iMessage gap is a true
export hole or a device/account gap is not determinable from the held
corpus.
