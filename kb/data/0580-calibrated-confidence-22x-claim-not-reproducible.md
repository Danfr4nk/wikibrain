+++
id            = "dat:0580-calibrated-confidence-22x-claim-not-reproducible"
layer         = 1
type          = "datum"
title         = "Challenge: the 'graded numeric confidence at 22x the rate, every year 2015–2025' claim is not reproducible on the held corpus"
claim         = "The forensic-method page asserts that 'graded numeric confidence appears in Dan's casual SMS in **every year from 2015 to 2025**, at **22x the rate** of the 503 people texting him, eight years before the AI-collaboration era could have taught it to him.' Direct scans of the held corpus do not reproduce any part of this except its direction: (1) **2022 is entirely absent** — `corpus/messages.csv` holds **zero rows dated 2022** from any sender, so 'every year 2015–2025' is false on held data; (2) with a strict definition (non-100 numeric confidence + explicit confidence vocabulary), the operator has **4 instances** across the decade and his contacts have **0** — directionally consistent ('he does it, they don't') but a ratio of 4:0, not 22x, and a thin base; (3) with a broad definition (any %/decimal with confidence context), the operator rate is 3.55/1000 vs contacts 3.27/1000 — a ratio of **1.09x**; (4) of the 4 strict instances, only two are pre-AI-era (2019-02-01 '0.01% chance', 2025-01-21 '0.0000001% Probability'); the other two quote Gemini-era scores ('9 out of 10', '8 out of 10 chance'). The claim's method is unknown — it may rest on a fuller corpus or a different detector — but as stated it is not checkable here and its two hard numbers fail."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Three direct Python CSV scans of corpus/messages.csv (192,140 held records), restricted to 2015–2025. Strict pattern: \\b(0.\\d+|[1-9]\\d?\\s*%|[1-9]\\s*/\\s*10|[1-9]\\s+out of 10)\\b plus confidence vocabulary (confiden|sure|certain|likely|probab|odds|chance|bet) → 4 operator rows (2019-02-01 22:07:48 'And for clarity - there's a 0.01% chance that the even would conclude with head'; 2025-01-21 3:03:47 '0.0000001% Probability that works'; 2025-09-01 22:42:29 'gemini literally scored both and you got a 9 out of 10….'; 2025-10-28 8:02:36 'that's a 8 out of 10 chance you're walking out with a nazi tattoo'), 0 contact rows. Broad pattern (any \\d+%|0.\\d+|N out of 10|N/10 with confidence context) → operator 295/83,098 (3.55 per 1000), contacts 269/82,283 (3.27 per 1000), ratio 1.09x. Year-coverage scan: operator messages exist in 2015–2021, 2023–2025; rows dated 2022 = 0 (all senders). The 503-handle figure matches MEMORY's full-corpus record count and is not disputed."
importance    = 4
tags          = ["forensic-method", "imessage", "challenge", "statistics", "calibrated-confidence"]
created       = "2026-09-09"
+++

## What the check does and does not do

It does not refute the underlying disposition: four strict instances to
zero is real direction, and the pre-2024 instances ('0.01% chance' in
2019) do predate the AI-collaboration era. What it does is hold the
page's two hard numbers — **22x** and **every year 2015–2025** — to the
held corpus, and both fail there. The honest reading: the claim was
computed on a corpus this repository does not hold (the old wiki's
pipeline ran on chat.db extracts and the facebook export, neither held
here), or with a detector this check does not replicate. Either way it
cannot be cited as a verified corpus finding. A future worker with the
full chat.db should re-run the exact statistic before the '22x' number
appears anywhere downstream.

## Note on method transparency

My own detector is described above so the result is itself checkable —
the failure mode being documented (pattern-choice dependence) is the
reason the claim must stay marked unverified rather than promoted to
refuted.
