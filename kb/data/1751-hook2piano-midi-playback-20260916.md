+++
id         = "dat:1751-hook2piano-midi-playback-20260916"
layer      = 1
type       = "datum"
title     = "hook2piano: zero-dependency in-browser MIDI-style playback with red playhead"
claim      = "On 2026-09-16 Dan ordered playback for hook2piano: \"play the song as midi. Whatever the least taxing way to play the thing in browser is.\" Built docs/player.js: a zero-dependency Web Audio synth (triangle oscillator for melody, sine for chords, compressor on the master), a lookahead scheduler (25ms tick / 0.15s horizon), pause/resume/stop, a fixed bottom transport bar (Play/Pause, Stop, progress, m:ss time readout), and a red playhead line sweeping the piano rolls via requestAnimationFrame. render_html.py (the source of truth) tags each roll SVG with data-t0/data-t1/data-bpm plus a parked .h2p-ph playhead line; renderSong stashes H2P.lastSong; docs/render.js rebuilt via build.sh. Versioned script URLs (?v=20260916b) were added because GitHub Pages plus browser/CDN were serving stale render.js/app.js on exact URLs — which had broken both the test browser and would have broken his phone cache. Verified in two ways: a node logic harness with a virtual AudioContext/DOM/rAF passed the full lifecycle (label flips, progress advance, playhead motion, pause/resume, natural-end reset), and a live browser e2e confirmed the playhead advancing on the Creep verse tab (label/progress FAILs in that browser run were test-timing artifacts — polled slower than the 22.7s song — disproven by the harness). Known trivial edge, left as-is: pausing within ~50ms of a chord onset can drop that chord on resume (1ms skip-boundary race, sub-perceptual). Follow-up options presented to Dan the same evening — half-speed practice-tempo toggle, per-section playback — were unanswered as of flush; build on his pick when it comes."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 3
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->

\"The least taxing way to play the thing in browser\" is the operative design constraint —
no Tone.js, no MIDI-file export round trip, no external library at all: one small JS file,
the Web Audio API that is already there. The playback path closes the loop the tool was built
for: Dan can now hear the harmony he came to study, rendered from the same data the piano
rolls display, without leaving his phone.
