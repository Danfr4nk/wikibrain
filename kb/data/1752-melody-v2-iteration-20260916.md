+++
id         = "dat:1752-melody-v2-iteration-20260916"
layer      = 1
type       = "datum"
title     = "MELODY v2 DSP iteration: 6/7 adversarial cases, T5 quiet-lead-vs-loud-pad unsolved, unpushed"
claim      = "On 2026-09-16, before ever trying MELODY v1 himself, Dan ordered: \"i didn't even try it yet but go ahead and run a full iteration of whatever improvements you can make.\" A 7-case adversarial regression suite (music/melody/test-melody3.mjs, in-memory synthesis, no files written) was built: T1 heavy vibrato, T2 legato portamento, T3 drum-break silence, T4 octave jumps, T5 quiet lead vs loud pad, T6a 8-note walking-bass regression, T6b lead-octave-over-bass regression. Final v2 score 6/7: T1, T2, T3, T4, T6a, T6b pass; T5 fails 0/4 (the pad's pitch 60 intrudes into the extracted notes). v1 baseline on the same suite: T1 fail, T5 1/4 — v2 is ahead on balance but T5 regressed from 1/4 to 0/4. Load-bearing findings: (1) pitch-from-smoothed / voicing-from-raw two-pass split — Pass 1 stores per-frame penalized salience plus per-candidate harmonic-energy fractions; Pass 2 decides pitch from salience mean-averaged ±2 frames (232ms ≈ 1.3 cycles of 5.5Hz vibrato) BEFORE argmax, while voicing/confidence use raw per-frame salience (smoothing the voicing decision voiced phantom notes off borrowed neighbor energy); (2) mean, not median, collapses vibrato — with a 93ms window each frame sees half a vibrato cycle, so per-frame estimates are bimodal (dwelling at vibrato extremes, observed 63.3↔64.4 on an E4); averaging the salience distributions with a mean recovers a symmetric peak at the vibrato center, while a median votes for one extreme. (3) T5 regression diagnosed but unsolved: median is robust to pad interference (rejects the pad's salience spikes from drum transients), mean gets pulled by them — the open problem for the next iteration, with harmonicity-weighted mean as an untested candidate. Other v2 changes: hysteresis note segmentation (0.6-semitone deadband, 2-frame confirmation ~92ms, backdated cuts, note pitch as running mean), harmonicity voicing gate (winner's harmonic bins must explain a share of frame spectrum; self-calibrating 0.35× median of confident frames, clamped 0.08–0.28; strong salience >0.6× p95 overrides — kills snare/hat phantom notes), octave disambiguation by spectral evidence, parabolic interpolation of the salience peak for sub-semitone f0. Rejected: gap-closing (real gaps must break notes or staccato dies). Measurement trap recorded: the suite's 0.12s overlap filter hid a 93ms 63-intruder inside T1's passing result — a passing suite line can hide sub-threshold artifacts; and the snare was a red herring for T1 — the fault was pitch oscillation, not voicing holes. As of the 2026-09-16 flush v2 was LOCAL ONLY, uncommitted and unpushed; the live site still served v1. Dan's standing ask stands: feed it a real song and report where it grabs the wrong line — that is the data v2 needs."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 4
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->

The v2 iteration is a case study in Dan's build pattern: commission the iteration before
first contact with the product (\"i didn't even try it yet\"), let the synthetic adversarial
suite do the judgment, and keep the unsolved case open and named rather than closing it.
T5 is the honest frontier — the suite exists so a future session can measure progress
against it instead of arguing about whether the tool \"sounds better.\"
