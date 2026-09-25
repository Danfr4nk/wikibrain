---
id: "modbod"
title: "Modbod — body-spec@1 viewer"
---

# Modbod

Commissioned 2026-09-14 by Dan ("make me a body modeling viewer"), built as
a static web app at [https://danfr4nk.github.io/modbod/](https://danfr4nk.github.io/modbod/) (repo
`Danfr4nk/modbod`). The stated purpose, in his words: "Literally rhe only
purpose is in case Kristin gets curious." The Kristin channel reinitiated
September 12 after the December block; a full-bodied 3D body model with real
measurements is the instrument she would get curious *about*.

## body-spec@1 (2026-09-14, ~23:07–23:10Z)

The spec format is the thesis: `body-spec@1` is a JSON document holding real
cm measurements, null = unmeasured, never guessed. No fantasy numbers. The
viewer glues landmark pins to the mesh vertices, computes template baselines
directly off the geometry (bust 115.7, waist 95.2, hips 104.4, thigh 45.6cm),
and carries per-region fit confidence plus JSON import/export. The starter
spec (`subject01.spec.json`) ships with 8 mole slots and every measurement
blank — the honesty of the instrument is that it refuses to fill what it
doesn't know.

## v3 UI/camera rebuild (2026-09-14, ~23:13–23:15Z)

Mobile-first overhaul: bottom-sheet controls, grab bar collapsed by default,
dense touch rows, desktop floating card. Camera: damped orbit inertia,
two-finger pan, pinch zoom, double-tap reset, wheel zoom with a
touch-action:none fix, auto-rotate that pauses on touch. Dan's feedback loop
was per-push: "the rotation still isnt good" → damped inertia; "it feels like
it was a bit better" → keep iterating.

## Image exports (2026-09-14, ~23:35–23:37Z, commit ab8be439)

Two export paths: the full analyzed-image PNG and a transparent
wireframe-only PNG. The wireframe-only export is the clean instrument —
analysis without the model in the way.

Evidence: `evt:modbod-body-spec-viewer-deployed-20260915`
(source: `src:sammy-chat-transcript-20260915-0340`).
Live: https://danfr4nk.github.io/modbod/.

## Sources

Small thumbnails only, per the placement rule. No images embedded for this
entry — the app is live at the URL above.
