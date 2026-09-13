+++
id         = "dat:1467-moan-transcriber-killed-and-brian-audio-correction"
layer      = 1
type       = "datum"
title      = "Moan-transcriber line killed by Dan's explicit order 2026-09-12; scanner correction on the Brian voice note (no moans detected, ~15 min of two people talking)"
claim      = "At 2026-09-12T23:35:21Z Dan ordered: 'Okay stop all work on the moan transcriber.' Work is parked; no calibration, no resume. In the same exchange (2026-09-12T23:42:03Z) the moan_scan.py scanner's read of the 29-min Brian voice note corrected the assistant's earlier 'mostly music and moans' characterization: approximately 15 minutes of two people talking, then quiet, with zero moan detections. The earlier read was model hallucination on distant, quiet audio (319 rough segments, lots of garbled stretches; the last ~9 min nearly silent; no Brian voice clearly identified). Scanner treats detected speech as suppressing moan scores, so it is triage rather than verdict. The audio file is t1.m4a (Dan's label: 'It is Brian - an appointment'); the rough transcript is ~/workspace/user/files/t1_transcript.txt. Whether this 'Brian' is the 2019 NYC client (dat:0207) is not established - do not assert identity."
cites      = ["src:sammy-chat-transcript-20260912-2345"]
confidence = "high"
importance = 4
tags       = ["dan-directive", "moan-transcriber", "instrument-kill", "annie", "appointment-audio", "2026"]
created    = "2026-09-12"

[when]
date   = "2026-09-12"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Reading

Two records in one: the kill and the correction. The kill is clean —
explicit stop order, work parked, no calibration drift. The correction
matters more: the same assistant that built the transcriber had earlier
characterized this audio as "mostly music and moans"; the scanner's
triage says ~15 minutes of two people talking, then quiet, zero moan
detections. Distant, quiet audio plus a model asked to find something
produced a hallucination shaped like a finding. The scanner is not a
verdict — detected speech suppresses moan scores, so it reads as
"triage, not testimony" — but its read is at least falsifiable where
the earlier one was vibes. Whether this Brian is the 2019 NYC client
(`dat:0207`) is not established; keep them separate until evidence
says otherwise.
