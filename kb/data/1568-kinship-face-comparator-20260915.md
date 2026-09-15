+++
id         = "dat:1568-kinship-face-comparator-20260915"
layer      = 1
type       = "datum"
title      = "Kinship face-comparison tool commissioned from sibling-resemblance literature"
claim      = "On 2026-09-15 (09:00-09:03Z) Dan asked whether research exists on detecting sibling relatedness from faces, Sammy summarized the literature (Hoskens et al. 2021: cosine similarity on ArcFace embeddings best for sibling matching; Griffin JoV), and at 09:02:10Z Dan commissioned a tool. Sammy built ~/workspace/kinship/kinship.py: compares the largest face in each of two photos via InsightFace buffalo_l ArcFace embeddings, cosine similarity to verdict + confidence; confidence is an explicitly heuristic logistic (center 0.30, slope 11), NOT trained on sibling data — a resemblance meter, not a test. Smoke tests (per Sammy's in-chat report): Dan-vs-Dan 0.61 with same-person warning fired, Dan-vs-Annie 0.03, Annie-vs-Alexis -0.03."
cites      = ["src:sammy-chat-transcript-20260915-1140"]
confidence = "moderate"
reliability = "primary"
extraction = "Contemporaneous chat 2026-09-15T09:00:37Z-09:03:41Z, batch 20260915-1140; Sammy's in-chat report, code not independently verified in this run."
importance = 3
tags       = ["tools", "face-analysis", "kinship", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

Research-to-tool pipeline: literature summary to working CLI in one session. Note the smoke-test scores as behavioral data: Dan-vs-Annie 0.03 and Annie-vs-Alexis -0.03 are resemblance-meter readings, not relatedness verdicts — do not cite them as evidence about actual kinship.
