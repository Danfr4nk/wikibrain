---
domain: work
page_type: concept
title: "MELODY — melody extraction from finished songs"
status: active
date_created: 2026-09-19
date_modified: 2026-09-19
sources:
  - "dat:1662-melody-tool-commissioned-20260916"
  - "dat:1752-melody-v2-iteration-20260916"
related:
  - wiki/work/tech/projects/hook2piano
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/musictrainer-autopsy
  - wiki/interests/music/overview
tags: [ai-collaboration, music-production]
connections:
  - page: wiki/work/tech/projects/hook2piano
    type: sibling-instrument
    claim: "MELODY is the audio-input mirror of hook2piano's tab-input pipeline: same piano-roll output stage, different extraction front end. Commissioned the same day (2026-09-16); formerly a subsection of the hook2piano entry, split into a standalone entry 2026-09-19 because the v2 DSP-iteration story outgrew the subsection."
  - page: wiki/work/tech/projects/musictrainer-autopsy
    type: sibling-instrument
    claim: "MusicTrainer/AUTOPSY instrument the taste side of the music practice (scoring Discover Weekly keeps, dissecting why tracks land); MELODY instruments the analysis side (hearing melodic structure in finished audio)."
  - page: wiki/mind/concepts/exocortex
    type: instantiates
    claim: "MELODY is an exocortex instrument in the strict sense: a cognitive prosthetic that does the part of the musical task his perception doesn't do natively (parsing a lead line out of a finished mix by ear) so his native strengths (melodic/harmonic hearing, structural pattern recognition) get the cleanest possible input."
  - page: wiki/mind/concepts/lyric-qualifier
    type: instantiates
    claim: "Dan hears sung lyrics as timbre, not language — a tool that extracts the melodic line matches how he actually listens, so the build is structurally fitted to his documented perception, not a generic music app."
---

# MELODY — melody extraction from finished songs

On September 16, 2026, Dan commissioned a tool with a one-sentence spec: it
"recreates the melody of an uploaded song — finds the notes — puts them on a
piano roll." He chose the hard version on purpose: not a clean stem, a *full
finished song*, the thing he actually listens to. MELODY is the audio-input
sibling of hook2piano (tab-input, chord-to-piano): same piano-roll output
stage, different extraction front end, living in the music category of
`Danfr4nk/tools` at `danfr4nk.github.io/tools/music/melody/`.
(`dat:1662-melody-tool-commissioned-20260916`)

What makes MELODY worth a standalone entry is not the v1 tool — competent,
verified, shipped the same day — but the v2 iteration that followed it. The
v2 pass is the most ambitious signal processing in his tool collection and,
more importantly, the cleanest recorded instance of his build philosophy in
operation: commission the iteration before first contact with the product,
let a synthetic adversarial suite do the judging, and keep the unsolved case
open and named instead of closing it. (`dat:1752-melody-v2-iteration-20260916`)

## The commission: full song, honest gaps

Two design decisions at commissioning time set the tone for everything after.

First, the input. Dan picked "full finished song" over "clean stem" — the
harder problem, the one that matches his actual use. A stem-fed melody
extractor is a solved-ish demo; a finished-mix extractor is a real
instrument, because the finished mix is what he plays, hears, and wants to
learn from. The spec follows his perception: he hears lyrics as timbre and
melody as the primary musical signal, so the tool extracts exactly the line
he already listens for and makes it readable. See the lyrics-as-timbre
connection above — this is not a generic music app wearing his name; the
build is fitted to documented perception.

Second, the honest gap. During v1 verification a playhead-follow crash was
found and fixed, and one limitation was recorded rather than worked around:
automation cannot drive the native file picker, so the drop zone is a native
`<input>` element — which happens to be better on iPhone anyway. The one
surface that remained unverified was the literal file-picker click in a real
browser; everything downstream of it was verified on real bytes. Recording
the boundary instead of faking past it is the standing pattern across his
instruments (compare the AUTOPSY audit blocks, the vosk nulls), and MELODY
is where the pattern is most explicit: the entry for v1 says what was
proven, on what bytes, and where the proof stops.

## The commission transcript

The commission is preserved nearly verbatim in the 2026-09-16 transcript
batch, and the exchange is worth keeping whole because it shows how little
specification his commissions need — the shared context does the work.

He opened: "Next tool I want to build recreates the melody of an uploaded
song." The reply named it instantly — "Melody-to-piano-roll — love it, very
on-brand for the GRIPNOTIC lab" — and asked the one question that changes
the detection engine: "what are you feeding it?" His answer: "Full finished
song — pull the lead melody out of the mix." The widget offered "Extract
melody from song"; the build began.

"On-brand for the GRIPNOTIC lab" is doing quiet work in that exchange. The
tool was never framed as a utility; it was framed as lab equipment for the
music practice itself — the 2025 dance-music re-entry, the GRIPNOTIC
revival, the producer's bench. Every later decision (the finished-song
input, the piano-roll output, the MIDI export, the real-song test as the
standing ask) follows from that framing: the instrument exists to feed the
practice, not to demo a technique.

When v1 shipped the same evening, the delivery message carried the
verification inline: "ran a synthetic full mix (vibrato lead over bass,
kick, hats) through the production code — 12/12 notes exact, zero phantom
kick notes." The test pass caught a real crash in playhead-follow that
"would've hit during playback"; it was fixed before he ever saw it. And the
honest gap was stated in the same breath as the success: the literal
tap-the-picker upload couldn't be completed in automated browser testing —
"tooling limit, not a site bug" — with everything downstream of the picker
verified on real bytes. Success, crash-fix, and boundary, all in one
message. That is the delivery format for the whole builder wave, and MELODY
is its earliest complete example.

## v1: shipped and verified the same day

v1 shipped 2026-09-16 and was verified 12/12 on a synthetic mix: a 7.5-second
WAV with a 12-note lead (60 62 64 67 69 67 64 62 60 64 67 72) over bass, kick,
and hats, with the production `extractMelody` run in Node on the decoded
bytes returning the exact sequence.

The DSP core (`melody.js`, pure JS, zero dependencies): downsample to
22050Hz, 2048-sample Hann window / 1024 hop, FFT magnitude, per-frame pitch
salience over MIDI 36–96 via harmonic summation with lead-band emphasis, an
"explaining away" penalty (lower candidates penalized by stronger
harmonically-related higher candidates — this kills bass-steals-melody), a
single octave-down check, adaptive voicing, median smoothing, plus
equal-loudness-ish spectral weighting that crushes kick-drum pitch sweeps.

The piano-roll canvas supports scroll/zoom, tap-a-note to audition,
tap-empty to seek, and playhead follow. Transport plays the extracted melody
on a triangle synth with the original audio optionally underneath for A/B;
export is a real `.mid` file plus notes JSON.

Analysis speed was measured, not estimated: ~24ms for 4.3s of audio (~6ms
per audio-second) on desktop, so a 3-minute song analyzes in about a second
on desktop and single-digit seconds on iPhone — decoding dominates the wait,
not the DSP. The measurement matters because it sets the usage model: this
is a real-time-feeling instrument, not a batch job. You drop a song in and
the answer is there.

## v2: the iteration before first contact

Before ever trying v1 himself, Dan ordered: "i didn't even try it yet but go
ahead and run a full iteration of whatever improvements you can make." That
sentence is the whole build philosophy in one line — the iteration is
commissioned on the strength of the verification suite, not on user feel,
and the human's first contact with the product is deliberately deferred
until the machine has had its pass.

A 7-case adversarial regression suite was built (`test-melody3.mjs`,
in-memory synthesis, no files written): T1 heavy vibrato, T2 legato
portamento, T3 drum-break silence, T4 octave jumps, T5 quiet lead vs loud
pad, T6a 8-note walking-bass regression, T6b lead-octave-over-bass
regression. Final v2 score: **6/7**. Heavy vibrato, portamento, drum-break
silence, octave jumps, and both regression cases pass. The quiet-lead-vs-loud-pad
case fails 0/4 — the pad's pitch 60 intrudes into the extracted notes. The v1
baseline on the same suite: vibrato fail, pad case 1/4. So v2 is ahead on
balance, but the pad case *regressed* from 1/4 to 0/4, and the regression is
named in the record rather than hidden. That naming is the load-bearing
behavioral fact: the suite exists so a future session can measure progress
against it instead of arguing about whether the tool "sounds better."

### Load-bearing finding 1: pitch-from-smoothed, voicing-from-raw

The v2 architecture splits the decision into two passes, and the split is
the kind of thing that only shows up when you instrument the failure modes
separately. Pass 1 stores per-frame penalized salience plus per-candidate
harmonic-energy fractions. Pass 2 decides **pitch** from salience
mean-averaged ±2 frames (232ms ≈ 1.3 cycles of 5.5Hz vibrato) *before*
argmax, while **voicing/confidence** use raw per-frame salience. The
asymmetry exists because smoothing the voicing decision voiced phantom notes
off borrowed neighbor energy — a gap frame voiced at f0=62.73, and an
earlier two-pass ±2 attempt produced phantom 61/68 semitones. Pitch wants
the smoothed distribution; voicing wants the raw frame. Smoothing is not a
global virtue; it is a per-decision choice, and the wrong per-decision
choice manufactures notes that were never sung.

### Load-bearing finding 2: mean, not median, collapses vibrato

With a 93ms window, each frame sees half a vibrato cycle, so per-frame pitch
estimates are bimodal — dwelling at the vibrato extremes (observed 63.3↔64.4
on an E4). Averaging the salience *distributions* with a **mean** recovers a
symmetric peak at the vibrato center; a **median** just votes for one
extreme. Median±1 failed the vibrato case; mean±1 passes it. The operator was
the variable, not the window width — which is the kind of result that
generalizes: when your per-frame estimates are bimodal by construction, the
robust estimator is the wrong tool and the naive one is right, because the
"noise" is the signal's own structure.

### The complete measurement log

Per the complete-log doctrine, the instrument's full score history belongs
on the entry — not a summary, the log:

| Suite | Case | v1 | v2 | Notes |
|---|---|---|---|---|
| v1 acceptance | 12-note lead over bass/kick/hats (7.5s WAV) | 12/12 | — | production `extractMelody` in Node on decoded bytes; playhead-follow crash found and fixed during verification |
| v2 adversarial (test-melody3.mjs) | T1 heavy vibrato | fail | **pass** | mean±1 salience averaging; median±1 failed |
| v2 adversarial | T2 legato portamento | — | **pass** | |
| v2 adversarial | T3 drum-break silence | — | **pass** | voicing must hold through drum-only frames |
| v2 adversarial | T4 octave jumps | — | **pass** | explaining-away penalty's case |
| v2 adversarial | T5 quiet lead vs loud pad | 1/4 | **0/4 fail** | pad pitch 60 intrudes; regressed from v1; named, unsolved |
| v2 adversarial | T6a 8-note walking-bass regression | — | **pass** | guard rail: bass must not become melody |
| v2 adversarial | T6b lead-octave-over-bass regression | — | **pass** | guard rail: octave errors must not return |

v1 baseline on the v2 suite: T1 fail, T5 1/4. v2 final: 6/7. The regression
(T5 1/4 → 0/4) is the most important number on the page — it is the one the
record refuses to hide, and it is what makes the suite an instrument rather
than a ceremony.

### What each case probes

The suite is a map of the real adversary — the finished mix — decomposed
into named cases. T1 heavy vibrato probes the sung lead itself: real vocal
and synth leads wobble, and a pitch tracker that can't ride vibrato can't
read his music. T2 legato portamento probes the glide between notes, where
naive segmentation invents boundaries that aren't there. T3 drum-break
silence probes voicing under fire: when the lead drops out and only drums
remain, the tracker must say "nothing" rather than hallucinate pitch from
kick sweeps and snare noise. T4 octave jumps probe the oldest failure in
pitch tracking — the octave error — which the "explaining away" penalty and
the octave-down check exist to kill. T5 quiet lead vs loud pad is the
finished mix in miniature: the lead is the quiet thing and the pad is the
loud thing, and the tracker's job is to follow the quiet thing anyway. T6a
and T6b are regression guards: the walking bass must never be promoted to
melody, and octave displacements must not creep back in once fixed. Each
case has a job; the suite's job is to make "sounds better" checkable.

### The honest frontier: T5 unsolved

The T5 regression is diagnosed but unsolved, and the diagnosis is crisp
enough to be the next iteration's spec: the median is robust to pad
interference (it rejects the pad's salience spikes from drum transients)
while the mean gets pulled by them. So the two findings are in tension —
mean for vibrato, median for pad rejection — and the open problem is the
reconciliation, with harmonicity-weighted mean as the untested candidate.
The record does not pretend this is closed. It names the candidate and
leaves it untested, which is exactly what a regression suite is for: the
next session runs the suite and reads the number.

Other v2 work, recorded in full: hysteresis note segmentation (0.6-semitone
deadband, 2-frame confirmation ~92ms, backdated cuts, note pitch as running
mean); a harmonicity voicing gate (the winner's harmonic bins must explain a
share of the frame spectrum; self-calibrating at 0.35× the median of
confident frames, clamped 0.08–0.28, with strong salience >0.6× p95
overriding — kills snare/hat phantom notes); octave disambiguation by
spectral evidence; parabolic interpolation of the salience peak for
sub-semitone f0. Rejected and recorded: gap-closing (real gaps must break
notes or staccato dies). Designed but unimplemented: pitch-aware gap healing.

### Measurement traps, recorded

Two traps were caught and written down because they generalize beyond this
tool. First: the suite's 0.12s overlap filter hid a 93ms 63-intruder inside
T1's *passing* result — a passing suite line can hide sub-threshold
artifacts, so the suite's own resolution is part of what gets audited. Second:
the snare was a red herring for T1 — frame dumps showed all frames voiced,
so the fault was pitch oscillation, not voicing holes. The standing rule that
falls out: diagnose pitch and voicing separately before fixing either.

As of the 2026-09-16 record, v2 was local-only — uncommitted, unpushed; the
live site still served v1. The standing ask stands, in his words: feed it a
real song and report where it grabs the wrong line — "that's the data v2
needs."

## Place in the larger system

MELODY and [[wiki/work/tech/projects/hook2piano]] are the **analysis wing of
the 2026 builder wave**. The wave's other instruments instrument different
practices — [[wiki/work/tech/projects/musictrainer-autopsy]] instrument the
*taste* side (scoring Discover Weekly keeps
toward the 90% project, dissecting why tracks land), the stylometry tracker
instruments the *voice*, the wiki engine instruments the *memory* — and these
two instrument the *analysis* side: reading harmonic structure from tabs,
hearing melodic structure from finished audio. Both pairs were commissioned
within two days of each other (MusicTrainer/AUTOPSY on 09-14, hook2piano's
web completion and MELODY on 09-16) and both live in the music category of
`Danfr4nk/tools`, per Dan's 2026-09-16 order ("move all of my music
diagnostic tools and training instruments into the tools repo and create a
new category: music").

The deeper fit is perceptual. Dan's documented hearing parses sung lyrics as
timbre and melody as the primary signal; his digging workflow auditions
tracks like a DJ cueing, 33%-skip triage, binary keep-or-kill. An instrument
that pulls the lead line out of a finished mix and puts it on a piano roll —
readable, seekable, A/B-able against the original, exportable as MIDI — is
the reference pipeline for the 2025 dance-music re-entry: what is the melody,
exactly, in a form he can read. The tool does not teach him to hear melody;
it externalizes the part he can't do (stem-separation by ear) so the part he
can do (melodic/harmonic judgment) gets clean input. That is the exocortex
pattern, and MELODY is one of its cleanest instantiations.

The build pattern itself is the other totality-level fact. "I didn't even
try it yet but go ahead and run a full iteration" is not laziness — it is a
deliberate division of labor: the human supplies the spec and the taste, the
machine supplies the adversarial judgment, and first contact happens after
the suite has spoken. The same pattern recurs across the builder wave
(MusicTrainer scored before he trusted his own keeps; AUTOPSY dissects
before he theorizes). MELODY v2 is where the pattern is most legible because
the suite, the scores, the regression, and the unsolved case are all in the
record with numbers attached.

There is a reason the pattern takes this shape, and it is the same reason
the suite replaces taste-judgment rather than supplementing it. Dan's
stated reliability model for himself — good-faith misremembering, date
displacement, hedged certainty that outperforms confident certainty — makes
him distrust his own first impressions as instruments. A synthetic suite
with named cases is not subject to his memory; it returns the same numbers
every run, and a regression from 1/4 to 0/4 cannot be talked away. The
machine's adversarial pass is the trustable first contact because it is the
only first contact that can't flatter. His first *human* contact with v2, by
design, happens against a scoreboard.

The standing real-song ask is the other half of the same design. "Feed it a
real song and report where it grabs the wrong line — that's the data v2
needs" is not a feature request; it is a data-collection protocol, and it
has the same shape as the open questions across his other instruments:
AUTOPSY's zero-lift-rows verdict ("not yet adjudicable" until the week-1
close supplies rows), the stylometry tracker's calibration gate, the
scenario instrument waiting on the alt export. The pattern is consistent:
build the instrument, verify it synthetically, name the missing dataset,
and refuse to close the loop on synthetic evidence alone. The suite proves
the machine works; only the real song proves it matters. Until the dataset
lands, T5 stays named and open — and the entry stays honest about that.

Filed under [[wiki/work/tech/projects/index]].

## Evidence and limits

Everything above is sourced to `dat:1662-melody-tool-commissioned-20260916`
(commission, v1, design decisions) and
`dat:1752-melody-v2-iteration-20260916` (the full v2 log: suite, scores,
findings, traps), both drawn from the 2026-09-16 chat transcript
(`src:1660-sammy-chat-transcript-20260916-2340`). Direct quotes are his words
as recorded in those rows.

Limits, stated plainly:

- **Synthetic verification only.** Every number on this page — 12/12, 6/7,
  the 24ms analysis speed — comes from synthesized mixes, not real songs.
  The standing real-song test ("tell me where it grabs the wrong line") is
  the data v2 needs, and as of the record it has not happened. A real mix
  with mastering compression, stereo widening, and a vocal sitting in a
  reverb tail is a different adversary than the suite.
- **v2 was unpushed as of 2026-09-16.** The live site served v1; the v2
  iteration existed local-only. The push state after 2026-09-16 is not in the
  record — treat any claim about the live version as unverified until
  re-checked against the deployment.
- **The suite is the instrument's own resolution.** The 0.12s overlap filter
  trap is the standing reminder: the suite can only see artifacts coarser
  than its own filters. Sub-threshold intruders pass silently.
- **Two findings in tension.** Mean-for-vibrato and median-for-pad-rejection
  pull in opposite directions; the reconciliation (harmonicity-weighted mean)
  is an untested candidate, not a result. T5 is the named frontier.
