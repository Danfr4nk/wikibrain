+++
id            = "dat:0664-calibrated-confidence-n1-calibration-case"
layer         = 1
type          = "datum"
title         = "The single scoreable calibration case: a 75% Nemacolin forecast from 2018-08-08 that resolved false"
claim         = "The calibrated-confidence page's calibration test — of 24 strict graded credences only one is resolvable from the corpus — is verified on both sides. The forecast exists in the held corpus: at **2018-08-08 23:19:37 UTC** (19:19 EDT) Dan writes *\"Who said I can't travel, mr. smart caddie man?!?!? I mean I am 75% sure this is my last summer at Nemacolin\"*. The resolution exists on the Nemacolin page: the job ran **April 2016 – November 2019 per his own resume** (source `raw/self/dox-scan/Resume.txt`), i.e. he worked the 2019 season too. A 75% forecast that did not happen. The page's conclusion — n = 1 is not a calibration test, and the habit aims almost entirely at propositions that can never be scored — follows from verified premises."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Forecast located by exact-substring search in corpus/messages.csv; quoted verbatim from the CSV text field (timestamp is the CSV's UTC date_sent). Tenure read from the nemacolin-caddying page at corpus__3.txt lines 120462-120463: 'titled \"Experience Associate – Golf,\" **April 2016 – November 2019** per his resume — borrowing golf shoes for the interview on April 6, 2016.' The job table on another corpus page (line 34191) independently gives 'Apr 2016 – Nov 2019 | 43 months'."
importance    = 4
tags          = ["calibration", "nemacolin", "old-wiki", "corpus", "quote-verification"]
created       = "2026-09-09"

[when]
start = "2018-08-08"
end   = "2019-11-30"
+++

## Why this is the load-bearing node on the page

Everything else on the calibrated-confidence page establishes that Dan
*expresses* graded uncertainty at an unusual rate. This is the only node
that bears on whether the numbers mean anything — and it shows the one
checkable number was wrong. The page does not flinch from that; it
publishes the miss and draws the sharper, less flattering conclusion.
The failure mode is honest: the scale is real, the scorecard is empty.

## Open

The resume itself (`raw/self/dox-scan/Resume.txt`) is cited but not held
in this repository's `raw/` tree, so 'per his own resume' is the
Nemacolin page's attribution, carried here as such. A 2019-season
message placing Dan on the caddie yard would make the falsification
first-party; [`dat:0419`](0419-nemacolin-caddying-held-corroborations.md)
covers 2018 beats only.
