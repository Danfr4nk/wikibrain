+++
id            = "dat:1163-menore-held-corpus-verification"
layer         = 1
type          = "datum"
title         = "Menore thread: held-corpus measurements confirm the page's load-bearing figures, with two residues"
claim         = "Direct scan of corpus/messages.csv (held, UTC) on the Menore handle +13476070497 confirms the page's key measurements: **4,413 rows exactly** (page: 4,413 messages); first message **2018-11-05 00:31:21 UTC** — *'Text here bro new number. Is menor. Save this one'* — which is 2018-11-04 19:31 Eastern, confirming the page's Nov 4, 2018 re-entry date; Dan's reply 44 seconds later (00:32:05), confirming the instant-reactivation claim's substance. The 'need 8' correction holds: the exact phrase **`need 8` appears exactly twice** in the thread (page: twice); `need` appears in **16 rows both directions** (page: 11 messages of Dan's sent in the dedicated export — same order of magnitude, differing by direction counting). The closing holds: last rows are **2025-02-21 01:21–01:23 UTC** — *'76 btw 3 n 2av'* then Dan's *'Thanks again for everythin. You guys are the best.'* — which is **2025-02-20 20:21–20:23 Eastern**, confirming the page's 'final delivery completed Feb 20, 2025 at 8:21 PM' to the minute. The identity claims hold: **'el menore'** Dan-sent 2023-10-15 20:35:07 UTC, and the inbound **'Awww menore... do I still see both brothers'** 2021-01-30 23:55:36 UTC — both exactly as the page quotes. **Two residues:** (1) the page's '270 menor mentions' mine (full corpus) versus **36 held hits** for 'menor' — the held slice lacks many threads, so this is a corpus-gap discrepancy, not a falsification; (2) the 2025-07-28 *'even the Dominicans (like menore)'* message has **zero held hits** — Suz's handle +17243228715 has no 2025-07 rows in the held slice, so the quote is unverified here."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python scans of corpus/messages.csv (192,140 rows): handle-scoped row counts, sorted first/last rows, regex counts for '\\bneed 8\\b' (2) and '\\bneed\\b' (16), exact-phrase searches for 'el menore' (1 hit), 'both brothers' (1 hit), 'like menore'/'dominicans' (0 hits), and year-bucketed 'menor' mentions (2018:2, 2019:20, 2020:7, 2021:2, 2023:3, 2024:1, 2026:1 = 36). The page body was read at corpus__3.txt line 63996 (418 lines) and the old-wiki export carries it verbatim. All held timestamps UTC; page dates are Eastern and convert exactly. Third-party phone handle redacted per convention."
importance    = 5
tags          = ["menore", "supply-network", "held-verified", "corpus", "nyc-era"]
created       = "2026-09-10"
+++

## Notes

- The page's deeper measured metrics (99.3% availability, median 6.6-min reply, ~280 arrival-confirmed meetings, 458 request initiations) were computed from the dedicated export `messages_3476070497_all_time.csv`, which is not held in this repository; this node verifies only what the held slice can reach. The held slice reproduces the totals, dates, and quoted texts exactly, which raises the prior on the dedicated-export metrics but does not re-derive them.
- The page's 'second 1,458-day silence is a handle artifact' resolution (third-party mentions inside the dark gap) could not be re-verified: the quoted dark-gap messages ('i texted menore right by carnegie hall' 2023-08-13 etc.) return no held hits, consistent with the held slice missing those threads.
