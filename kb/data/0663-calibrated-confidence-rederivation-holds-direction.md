+++
id            = "dat:0663-calibrated-confidence-rederivation-holds-direction"
layer         = 1
type          = "datum"
title         = "Calibrated-confidence re-derivation: the 24-vs-1 asymmetry survives an independent re-scan in direction and magnitude"
claim         = "The calibrated-confidence page's 2026-08-23 correction — original counts (43 outbound / 2 inbound, 15 graded / 0) do not reproduce; under a strict symmetric first-person-credence filter the finding is 24 graded non-endpoint credences outbound against 1 genuine inbound (a 2025-09-04 tapback reading *\"Loved '98% sure that's because it's either old camera or…'\"* quotes Dan's own message back at him and is excluded), a rate ratio near 22x — survives independent verification of its key parts from held sources: (1) an independent regex scan of the held 192,140-row messages.csv finds 48 strict / 18 graded outbound vs 5 / 2 inbound — same direction, same rough magnitude, differing in exact number because dedup and exclusion rules differ; (2) the tapback is in the held corpus at **2025-09-04 18:19:28 UTC**, quoting Dan's own outbound message from 18:18:06 UTC the same day; (3) the one genuine inbound graded credence is in the held corpus at **2026-02-27 17:54:01 UTC** from phloxenheim@gmail.com: *\"We talked yesterday and she said that she needs space which I'm 99% sure that I'm fucked.\"* (4) sample quoted credences verify verbatim: *\"I'm 90% sure I will have z when she does\"* (2016-01-12 23:07:50 UTC), *\"I feel 0% confident\"* (2018-01-28 01:54:23 UTC — page said 'January 2018'), *\"I'm 99.9999999999999999% sure you don't\"* (2017-11-06 06:49:17 UTC)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 20317 (316 lines); whole.txt carries the same page at line 14050. Independent scan: Python regex for N% adjacent to sure/certain/confident/positive/convinced and 'there's an N% chance' over corpus/messages.csv (dedupe on sender+date+text): 99,309 sent / 91,919 received messages; 48 strict / 18 graded sent; 5 strict / 2 graded received; received graded values {'98','99'}. The page's stricter exclusion of population shares and cited statistics accounts for part of the gap; my looser dedup for the rest. Tapback and inbound quote located by exact-substring search in messages.csv (timestamps are the CSV's UTC date_sent). Sample quotes located by exact-substring search, quoted verbatim including the page's stated month."
importance    = 4
tags          = ["calibration", "old-wiki", "corpus", "quote-verification", "measurement"]
created       = "2026-09-09"

[when]
start = "2015-01-01"
end   = "2026-02-27"
+++

## Why the numbers differ and why that does not matter

The page is unusually honest about its own arithmetic: the original
rederivation: the original measurement does not reproduce, and it says so on the page. My scan is a
third set of numbers, not a referee's — filters and dedup keys differ.
What reproduces across all three runs is the shape: outbound graded
credences in the high teens to mid-twenties, inbound in the ones, with
roughly half the inbound 'instances' being quotes of Dan himself. A
finding whose exact count depends on filter tuning but whose direction is
stable across tunings is a real behavioural signature with soft edges,
which is exactly what the page now claims.

## What this node does not assert

The calibration (accuracy) of the credences is a separate question —
see [`dat:0664`](0664-calibrated-confidence-n1-calibration-case.md) for
the single scoreable instance. The page's per-year distribution
(2015:1 … 2025:7) and 12-handle spread were not re-run here; the 2022
gap that distribution implies is independently confirmed in
[`dat:0665`](0665-calibrated-confidence-page-level-issues.md).
