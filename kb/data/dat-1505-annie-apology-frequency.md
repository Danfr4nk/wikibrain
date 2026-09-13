+++
id         = "dat:1505-annie-apology-frequency"
layer      = 1
type       = "datum"
title      = "Annie's apology-language frequency across four message exports (2015–2026)"
claim      = "Her apology-language rate roughly tripled over the decade: ~1-2.5 per 100 received messages (2015-2017, PA number) to ~3-5 (2018-2019) to ~4-6 (2025-2026). Within the final year the monthly rate is flat (3.7-5.9/100); composition rotted toward bare 'sorry' (67% of apologies in 2026-Q2 vs ~50% through 2026-Q1). Self-flagellation language outnumbers commitment language 2:1 in apology hits; stated behavioral commitments are logistical trivia. Dan stated the required apology format explicitly in 23 sent messages (Oct 2025-May 2026); her format did not change afterward."
cites      = ["src:annie-apology-pull-20260913"]
confidence = "high"
provenance = "Regex sweep of four message exports, 2026-09-13, by the main agent; direction-filtered to received (hers) except the meta-apology scan (his sent)."
reliability = "primary"
extraction = "Per-thread: +17244346811 (31,122 recv, 2015-11->2018-12): 783 hits, 2.52/100, 147 substantive. +17249204125 (4,805 recv, 2018-12->2020-06): 200 hits, 4.16/100, 68 substantive. 2124702449 Aug2023-Aug2025 (23,707 recv): 694 hits, 2.93/100, 217 substantive. annie_all_time_logs Aug2025-Jun2026 (9,962 recv): 459 hits, 4.61/100, 144 substantive, 163 bare. Monthly 2025-08->2026-06: 2025-08 5.74, 2025-09 5.19, 2025-10 4.29, 2025-11 5.90, 2025-12 3.71 (2,266 msgs, highest volume, lowest rate), 2026-01 4.82, 2026-02 4.49, 2026-03 4.13, 2026-04 4.70, 2026-05 4.73. Self-flagellation hits 12 vs commitment-language hits 6 in the regexed subset; the one behavioral commitment ('I have to fix this. Fix myself. Fix everything. Change everything', 2026-01-21) collapses mid-message into 'I am going to try to sleep.. my head started hurting really bad.' Dan's 23 meta-apology messages include 2025-10-30 ('i don't want or need you to apologize. what i need is to know... whether or not you ACTUALLY and SERIOUSLY want and plan to be together'), 2025-12-01 ('you don't need to apologize for something you're in the middle of doing and could choose at any time to change'), 2026-05-25 ('Stop saying sorry for things you aren't willing to fix')."
tags       = ["annie-ulmer", "apology", "measurement", "2015-2026"]
created    = "2026-09-13"

[when]
start = "2015-11"
end   = "2026-06"
+++

## The numbers

| Thread | Window | Received | Apology hits | Rate |
|---|---|---|---|---|
| +17244346811 (PA#) | 2015-11 → 2018-12 | 31,122 | 783 | 2.52/100 |
| +17249204125 (alt#) | 2018-12 → 2020-06 | 4,805 | 200 | 4.16/100 |
| 2124702449 (NYC#) | 2023-08 → 2025-08 | 23,707 | 694 | 2.93/100 |
| annie_all_time_logs | 2025-08 → 2026-06 | 9,962 | 459 | 4.61/100 |

Trajectory: ~1–2.5/100 (2015–17) → ~3–5 (2018–19) → ~4–6 (2025–26). The alternate-number thread
("logistics, debt, crisis" per the wiki) already ran at 4.16/100 in 2019 — the rate tracks conflict
intensity, not calendar time alone.

## Qualitative trajectory (from the substantive samples)

- 2015–16: incident-specific, affection-embedded ("sorry if I got on your nerves tonight 😔 I love you").
- 2019+: self-flagellation + meta-awareness of repetition ("I was an idiot.. and I regret the things I have done in the past to destroy your trust in me", 2019-02-16).
- 2025–26: existential, identity-level ("I am sorry that I have destroyed everything").

The apologies got bigger in language and emptier in behavioral content.

## Coverage caveat

Pre-2023 attributable data is 2015–2019 plus 2018 fragments; 2020–2022 is thin
(`alulmer28@gmail.com`, 802 msgs, unswept). The 2015–2019 sample (35,927 received) supports the
trajectory; a 2020–2022 fill would tighten the curve.
