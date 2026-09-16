---
domain: work
page_type: concept
title: "hook2piano — phone-friendly TheoryTab→piano-score harness"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
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

## Place in the larger system

This is the music-production wing of the 2026 builder wave: the same agent-directed workflow as the Wiki Brain tooling and the attraction-guide, applied to the GRIPNOTIC revival's harmonic analysis problem. It converts a consumer site (TheoryTab) into a producer instrument — the same extraction pattern as the Wiki Brain itself (extract once, stop re-deriving).
