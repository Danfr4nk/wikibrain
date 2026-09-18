---
domain: work
page_type: concept
title: "hook2piano + MELODY — the harmonic-analysis wing of the builder wave"
status: active
date_created: 2026-09-11
date_modified: 2026-09-18
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1580-tools-repo-consolidation-20260915"
  - "dat:1749-hook2piano-root-cause-correction-20260916"
  - "dat:1750-hook2piano-pianoroll-rewrite-20260916"
  - "dat:1751-hook2piano-midi-playback-20260916"
  - "dat:1662-melody-tool-commissioned-20260916"
  - "dat:1752-melody-v2-iteration-20260916"
  - "dat:1753-minimalism-tripwire-20260916"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/musictrainer-autopsy
  - wiki/interests/music/overview
tags: [ai-collaboration, music-production]
connections:
  - page: wiki/interests/music/concepts/lyrics-as-timbre
    type: instantiates
    claim: "Dan hears sung lyrics as timbre, not language — a harmony-first chord-to-piano tool matches how he actually listens, so the build is structurally fitted to his documented perception, not a generic music app."
  - page: wiki/work/tech/projects/musictrainer-autopsy
    type: sibling-instrument
    claim: "MusicTrainer/AUTOPSY instrument the taste side of the music practice (scoring keeps, dissecting why tracks land); hook2piano/MELODY instrument the analysis side (reading and hearing harmonic structure). Both pairs were commissioned within two days of each other and both live in the music category of Danfr4nk/tools."
  - page: wiki/mind/concepts/exocortex
    type: instantiates
    claim: "hook2piano/MELODY are exocortex instruments in the strict sense of the concept: cognitive prosthetics that do the part of the musical task his perception doesn't do natively (reading notation, parsing stems by ear) so his native strengths (melodic/harmonic hearing, structural pattern recognition) get the cleanest possible input."
  - page: wiki/mind/synthesis/dance-music-only-phases
    type: references
    claim: "The GRIPNOTIC-era reading of this entry is built on the re-entry account in the two-phases synthesis: the 2025 re-entry is listening-led, and these tools are its reference pipeline — what is the harmony, exactly, in a form he can read."
---

# hook2piano + MELODY

hook2piano is a phone-friendly web app that converts TheoryTab tabs into piano rolls, and
MELODY is its audio-input sibling: feed it a finished song and it pulls the lead melody out
of the mix onto a piano roll. Together they are the **harmonic-analysis wing of the 2026
builder wave** — the same agent-directed workflow that produced the Wiki Brain tooling and
the attraction-guide, applied to the [[wiki/mind/synthesis/dance-music-only-phases|GRIPNOTIC revival]]'s harmonic analysis problem.

## The listening model the tools are built for

Dan does not hear sung lyrics as language in real time. His own statement: "I do not hear
the lyrics of songs and even if I have a lyric sheet to know the words interpreting them is
harder yet. I hear the lyric as timbre" — and, in the same 2026-09-11 music thread that
produced the lyric qualifier, the positive restatement of what he *does* hear: melodies and
harmonies. A year earlier, mid-argument with a hostile third party, he said it plainer still:
"I hear melodies, harmonies. I don't hear the narrative or the topic of the lyrical content
at all." (dat:music-lyric-timbre-qualifier)

TheoryTab is, structurally, Dan's listening model made into a website. Its tabs strip a song
down to exactly the two channels he reports perceiving — the melody line and the chord
progression — and discard everything he reports *not* perceiving: the narrative, the topic,
the words as propositions. A tool that turns a TheoryTab tab into a readable score is not a
generic music app; it is a builder solving his own sensory bottleneck. The [[wiki/interests/music/concepts/lyrics-as-timbre|lyric qualifier]] is
the mandatory first frame for all music analysis in his record, and hook2piano is the first
tool in the record that treats it as an engineering constraint rather than a reading caveat:
if the user cannot read staff notation and does not parse lyrics as language, the
representation must be pitch-as-geometry with note names as text, or the tool fails its one
user.

This is the same instinct that runs through the whole 2026 builder wave. The Wiki Brain
itself converts a consumer pattern (re-reading and re-deriving) into a producer instrument
(extract once, stop re-deriving). hook2piano converts a consumer site (TheoryTab) into a
producer instrument: Dan doesn't just want to *look at* the harmony of the songs he's
studying for the GRIPNOTIC revival — he wants the harmony handed to him in a form he can
use.

## Origin: the 2026-09-11 Python engine

hook2piano started on 2026-09-11 as a local Python engine at `~/workspace/hook2piano/`:
`theory.py`, `fetch.py`, `parse.py`, `render_text.py`, `cli.py`, and `render_html.py`, plus a
vendored copy of VexFlow 4.2.2. The intended output was a self-contained printable HTML
grand staff with right-hand melody, left-hand chord voicings, chord symbols, and roman
numerals, plus a text lead-sheet mode. Early examples were generated the same day (TLC's
"This Is How It Works," Radiohead's "Creep"), and the Creep text-mode CLI already displayed
applied, suspended, and borrowed chords (`B` as V/vi, `Cm` as borrowed iv) — the harmonic
vocabulary of the GRIPNOTIC revival's study material was in the tool from the first commit.

The public repo `Danfr4nk/hook2piano` was created at 16:58 EDT on 2026-09-11 (dat:1499's
inventory records it as a live web app the same week), with a `push.py` publisher doing
API-only commits with no local git repo — the same pattern later used for the
attraction-guide. The web layer ran the *actual* Python engine client-side through Pyodide,
not a port or an approximation: paste a TheoryTab URL or tab ID, section chips render, the
engine produces the score. That "real engine in the browser" choice is load-bearing for
everything that follows — the underscore-Jekyll disaster of 2026-09-16 happened precisely
because the engine file was a real file that had to physically arrive.

## The 2026-09-15 consolidation

On 2026-09-15 Dan ordered the full "ALL the tools" consolidation, and hook2piano moved into
`Danfr4nk/tools` as `tools/hook2piano/` alongside attraction, musictrainer, track-autopsy,
modbod, and kinship; old repos were left as redirect stubs pending his deletion go-ahead.
(dat:1580-tools-repo-consolidation-20260915) The next day he ordered the music diagnostic
tools gathered into a dedicated `music/` category — `musictrainer/`, `track-autopsy/`, and
`hook2piano/` git-moved under `music/`, live at `danfr4nk.github.io/tools/music/hook2piano/`,
with a new `music/index.html` category landing page and the splash page retargeted. The
app itself lives one level down at `music/hook2piano/docs/`; the category root redirects
there.

One archival correction matters here: the consolidation record originally said all old
repos became redirect stubs, but that was wrong for hook2piano specifically —
`danfr4nk.github.io/hook2piano/` still serves the full Pyodide app (the old-repo stub claim
holds for MusicTrainer and track-autopsy only). Superseded record, preserved as correction.

## 2026-09-16: the day the tool actually got built

The 09-16 session is the densest single day in this tool's history — a misdiagnosis
corrected in-record, a root-cause find that fixed a second tool as collateral, a full
renderer rewrite ordered by a five-word verdict, zero-dependency playback, and the
commissioning of a sibling instrument. It is worth reconstructing carefully, because the
session contains both the tool's architecture and a case study in how Dan's builds get
steered.

### The report

Dan: "It didn't load anything from hooktheory." Plus the order: "make a web tool for
hook2piano."

### The misdiagnosis (superseded)

The first diagnosis blamed CORS: hooktheory.com sends no `Access-Control-Allow-Origin`
header, so the in-browser TheoryTab page fetch always died, and both coded fallbacks were
dead too (api.allorigins.win down, corsproxy.io 401/key-gated). The fix routed page fetches
through the `https://api.cors.lol/?url=` relay — verified returning the full 487KB
TheoryTab page — and server-side end-to-end looked clean: Creep page → 4 section hashes →
API `{"ID":1744798,"song":"Creep"}` → Python engine rendering the verse (G – B – C – Cm,
G major, 95 BPM).

Dan's live state said otherwise: the tool still loaded nothing. The log entry that
claimed "root-caused and fixed" was, at 16:27, corrected in the same record — it had been
the secondary bug, not the primary. The correction is preserved here because it is the
honest forensic shape of the day: **the first root cause was wrong, and the record says so.**
(dat:1749-hook2piano-root-cause-correction-20260916)

### The real root cause: the underscore gotcha

Deeper probing found auto-load dying in `ensurePy()` before Pyodide ever started:
`docs/py/hook2piano/__init__.py` was **404 on GitHub Pages** while 200 on
raw.githubusercontent — "missing engine file: __init__.py." The cause is a GitHub Pages
gotcha with real bite: Pages runs Jekyll by default, which silently excludes every file
and directory whose name starts with an underscore from the built site, and the repo had
no `.nojekyll` to disable it. The engine never deployed, so pasting anything showed an
error — the proxy fix had been real but irrelevant to what Dan was hitting.

The fix was one empty `.nojekyll` file at the `Danfr4nk/tools` root (behavior-preserving:
nothing in the repo used Jekyll — no `_config`, no `_layouts`, no front matter). Verified
live: `__init__.py` 200, all seven engine files 200. And the same bug had been quietly
breaking a second tool: the attraction suite's `faces/_manifest-*.json` files were 404ing
on Pages from the identical Jekyll exclusion — now 200 as well. One root cause, two tools
repaired.

### The relay-free path: deep link + bookmarklet

The CORS-proxy approach was abandoned on reliability grounds after a full census of the
public-relay layer: api.cors.lol rate-limits hard (429 within minutes), allorigins down,
corsproxy.io 401/key-gated, codetabs 522, corsfix 400, the Cloudflare demo worker 429,
jsonp.afeld.me dead, Wayback API 429 with no ACAO on replays. And the Hooktheory side was
no better: the search endpoints are all 401 (auth only) — only the by-hash project API
(`api.hooktheory.com`) is CORS-open. A tool whose load path depends on that layer can never
be trusted on his phone.

So the page-fetch path was bypassed entirely. `app.js` now accepts a `?tabs=` deep link —
encoded `name:id` pairs parsed from the raw query string (split before decoding; a first
version built on `URLSearchParams` broke on commas inside section names, caught by a node
unit test, 5/5 cases passing after the fix) — and auto-loads the sections directly from
the CORS-open project API, skipping the page fetch completely. And the extraction step
moved to the user's own browser: a bookmarklet, draggable from the tool's hint line,
extracts tab ids and names from the live TheoryTab DOM — same-origin, no CORS, no relay —
and opens the tool with `?tabs=`. Tested in node against a synthetic DOM (names
"Verse"/"Chorus" extracted, "Open In Hookpad" excluded, dupes deduped).

This is the durable architecture of the tool: **the browser Dan already has open on
TheoryTab does the extraction; the CORS-open API does the data; the real Python engine in
Pyodide does the rendering.** No relay, no proxy, no third-party uptime in the critical
path. (dat:1749-hook2piano-root-cause-correction-20260916)

### "I can't read music": the piano-roll rewrite

With the tool finally loading, Dan looked at the render and said the sentence that
restructured the whole project: **"I can't read music."** Then the verbatim order: "I want
two piano rolls — one displaying the chord (LH) and one with the melody. The note names
should appear above and below each piano roll."

That supersedes the entire VexFlow staff-notation approach — including the notation test
that had passed earlier the same day. The staff notation is obsolete; it is not to be
resurrected. The renderer was rewritten the same session to pure-SVG piano rolls with
zero dependencies. Per section: a **MELODY roll (right hand, blue #2b6cb0)** on top and a
**CHORDS roll (left hand, green #2f855a)** below. Note names sit above *and* below each
roll — melody pitch names with octave (G4…), chord symbols bold on the chord roll, and
chord-tone bars carrying tiny white pitch names inside when wide enough. Both rolls share
the section's pitch range so they align vertically; each roll gets a piano keyboard strip,
beat gridlines, barlines, bar numbers; systems break at five measures or fewer.

VexFlow was fully excised: both vendored copies (~2MB) deleted, the script tag removed
from `docs/index.html`, the app.js comment updated, `docs/build.sh` rewritten to
re-extract the new render IIFE into `docs/render.js`, and the CLI `render()` no longer
inlining the library. The engine's source of truth stayed
`hook2piano/hook2piano/render_html.py` (`_PAGE`) — only the render stage was replaced; the
theory/fetch/parse back end survived intact.

Verification ran at two levels. Node smoke tests with a realistic 9-measure song: 4 SVGs
(2 systems × 2 rolls), correct bar x-positions, labels in both rows, chord inner names,
G4 label count ×18 = 9 notes × 2 rows, CLI `render([])` self-contained with zero VexFlow
references. Then a live browser end-to-end on the Creep verse deep link
(`?tabs=Verse:nJmBYYkXpoA`): all 8 checks passed — auto-load, TheoryTab fetch, Pyodide
engine, `#status` empty, header "Creep — Verse / Key of G major | 95 BPM | 4/4 /
Progression: G – B – Bsus4 – C – Csus4 – Cm", 2 MELODY + 2 CHORDS roll titles, 4 SVGs,
note-name rows top and bottom, chord labels G/B/Bsus4/C/Csus4/Cm, tiny white pitch names
inside the green bars, blue melody bars, bar numbers 1–9, keyboard strips per roll.
(dat:1750-hook2piano-pianoroll-rewrite-20260916)

The rewrite is the day's clearest instantiation of the [[wiki/interests/music/concepts/lyrics-as-timbre|lyric-qualifier principle]] at the
engineering level. Dan does not read staff notation any more than he parses sung lyrics
as language — both are display formats that assume a listener/reader model he does not
inhabit. The rewrite replaces a borrowed convention with the representation he actually
uses: pitch as geometry on a piano roll, note names as text. The same verdict drove
MELODY's canvas piano roll the same day.

### MIDI playback: "the least taxing way"

Also on 09-16, Dan ordered playback: "play the song as midi. Whatever the least taxing
way to play the thing in browser is." Built: `docs/player.js`, a zero-dependency Web
Audio synth — triangle oscillator for the melody, sine for the chords, compressor on the
master — with a lookahead scheduler (25ms tick, 0.15s horizon), pause/resume/stop, a
fixed bottom transport bar (Play/Pause, Stop, progress, m:ss time readout), and a red
playhead line sweeping the piano rolls via requestAnimationFrame. `render_html.py` tags
each roll SVG with `data-t0`/`data-t1`/`data-bpm` plus a parked `.h2p-ph` playhead line;
`renderSong` stashes `H2P.lastSong`; `docs/render.js` rebuilt through `build.sh`.

Two infrastructure details are worth preserving because they generalize. First: the
player shipped behind versioned script URLs (`?v=20260916b`) because GitHub Pages plus
browser/CDN were serving *stale* render.js/app.js on exact URLs — which had broken the
test browser and would have broken his phone cache. Second: a known trivial edge was
deliberately left unfixed — pausing within ~50ms of a chord onset can drop that chord on
resume (a 1ms skip-boundary race, sub-perceptual). The minimalism tripwire applies to bug
fixes too: sub-perceptual edges don't earn code.

Verification: a node logic harness with a virtual AudioContext/DOM/rAF passed the full
lifecycle (label flips, progress advance, playhead motion, pause/resume, natural-end
reset), and a live browser e2e confirmed the playhead advancing on the Creep verse tab —
the label/progress FAILs in that browser run were test-timing artifacts (the poller was
slower than the 22.7s song), disproven by the harness. After shipping, Dan was offered a
one-tap follow-up — half-speed practice-tempo toggle or per-section playback — still
unanswered as of the record; build on his pick when it comes.
(dat:1751-hook2piano-midi-playback-20260916)

### The minimalism tripwire

The same session drew his standing UI rule in its tersest form — **"get rid of anything
you can this is absurd"** — when chrome accumulated on the shipped tool. It is not a
one-off complaint; it is the standing directive that governs the whole
`Danfr4nk/tools` surface: ship the leanest possible interface, prefer the least-taxing
native implementation over a library or a heavier component, and treat every UI element
as needing to justify its existence. It is the principle behind the ~1MB notation
library deletion for phone load speed, the zero-dependency Web Audio player, the
zero-dependency pure-SVG piano rolls replacing VexFlow (~2MB out), and MELODY's native
`<input>` file picker (better on iPhone than a custom drop zone). (dat:1753-minimalism-tripwire-20260916)

## MELODY: the audio-input sibling

Commissioned the same day, 2026-09-16, at Dan's request: a tool that "recreates the
melody of an uploaded song — finds the notes — puts them on a piano roll." He picked
"full finished song" over clean stem — the harder problem, the one that matches his
actual use. MELODY is the audio-input mirror of hook2piano's tab-input pipeline: same
piano-roll output stage, different extraction front end. It lives in the music category
at `danfr4nk.github.io/tools/music/melody/`. (dat:1662-melody-tool-commissioned-20260916)

The DSP core (`melody.js`, pure JS, zero dependencies) is worth describing because it is
the most ambitious signal processing in his tool collection: downsample to 22050Hz, 2048
Hann window / 1024 hop, FFT magnitude, per-frame pitch salience over MIDI 36–96 via
harmonic summation with lead-band emphasis, an "explaining away" penalty (lower candidates
penalized by stronger harmonically-related higher candidates — kills bass-steals-melody),
a single octave-down check, adaptive voicing, median smoothing, plus equal-loudness-ish
spectral weighting that crushes kick-drum pitch sweeps.

v1 shipped the same day and was verified 12/12 on a synthetic mix — a 7.5s WAV with a
12-note lead (60 62 64 67 69 67 64 62 60 64 67 72) over bass, kick, and hats, with the
production `extractMelody` run in Node on the decoded bytes returning the exact sequence.
A playhead-follow crash was fixed during verification. The honest gap was recorded rather
than worked around: automation cannot drive the native file picker, so the drop zone is a
native `<input>` (better on iPhone anyway) — and the one surface that remains unverified
is the literal file-picker click in a real browser; everything downstream of it is
verified on real bytes. The piano-roll canvas supports scroll/zoom, tap-a-note to
audition, tap-empty to seek, playhead follow; transport plays the extracted melody on a
triangle synth with optional original audio underneath for A/B; export is a real `.mid`
file plus notes JSON.

Analysis speed was measured: ~24ms for 4.3s of audio (~6ms per audio-second) on desktop,
so a 3-minute song analyzes in ~1s on desktop and single-digit seconds on iPhone —
decoding dominates the wait, not the DSP.

Dan owes the real-song test, and the terms are his own: "tell me where it grabs the
wrong line — that's the data v2 needs."

### MELODY v2: the iteration before first contact

Before ever trying v1 himself, Dan ordered: "i didn't even try it yet but go ahead and
run a full iteration of whatever improvements you can make." A 7-case adversarial
regression suite was built (`test-melody3.mjs`, in-memory synthesis, no files written):
heavy vibrato, legato portamento, drum-break silence, octave jumps, quiet lead vs loud
pad, an 8-note walking-bass regression, and a lead-octave-over-bass regression. Final v2
score: **6/7**. Heavy vibrato, portamento, drum-break silence, octave jumps, and both
regression cases pass; the quiet-lead-vs-loud-pad case fails 0/4 (the pad's pitch 60
intrudes into the extracted notes). The v1 baseline on the same suite: vibrato fail,
pad case 1/4 — v2 is ahead on balance, but the pad case regressed from 1/4 to 0/4, and
the regression is named rather than hidden.

Two findings are load-bearing. First, the **pitch-from-smoothed / voicing-from-raw**
split: pass 1 stores per-frame penalized salience plus per-candidate harmonic-energy
fractions; pass 2 decides pitch from salience mean-averaged ±2 frames (232ms ≈ 1.3 cycles
of 5.5Hz vibrato) *before* argmax, while voicing/confidence use raw per-frame salience —
smoothing the voicing decision voiced phantom notes off borrowed neighbor energy (a gap
frame voiced at f0=62.73; an earlier two-pass ±2 produced phantom 61/68 semitones).
Second: **mean, not median, collapses vibrato.** With a 93ms window each frame sees half
a vibrato cycle, so per-frame estimates are bimodal — dwelling at the vibrato extremes
(observed 63.3↔64.4 on an E4) — and averaging the salience *distributions* with a mean
recovers a symmetric peak at the vibrato center, where a median just votes for one
extreme. (Median±1 failed the vibrato case; mean±1 passes it. The operator was the
variable, not the window width.)

The T5 regression is diagnosed but unsolved, and the diagnosis is in the record: the
median is robust to pad interference (it rejects the pad's salience spikes from drum
transients) while the mean gets pulled by them — which makes the open problem crisp for
the next iteration, with harmonicity-weighted mean as an untested candidate. Other v2
work: hysteresis note segmentation (0.6-semitone deadband, 2-frame confirmation ~92ms,
backdated cuts, note pitch as running mean), a harmonicity voicing gate (the winner's
harmonic bins must explain a share of the frame spectrum; self-calibrating at 0.35× the
median of confident frames, clamped 0.08–0.28, with strong salience >0.6× p95 overriding
— kills snare/hat phantom notes), octave disambiguation by spectral evidence, parabolic
interpolation of the salience peak for sub-semitone f0. Rejected and recorded: gap-closing
(real gaps must break notes or staccato dies); designed but unimplemented: pitch-aware gap
healing.

Also recorded: a measurement trap — the suite's 0.12s overlap filter hid a 93ms
63-intruder inside T1's passing result, so a passing suite line can hide sub-threshold
artifacts; and the snare was a red herring for T1 — frame dumps showed all frames voiced,
so the fault was pitch oscillation, not voicing holes. Diagnose pitch and voicing
separately before fixing.

As of the 2026-09-16 record, v2 was local-only — uncommitted, unpushed; the live site
still served v1. The standing ask stands: feed it a real song and report where it grabs
the wrong line. (dat:1752-melody-v2-iteration-20260916)

## Place in the larger system

hook2piano and MELODY are the **music-production wing of the 2026 builder wave**. The
wave's other instruments instrument different practices — MusicTrainer and AUTOPSY
instrument the *taste* side (scoring Discover Weekly keeps toward the 90% project,
dissecting why tracks land), the stylometry tracker instruments the *voice*, the wiki
engine instruments the *memory* — and these two instrument the *analysis* side: reading
harmonic structure from tabs, hearing melodic structure from finished audio. Both pairs
were commissioned within two days of each other (MusicTrainer/AUTOPSY on 09-14,
hook2piano's web completion and MELODY on 09-16) and both live in the music category of
`Danfr4nk/tools`, Dan's 2026-09-16 order ("move all of my music diagnostic tools and
training instruments into the tools repo and create a new category: music") having
gathered them under one roof.

The deeper pattern is extraction. The Wiki Brain's core move is extracting once so
nothing gets re-derived; hook2piano extracts the harmonic skeleton from a consumer tab
site so Dan doesn't re-derive chord progressions by ear; MELODY extracts the melody from
a finished mix so he doesn't re-derive it by looping. They are [[wiki/mind/concepts/exocortex|exocortex]] instruments in
the strict sense of the concept — cognitive prosthetics that do the part of the musical
task his perception doesn't do natively (reading notation, parsing stems by ear) so his
native strengths (melodic/harmonic hearing, structural pattern recognition) get the
cleanest possible input.

There is also a [[wiki/mind/synthesis/dance-music-only-phases|GRIPNOTIC-era reading]]. The revival is his re-entry into exclusively dance
music production; its study material is harmony and melody, not lyrics (the thirteen-year
"never sung original lyrics" pattern across every alias, answered by the lyric
qualifier). A builder producing instrumental dance music needs harmonic references as
data, and these tools are the reference pipeline — the 2025 MASTER CRATE is the
ammunition, the taste instruments are the targeting, and hook2piano/MELODY are the
ordnance survey: what is the harmony, exactly, in a form I can read.

## Status, open items, and limits

**Status (2026-09-18):** both tools live in `Danfr4nk/tools` under `music/`. hook2piano's
web app is verified end-to-end in a live browser (load → fetch → engine → render →
playback). MELODY v1 is live; its real-song validation is owed by Dan, and v2 (6/7 on
the adversarial suite, T5 unsolved) is unpushed. No usage data or bug reports exist for
either tool in the record as of writing — Dan is the entire user base and the record is
silent on whether he has used them since the build sessions.

**Open items:** (1) Dan's real-song test of MELODY — "tell me where it grabs the wrong
line"; (2) the v2 push, which has real DSP improvements and one named regression, and a
live site still serving v1; (3) the playback follow-ups offered but unanswered —
half-speed practice toggle, per-section playback; (4) the unresolved measurement
question of whether the T5 pad-intrusion problem generalizes to real dense mixes.

**What this entry does not cover:** this is a builder-wave instrument entry, not a music
theory entry — the harmonic content of any particular song analyzed with these tools
belongs in the music entries, not here. MELODY's file-picker automation gap is a
tooling-limit fact about the browser automation route, not a product bug; it is
recorded so a future session doesn't re-litigate it. This entry's claims about the
2026-09-16 build session rest on the 2026-09-16 chat transcript (src:1660) and the
dated daily log; where the session log corrected itself mid-day (the CORS misdiagnosis),
this entry follows the correction. Nothing here is inferred from the code itself — the
repo contents were not re-read for this expansion; commit-level details (commit hashes,
file-level change lists) are intentionally omitted per the plain-language delivery
standing order.
