+++
id         = "dat:1529-telemetry-same-face-reliability-20260913"
layer      = 1
type       = "datum"
title      = "Telemetry Lab same-face reliability verdict + full improvement program (2026-09-14)"
claim      = "03:32-03:39Z Dan ran a same-face reliability series (telemetry__1/2/3.json). Verdicts: (1) 7-capture stress test: ZERO metrics stable — within-face SD exceeds 0.74x the full 155-face bank's between-face SD on all 60 comparable metrics, most at 2-34x; all 7 captures were low-quality high-pose (yaw spanning 62 deg), so the lab measured the photo, not the face — expected. (2) The quality gate worked 7/7: every capture flagged low confidence (33-51) / frontality 0-23; the system said don't trust these every time. (3) First pose-robust readings: gonial mean (0.13 bank-SD), mouth-to-nose (0.31), jaw-to-cheek (0.48) held across a pair. (4) Real bug found: eye width-to-height read 23.7 on one capture — at -16 deg yaw the eye height collapses toward zero and the ratio explodes; needs a cap/flag at high yaw (landmine). 03:39Z his commission: 'I want you to make this as good as it can possibly be' -> full program: per-metric pose-robustness ranking from all nine same-face captures, denominator-collapse audit across every ratio metric (23.7 blowup as regression test), pose-contamination flagging in HUD + exports, quality-gate calibration pass, decision memo on the roundness rename."
cites      = ["src:sammy-chat-transcript-20260914-0340"]
confidence = "high"
provenance = "verbatim assistant/user rows 2026-09-14T03:32:17Z-03:39:14Z; byte-exact in raw/sammy/20260914-0340/chats.json"
reliability = "primary"
extraction = "Assistant rows 49e8880a (03:32:43Z), 1acae49f (03:36:38Z), cc0f112c (03:37:27Z), 677402db (03:37:43Z), 35dde31f (03:38:41Z), fd907d6d (03:39:14Z); user rows a7c7ebf3, db25b232, b7b043d0, 68cdeed1, ca67736f, ecb5b790. All per-row md5-verified."
importance = 4
tags       = ["telemetry-lab", "face-lab", "instrument", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
