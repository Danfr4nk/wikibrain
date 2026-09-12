+++
id         = "dat:0542-2025-collapse-volume-replicated-anomaly-flagged"
layer      = 1
type       = "datum"
title         = "2025 Collapse: the 41,278 whole-corpus figure replicates within 0.2%; the annie-log keyword counts sit oddly against the held corpus"
claim      = "The archived 2025-collapse page's two hard whole-corpus volume claims replicate against the held corpus almost exactly. The connections claim of a **41,278-message 2025 whole-corpus total** measures **41,203** here — 75 rows, 0.18% off. The same claim's \"within 2% of the 2018 peak\" framing also holds: 2025 (41,203) vs 2018 (40,500) differs by **1.74%**. The page's data-profile figures — 12,255 messages in 2025 and a 4,657 December peak, *\"eli\"* 388 mentions, *\"love you\"* 541, *\"goodbye\"* 110 / *\"lying\"* 150 — are sourced to `raw/self/message-csv/annie_all_time_logs.csv` (23k-row terminal extract), which is not held in this repository's `raw/` tree, and cannot be re-derived. Two flags from the comparison that *can* be made: (a) the whole-corpus month shape for 2025 peaks in **September (18,605 rows)**, then October (8,428) and December (6,297) — so the page's December peak describes the Annie-thread subset, not the whole corpus; (b) the page's annie-log *\"goodbye\"* (110) and *\"lying\"* (150) counts **exceed** the whole-corpus 2025 counts for those tokens (44 and 81) under case-insensitive substring matching — a subset count larger than its whole is impossible under identical matching rules, so the page's keyword counts must come from different matching rules (token vs message counts, different text normalization) or a different export; they are filed as the page's, not reconciled. Relayed from unheld sources and not re-derived: the ~$139K-sent / ~$16–20K-received financial asymmetry (operator payment-app screenshots, 2026-07-15), the 259-event LIFE calendar peak with Aug/Sep/Oct distribution, the 187:4 love-to-request ratio and moral-debt pivots (already corrected 2026-07-18 on the Annie page), and the Gemini-concept injections (Bifurcated Daily OS, Decoupling/Grounding Paradox) sourced to the unheld Gemini dox files."
cites      = ["src:imessage-corpus-2026",
              "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence = "high"
extraction = "Page body read from corpus__3.txt line 118060 (92 lines, status: archived); the page is present in raw/old-wiki-export-2026-09-04/whole.txt (not line-verified). Whole-corpus year histogram and 2025 month histogram computed directly over corpus/messages.csv (192,140 rows) 2026-09-09; keyword counts over 2025 rows only, case-insensitive substring match. annie_all_time_logs.csv, LIFE_EVENTS_CALENDAR.md, the Gemini dox files, and the payment-app screenshots are absent from this repository's raw/ tree (which holds only old-wiki-export-2026-09-04, facebook-threads/MANIFEST.json, and the morgantown-call materials). The 0.18% row gap is consistent with export-coverage differences, not contradiction."
importance = 4
tags       = ["timeline", "corpus-verification", "2025-collapse", "anomaly"]
created    = "2026-09-09"

[when]
start = "2025-01-01"
end   = "2025-12-31"
+++

## What the check confirms

The page's headline volume claim is as good as independent replication
gets: two different exports, 75 rows apart on 41,000. The "2025 matched
2018 for raw output" framing — the data-profile line the period hangs on —
survives at 1.74%.

## What it does not confirm

The month shape. Whoever reads this page for "when did 2025 peak" gets
December; the whole corpus says September. Both can be true (the Annie
thread and the whole corpus can peak in different months), but the page
does not say that, and the December framing sits inside a data profile
explicitly sourced to the Annie-only extract. The keyword-count inversion
is the sharper warning: treat every keyword frequency on this page as
matching-rule-dependent until the extract behind it is held.
