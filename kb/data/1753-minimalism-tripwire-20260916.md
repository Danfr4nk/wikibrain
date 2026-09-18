+++
id         = "dat:1753-minimalism-tripwire-20260916"
layer      = 1
type       = "datum"
title     = "Minimalism tripwire: \"get rid of anything you can this is absurd\" — standing UI rule"
claim      = "During the 2026-09-16 hook2piano web session, as chrome accumulated on the shipped tool, Dan issued his standing UI rule in its tersest form: \"get rid of anything you can this is absurd.\" This is a standing directive, not a one-off complaint: ship the leanest possible interface, prefer the least-taxing native implementation over a library or a heavier component, and treat every UI element as needing to justify its existence. It governs the whole Danfr4nk/tools surface — it is the principle behind the ~1MB notation library deletion for phone load speed, the zero-dependency Web Audio playback (docs/player.js, \"the least taxing way to play the thing in browser\"), the zero-dependency pure-SVG piano rolls replacing VexFlow (~2MB removed), and the native <input> file picker in MELODY (better on iPhone than a custom drop zone)."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 3
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->

The tripwire is what makes the tools' aesthetic legible as policy rather than accident:
every weight-removal decision in the 2026-09-16 music-tool builds (VexFlow out, notation
library out, synth built hand-rolled, drop zone replaced with a native input) traces to
the same sentence. It pairs with his 2026-09-17 standing guidance that he kills chrome on
sight in commissioned tools.
