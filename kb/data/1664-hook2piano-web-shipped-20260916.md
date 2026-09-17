+++
id         = "dat:1664-hook2piano-web-shipped-20260916"
layer      = 1
type       = "datum"
title      = "hook2piano web tool: Pages underscore gotcha found and fixed, MIDI playback shipped"
claim      = "Dan ordered a web tool for hook2piano after reporting 'It didn't load anything from hooktheory.' Root cause found during live verification: GitHub Pages silently drops files whose names start with an underscore — the Python engine file __init__.py never deployed. Fixed. Also shipped per his orders: two piano rolls (blue melody/RH, green chord tones/LH), note names above and below each roll, chord symbols on the chord roll, the ~1MB notation library deleted for phone load speed, and zero-dependency in-browser MIDI playback with a red playhead ('the least taxing way to play the thing in browser')."
cites      = ["src:1660-sammy-chat-transcript-20260916-2340"]
confidence = "high"
importance = 3
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

<!-- prose for humans; the frontmatter is for machines -->
