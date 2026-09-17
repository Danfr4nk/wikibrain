---
domain: work
page_type: concept
title: "hook2piano — phone-friendly TheoryTab→piano-score harness"
status: active
date_created: 2026-09-11
date_modified: 2026-09-17
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1580-tools-repo-consolidation-20260915"
  - "dat:1664-hook2piano-web-shipped-20260916"
  - "dat:1662-melody-tool-commissioned-20260916"
related:
  - wiki/work/tech/projects/index
tags: [ai-collaboration, music-production]
connections:
  - page: wiki/interests/music/concepts/lyrics-as-timbre
    type: instantiates
    claim: "Dan hears sung lyrics as timbre, not language — a harmony-first chord-to-piano tool matches how he actually listens, so the build is structurally fitted to his documented perception, not a generic music app."
---

# hook2piano

A phone-friendly web app that converts TheoryTab tabs into piano scores.

## Purpose

Dan needs to see harmonic structure, not lyrics. He hears sung lyrics as timbre rather than semantic content (the "lyric qualifier" — the mandatory first frame for all music analysis in his record), so a tool that turns a TheoryTab tab into a readable piano score fits his actual perception. This is a builder solving his own sensory bottleneck, not a tutorial project.

## Architecture

- **Host:** GitHub Pages, live at https://danfr4nk.github.io/hook2piano/ — repo `Danfr4nk/hook2piano`, source `main:/docs`.
- **Input:** paste a TheoryTab URL or tab ID → section chips render.
- **Rendering:** the score renders via Pyodide running the *actual* Python engine client-side, not a port or approximation.
- **Data:** `api.hooktheory.com` is CORS-open, so tab JSON fetches need no proxy; the view-page section listing falls back to CORS proxies when direct fetch fails.
- **Deploys:** commits go through `push.py` — API-only commits with no local git repo, the same pattern used for the attraction-guide.

## Status (2026-09-11)

Live and enabled on GitHub Pages 2026-09-11. No usage data or bug reports in the record as of writing.

## Developments 2026-09-15/16

**Consolidation (2026-09-15).** hook2piano moved into the `Danfr4nk/tools` monorepo as `tools/hook2piano/`, part of the full "ALL the tools" consolidation — see [[wiki/work/tech/projects/index]]. Source: `dat:1580-tools-repo-consolidation-20260915`.

**Web tool shipped (2026-09-16).** Dan reported the Pages app "didn't load anything from hooktheory," and the live-verification root cause turned out to be a GitHub Pages gotcha: Pages silently drops files whose names start with an underscore, so the Python engine file `__init__.py` never deployed. Fixed, then shipped per his orders: two piano rolls (blue melody/RH, green chord tones/LH), note names above and below each roll, chord symbols on the chord roll, the ~1MB notation library deleted for phone load speed, and zero-dependency in-browser MIDI playback with a red playhead — "the least taxing way to play the thing in browser." Source: `dat:1664-hook2piano-web-shipped-20260916`.

**Minimalism tripwire.** The same session drew his standing UI rule in its tersest form — "get rid of anything you can this is absurd" — when chrome accumulated: ship the leanest possible interface and prefer the least-taxing native implementation. (Sammy working context, 2026-09-16.)

**MELODY, the sibling instrument (2026-09-16).** Commissioned the same day: a melody-to-piano-roll tool — feed it a full finished song and it pulls the lead melody out of the mix onto a piano roll. v1 shipped live at `danfr4nk.github.io/tools/music/melody/`, verified 12/12 on synthetic mixes; a playhead-follow crash was fixed during verification. Recorded honest gap: automation cannot drive the native file picker, so the drop zone is now a native input (better on iPhone). Dan owes a real-song test: "tell me where it grabs the wrong line — that's the data v2 needs." MELODY is the audio-input mirror of hook2piano's tab-input pipeline — same piano-roll output stage, different extraction front end. Source: `dat:1662-melody-tool-commissioned-20260916`.

## Place in the larger system

This is the music-production wing of the 2026 builder wave: the same agent-directed workflow as the Wiki Brain tooling and the attraction-guide, applied to the GRIPNOTIC revival's harmonic analysis problem. It converts a consumer site (TheoryTab) into a producer instrument — the same extraction pattern as the Wiki Brain itself (extract once, stop re-deriving).
